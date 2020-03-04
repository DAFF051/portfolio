
require('dotenv').config({ path: 'variables.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/contact', (req, res) => {

  let name = req.body.name;
  let text = req.body.message;
  console.log(name);

  sgMail.send({
    to: 'ddaf051@gmail.com',
    from: name,
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: `<strong>${text}</strong>`
  })
    .then(() => {
      res.send('Success!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occured');
    });
});

app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
