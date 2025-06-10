const express = require("express");
const router = express.Router();

//import contollers
const { logIn, signUp, sendOtp } = require("../controllers/Auth");

//define routes
router.post("/login",logIn);
router.post("/signup",signUp);
router.post("/sendotp",sendOtp);

module.exports = router;