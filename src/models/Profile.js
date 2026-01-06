const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    email: {
      type: String,
    },
    github: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    cvUrl: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
