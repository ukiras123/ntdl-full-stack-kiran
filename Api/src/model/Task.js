const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hrs: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "entry",
  },
});
// it will crate a collection with name tasks using the schema definition
module.exports = mongoose.model("Task", taskSchema);
