let mongoose = require("mongoose");

// connection string
function dbConfig() {
  mongoose
    .connect(
      "mongodb+srv://garvthad:gaurav@cluster0.yl7bq.mongodb.net/FSDBlog?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true }
    )
    .then(() => {
      console.log("Connected to DB!!");
    })
    .catch((error) => {
      console.log(">error", error);
    });
}

module.exports = dbConfig;
