const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  {
    // user: {
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
    /* contacts: [
        {
          contactId: mongoose.Schema.Types.ObjectId,
          ref: "user",
          contactName: String,
        },
      ], */
    // },
  },
  { timestamps: true }
);
module.exports = mongoose.model("usercontacts", contactsSchema);
