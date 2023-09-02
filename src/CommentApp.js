// src/CommentApp.js

import React, { useEffect, useState } from 'react';
import PostList from './PostList';
import PostFilter from './PostFilter';
import CommentList from './CommentList';

function CommentApp() {
  const [comments, setComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState('');
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedPostComments, setSelectedPostComments] = useState([]);

  useEffect(() => {
    // Fetch 100 comments from the API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    const postComments = comments.filter((comment) => comment.postId === postId);
    setSelectedPostComments(postComments);
  };

  const filteredComments = comments.filter((comment) =>
  comment.postId.toString().includes(postIdFilter)
);

  return (
    <>
      <h1 className='text-center'>Building a React Component with Comment Filtering and Hosting</h1>
    <div className="comment-app">
        
        <PostFilter postIdFilter={postIdFilter} onFilterChange={setPostIdFilter} />
      <PostList
        comments={comments}
        selectedPostId={selectedPostId}
        onPostClick={handlePostClick}
      />
     

      <CommentList comments={filteredComments} />
      
    </div>
    </>
  );
}

export default CommentApp;
