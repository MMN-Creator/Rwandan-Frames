import logo from '../assets/logo.png';
import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      {/* Logo + Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Rwandan Frames Logo" style={{ height: '40px' }} />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#800000' }}>Rwandan Frames</span>
        </a>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="#top" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About Us</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        <a href="#suggestions" style={linkStyle}>Suggestions</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: '#800000',
  fontWeight: 'bold',
  textDecoration: 'none',
  cursor: 'pointer'
};

export default Navbar;
