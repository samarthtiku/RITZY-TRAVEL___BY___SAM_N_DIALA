const express = require('express');
const app = express();
const stripe = require('stripe')('rybo-xxjm-orpa-fceq-krtb'); // Replace with your actual test or live secret key
const fs = require('fs');

const usersFilePath = 'users.json';

// Check if the file exists
if (!fs.existsSync(usersFilePath)) {
  // If it doesn't exist, create an empty array and save it to the file
  fs.writeFileSync(usersFilePath, '[]');
}

// Now you can read the file and parse its content
const usersFileContent = fs.readFileSync(usersFilePath, 'utf-8');
const users = JSON.parse(usersFileContent);

// Use the 'users' array as needed in your code
console.log(users);

app.use(express.json());

app.post('/create-payment', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: req.body.payment_method_id,
      amount: 1000, // Adjust the amount as needed
      currency: 'usd',
      confirmation_method: 'manual',
      confirm: true,
    });

    // Handle the payment intent and send a response to the client
    res.send({ success: true });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.send({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
