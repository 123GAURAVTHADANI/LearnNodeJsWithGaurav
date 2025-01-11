const { Schema, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword: async function (plainPassword) {
    console.log("plainPassword", plainPassword);
    return await bcrypt.compare(plainPassword, this.password);
  },
  generateJWTToken: async function () {
    return await jwt.sign(
      { id: this._id, phoneNumber: this.phoneNumber },
      process.env.JWT_SECRETKEY
    );
  },
};

const User = mongoose.model("user", userSchema);
module.exports = User;
