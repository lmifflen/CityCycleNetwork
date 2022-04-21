const { MongoClient } = require("mongodb");
const mongoose = require("./mongoose");

const { Schema, model } = mongoose;

const commentSchema = new Schema({
  username: String,
  comment: String,
  route: { type: String, default: "" },
  parentId: String,
  createdAt: {
    type: String,
    default: new Date().toString().substring(4, 25),
  },
});

const userSchema = new Schema({
  username: String,
  email: String,
});

const Comment = model("Comment", commentSchema);
const User = model("User", userSchema);

const addComment = async (newComment) => {
  try {
    const addedComment = await Comment.create(newComment);
    console.log("Comment added successfully");
    return addedComment;
  } catch (err) {
    debug(err.message);
  }
};

const editComment = async (updatedComment) => {
  try {
    const editedComment = await Comment.findOneAndUpdate(
      { username: updatedComment.username },
      { comment: updatedComment.comment }
    );
    console.log("Comment edited successfully");
    return editedComment;
  } catch (err) {
    debug(err.message);
  }
};

const deleteComment = async (deletingComment) => {
  try {
    const deletedComment = await Comment.findOneAndDelete({
      username: deletingComment.username,
    });
    console.log("Comment deleted successfully");
  } catch (err) {
    debug(err.message);
  }
};

const allComments = async () => {
  let commentsArray = await Comment.find();
  // console.log(commentsArray);
  return commentsArray;
};

const allUsers = async (email) => {
  let usersArray = await User.find(email);
  console.log(usersArray)
  return usersArray;
};

const findUsersbyemail = async (email) => {
  let useremail = await User.find({email});
  console.log(useremail)
  return useremail;
};


module.exports = {
  addComment,
  editComment,
  deleteComment,
  allComments,
  allUsers,
  findUsersbyemail,
};
