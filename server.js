const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const creds = require('./config');
const cors = require('cors');

app.use(cors());
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.json());

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully signed into Gmail account');
  }
});

app.post('/contact', (req, res) => {
  const { name } = req.body;
  const { message } = req.body;

  var mail = {
    from: name,
    to: 'ddaf051@gmail.com',
    subject: 'Feedback From The Blog',
    html: `${message}` + '<br><br>Kindly,<br>' + `${name}`
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({ msg: 'err' });
    } else {
      res.json({ msg: 'suc' });
    }
  });
});
