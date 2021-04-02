const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const User = require('./models/user')

const app = express()

mongoose.connect('mongodb://localhost:27017/login-app-db', {useUnifiedTopology: true, useUnifiedTopology: true, useNewUrlParser: true } )

app.use(bodyParser.json())

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

    const { email, password } = req.body
    console.log( email, password )

    const user = await User.findOne({email}).lean()

    if(!user){
        return res.json({ status: 'error', error: 'Usuario ou senha invalidas' })
    }

    if(await bcrypt.compare(password,user.password)){        
        return res.json({ status: 'ok'})
    }

    res.json({ status: 'error', error: 'Usuario ou senha invalidas'})
})


app.post('/api/register', async(req,res)=>{

    const { name, email, username, password: plainTextPassword } = req.body

    console.log(req.body)

    if(!name || typeof name !== 'string'){
        return res.json({ status: 'error', error: 'Nome invalido' })
    }

    if(!email || typeof email !== 'string'){
        return res.json({ status: 'error', error: 'Email invalido' })
    }

    if(!username || typeof username !== 'string'){
        return res.json({ status: 'error', error: 'Nome de Usuario invalido' })
        
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({ status: 'error', error: 'Senha Invalida' })
    }

    if(plainTextPassword < 5){
        return res.json({ status: 'error', error: 'Senha muito curta, minimo de 6 caracteres' })
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
        console.log('Usuario criado: ', response)
    }catch(err){
        if(err.code === 1100){
            console.log('usuario ja existe')
            res.json({ status: 'Erro', error: 'Usuario ja existe' })
        }
        throw err
    }

    res.json({ status: 'ok' })
})


app.listen(9000,()=>{
    console.log('Sever in running')
})