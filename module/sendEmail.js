const nodemailer = require('nodemailer')

const mail = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'SendFileToKindle@gmail.com',
        pass: 'ip18150290'
    }
})

function send(mailOptions){

    mail.sendMail(mailOptions, (error, info)=>{
        console.log(info)
    })

}

module.exports = send;