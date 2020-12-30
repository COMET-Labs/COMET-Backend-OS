const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    //contacts is an array of club id in which user is enroled in...
    contacts:[     
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "club",
          }
      ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("usercontacts", contactsSchema);