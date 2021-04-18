require('dotenv').config()
const nodemailer = require('nodemailer')

const mail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
    }
})

function send(mailOptions, cb){

    mail.sendMail(mailOptions,(error, info)=>{
        return cb(error, info)
    })

}

module.exports = send;