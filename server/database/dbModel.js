const { MongoClient } = require("mongodb");
const mongoose = require("./mongoose");

// //this username for test only.
// let userName = "adnan2";

//temp variable for testing
// let comment = `adnan4209211`;

//need to change signedIn based on sign in status
let signedIn = false;

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
    addedComment = await Comment.create({ name: name, comment: comment });
    console.log(addedComment);
  } else {
    console.log("User not signed in"); //need to put this in web page
  }
};

const editComment = async (name, comment) => {
  let editedComment;
  if (signedIn) {
    editedComment = await Comment.findOneAndUpdate(
      { name: name },
      { comment: comment }
    );
    console.log(editedComment);
  } else {
    console.log("User not signed in");
  }
};

const deleteComment = async (name) => {
  let deletedComment;
  if (signedIn) {
    deletedComment = await Comment.findOneAndDelete({ name: name });
    console.log("Comment deleted successfully");
  } else {
    deletedComment = "User not signed in";
  }
};

const allComments = async () => {
  let commentsArray = await Comment.find();
  console.log(commentsArray);
  return commentsArray;
};

module.exports = {
  addComment,
  editComment,
  deleteComment,
  allComments,
};
