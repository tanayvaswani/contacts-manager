const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your username"],
    },

    email: {
      type: String,
      required: [true, "Please enter the user email"],
      unique: [true, "Email is already register, try logging in"],
    },

    password: {
      type: String,
      required: [true, "Please enter the user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User Model", userSchema);
