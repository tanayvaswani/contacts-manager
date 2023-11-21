import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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

export default mongoose.model("User Model", userSchema);
