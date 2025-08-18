import React, { useState } from 'react';
function BlogCard({ title, image, date, excerpt, onClick }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: '220px',
        maxWidth: '100%',
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#333',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />

      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div>
          <h3 style={{ color: '#800000', marginBottom: '0.5rem' }}>{title}</h3>
          <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '0.5rem' }}>{date}</p>
          <p style={{ fontSize: '0.95rem', marginBottom: '1rem' }}>{excerpt}</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', color: '#800000', marginTop: 'auto' }}>
          <button
            onClick={handleLike}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.2rem',
              color: liked ? 'red' : '#800000',
            }}
          >
            ❤️
          </button>
          <span style={{ marginLeft: '0.5rem', fontWeight: 'bold' }}>{likes}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
