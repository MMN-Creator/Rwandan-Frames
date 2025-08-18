import React, { useState, useEffect } from 'react';

const BlogPopup = ({ post, onClose, comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!post) return null;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      onAddComment(post.title, newComment.trim());
      setNewComment('');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '1rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          color: '#333',
          maxWidth: '800px',
          width: '100%',
          padding: '2rem',
          borderRadius: '10px',
          position: 'relative',
          overflowY: 'auto',
          maxHeight: '90vh',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            fontSize: '1.2rem',
            background: 'transparent',
            border: 'none',
            color: '#800000',
            cursor: 'pointer',
          }}
        >
          ✖
        </button>

        {/* Title & Date */}
        <h2 style={{ color: '#800000', marginBottom: '0.5rem' }}>{post.title}</h2>
        <p style={{ fontSize: '0.9rem', color: '#777' }}>{post.date}</p>

        {/* Blog Content */}
        <div style={{ lineHeight: '1.6', overflow: 'hidden', marginBottom: '2rem' }}>
          {post.contentComponent ? post.contentComponent : <p>{post.content}</p>}
        </div>

        {/* Comments Section */}
        <div style={{ clear: 'both' }}>
          <h3 style={{ color: '#800000', marginBottom: '0.5rem' }}>Comments</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '0.5rem 1rem',
                  borderRadius: '5px',
                  marginBottom: '0.5rem',
                }}
              >
                {comment}
              </li>
            ))}
          </ul>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            style={{
              display: 'flex',
              marginTop: '1rem',
              gap: '0.5rem',
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              style={{
                flex: 1,
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#800000',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto',
              }}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPopup;

