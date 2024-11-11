// index.js
require("dotenv").config(); // Load environment variables

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const express = require("express");
const stripe = require("stripe")(stripeSecretKey);
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create-checkout-session", async (req, res) => {
  const { cart } = req.body; // Now expect domain URL from the client

  const line_items = cart.map((item) => ({
    price_data: {
      currency: "usd", // Use the currency you want
      product_data: {
        name: item.name,
        description: item.description,
        images: [item.image],
      },
      unit_amount: item.price * 100, // Price should be in cents
    },
    quantity: 1, // Adjust as necessary
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `http://localhost:5174/success`, // Use the dynamic URL from the client
      cancel_url: `http://localhost:5174/cancel`, // Use the dynamic URL from the client
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send("Internal Server Error");
  }
});

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
