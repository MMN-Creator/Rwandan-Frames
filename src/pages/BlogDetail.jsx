import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const blogData = {
  'giants-of-africa': {
    title: 'Giants of Africa in Kigali',
    date: 'July 15, 2025',
    image: "/images/rwa10.jfif",
    content: `The Giants of Africa returned to Rwanda with an unforgettable energy...
    
    The event brought youth from across the country, and the energy in the gym was electric. Coaching clinics, inspiring talks, and unforgettable slam dunks filled the atmosphere...`,
  },
  'chateau-le-marara': {
    title: 'Funny Moments from Château le Marara',
    date: 'July 20, 2025',
    image: "/images/marara.jpg",
    content: `From Naomie's husband on the bus, to Gisenyi confessions — Château le Marara served DRAMA and LAUGHTER. 
    
    The audience couldn’t believe the unfolding events...`,
  },
};

function BlogDetail() {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return <div style={{ color: 'white', padding: '2rem' }}>Blog not found.</div>;
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#111',
      color: 'white',
      padding: '2rem',
    }}>
      <Navbar />
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#1a1a1a',
        padding: '2rem',
        borderRadius: '10px',
      }}>
        <h1>{blog.title}</h1>
        <p style={{ color: '#aaa' }}>{blog.date}</p>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
        />
        <p style={{ lineHeight: '1.7', whiteSpace: 'pre-line' }}>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogDetail;