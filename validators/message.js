const { check } = require("express-validator");

exports.MessageValidated = [
  check("messageBody").notEmpty().withMessage("Your message"),
];

exports.isMessageValidated = (req, res, next) => {
  const errors = this.MessageValidated(req);
  if (errors.array().length > 0) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};
