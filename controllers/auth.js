const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (user)
      return res
        .status(400)
        .json({ message: "User with that email already exist" });
  });

  const {
    fullName,
    instituteName,
    rollNumber,
    joiningYear,
    email,
    password,
    contact,
  } = req.body;

  const _user = new User({
    fullName,
    instituteName,
    rollNumber,
    joiningYear,
    email,
    password,
    contact,
  });

  _user.save((error, data) => {
    if (error) {
      console.log(error);
      return res.status(400).json({ error: "Something went wrong" });
    }

    if (data) {
      return res.status(200).json({
        message: "Registration Successful",
      });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    $or: [
      { "email.personal": req.body.email },
      { "email.institute": req.body.email },
    ],
  }).exec((error, user) => {
    if (error) return res.status(400).json({ error });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "24h",
        });
        const {
          _id,
          fullName,
          instituteName,
          rollNumber,
          joiningYear,
          email,
          contact,
          headline,
          about,
          dp,
          socialHandle,
          conversations,
        } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            fullName,
            instituteName,
            rollNumber,
            joiningYear,
            email,
            contact,
            headline,
            about,
            dp,
            socialHandle,
            conversations,
          },
        });
      } else {
        return res.status(400).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
