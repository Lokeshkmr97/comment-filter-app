// src/CommentList.js

import React from 'react';

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
           Post Id: {comment.postId} &nbsp; &nbsp; &nbsp; <br />
          {comment.body}
        </div>
      ))}
    </div>
  );
}

export default CommentList;
