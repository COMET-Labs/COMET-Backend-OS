const mongoose = require("mongoose");

const clubSchema = mongoose.Schema({
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
});
module.exports = mongoose.model("club", clubSchema);
