const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    contacts: {
      type: [
        {
          clubId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "club",
          },
        },
      ],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("usercontacts", contactsSchema);
