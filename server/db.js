const mongoose = require("mongoose");

var mongoDBURL = "mongodb+srv://Kiran:O@cluster0.pmojmpa.mongodb.net/ecommerce";

mongoose.connect(mongoDBURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

var dbconnect = mongoose.connection;

dbconnect.on("error", () => {
  console.log(`Mongo DB Connection Failed`);
});

dbconnect.on("connected", () => {
  console.log(`MongoDB Connection Done Successfully...`);
});

module.exports = mongoose;
