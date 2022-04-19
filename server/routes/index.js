var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");

const {
  addComment,
  editComment,
  deleteComment,
  allComments,
} = require("../database/dbModel");

/* GET express home page for testing. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//To add new comment
router.post("/add", async (req, res, next) => {
  try {
    const comment = req.body;
    const addedComment = await addComment(comment);
    console.log("Added comment", addedComment);
    res.send("Comment added");
  } catch (err) {
    debug(err.message);
  }
});

//To edit a comment.
router.post("/edit", async (req, res, next) => {
  try {
    const comment = req.body;
    const editedComment = await editComment(comment);
    console.log("Updated comment: ",editedComment);
    res.send("Comment updated");
  } catch (err) {
    debug(err.message);
  }
});

//To delete a comment.
router.post("/delete", async (req, res, next) => {
  try {
    const comment = req.body;
    await deleteComment(comment);
    res.send("Comment deleted");
  } catch (err) {
    debug(err.message);
  }
});

//To retrieve all comments. The return is an array of objects
router.get("/allcomments", async (req, res, next) => {
  try {
    let commentsArray = await allComments();
    // console.log(commentsArray)
    res.send(commentsArray);
  } catch (err) {
    debug(err.message);
  }
});

module.exports = router;
