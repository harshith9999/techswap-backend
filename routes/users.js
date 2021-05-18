var express = require("express");
const sendEmail = require("../mails/mail");
var router = express.Router();
var User = require("../models/user");
/* GET users listing. */
router.get("/", function (req, res, next) {
  const { mobile } = req.body;
  User.find({ mobile })
    .exec()
    .then((result) => {
      console.log("result after success storing", result);
      res.status(200).send(result);
    })
    .catch((error) => {
      console.log("error in storing the info", error);
      res.status(404).send(error);
    });
});
router.post("/register", function (req, res, next) {
  const user = new User(req.body);
  // for (var key in req.body) {
  //   console.log("key and values", key, req.body[key]);
  //   user[key] = req.body[key];
  // }
  console.log("the user", user);
  user
    .save()
    .then((result) => {
      console.log("result after success storing", result);
      sendEmail();
      res.status(200).send(result);
    })
    .catch((error) => {
      console.log("error in storing the info", error);
      res.status(404).send(error);
    });
});

router.get('/test', (req, res)=> {
  res.send("Welcome")
})

module.exports = router;
