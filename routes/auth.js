const express = require("express");
const router = express.Router();
const {
  mailOtp,
  verifyOtp,
  isIiitian,
  loginWithPassword,
  isAuthenticated,
  logout,
} = require("../controllers/auth");
const {
  validateMailRequest,
  validateOtpRequest,
  isRequestValidated,
  validateLoginWithPassword,
} = require("../validators/auth");

router.post("/mailotp", validateMailRequest, isRequestValidated, mailOtp);

router.post("/verifyotp", validateOtpRequest, isRequestValidated, verifyOtp);

router.post(
  "/verifyiiitianemail",
  validateMailRequest,
  isRequestValidated,
  isIiitian,
  mailOtp
);

router.post(
  "/loginwithpassword",
  validateLoginWithPassword,
  isRequestValidated,
  loginWithPassword
);

router.post("/logout", isAuthenticated, logout);

module.exports = router;
