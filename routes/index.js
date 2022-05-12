var express = require("express");
var router = express.Router();
var debug = require("debug")("server:routes");

const {
  addComment,
  editComment,
  deleteComment,
  allComments,
  allUsers,
  findCommentsByRoute,
  deleteCommentById,
} = require("../database/dbModel");

/* GET express home page for testing. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//To add new comment
router.post("/add", async (req, res, next) => {
  const comment = req.body;
  try {
    const addedComment = await addComment(comment);
    console.log("Added comment", addedComment);
    res.send("Comment added");
  } catch (err) {
    debug(err.message);
  }
});


router.put("/edit/:id", async (req, res, next) => {
  console.log("last")
  try {
    const id = req.params.id;
    console.log("id is", id)
    const comment = req.body;
    console.log("comment is:", comment)
    const editedComment = await editComment(comment, id);
    console.log("Updated comment: ", editedComment);
    res.send("Comment updated");
  } catch (err) {
    debug(err.message);
  }
});

//To delete a comment.
router.delete("/delete/:id", async (req, res, next) => {
  try {
    // const id = req.params.id;
    const commentId = req.params.id;
    const deletedComment = await deleteComment(commentId);
    console.log("comment deleted ", deletedComment);
    res.send("Comment deleted");
  } catch (err) {
    debug(err.message);
  }
});


//To retrieve all comments. The return is an array of objects
router.get("/allcomments", async (req, res, next) => {
  try {
    const commentsArray = await allComments();
    res.send(commentsArray);
  } catch (err) {
    debug(err.message);
    
  }
});


router.get("/allusers", async (req, res) => {
  try {
    let usersArray = await allUsers();
    res.send(usersArray);
  } catch (err) {
    debug(err.message);
  }
});


router.post("/routecomments", async (req, res) => {
  try {
    let route = req.body;
    let routeCommentsArray = await findCommentsByRoute(route);
    res.send(routeCommentsArray);
  } catch (err) {
    debug(err.message);
  }
});

module.exports = router;
