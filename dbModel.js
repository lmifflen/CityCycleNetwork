const { MongoClient } = require("mongodb");
const mongoose = require("./mongoose");

let signedIn = false;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model("User", userSchema);
const Comment = mongoose.model("Comment", commentSchema);

const signUp = async (name, email, password) => {
  let user;
  let checkEmail = await User.findOne({ email: email });

  if (checkEmail === null) {
    user = await User.create({ name, email, password });
    singedIn = true;
    console.log("You have successfully signed up");
    
  } else {
    user = "You have already singed up. Go to sign in";
    console.log("You have already singed up. Go to sign in"); //need to put some action or page navigation here
  }
  return user;
};

const signIn = async (email, password) => {
  let user = await User.findOne({ email: email, password: password });
  if (user !== null) {
    signedIn = true; //need to put action to enable comment box here
  } else {
    user = "Invalid credentials or not signed up";
  }
  console.log(user); //need to put relevant action in web page
  return user;
};

const signOut = async()=> {
  signedIn = false
  console.log("Sign In status: ", signedIn)
  return signedIn
}

const saveComment = async (name, comment) => {
  let savedComment
  if (signedIn) {
    savedComment = await Comment.create({ name, comment });
  } else {
    savedComment="Please sign in first"
    console.log(saveComment); //need to put this in web page
  }
  return savedComment
};

const retrieveComments = async () => {
  let connection = await MongoClient.connect("mongodb://localhost:27017")
  let collection = await connection.db("CCNdb").collection("comments")
  let commentsArray = await collection.find({}).toArray();
  return commentsArray;
};



module.exports = { signUp, signIn, saveComment, retrieveComments, signOut };
