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
    star: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("messages", messageSchema);
