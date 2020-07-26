const nodemailer = require("nodemailer");

exports.handler = (event, context, callback) => {
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
      subject: "From Live Function with ENV ",
      html: "Halo! <br> kucing.",
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return callback(null, {
          statusCode: 500,
          body: JSON.stringify({
            data: `ERROR: ${err}`,
          }),
        });
      } else {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({
            data: `Success! ${info.response}`,
          }),
        });
      }
    });
    // res.status(200).json({ msg: "Success " + email });
  } catch (e) {
    res.status(500).json({ msg: "server error" });
  }
};
