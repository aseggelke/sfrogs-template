const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: false,
  auth: {
    user: 'seggelkea@googlemail.com',
    pass: 'eklegges'
  }
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from;
  const message = request.query.message;

  const mailOptions = {
    from: 'Travel Treasury <1manstartup@gmail.com>',
    to: '1manstartup@gmail.com',
    subject: 'Travel Treasury Contact Form Submission',
    html: `${message} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(`ERROR: (email) ${email_from} --- (message) ${message} --- (error) ${error.toString()}`);
      response.send(error.toString());
    }
    response.send('You message was submitted successfully!');
  });

})
