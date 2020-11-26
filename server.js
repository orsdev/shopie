const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')('sk_test_51HY4weLdDWfSLJV4PMyEhm1gVVN4xUjsxztQneGmoQmoKCrkW22ut99bxYMvx5f80z8yFui3us9X4C2g3zZVz4lk00oZ3x6vuJ');
const logger = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Send static files to browser when running in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  }
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr })
    } else {
      res.status(200).send({ success: stripeRes })
    }
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("app is listening on " + PORT)
})