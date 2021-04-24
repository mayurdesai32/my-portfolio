const Projectlist = require('../models/projectlistSchema');
const express = require('express');
const router = express.Router();
///////for contact form//////
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
router.post('/contact', (req, res) => {
  const { name, email, message, subject } = req.body;
  if (!name || !email || !subject || !message) {
    // res.status(422).json({ error: 'please filled all field' });
    res.status(422).json({ status: 'please filled all field' });
  } else {
    const msg = {
      to: 'msdesai32@gmail.com',
      from: 'msdesai32@gmail.com',
      subject: 'message from portfolio',
      text: 'and easy to do anywhere, even with Node.js',
      html: `<p>Name: ${name}</p>
          <p>Email: ${email}</p>
        <p> subject: ${subject}</p>
        <p>Message: ${message}</p>`,
    };
    (async () => {
      try {
        await sgMail.send(msg);
        console.log('send');
        res.json('send');
      } catch (error) {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }
});

////////for project data/////
router.get('/project', async (req, res) => {
  try {
    const result = await Projectlist.find();
    console.log(result);
    res.json(result);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
