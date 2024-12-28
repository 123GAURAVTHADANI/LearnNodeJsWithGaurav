var express = require("express");
const {
  getUser,
  createUser,
  getUserById,
  deleteUser,
} = require("../Controller/user.controller");
var userRouter = express.Router();

// router level Middleware
userRouter.get("/getUser", getUser);

userRouter.post("/createUser", createUser);
userRouter.get("/getUser/:id", getUserById);
userRouter.delete("/deleteUser/:id", deleteUser);

module.exports = userRouter;
// ejs - template engine
