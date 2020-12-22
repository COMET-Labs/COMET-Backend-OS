const usercontacts = require("../models/userContacts");

exports.myClubs = (req, res) => {
  usercontacts
    .findOne({
      userId: req.body.userId,
    })
    .exec((error, userData) => {
      if (error) {
        return res.status(400).json({ error });
      }
      // console.log(req.body.user);
      if (userData) {
        return res.status(200).json(userData);
      } else {
        return res.status(400).json({
          message: userData,
        });
      }
    });
};
