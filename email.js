require('dotenv').config({ path: "./config.env" })

const nodemailer = require('nodemailer')

const sendEmail = async options => {
    console.log(process.env.EMAIL_USERNAME, process.env.EMAIL_PASSWORD)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            type: "login", // default
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    const mailOptions = {
        from: `<${options.email}>`,
        to: 'isaiahjfowler7@gmail.com',
        subject: "Someone is trying to contact you",
        text: options.message,
        html: `     <div>
                        <h1>${options.email}</h1>
                        <h2>${options.name}</h2>                    
                        <b>${options.message}</b>       
                    </div>
                        
            `, // html body
    }

    await transporter.sendMail(mailOptions)
}


module.exports = sendEmail