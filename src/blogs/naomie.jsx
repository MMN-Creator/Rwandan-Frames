import React, { useState, useEffect } from 'react';

const NaomiesHusband = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>

      {/* Block 1 — image RIGHT */}
      <div style={{ ...rowStyleRight, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            🚌 <strong>Public Transport, Private Love: Naomie & The Bus Chronicles</strong><br />
            When a photo of former Miss Rwanda 2020 Nishimwe Naomie's husband, Michael Tesfay, boarding a public bus hit the internet, 
            social media <em>exploded</em>. Memes, opinions, shade — you name it.
          </p>
          <p>
            💬 <strong>The Internet Had Opinions</strong><br />
            People started trolling Naomie, calling her husband “too broke” for a beauty queen. But Naomie? 
            She didn’t flinch — she <em>fired back</em>. In an Instagram Live that felt like a sermon, comedy show, and TED Talk all at once, 
            she shut the trolls down.
          </p>
        </div>
<img src={process.env.PUBLIC_URL + "/images/mic3.png"} alt="Naomie's husband on public transport" style={responsiveImg} />

      </div>

      {/* Block 2 — image LEFT */}
      <div style={{ ...rowStyleLeft, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            📲 <strong>Super Glue, But Make It Sass</strong><br />
            Her message was clear: Michael Tesfay isn’t Rwanda’s husband — he’s hers. 
            “When I posted him, did I say take him? Have you ever seen him begging online? No. 
            So please, stop.” And then came the quote that shut it all down:
          </p>
          <p><em>“This is the face of a happy woman, not someone who’s struggling.”</em></p>
          <p>
            🔥 <strong>Don’t Screen Record This — Just Kidding, Everyone Did</strong><br />
            Naomie asked people <em>not</em> to record the live. The internet said: challenge accepted. 
            Edits, remixes, and dramatic captions followed. It was viral gold — but Naomie still came out shining.
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/Picture60.png"} alt="Social media reactions" style={responsiveImg} />

      </div>

      {/* Block 3 — image RIGHT */}
      <div style={{ ...rowStyleRight, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            💍 <strong>A Love Story with No Price Tag</strong><br />
            Naomie and Michael tied the knot on December 29, 2024. She’s called him “the man God gave me” and 
            reminded followers that what you see online is only part of the picture. Their love might look like a fairy tale, 
            but they keep it real — flaws, bus rides, and all.
          </p>
          <p>
            😂 <strong>Moto, Boat, Aircraft — Let Him Travel</strong><br />
            One of the best moments? When she jokingly listed all the ways her husband could travel: 
            “Let it be a moto that makes him fall and rise again, or a boat, or even an aircraft!” she said, laughing.
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/Picture46.png"} alt="Funny edits from Instagram Live" style={responsiveImg} />

      </div>

      {/* Final paragraph — full width */}
      <div style={finalParagraphStyle}>
        <p>
          🚦 <strong>Final Frame</strong><br />
          In a world that’s quick to judge, Naomie reminded us that love isn’t based on public transport or online chatter. 
          It’s built on joy, commitment, and yes — a little bit of Super Glue sass. And a gentle reminder: Let's normalise being human.
        </p>
      </div>
    </div>
  );
};

// STYLES
const containerStyle = {
  padding: '2rem',
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: '1.6',
};

const rowStyleRight = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2rem',
  marginBottom: '3rem',
};

const rowStyleLeft = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '2rem',
  marginBottom: '3rem',
};

const textStyle = { flex: 1 };

const responsiveImg = {
  width: '100%',
  maxWidth: '420px',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
};

const finalParagraphStyle = {
  maxWidth: '100%',
  marginTop: '3rem',
};

export default NaomiesHusband;





