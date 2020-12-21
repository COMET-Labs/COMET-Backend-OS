const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  //{
   // user: {
      userId:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "user",
      }
      contacts: [
        {
          clubId: mongoose.Schema.Types.ObjectId,
          ref: "club",
          clubName: String,
        },
      ],
      /* contacts: [
        {
          contactId: mongoose.Schema.Types.ObjectId,
          ref: "user",
          contactName: String,
        },
      ], */
    
  { timestamps: true }
);
module.exports = mongoose.model("usercontacts", contactsSchema);
