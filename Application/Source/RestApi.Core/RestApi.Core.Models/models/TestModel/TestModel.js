const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TestSchema = new Schema(
  {
    name: {
      type: String,
      require: [true, "name is required"]
    },
    fullName: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: [true, "email is required"]
    },
    createdBy: {
      type: String
    },
    createdOn: {
      type: Date,
      default: Date.now
    },
    deletedBy: {
      type: String
    },
    deletedOn: {
      type: Date
    }
  },
  {
    versionKey: false // You should be aware of the outcome after set to false
  }
);

module.exports = Test = mongoose.model("Test", TestSchema);
