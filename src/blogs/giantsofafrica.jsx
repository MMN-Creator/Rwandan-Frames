import React from 'react';

const GiantsOfAfrica = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Montserrat', lineHeight: '1.6' }}>
      <p>
        🏀 <strong>Giants of Africa Festival 2025: More Than a Game</strong><br />
        Founded in 2003 by Masai Ujiri — current President and Vice-Chairman of the Toronto Raptors — Giants of Africa uses basketball as a platform to educate, empower, and inspire Africa’s youth.
        🌍 The mission is clear: build community, unlock potential, and showcase Africa’s talent on a global stage — all through the love of the game.
      </p>

      {/* Rafiki Court Section */}
      <h3>🏀 <strong>1. Club Rafiki Court: Where Dreams Take Flight</strong></h3>
      <p>
        Several new basketball courts were officially opened in Kigali during the festival, including the notable Club Rafiki court.
        These courts serve as vital spaces for youth to grow, compete, and dream.
      </p>
      <div style={imgGrid}>
        <img src={`${process.env.PUBLIC_URL}/images/court.png`} alt="New basketball court" style={imgStyleGrid} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <img src={`${process.env.PUBLIC_URL}/images/raf.png`} alt="Rafiki Court detail 1" style={imgStyleGrid} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <img src={`${process.env.PUBLIC_URL}/images/raf1.png`} alt="Rafiki Court detail 2" style={imgStyleGrid} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
      </div>
      <p>
        Giants of Africa shared on Instagram: <em>“At Club Rafiki, the court came alive in a special way. Kawhi Skawset joined community campers — sharing his knowledge and connecting through the game. His Excellency President Paul Kagame was there to witness it all. Because sport has the power to unite, inspire, and remind us that big dreams can start right here.”</em> 🏀🌍
      </p>

      {/* Opening Concert Section */}
      <h3>🎉 <strong>2. Opening Concert: Africa’s Stars Unite</strong></h3>
      <p>
        The festival kicked off with an unforgettable concert featuring Sherie Silver, Kevin Kade, and DJ Uncle Waffles. The energy was electric — a true celebration of African culture, music, and unity.
      </p>
      <div style={imgGrid}>
      <img
  src={process.env.PUBLIC_URL + "/images/sherrie.png"}
  alt="Sherie Silver dancing"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/kevin.png"}
  alt="Uncle Waffles spinning"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/waffles.png"}
  alt="Opening concert wide shot"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/waffles.png";
  }}
/>
      </div>

      {/* Fashion Section */}
      <h3>💃🏿 <strong>3. Threads of Africa: Fashion Meets Culture</strong></h3>
      <p>
        The festival’s fashion spotlight featured the “Threads of Africa” show with talented Rwandan designers. This fusion of culture, sport, and style celebrated Africa’s creativity beyond the basketball court.
      </p>
      <div style={imgGrid}>
        <img
  src={process.env.PUBLIC_URL + "/images/g25.png"}
  alt="Runway fashion 1"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/Picture92.png"}
  alt="Runway fashion 2"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/g26.png"}
  alt="Threads of Africa stage"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
      </div>

      {/* Closing Concert Section */}
      <h3>🎤 <strong>4. Closing Concert: Nostalgia Meets New Talent</strong></h3>
      <p>
        The closing concert featured The Ben, Kizz Daniel, Timaya, Ayra Starr, and DJ Senshi. Fans danced all night while the stage delivered unforgettable performances.
      </p>
      <div style={imgGrid}>
        <img
  src={process.env.PUBLIC_URL + "/images/g17.png"}
  alt="Ayra Starr performance"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/g16.png"}
  alt="DJ Senshi energy"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/ayra.png"}
  alt="Closing concert wide view"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
      </div>

      {/* Kagame & Masai Section */}
      <h3>🇷🇼 <strong>5. Leaders in Action: President Kagame & Masai Ujiri</strong></h3>
      <p>
        The presence of President Paul Kagame alongside Masai Ujiri highlighted how Giants of Africa goes beyond sports — it’s a movement focused on nation-building, youth empowerment, and inspiring hope across the continent.
      </p>
      <div style={imgGrid}>
        <img
  src={process.env.PUBLIC_URL + "/images/g13.png"}
  alt="President Kagame watching"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/g12.png"}
  alt="Masai Ujiri in crowd"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
<img
  src={process.env.PUBLIC_URL + "/images/pk.png"}
  alt="Kagame & Masai Ujiri together"
  style={imgStyleGrid}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>
      </div>

      {/* Final Frame */}
      <p>
        🌟 <strong>Final Frame</strong><br />
        Giants of Africa is not just a festival or a series of games — it’s a powerful movement that weaves basketball, culture, community, and dreams together.
        Every beat, every shot, every cheer sends a message loud and clear: Africa’s giants are rising — on and off the court.
      </p>
    </div>
  );
};

const imgGrid = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  margin: '1.5rem 0'
};

const imgStyleGrid = {
  flex: '1',
  maxWidth: '32%',
  height: '380px',
  objectFit: 'cover',
  borderRadius: '10px'
};

export default GiantsOfAfrica;
