const UserContacts = require("../models/userContacts");

exports.myClubs = (req, res) => {
  UserContacts.findOne({
    userId: req.body.user,
  }).exec((error, userData) => {
    if (error) {
      return res.status(400).json({ error });
    }
    if (userData) {
      return res.status(200).json(userData.contacts);
    } else {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }
  });
};
