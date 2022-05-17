import React from "react";
import img from "../../images/user.png";
import CommentForm from "./CommentForm";
import "./Comments.css";
// import { useAuth0 } from "@auth0/auth0-react";

const Comment = ({
  comment,
  replies,
  currentUserid,
  updateComment,
  deleteComment,
  addComment,
  activeComment,
  setActiveComment,
  parentId = null,
}) => {
  const canReply = Boolean(currentUserid);
  const canEdit = currentUserid === comment.user_id;
  const canDelete = currentUserid === comment.user_id && replies.length === 0;
  const isReplying =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "replying";
  const isEditing =
    activeComment &&
    activeComment.id === comment._id &&
    activeComment.type === "editing";
  const replyId = parentId ? parentId : comment._id;
  return (
    <div key={comment._id} className="comment">
      <div className="comment-image-container">
        <img src={comment.picture || img} alt="" />
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        {!isEditing && <div className="comment-text">{comment.comment}</div>}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.comment}
            handleSubmit={(text) => updateComment(text, comment._id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions">
          {canReply && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "replying" })
              }
            >
              Reply
            </div>
          )}
          {canEdit && (
            <div
              className="comment-action"
              onClick={() =>
                setActiveComment({ id: comment._id, type: "editing" })
              }
            >
              Edit
            </div>
          )}
          {canDelete && (
            <div
              className="comment-action"
              onClick={() => deleteComment(comment._id)}
            >
              Delete
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply._id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                addComment={addComment}
                parentId={comment._id}
                replies={[]}
                currentUserid={currentUserid}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
