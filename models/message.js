const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    messageBody: {
      type: String,
    },
    recieverClub: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
    star: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Messages", messageSchema);
