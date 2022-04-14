var express = require("express");
var router = express.Router();
const {
  signUp,
  signIn,
  saveComment,
  retrieveComments,
  signOut,
} = require("../database/dbModel");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/signup", async (req, res, next) => {
  let name = req.query.name;
  let email = req.query.email;
  let password = req.query.password;
  let user = await signUp(name, email, password);
  res.send(user);
});

router.get("/signin", async (req, res, next) => {
  let email = req.query.email;
  let password = req.query.password;
  let user = await signIn(email, password);
  if (typeof user !== String) {
    userName = user.name;
  }
  console.log(userName);
  res.send(user);
});

router.get("/signout", async (req, res, next) => {
  let status = await signOut();
  res.send("Sign in status is:", status);
});

router.get("/review", async (req, res, next) => {
  let comment = req.query.comment;
  let savedComment = await saveComment(userName, comment);
  res.send(savedComment);
});

router.get("/allreviews", async (req, res, next) => {
  let commentsArray = await retrieveComments();
  res.send(commentsArray);
});

module.exports = router;
