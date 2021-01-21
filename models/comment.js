const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        messageBody: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);