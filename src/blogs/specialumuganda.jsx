import React from 'react';

const UmugandaGOA = () => {
  return (
    <div style={containerStyle}>
      <style>
        {`
          @media (max-width: 768px) {
            .rowBlock, .rowBlockAlt {
              flex-direction: column !important;
            }
            .imgStyle {
              width: 100% !important;
              margin-bottom: 1rem !important;
            }
            .textStyle {
              min-width: 100% !important;
            }
          }
        `}
      </style>

      {/* Intro — Full Width */}
      <div style={fullWidthBlock}>
        <p>
          🇷🇼 <strong>Umuganda GOA Edition: Unity, Service, and Leadership</strong><br />
          On July 26, 2025, more than 400 campers, coaches, dignitaries, and international guests gathered in Kigali's Batsinda Village to participate in Umuganda — Rwanda’s tradition of community service — alongside the Giants of Africa Festival.
        </p>
        <p>
          This annual collective effort embodies the spirit of civic engagement, teamwork, and leadership as young people and communities unite to build a stronger, more united Africa.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div className="rowBlock" style={rowBlock}>
<img
  src={process.env.PUBLIC_URL + "/images/um1.png"}
  alt="Masai Ujiri addressing youth at Umuganda"
  className="imgStyle"
  style={imgStyle}
/>

        <div className="textStyle" style={textStyle}>
          <p>
            🎙️ <strong>Masai Ujiri’s Call to Africa’s Youth</strong><br />
            Giants of Africa co-founder Masai Ujiri encouraged young Africans to believe in their potential and lead the continent’s transformation. Speaking at Umuganda in Batsinda Village, Ujiri emphasized that adversity is inevitable but unity and resilience are the true solutions.
          </p>
          <p>
            Drawing from his childhood in Northern Nigeria, he urged youth to walk with confidence and purpose, reminding them that greatness is achievable regardless of one’s background.
          </p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div className="rowBlockAlt" style={rowBlockAlt}>
        <img
  src={process.env.PUBLIC_URL + "/images/um2.png"}
  alt="Community members and GOA participants during Umuganda"
  className="imgStyle"
  style={imgStyle}
/>

        <div className="textStyle" style={textStyle}>
          <p>
            👥 <strong>Community Spirit in Action</strong><br />
            Organized with the Imbuto Foundation and Rwanda’s Ministry of Youth and Arts, the event brought together 320 athletes, coaches, and local community members to engage in activities like digging, building, and cleaning. 
          </p>
          <p>
            The partnership highlighted the power of collective service and the importance of embracing Umuganda’s values of unity and responsibility.
          </p>
        </div>
      </div>

      {/* Section 3 — Image Left */}
      <div className="rowBlock" style={rowBlock}>
        <img
  src={process.env.PUBLIC_URL + "/images/um3.png"}
  alt="Minister of Sports Nelly Mukazayire speaking at Umuganda"
  className="imgStyle"
  style={imgStyle}
/>

        <div className="textStyle" style={textStyle}>
          <p>
            🌍 <strong>Minister Mukazayire’s Encouragement</strong><br />
            Rwanda’s Minister of Sports, Nelly Mukazayire, echoed Ujiri’s message, urging youth to actively build their country. She emphasized that national progress requires everyone’s participation, not just institutions or leaders.
          </p>
          <p>
            She praised Giants of Africa for their commitment during Umuganda, calling sport a powerful teacher of discipline, resilience, and life skills.
          </p>
          <p>
            She noted that sport builds character and unity, and through Umuganda, athletes demonstrate the teamwork and responsibility that drive Rwanda’s progress.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div className="rowBlockAlt" style={rowBlockAlt}>
        <img
  src={process.env.PUBLIC_URL + "/images/um4.png"}
  alt="Youth participating in Umuganda community work"
  className="imgStyle"
  style={imgStyle}
/>

        <div className="textStyle" style={textStyle}>
          <p>
            🌱 <strong>Umuganda: A National Tradition of Unity and Development</strong><br />
            Umuganda takes place every last Saturday of the month, requiring nationwide participation in community work from 08:00 to 11:00. It teaches civic engagement, teamwork, and leadership, motivating citizens to actively contribute to Rwanda’s development.
          </p>
          <p>
            Re-established in 2009 under President Paul Kagame, Umuganda has improved Rwanda’s cleanliness and fostered a strong culture of community responsibility and progress.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          The 2025 Giants of Africa Umuganda embodied the festival’s theme of “A Borderless Africa,” showing how collective action, culture, and sport unite young Africans to build a brighter future together — locally rooted, globally connected.
        </p>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '2rem',
  fontFamily: 'Montserrat, sans-serif',
  lineHeight: '1.6',
};

const fullWidthBlock = {
  width: '100%',
  marginBottom: '3rem',
};

const rowBlock = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '2rem',
  marginBottom: '3rem',
};

const rowBlockAlt = {
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'flex-start',
  gap: '2rem',
  marginBottom: '3rem',
};

const imgStyle = {
  width: '420px',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '10px',
};

const textStyle = {
  flex: 1,
  minWidth: '50%',
};

const finalParagraphStyle = {
  width: '100%',
  marginTop: '3rem',
  backgroundColor: '#f9f9f9',
  padding: '2rem',
  borderRadius: '10px',
};

export default UmugandaGOA;
