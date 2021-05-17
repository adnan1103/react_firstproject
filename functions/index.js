const functions = require("firebase-functions");

const admin = require("firebase-admin")
const nodemailer = require("nodemailer")
const config = functions.config()
const cors = require(("cors"))({ origin: true })
admin.initializeApp()

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: config.user.email, pass: config.user.password }
});

let mailOptions = {
    from: "Arc Development"
};


exports.sendMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { name, email, phone, message } = request.query

        mailOptions = {
            ...mailOptions, to: "adnanecom7@gmail.com", subject: "Message received!",
            html: `<p style="font-size:16px">From:${name}</p>
            <p style="font-size:16px">Email:${email}</p>
            <p style="font-size:16px">Phone Number:${phone}</p>
            <p style="font-size:16px">Message:${message}</p>`
            
        };

        transporter.sendMail(mailOptions, error => {
            if (error) {
                response.send(error);
            }
            else {
                response.send("Message sent Successfully!!!");
            }
        })
    })

    mailOptions = {
        ...mailOptions,
         to: email, 
         subject: "We have received your message!",
        html: `<p style="font-size:16px">From:${name}</p>
        <p style="font-size:16px">Email:${email}</p>
        <p style="font-size:16px">Phone Number:${phone}</p>
        <p style="font-size:16px">Message:${message}</p>`
        
    };
});
