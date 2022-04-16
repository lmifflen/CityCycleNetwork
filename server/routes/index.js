var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");

const {
  addComment,
  editComment,
  deleteComment,
  allComments,
} = require("../database/dbModel");

//retrieve username from database after auth
let userName = "";

//To add new comment
router.post("/add", async (req, res, next) => {
  try {
    let comment = req.body;
    let addedComment = await addComment(userName, comment);
    console.log(addComment);
    res.send();
  } catch (err) {
    debug(err.message);
  }
});

//To edit a comment.
router.post("/edit", async (req, res, next) => {
  try {
    let comment = req.body;
    let editedComment = await editComment(userName, comment);
    console.log(editedComment);
    res.send();
  } catch (err) {
    debug(err.message);
  }
});

//To delete a comment. 
router.post("/delete", async (req, res, next) => {
  try {
    let comment = req.body;
    await deleteComment(comment);
    res.send();
    console.log();
  } catch (err) {
    debug(err.message);
  }
});

//To retrieve all comments. The return is an array of objects
router.post("/allcomments", async (req, res, next) => {
  try {
    let commentsArray = await allComments();
    // console.log(commentsArray)
    res.send(commentsArray);
  } catch (err) {
    debug(err.message);
  }
});

module.exports = router;
