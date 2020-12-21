const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    messageBody: {
      type: String,
    },
    recieverClub: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "club",
    },
    /* conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversations",
    }, */
  },
  { timestamps: true }
);
module.exports = mongoose.model("messages", messageSchema);
