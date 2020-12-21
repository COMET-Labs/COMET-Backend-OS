const express = require("express");
const router = express.Router();
const { newMessages, pastMessages } = require("../controllers/messages");
const { isMessageValidated } = require("../validators/message");
const { requireSignin } = require("../middlewares/index");

router.post("/new_message", requireSignin, isMessageValidated, newMessages);

router.get("/past_message", requireSignin, pastMessages);

module.exports = router;
