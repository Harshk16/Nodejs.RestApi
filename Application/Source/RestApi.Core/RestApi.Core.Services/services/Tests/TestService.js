const TestModel = require("../../../RestApi.Core.Models/models/TestModel/TestModel");
const BaseService = require("../BaseService");

module.exports = class TestService extends BaseService {
  constructor() {
    super("Test Service");
    // this.config = config || configDefault;
    // this.encoder = bcrypt;
  }

  static async registerData(req, res, next) {
    // console.log("data", req.body);
    try {
      TestModel.findOne({ email: req.body.email }).then(data => {
        // console.log("Email exist", data);
        if (data != null) {
          next(data);
          return new Error("email is already exists");
          next();
          //   return res.status(400).json({ email: "email is already exists" });
        } else {
          const newData = new TestModel({
            name: req.body.name,
            fullName: req.body.fullname,
            email: req.body.email
          });
          newData
            .save()
            .then(data => {
              return data;
            })
            .catch(err => console.log(err));
        }
      });
    } catch (error) {
      console.log("error", error);

      return new Error(error);
    }
    console.log("Service called1");
  }

  static getUser(req, res, next) {
    try {
      if (req.body != "10") {
        console.log("Service called...");
        throw new Error("email is exists");
        next();
      }
    } catch (error) {
      throw new Error(error);
      next();
    }
    console.log("Service called2");
  }
};
