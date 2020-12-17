const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  {
    user: {
      userId: mongoose.Schema.Types.ObjectId,
      ref: "user",
      contacts: [
        {
          contactId: mongoose.Schema.Types.ObjectId,
          ref: "user",
          contactName: String,
        },
      ],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("usercontacts", contactSchema);
