const User = require("../Model/user.schema");

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
module.exports = { getUser, createUser, getUserById, deleteUser };
