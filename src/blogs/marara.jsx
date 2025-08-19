import React, { useState, useEffect } from 'react';

const ChateauLeMarara = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>
      
      {/* INTRO — FULL WIDTH */}
      <div style={fullWidthBlock}>
        <p>
          🍽️ <strong>Château Le Marara: From Vows to "Wow... What Happened?"</strong><br />
          It was meant to be the wedding of the season — a lakeside dream, elegance in Karongi, and yes, the kind of vibe that screams “Rwanda is rising!” 
          But Château Le Marara, the five-star hotel at the heart of it all, had a different plot twist planned.
        </p>
      </div>

      {/* BLOCK 1 — image RIGHT */}
      <div style={{ ...rowStyle, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            🚨 <strong>A Shutdown Surprise</strong><br />
            On July 22, 2025, the Rwanda Development Board (RDB) announced the temporary closure of Château Le Marara. Why? 
            The hotel was operating without a valid Tourism Operating License — a legal must-have in Rwanda’s hospitality world.
          </p>
          <p>
          “Holding a valid license ensures safety, service, and standards,” RDB said, with that classic tone of: We told you so.
        </p>
        <p>
          <em>"We had to rent a generator just to finish the wedding!"</em><br />
          — Josine the bride&apos;s sister reportedly exclaimed.
        </p>
        </div>
        <img
  src={process.env.PUBLIC_URL + "/images/marara5.png"}
  alt="Chateau Le Marara wedding setup"
  style={responsiveImg}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>

      </div>

      {/* BLOCK 2 — image LEFT (via row-reverse) */}
      <div style={{ ...rowStyleLeft, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            💍 <strong>The Wedding That Sparked It All</strong><br />
            What fueled the fire? A high-profile wedding on July 14 between Hajj Shadadi Musemakweri and Uwera Bonnette. 
            Guests — including Miss Rwanda 2020, Nishimwe Naomie — didn’t just show up dressed to impress; they left with tweets, 
            complaints, and tales of spoiled milk, blackout dinners, and fruit that clearly didn’t pass the vibe check.
          </p>
        </div>
       <img
  src={process.env.PUBLIC_URL + "/images/bonette5.png"}
  alt="Chaotic wedding moment"
  style={responsiveImg}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>

      </div>

      {/* BLOCK 3 — image RIGHT */}
      <div style={{ ...rowStyle, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <h3 style={headingStyle}>🛑 The Hotel’s Side of the Story</h3>
          <p>
            The hotel stayed silent at first, but it had no other choice but to come out and protray the story from its perspective. 
          </p>
          <p>
            Management claimed the viral food pictures were actually employee meals , 
            and that the power issues were due to the “heavy equipment” used by the couple. 
          </p>
          <p>
            They also alleged that Bonnette kept changing the initial agreements — and oh, by the way, they’re now suing the couple for not paying a Frw 5 million bill.
          </p>
          <p>
            Still, questions remain. Was the hotel covering up, or the couple exaggerating? With both sides dug in, the truth feels caught in between.
          </p>
          <p>
            Drama? Absolutely.
            Legal action? Of course. 
            Spoiled milk? Apparently.
          </p>
        </div>
        <img
  src={process.env.PUBLIC_URL + "/images/rwa21.jfif"}
  alt="Viral tweet or comment"
  style={responsiveImg}
  onError={(e) => {
    e.target.src = process.env.PUBLIC_URL + "/images/rwa4.jfif";
  }}
/>

      </div>

      {/* FINAL FRAME — Full width */}
      <div style={finalParagraphStyle}>
        <p>
          🔍 <strong>Final Frame</strong><br />
          The RDB is still investigating the incident, but what’s clear is this: weddings may be fairy tales, 
          but poor service and power cuts can turn them into investigative files.
        </p>

        <p>
          Château Le Marara may reopen one day… but until then, it’s not just the power that’s out — 
          it’s the lights on their reputation too.
        </p>
      </div>
    </div>
  );
};

// 🧠 STYLES

const containerStyle = {
  padding: '2rem',
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: '1.6',
};

const rowStyle = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
  marginBottom: '3rem',
};

const rowStyleLeft = {
  display: 'flex',
  gap: '2rem',
  alignItems: 'flex-start',
  marginBottom: '3rem',
};

const textStyle = { flex: 1 };

const headingStyle = {
  fontSize: '1.4rem',
  color: '#800000',
  marginBottom: '1rem',
};

const responsiveImg = {
  width: '100%',
  maxWidth: '420px',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
};

const fullWidthBlock = {
  margin: '2rem 0',
};

const finalParagraphStyle = {
  marginTop: '3rem',
  maxWidth: '100%',
};

export default ChateauLeMarara;









