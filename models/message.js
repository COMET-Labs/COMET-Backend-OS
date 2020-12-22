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
  },
  { timestamps: true }
);
module.exports = mongoose.model("messages", messageSchema);
