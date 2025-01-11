const User = require("../Model/user.schema");
const jwt = require("jsonwebtoken");

function deleteUser(req, res) {
  try {
    User.findByIdAndDelete({ _id: req.params.id })
      .then(() => {
        res.json({ Message: "User Deleted Successfully!!" }).status(200);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!!", error: err }).status(500);
  }
}

function getUserById(req, res) {
  try {
    User.find({ _id: req.params.id })
      .then((response) => {
        res
          .json({ Message: "User Details Fetched!!", data: response })
          .status(200);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!!", error: err }).status(500);
  }
}

function getUser(req, res) {
  try {
    User.find({})
      .then((response) => {
        res
          .json({ Message: "User Details Fetched!!", data: response })
          .status(200);
      })
      .catch((err) => {
        res.json({ Message: "Something went wrong!!", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "Something went wrong!!", error: err }).status(500);
  }
}
function createUser(req, res) {
  try {
    User.create(req.body)
      .then((response) => {
        res
          .json({ Message: "User is created successfully", data: response })
          .status(201);
      })
      .catch((err) => {
        res.json({ Message: "User failed to create", error: err }).status(500);
      });
  } catch (err) {
    res.json({ Message: "User failed to create", error: err }).status(500);
  }
}
async function loginUser(req, res) {
  let { email, password } = req.body;
  if (!email || !password) {
    res.json({ Message: "Email & password is required", status: 500 });
  }

  const user = await User.findOne({ email });
  console.log(">>user", user);
  if (!user) {
    res.json({ Message: "User does not exists!!", status: 500 });
  }
  if (!(user && (await user.comparePassword(password)))) {
    res.json({ Message: "Email or Password do not match!" });
  }
  const token = await user.generateJWTToken();
  console.log(token);
}

module.exports = { getUser, createUser, getUserById, deleteUser, loginUser };
