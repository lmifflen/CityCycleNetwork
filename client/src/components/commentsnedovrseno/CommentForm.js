import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const CommentForm = ({handleSubmit, submitLabel}) => {
  const { isAuthenticated } = useAuth0();


  const [text, setText] = useState("");
  const isTextareaDisabled = text.length === 0;

  const onSubmit = event => {
    event.preventDefault()
    handleSubmit(text)
    setText("");
  }
  return (
    <form className='comment-form' onSubmit={onSubmit}>
      <textarea className="comment-form-textarea" disabled={!isAuthenticated} value={text} onChange={(e) => setText(e.target.value)} />
      <button className='comment-form-button' disabled={isTextareaDisabled}>{submitLabel}</button>
    </form>
  )
}

export default CommentForm