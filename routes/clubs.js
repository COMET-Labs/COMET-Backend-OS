const express = require("express");
const router = express.Router();
const { requireSignin } = require("../middlewares/index");
const { myClubs, addMyClub, deleteMyClub } = require("../controllers/club");

// For fetching all clubs of the user
router.get("/myClubs", requireSignin, myClubs);
router.post("/addMyClub", requireSignin, addMyClub);
router.post("/deleteMyClub", requireSignin, deleteMyClub);

module.exports = router;
