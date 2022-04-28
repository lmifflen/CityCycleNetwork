import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";


const Comments = ({ currentUserId }) => {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  const [backendUsers, setBackendUsers] = useState([]);
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const getReplies = async (commentId) => {
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
  //     setActiveComment(null);
  //   });
  // };


  const addComment = async (text, parentId = null) => {
    const newComment = {
      username: user.nickname,
      comment: text,
      parentId: parentId,
    };
 
    const data = JSON.stringify(newComment);
    console.log(`creating new comment: ${data}`);
    const response = await fetch("/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("success");
    } else {
      alert("error creating comment");
    }
  };

  // const updateComment = (text, commentId) => {
  //   updateCommentApi(text).then(() => {
  //     const updatedBackendComments = backendComments.map((backendComment) => {
  //       if (backendComment.id === commentId) {
  //         return { ...backendComment, body: text };
  //       }
  //       return backendComment;
  //     });
  //     setBackendComments(updatedBackendComments);
  //     setActiveComment(null);
  //   });
  // };


  // const deleteComment = (commentId) => {
  //   if (window.confirm("Are you sure you want to remove comment?")) {
  //     deleteCommentApi().then(() => {
  //       const updatedBackendComments = backendComments.filter(
  //         (backendComment) => backendComment.id !== commentId
  //       );
  //       setBackendComments(updatedBackendComments);
  //     });
  //   }
  // };

  const allcomments = async () => {
    try {
      let response = await fetch("/allcomments");
      let allcomments = await response.json();
      return setBackendComments(allcomments);
    } catch (ex) {
      console.log(ex);
    }
  };

  // useEffect(() => {
  //   getCommentsApi().then((data) => {
  //     setBackendComments(data);
  //   });
  // }, []);

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
      <CommentForm submitLabel="Submit" handleSubmit={addComment} />
      <div className="comments-container">
             {rootComments.map((rootComment) => (
          // <div key={backcomment._id}>{backcomment.body}</div>
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            // deleteComment={deleteComment}
            // updateComment={updateComment}
            currentUserId={currentUserId}
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
