var express = require("express");
var BlogRouter = express.Router();

BlogRouter.get("/getBlogs", (req, res) => {
  res.json({ message: "Blog Fetched Successfuly!" });
});

module.exports = BlogRouter;
