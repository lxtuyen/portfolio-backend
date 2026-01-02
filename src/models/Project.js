const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Frontend", "Backend", "Full Stack", "Mobile"],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    longDescription: {
      type: String,
    },

    image: {
      type: String,
    },

    tech: {
      type: [String],
      required: true,
    },

    features: {
      type: [String],
      required: true,
    },

    github: {
      type: String,
    },

    live: {
      type: String,
    },

    date: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Project", projectSchema);
