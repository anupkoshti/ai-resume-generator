const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  jobDescription: String,
  resumeContent: String,
  coverLetterContent: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resume", ResumeSchema);
