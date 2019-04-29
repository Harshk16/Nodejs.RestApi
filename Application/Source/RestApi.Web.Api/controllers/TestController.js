const express = require("express");
const router = express.Router();
const testService = require("../../RestApi.Core/RestApi.Core.Services/services/Tests/TestService");
const responseService = require("../../RestApi.Core/RestApi.Core.Services/services/ResponseService");

// @route  Get api/test
// @desc   Sample Data
// @access Public
router.get("/", (req, res, next) => {
  console.log("Controller called....");
  try {
    return testService.getUser("1234");
  } catch (error) {
    console.log("Controller error abd:::", error);
    // throw new Error(error);
    // next();
    return res.status(400).json(error.Error);
  }
  //   if (result.status == 200) return result.status(200);
});

// @route  Post api/test
// @desc   Sample Data
// @access Public
router.post("/", async (req, res) => {
  try {
    var result = await testService.registerData(req.body);
    return responseService.sendSuccessResponse(res, result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
