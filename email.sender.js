const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "destinataire-email@gmail.com",
  subject: "Hello from Node.js",
  text: "This is a test email sent from a Node.js script!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
