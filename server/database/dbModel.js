const { MongoClient } = require("mongodb");
const mongoose = require("./mongoose");


// //this username for test only
let userName = "adnan123";

//temp variable for testing
let comment = `edited from ${userName}`;

//need to change signedIn based on sign in status
let signedIn = true;

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  name: String,
  comment: String,
  createdAt: {
    type: String,
    default: new Date().toString().substring(4, 25),
  },
});

const Comment = model("Comment", commentSchema);

const addComment = async (name, comment) => {
  let addedComment;
  if (signedIn) {
    addedComment = await Comment.create({ name, comment });
    console.log("comment added: ", addedComment);
  } else {
    addedComment = "Please sign in first";
    console.log(addedComment); //need to put this in web page
  }
  return addedComment;
};

const editComment = async (name, comment) => {
  let editedComment;
  if (signedIn) {
    editedComment = await Comment.findOneAndUpdate({ name, comment });
    console.log("Comment edited: ", editedComment);
  } else {
    editedComment = "Please sign in first";
  }
  return editedComment;
};

const deleteComment = async (name, comment) => {
  let deletedComment;
  if (signedIn) {
    deletedComment = await Comment.findOneAndDelete({ name, comment });
    console.log("Comment deleted successfully");
  } else {
    deletedComment = "Please sign in first";
  }
};

const allComments = async () => {
  let commentsArray = await Comment.find();
  console.log(commentsArray);
  return commentsArray;
};

addComment(userName, comment)
module.exports = {
  addComment,
  editComment,
  deleteComment,
  allComments,
};
