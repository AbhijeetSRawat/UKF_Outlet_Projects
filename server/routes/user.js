const express = require("express");
const router = express.Router();

//import contollers
const { logIn, signUp } = require("../controllers/Auth");

//define routes
router.post("/login",logIn);
router.post("/signup",signUp);

module.exports = router;