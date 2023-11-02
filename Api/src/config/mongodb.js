const mongoose = require("mongoose");

const mongoConnect = () => {
  const dbLink = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/app";
  return mongoose.connect(dbLink);
};

module.exports = mongoConnect;
