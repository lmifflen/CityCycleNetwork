const { MongoClient } = require("mongodb");
const mongoose = require("./mongoose");

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
      { name: updatedComment.name },
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
      name: deletingComment.name,
    });
    console.log("Comment deleted successfully");
  } catch (err) {
    debug(err.message);
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
