require('dotenv').config()
const nodemailer = require('nodemailer')

const mail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
})

function send(mailOptions){

    mail.sendMail(mailOptions, (error, info)=>{
        console.log(info)
    })

}

module.exports = send;