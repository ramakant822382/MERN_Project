const catchAsyncErrors = require("../middleware/catchAsynk");

const stripe = require("stripe")(
  "sk_test_51NdO3tSDwJB0GTwD9QxJkHtZEXPPFu8UoqQh47pRX68XHdkaAbauAvahP4DyUneZJZG7VZgVHpPXdQiGUU7l0YdZ00dyyH584N"
);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
