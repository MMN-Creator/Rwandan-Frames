import React from 'react';

const Umuganura2025 = () => {
  return (
    <div style={containerStyle}>
      <style>
        {`
          @media (max-width: 768px) {
            .rowBlock, .rowBlockAlt {
              flex-direction: column !important;
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
          🌾 <strong>#Umuganura2025: Honouring Our Harvest, Reclaiming Our Identity</strong><br />
          Every first Friday of August, Rwandans gather to celebrate Umuganura — a moment of gratitude, unity, and reflection. 2025’s celebration was a powerful reminder of our cultural heritage, held under the theme <em>“Isoko y’ubumwe n’ishingiro ryo kwigira”</em> (A source of unity and foundation for self-reliance).
        </p>
        <p>
          Rooted in ancient traditions that date back to the reign of King Gihanga and revived by King Ruganzu II Ndoli, Umuganura reminds us that our national identity was, and still is, deeply tied to gratitude, productivity, and unity.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div className="rowBlock" style={rowBlock}>
       <img src="/images/u1.png" alt="Traditional harvest rituals" className="imgStyle" style={imgStyle} />

        <div className="textStyle" style={textStyle}>
          <p>
            🕊️ <strong>Umuganura’s Sacred Origins</strong><br />
            In precolonial Rwanda, Umuganura was the most sacred national festival — a day where communities gave thanks for the harvest and celebrated unity. Sacred rituals, offerings to the king, and symbolic acts like sharing bread (umutsima) and milk brought families, clans, and the kingdom together.
          </p>
          <p>
            Colonial powers banned the festival in 1925, eroding its spiritual and national value. But today, Umuganura is more than revived — it is restored.
          </p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div className="rowBlockAlt" style={rowBlockAlt}>
        <div>
          <img src="/images/u2.png" alt="Diaspora gathering in Morocco" className="imgStyle" />

          <p style={{ textAlign: 'center', marginTop: '0.3rem', fontStyle: 'italic' }}>
            (Ambassador Shakilla Umutoni)
          </p>
        </div>
        <div className="textStyle" style={textStyle}>
          <p>
            🌍 <strong>Global Celebrations</strong><br />
            Across the world, Rwandan communities celebrated Umuganura in 2025 — from Rabat to New York, Wuhan to Lusaka. Each gathering reflected a deep commitment to Rwandan identity, even far from home.
          </p>
          <p>
            In Morocco, Ambassador Shakilla Umutoni hosted students for traditional meals and cultural riddles. In China, over 300 gathered in Wuhan, merging Umuganura with a cultural expo. In the U.S., Rev. Emmanuel Ganza highlighted Umuganura as a call to unity and purpose.
          </p>
        </div>
      </div>

      {/* Section 3 — Image Left */}
      <div className="rowBlock" style={rowBlock}>
        <img src="/images/u3.png" alt="Children receiving milk" className="imgStyle" style={imgStyle} />

        <div className="textStyle" style={textStyle}>
          <p>
            👶 <strong>Passing on the Values</strong><br />
            Many celebrations included the symbolic sharing of milk with children — a ritual connecting the next generation to the core values of generosity, abundance, and continuity.
          </p>
          <p>
            From New Delhi to Dakar, this act reminded families that Umuganura is not only a look back — but a step forward. It is about nurturing the future with cultural confidence.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div className="rowBlockAlt" style={rowBlockAlt}>
        <img src="/images/u4.png" alt="Ambassador speeches in Lusaka" className="imgStyle" style={imgStyle} />

        <div className="textStyle" style={textStyle}>
          <p>
            🗣️ <strong>Messages from the Leaders</strong><br />
            In Zambia, Ambassador Emmanuel Bugingo reminded the diaspora that Umuganura is more than tradition — it’s a call to unity, hard work, and self-reliance. Even away from home, he said, Rwandans are expected to uphold these values and contribute meaningfully to the country’s vision.
          </p>
          <p>
            In Congo-Brazzaville, Ambassador Parfait Busabizwa emphasized gratitude and reflection — not just for harvests, but for peace, progress, and shared purpose. His message was clear: Umuganura is a moment to reconnect with our roots while looking forward with intention.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          As King Ruganzu II once said, “A Rwanda without Umuganura is no longer Rwanda.” The 2025 celebrations reaffirmed this — showing that no matter the distance, every Rwandan can draw from the same well of identity, gratitude, and purpose.
        </p>
        <p>
          May the spirit of Umuganura guide us all — from harvest to hope, from memory to mission.
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
  width: '420px', // Original dimensions preserved
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

export default Umuganura2025;
