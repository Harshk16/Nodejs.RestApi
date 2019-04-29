const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const testController = require("./RestApi.Web.Api/controllers/TestController");

// DB Config
const db = require("./RestApi.Domain/RestApi.Domain.Database/config/keys")
  .mongoURI;

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Sucessfull Connection"))
  .catch(err => console.log(err));

// Use Routes
app.use("/api/test", testController);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
