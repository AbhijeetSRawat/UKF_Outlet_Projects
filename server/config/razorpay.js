/* eslint-disable no-undef */
const Razorpay = require("razorpay");
require.env.config();

exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET
});