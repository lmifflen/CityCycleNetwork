import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./Comments.css";
import { useAuth0 } from "@auth0/auth0-react";

const Comments = () => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

  const { user } = useAuth0();
  const [userid, setUserid] = useState();

  useEffect(() => {
    if (user) {
      let currentUserid = user.sub;
      setUserid(currentUserid);
    }
  }, [user]);

  // GET REPLIES
  const getReplies = (commentId) => {
    return backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  //GET DATE AND TIME
  const getTimeStamp = () => {
    const date = new Date().toString();
    const createdAt = `${date.substring(4, 10)}, ${date.substring(
      11,
      15
    )} ${date.substring(16, 21)}`;
    // console.log(createdAt);
    return createdAt;
  };

  const ime = () => {
    if (!user.given_name && !user.family_name) {
      return user.nickname;
    } else {
      return user.name;
    }
  };
  // console.log("issocial is ", ime)

  //ADD COMMENT
  const addComment = async (text, parentId = null) => {
    const newComment = {
      username: ime(),
      comment: text,
      parentId: parentId,
      createdAt: getTimeStamp(),
      user_id: user.sub,
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
    console.log("new com", newComment);
    // setBackendComments([newComment, ...backendComments]);
    setActiveComment(null);
    if (response.status === 200) {
      console.log("success-comment added");
    } else {
      alert("error creating comment");
    }
    allcomments();
  };

  //DELETE COMMENT
  const deleteComment = async (comment) => {
    if (window.confirm("Are you sure you want delete a comment?")) {
      console.log("delete is ", comment);
      const id = comment;

      const response = await fetch(`/delete/${id}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        console.log("success-comment deleted");
      } else {
        alert("error deleting comment");
      }
      allcomments();
    }
  };

  //EDIT COMMENT
  const updateComment = async (text, comment) => {
    console.log("bla", text);
    const id = comment;
    console.log("COMMENT IS", comment);
    const response = await fetch(`/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ comment: text }),
    });

    setActiveComment(null);
    if (response.status === 200) {
      console.log("success-comment edited");
    } else {
      alert("error editing comment");
    }
    allcomments();
  };

  //GET ALL COMMENTS
  const allcomments = async () => {
    try {
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

  return (
    <div className="comments">
      <h3 className="comments-title">Comments</h3>
      <CommentForm submitLabel="Submit" handleSubmit={addComment} />
      <div className="comments-container">
        {rootComments.map((rootComment) => (
          <Comment
            key={rootComment._id}
            comment={rootComment}
            replies={getReplies(rootComment._id)}
            activeComment={activeComment}
            setActiveComment={setActiveComment}
            addComment={addComment}
            deleteComment={(comment) => deleteComment(comment)}
            updateComment={updateComment}
            currentUserid={userid}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
