const express = require("express");
const router = express.Router();
const { requireSignin } = require("../middlewares/index");
const { myClubs } = require("../controllers/club");

// For fetching all clubs of the user
router.get("/myClubs", requireSignin, myClubs);

module.exports = router;
