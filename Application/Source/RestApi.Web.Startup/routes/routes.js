const express = require("express");
const bodyParser = require("body-parser");
const error = require("../../RestApi.Web.Api/controllers/TestController");

const testController = require("../../RestApi.Web.Api/controllers/TestController");

module.exports = function(app) {
  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Use Routes
  app.use("/api/test", testController);
  app.use(error);
};
