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
router.post("/register", async (req, res)=> {
  const user = new User(req.body);
  try{
    console.log("the user", user);
    await user.save()  
        console.log("result after success storing", user);
        res.status(200).send(user);
  }catch(e){
    console.log("error in storing the info", e);
    res.status(404).send(e);
  }finally{
     sendEmail(user);

  }
  
})

router.get('/test', (req, res)=> {
  res.send("Welcome")
})

module.exports = router;
