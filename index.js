require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/user')
const Post = require('./models/Post')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const sendEmail = require('./module/sendEmail')
const createPost = require('./module/createPost')

const app = express()
app.use(cors())

mongoose.connect(process.env.LINK_DB, {useUnifiedTopology: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false } )

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api/login', async (req,res)=>{

    const { email, password } = req.body;

    const user = await User.findOne({email}).lean()

    if(!user){
        return res.json({ status: 'error', error: 'Usuário ou senha inválidas' })
    }

    if(await bcrypt.compare(password,user.password)){  

        const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {expiresIn: '24h'})

        return res.json({ status: 'ok', token: token, username: user.username})
    }

    res.json({ status: 'error', error: 'Usuário ou senha inválidas'})
})


app.post('/api/register', async(req,res)=>{

    const { name, email, username, password: plainTextPassword } = req.body

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
    
    try{
        var data = await User.create({
            name,
            email,
            username,
            password
        })
        
        
    }catch(err){
        if(err.code === 1100){
            return res.json({ status: 'error', error: 'Usuário ja existe' })
        }
        throw err
    }

    const token = jwt.sign({ _id: data._id }, process.env.JWT_TOKEN, {expiresIn: '24h'})
    
    res.json({ status: 'ok', token: token, username: data.username})
})


app.post('/api/sendEmailVerify',async (req,res)=>{
    const { code, token } = req.body

    try{
        var verifyToken = jwt.verify(token, process.env.JWT_TOKEN)        
    }catch(err){
        return res.json({status: 'error', error: 'invalid token'})
    }

    let _id = verifyToken._id

    var user = await User.findOne({_id}).lean()

    var email = user.email

    let mailOptions = {
        from: 'contato.laese@gmail.com',
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
        return res.json({status: 'error', error: 'invalid token'})
    }

    const _id = verifyToken._id

    try{
        const user = await User.findOneAndUpdate({_id}, {checkedEmail: true}).lean()
    }catch(err){
        return res.json({status: 'error', error: 'Usuario não encontrador'})
    }

    res.json({ status: 'ok' })
})

app.post('/api/create', async(req,res)=>{

    const { token, title, text } = req.body

    try{
        var verifyToken = jwt.verify(token, process.env.JWT_TOKEN)
    }catch(err){
        return res.json({status: 'error', error: 'invalid token'})
    }

    const _id = verifyToken._id

    try{
        var user = await User.findOne({_id})
    }catch(err){
        return res.json({status: 'error', error: 'Usuario não encontrado'})
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
    
    res.json({ status: 'ok' })
})


app.get('/api/listAllPosts', async(req,res)=>{
       
    try{
        var data = await Post.find({})
    }catch(err){
        return res.json({status: 'error', error: 'Posts não encontrado'})
    }

    res.json(data) 
})


app.post('/api/getPost', async(req,res)=>{

    const _id = req.body.idPost

    try{
        var data = await Post.find({_id}).lean()
    }catch(err){
        return res.json({ status: 'error', error: 'Post não encontrado' })
    }

    const post = data[0].file.buffer.toString()

    res.json({ file: post })
})

app.listen(process.env.PORT,()=>{
    console.log('Sever in running')
})