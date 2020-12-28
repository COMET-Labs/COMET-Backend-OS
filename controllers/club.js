const usercontacts = require("../models/userContacts");
const club = require("../models/club");

exports.myClubs = (req, res) => {
  usercontacts
    .findOne({
      userId: req.user._id,
      // userId: req.body.userId,
    })
    .exec((error, userData) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (userData) {
        return res.status(200).json(userData);
      } else {
        return res.status(400).json({
          message: userData,
        });
      }
    });
};

exports.addMyClub = (req, res) => {
  const clubId = req.body.clubId;
  usercontacts
    .updateOne(
      {
        userId: req.user._id,
        // userId: req.body.userId
      },
      {
        $addToSet: {
          contacts: req.body.clubId,
        },
      }
    )
    .exec()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
};

exports.deleteMyClub = (req, res) => {
  const clubId = req.body.clubId;
  usercontacts
    .updateOne(
      {
        userId: req.user._id,
        // userId: req.body.userId
      },
      {
        $pull: {
          contacts: req.body.clubId,
        },
      }
    )
    .exec()
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
};
