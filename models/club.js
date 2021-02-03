const mongoose = require("mongoose");

const clubSchema = mongoose.Schema(
  {
    clubName: {
      type: String,
      required: true,
      unique: true,
    },
    clubDescription: {
      type: String,
      required: false,
    },
    ofInstitute: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Club", clubSchema);
