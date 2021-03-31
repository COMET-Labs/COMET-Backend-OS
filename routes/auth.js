const express = require("express");
const router = express.Router();
const { signup, signin, mailOtp, verifyOtp, isIiitian } = require("../controllers/auth");
const {
  validateMailRequest,
  validateOtpRequest,
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../validators/auth");

router.post("/mailotp", validateMailRequest, isRequestValidated, mailOtp);

router.post("/verifyotp", validateOtpRequest, isRequestValidated, verifyOtp);

router.post("/verifyiiitianemail", validateMailRequest, isRequestValidated, isIiitian, mailOtp)

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

module.exports = router;
