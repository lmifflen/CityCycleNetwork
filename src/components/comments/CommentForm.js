import React from "react";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Picker from "emoji-picker-react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  initialText = "",
  handleCancel,
}) => {
  const [text, setText] = useState(initialText);
  const { isAuthenticated } = useAuth0();
  const isTextareaDisabled = text.length === 0;
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };


  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (event, emojiObject) => {
    setText((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const placehold = () => {
    if (!isAuthenticated) {
      return "Please log in to leave a comment...";
    } else {
      return "Leave a comment...";
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className="comment-form-textarea"
        disabled={!isAuthenticated}
        // {!isAuthenticated && (<p onClick={() => alert('button click catched')}></p>)}
        value={text}
        placeholder={placehold()}
        onChange={(e) => setText(e.target.value)}
      />
       
      <div className="picker-container">
        <img
          className="emoji-icon"
          src="data:image/png;base64,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"
          onClick={() => setShowPicker((val) => !val)}
        />
        {showPicker && (
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
