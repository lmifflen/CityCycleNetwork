const { MongoClient, Timestamp } = require("mongodb");
const mongoose = require("./mongoose");

const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    username: String,
    comment: String,
    route: { type: String, default: "" },
    parentId: { type: String, default: null },
    user_id: String,
    createdAt: String,
  },
  { timestamps: true }
);

const userSchema = new Schema({
  username: String,
  email: String,
  user_id: String,
});

const Comment = model("Comment", commentSchema);
const User = model("User", userSchema);

const addComment = async (newComment) => {
  try {
    const createdAt = getTimeStamp();
    newComment.createdAt = createdAt;
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

const deleteComment = async (id) => {
  try {
    const deletedComment = await Comment.findByIdAndRemove(id);
    console.log("Comment deleted successfully");
    return deletedComment;
  } catch (err) {
    debug(err.message);
  }
};

const deleteCommentById = async (id) => {
  try {
   const deletedComment = await Comment.deleteOne({ _id: ObjectId(id) });
  return deletedComment;
} catch (err) {
  debug(err.message);
}
};

const allComments = async () => {
  let commentsArray = await Comment.find().sort({createdAt: -1})
  // console.log(commentsArray);
  return commentsArray;
};

const allUsers = async (email) => {
  let usersArray = await User.find(email);
  // console.log(usersArray);
  return usersArray;
};

// const findUsersbyemail = async (email) => {
//   let useremail = await User.find({ email: email });
//   // console.log(useremail);
//   return useremail;
// };

const findUsersbyid = async (id) => {
  let userid = await User.findById(id);
  console.log(userid);
  return userid;
};


const findCommentsByRoute = async (route) => {
  let routeCommentsArray;
  if (route === null || route === "") {
    routeCommentsArray = await allComments();
  } else {
    routeCommentsArray = await Comment.find({ route: route });
  }
  // console.log(routeCommentsArray)
  return routeCommentsArray;
};

const getTimeStamp = () => {
  const date = new Date().toString();
  const createdAt = `${date.substring(4, 10)}, ${date.substring(11,15)} ${date.substring(16, 21)}`;
  // console.log(createdAt);
  return createdAt;
};



module.exports = {
  addComment,
  editComment,
  deleteComment,
  allComments,
  allUsers,
  // findUsersbyemail,
  findCommentsByRoute,
  deleteCommentById,
  findUsersbyid,
};
