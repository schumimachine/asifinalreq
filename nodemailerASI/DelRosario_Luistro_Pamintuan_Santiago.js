var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'compsci401@outlook.com',
    pass: 'ASI-CS401'
  }
});

var mailOptions = {
  from: 'compsci401@outlook.com',
  to: 'compsci401@gmail.com',
  subject: 'DelRosario_Luistro_Pamintuan_Santiago',
  text: 'SOLEMMY POP POP POP sabi ni nayeon ang date today is ' + Date()
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});