require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const bcrypt = require('bcryptjs')
const User = require('./models/user')
const Post = require('./models/Post')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const path = require('path')

const binary = mongodb.Binary
const sendEmail = require('./module/sendEmail')
const createPost = require('./module/createPost')
const { response } = require('express')

const app = express()

mongoose.connect(process.env.LINK_DB, {useUnifiedTopology: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } )

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/api/login', async (req,res)=>{

    const { email, password } = req.body;

    const user = await User.findOne({email}).lean()

    if(!user){
        return res.json({ status: 'error', error: 'Usuário ou senha inválidas' })
    }

    if(await bcrypt.compare(password,user.password)){  

        const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN)

        console.log('ok')
        return res.json({ status: 'ok', token: token, username: user.username})
    }

    res.json({ status: 'error', error: 'Usuário ou senha inválidas'})
})


app.post('/api/register', async(req,res)=>{

    const { name, email, username, password: plainTextPassword } = req.body

    console.log(req.body)

    if(typeof name !== 'string'){
        return res.json({ status: 'error', error: 'Nome inválido' })
    }

    if(typeof email !== 'string'){
        return res.json({ status: 'error', error: 'Email inválido' })
    }

    if(typeof username !== 'string'){
        return res.json({ status: 'error', error: 'Nome de usuário inválido' })
        
    }

    if(typeof plainTextPassword !== 'string'){
        return res.json({ status: 'error', error: 'Senha inválida' })
    }
    
    const password = await bcrypt.hash(plainTextPassword, 10)
    console.log(password)
    
    try{
        const response = await User.create({
            name,
            email,
            username,
            password
        })
        
        
    }catch(err){
        if(err.code === 1100){
            console.log('Usuário ja existe')
            res.json({ status: 'error', error: 'Usuário ja existe' })
        }
        throw err
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN)
    
    console.log(response)
    
    res.json({ status: 'ok', token: token })
})


app.post('/api/sendEmailVerify',async (req,res)=>{
    const { code, token } = req.body

    try{
        var verifyToken = jwt.verify(token, process.env.JWT_TOKEN)        
    }catch(err){
        console.log('token invalido ' + err)
    }

    let _id = verifyToken._id

    var user = await User.findOne({_id}).lean()

    var email = user.email

    let mailOptions = {
        from: 'sendfiletokindle@gmail.com',
        to: email,
        subject: 'Confirmar email',
        text: `Codigo: ${code}`
    }

    sendEmail(mailOptions)

    res.json({status:'ok'})
})

app.post('/api/checkUserEmail', async(req,res)=>{

    const { token } = req.body

    try{
        var verifyToken = jwt.verify(token, process.env.JWT_TOKEN)
    }catch(err){
        console.log('Token invalido')
    }

    const _id = verifyToken._id

    try{
        const user = await User.findOneAndUpdate({_id}, {checkedEmail: true}).lean()
    }catch(err){
        console.log('erro: ' + err)
    }

    console.log(user)
    res.json({ status: 'ok' })
})

app.post('/api/create', async(req,res)=>{

    const { token, title, text } = req.body

    try{
        var verifyToken = jwt.verify(token, process.env.JWT_TOKEN)
    }catch(err){
        console.log('Token invalido')
    }

    const _id = verifyToken._id

    try{
        var user = await User.findOne({_id})
    }catch(err){
        console.log(err)
    }

    let post = createPost(name=_id, title, text)

    try{
        var data = await Post.create({
            title,
            authorId:user._id,
            authorName:user.name,
            file: post.buffer
        })
        
        
    }catch(err){
        console.log(err)
    }
    
    console.log(data)
    
    res.json({ status: 'ok' })
})


app.get('/api/listAllPosts', async(req,res)=>{
       
    try{
        var data = await Post.find({})
    }catch(err){
        console.log(err)
    }

    res.json(data) 
})


app.post('/api/getPost', async(req,res)=>{

    const _id = req.body.idPost

    try{
        var data = await Post.find({_id}).lean()
    }catch(err){
        res.json({ status: 'not found' })
    }

    const post = data[0].file.buffer.toString()

    res.json({ file: post })
})


app.listen(process.env.PORT,()=>{
    console.log('Sever in running')
})