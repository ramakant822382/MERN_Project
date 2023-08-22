const nodeMailer = require("nodemailer");

const SMPT_SERVICE = "gmail";
const SMPT_MAIL = "gs7421447@gmail.com";
const SMPT_Password = "iveitaumhpbkqcye";

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: SMPT_SERVICE,
    host: "smtp.gmail.com",
    port: 465,

    auth: {
      user: SMPT_MAIL,
      pass: SMPT_Password,
    },
  });

  const mailOptions = {
    from: SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
