const nodemailer = require("nodemailer");

exports.handler = async (event, context, callback) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_ADDRESS_PW,
      },
      secure: false, // upgrade later with STARTTLS
    });
    let mailOptions = {
      from: '"PIG-HR Team" <noreply@pig-hr.com>',
      to: "sean.liesanggoro@code.berlin",
      subject: "From Live Functiom ",
      html: "Halo! <br> kucing.",
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        res.status(400).json({
          msg: "error: " + err,
        });
      } else {
        res.status(200).json({
          msg: "success: " + info.response,
        });
      }
    });
    // res.status(200).json({ msg: "Success " + email });
  } catch (e) {
    res.status(500).json({ msg: "server error" });
  }
};
