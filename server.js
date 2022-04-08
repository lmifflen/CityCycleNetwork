const express = require("express");
const app = express();
const { signUp, signIn, saveComment, retrieveComments, signOut } = require("./dbModel");
const PORT = 5000;
let userName;

function echoPortNumber() {
  console.log(`Listenng on port ${PORT}`);
}
app.listen(PORT, echoPortNumber());

app.get("/signup", async (req, res) => {
  let name = req.query.name;
  let email = req.query.email;
  let password = req.query.password;
  let user = await signUp(name, email, password);
  res.send(user);
});

app.get("/signin", async (req, res) => {
  let email = req.query.email;
  let password = req.query.password;
  let user = await signIn(email, password);
  if((typeof user)!==String) {
    userName = user.name;
  }
  console.log(userName);
  res.send(user);
});

app.get('/signout', async(req,res)=> {
  let status = await signOut()
  res.send("Sign in status is:",status)

})

app.get("/review", async (req, res) => {
  let comment = req.query.comment;
  let savedComment = await saveComment(userName, comment);
  res.send(savedComment);
});

app.get("/all", async (req, res) => {
  let commentsArray = await retrieveComments();
  res.send(commentsArray);
});
