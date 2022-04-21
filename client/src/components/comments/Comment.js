import React from 'react'
import "./Comments.css"


const Comment = ({comment}) => {
  return (
    <div className='comment'>
      <div className='comment-image-container'>
        Slika
      </div>
      <div className='comment-right-part'>
        <div className='comment-content'>
          <div className='comment-author'>{comment.name}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className='comment-text'>{comment.comment}</div>
      </div>
    </div>
  )
}

export default Comment