import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Comment from "./Comment";
import "./Comments.css";
import CommentForm from "./CommentForm";
// import { createComment as createCommentApi } from "./Api";
// import { getComments as getCommentsApi } from "./Api";

const Comments = (_id) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  const [backendUsers, setBackendUsers] = useState([]);
  const [backendComments, setBackendComments] = useState([]);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  // const addComment = (text, parentId) => {
  //   createCommentApi(text, parentId).then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //       });
  // };

  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);

  const addComment = async (text, parentId) => {
    console.log("addComment", text, parentId);
    try {
      let response = await fetch("/add");
      let addcomment = await response.json(text, parentId).then((comment) => {
        setBackendComments([comment, ...backendComments]);
        // setActiveComment(null);
        return setBackendComments(addcomment);
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    addComment();
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   allcomments().then((data) => {
  //     setBackendComments(data)
  //   })
  // })

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

  const finduseremail = async () => {
    try {
      if (user == null) setBackendUsers(null);
      let email = user.email;
      let response = await fetch(`/findusersbyemail?email=${email}`);
      let allusers = await response.json();
      return setBackendUsers(allusers);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    finduseremail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div>
      <CommentForm submitLabel="Write" handleSubmit={addComment} />
      <div className="comments-container">
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
            replies={getReplies(rootComment._id)}
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
