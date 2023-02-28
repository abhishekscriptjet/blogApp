const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set("strictQuery", false);
const url = process.env.MONGODB_CONNECTION_KEY;
const dbConnnect = () => {
  mongoose.connect(url, (err, data) => {
    if (err) {
      return console.log("MONGODB ERROR:::::: ", err);
    }
    console.log("DB connected");
  });
  return mongoose.connection;
};

module.exports = dbConnnect;
