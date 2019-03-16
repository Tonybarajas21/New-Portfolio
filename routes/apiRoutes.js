var db = require("../models")
var nodemailer = require('nodemailer')

module.exports = function (app) {
  app.post("/api/sendemail", function (req, res) {
    db.example.create(req.body).then(function (dbexample) {

      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "Tonybarajas21@gmail.com",
          pass: "aluzamat"
        }
      });

      db.example.create(req.body).then(function (dbexample) {

        var mailOptions = {
          from: req.body.inputEmail, // sender address
          to: "josebarajas2169@gmail.com", // list of receivers
          subject: req.body.inputName, // Subject line
          html: req.body.inputContent, // plain text body
        }


        transporter.sendMail(mailOptions, function (err, info) {
          if (err)
            console.log(err)
          else
            console.log(info);

        });
      });
    });
  });

};