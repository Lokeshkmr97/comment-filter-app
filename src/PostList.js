// src/PostList.js

import React from 'react';

function PostList({ comments, selectedPostId, onPostClick }) {
  return (
    <div className="post-list">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className={`post ${selectedPostId === comment.postId ? 'selected' : ''}`}
          onClick={() => onPostClick(comment.postId)}
        >
          {comment.name}
        </div>
      ))}
    </div>
  );
}

export default PostList;
