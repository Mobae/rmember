const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  password: String,
});

module.exports = mongoose.model("Profile", ProfileSchema);
