// src/PostFilter.js

import React from 'react';

function PostFilter({ postIdFilter, onFilterChange }) {
  return (
    <div className="post-filter">
      <input
        type="text"
        placeholder="Enter Post ID"
        value={postIdFilter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default PostFilter;
