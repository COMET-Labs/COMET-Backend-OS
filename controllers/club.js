const Usercontact = require("../models/userContacts");
const club = require("../models/club");

exports.myClubs = (req, res) => {
  Usercontact
    .findOne({
      userId: req.user._id,
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
  Usercontact
    .updateOne(
      {
        userId: req.user._id,
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
  Usercontact
    .updateOne(
      {
        userId: req.user._id,
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
