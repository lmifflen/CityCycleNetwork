import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Comment from "./Comment";
import "./Comments.css"

const Comments = (_id) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [backendUsers, setBackendUsers] = useState([]);
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const allcomments = async () => {
    try {
      // if (user == null) setBackendUsers(null)
      // let email = user.email
      let response = await fetch("/allcomments");
      let allcomments = await response.json();
      return setBackendComments(allcomments);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    allcomments();
  }, []);

  // const finduseremail = async () => {
  //   try {
  //     if (user == null) setBackendUsers(null)
  //     let email = user.email
  //     let response = await fetch(`/findusersbyemail?email=${email}`);
  //     let allusers = await response.json();
  //         return setBackendUsers(allusers);
  //   } catch (ex) {
  //     console.log(ex);
  //   }
  // };

  // useEffect(() => {
  //   finduseremail();
  // }, [isAuthenticated]);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>

      <div className="comments-container">
        {/* {rootComments.map((rootComment) => (
          <div key={rootComment._id}>{rootComment.body}</div>
        ))} */}
        {/* {backendComments.map((backcomment) => (
          <p>
            {backcomment.name} {backcomment.comment} {backcomment.createdAt}
          </p>
        ))} */}
        {/* {backendComments.map((backComment) => ( */}
        {rootComments.map((rootComment) => (
          // <div key={backcomment._id}>{backcomment.body}</div>
          <Comment
           key={rootComment._id}
           comment={rootComment}
           />
        ))}
      </div>
      
      
      {/* <div>
        {isAuthenticated && backendUsers != null &&
          backendUsers.map((backuser) => <p>{backuser.email}</p>)}
      </div> */}
    </div>
  );
};
export default Comments;
