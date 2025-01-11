var express = require("express");
const dbConfig = require("./Configuration/db.config");
var app = express();

var dotenv = require("dotenv");
var cors = require("cors");
const createUser = require("./Controller/user.controller");
const bodyParser = require("body-parser");
const userRouter = require("./Router/user.Route");
const BlogRouter = require("./Router/blog.route");
dotenv.config("");

let PORT = process.env.PORT || 5000;

const consoleDate = (req, res, next) => {
  console.log("Date", Date.now());
  next();
};

// const checkError = (req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 404;
//   next(error);
// };
// Error
const handleMyError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: { message: err.message } });
};

app.use(bodyParser.json());
app.use(cors());
app.use(consoleDate);

// app.use(checkError);
app.use(handleMyError);

const checkAge = (req, res, next) => {
  let age = req.query.age;
  if (age >= 18) {
    next();
  } else {
    res
      .json({ Message: "You are not from  eligible age", status: 500 })
      .status(500);
  }
};

const checkGender = (req, res, next) => {
  let gender = req.body.gender;
  if (gender == "others") {
    next();
  } else {
    res.json({ Message: "You are not eligible", status: 500 }).status(500);
  }
};

// refractoring the code
// app.post("/createUser", checkAge, checkGender, createUser);
// app.get("/getUser", (req, res) => {
//   res.send("Hi!!");
// });

app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", BlogRouter);

app.listen(PORT, async () => {
  await dbConfig();
  console.log("Listening to a port!");
});
