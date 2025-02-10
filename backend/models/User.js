const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String, // Store hashed password
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);
