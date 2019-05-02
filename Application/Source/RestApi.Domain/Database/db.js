const winston = require("winston");
const mongoose = require("mongoose");
// DB Config
const db = require("./config/keys").mongoURI;

module.exports = function() {
  // Connect to MongoDB
  mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => winston.info("Sucessfull Connection"));
};
