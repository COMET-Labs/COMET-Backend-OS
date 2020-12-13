const { check, validationResult } = require("express-validator");

exports.validateSignupRequest = [
  check("fullName").notEmpty().withMessage("Please enter your name"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 characters long"),
  check("rollNumber").notEmpty().withMessage("Roll number id required"),
  check("contact").notEmpty().withMessage("Contact number is required"),
];

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Enter email"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 character long"),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
