const User = require("../models/user");
const jwt = require("jsonwebtoken");
const axios = require("axios").default;
var AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.region,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
});

var docClient = new AWS.DynamoDB.DocumentClient();

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

exports.mailOtp = async (req, res) => {
  const response = await axios.post(
    "https://66ec05ryyl.execute-api.us-east-2.amazonaws.com/getOtpFromEmail",
    { email_id: req.body.email }
  );
  if (response.data.statusCode === 200) {
    res.status(200).json({
      success: "OTP sent",
    });
  } else {
    res.status(200).json({
      error: "Error in mailing OTP",
    });
  }
};

exports.verifyOtp = async (req, res) => {
  var params = {
    TableName: "otp",
    Key: {
      email_id: req.body.email,
    },
  };
  docClient.get(params, function (err, data) {
    if (err) {
      res.status(200).json({
        error: "Expired or Incorrect OTP",
      });
    } else {
      if (data && data.Item && data.Item.otp === req.body.otp) {
        res.status(200).json({
          success: "OTP is Correct",
        });   
      } else {
        res.status(200).json({
          error: "Expired or Incorrect OTP",
        });
      }
    }
  });
};

exports.isIiitian = (req,res,next) => {
  // more logic will be added later
  next();
};

