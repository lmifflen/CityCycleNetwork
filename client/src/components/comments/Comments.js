import React from "react";
import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import "./Comments.css";
import { useAuth0 } from "@auth0/auth0-react";
import Slideshow from "../pages/Slideshow";

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

  const pictureNonsocial = () => {
    if (!user.given_name && !user.family_name) {
      return null;
    } else {
      return user.picture;
    }
  };

  //ADD COMMENT
  const addComment = async (text, parentId = null) => {
    const newComment = {
      username: ime(),
      comment: text,
      parentId: parentId,
      picture: pictureNonsocial(),
      createdAt: getTimeStamp(),
      user_id: user.sub,
    };

    const data = JSON.stringify(newComment);
    console.log(`creating new comment: ${data}`);
    const response = await fetch("/index/add", {
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

      const response = await fetch(`/index/delete/${id}`, {
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
    const response = await fetch(`/index/edit/${id}`, {
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
      let response = await fetch("/index/allcomments");
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
    <div className="commentsandimage">
      <div>
        <a
          className="weatherlink"
          href="https://weather.gc.ca/city/pages/ab-52_metric_e.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="weather">Check area weather</div>
        </a>
        <a className="menu2" href="/contact">
          <div className="contactus2">
            <p className="contacusp">We'd love to hear from you!</p> Whether you
            have a question about features or anything else, our team is ready
            to answer all your questions
          </div>
        </a>
      </div>
      <div className="comments-slideshow">
        {" "}
        <Slideshow />{" "}
      </div>
      <div className="comments">
        <h3 className="comments-title">Leave a comment</h3>
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
    </div>
  );
};

export default Comments;
