const express = require("express");
const router = express.Router();
const testService = require("../../RestApi.Core/RestApi.Core.Services/services/Tests/TestService");
const responseService = require("../../RestApi.Core/RestApi.Core.Services/services/ResponseService");

// @route  Get api/test
// @desc   Sample Data
// @access Public
router.get("/", (req, res, next) => {
  var result = testService.registerData(req);
  if (result.status == 200) return result.status(200);
});

// @route  Post api/test
// @desc   Sample Data
// @access Public
router.post("/", async (req, res) => {
  try {
    var result = await testService.registerData(req.body);
    return responseService.sendSuccessResponse(res, result);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
