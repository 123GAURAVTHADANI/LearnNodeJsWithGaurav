const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Kindly fill the firstName"],
    },
    lastName: {
      type: String,
      required: [true, "Kindly fill the lastName"],
    },
    password: String,
    email: {
      type: String,
    },
    phoneNumber: Number,
    profileName: String,
    avatar: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
