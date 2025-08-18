import React, { useState, useEffect } from 'react';

const ZoeWellness = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>

      {/* Intro Full Width */}
      <div style={fullWidthBlock}>
        <p>
          🌟 <strong>Zoe Wellness Studio: Where Wellness Meets Women’s Power</strong><br />
          Officially launched in <strong>June 2025</strong>, Zoe Wellness Studio is Kigali’s newest sanctuary for Pilates, aerial yoga, and women’s empowerment. Founded by <strong>Celine Umurerwa</strong>, the studio brings movement, mindfulness, and sisterhood into harmony.
        </p>
        <p>
          🇷🇼 Located at KG 203 Street, next to Neo Café in Kibagabaga, Zoe is a wellness space designed for women — blending breath, body, and belief. And yes, "Zoe" means "life" in Greek — a reminder that healing is a lifestyle.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div style={{ ...blockAlt, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            🌿 <strong>Aerial Yoga & Reformer Pilates</strong><br />
            From mat to hammock, Zoe offers <strong>Reformer Pilates</strong>, aerial yoga in silk hammocks, and calming breathwork sessions. Their classes improve strength, posture, confidence — and community.
          </p>
          <p>
            It’s where movement becomes medicine, and grace meets grit.
          </p>
        </div>
       <img src="/images/zo1.png" alt="Studio interior with aerial hammocks" style={responsiveImage} />

      </div>

      {/* Section 2 — Image Right */}
      <div style={{ ...block, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            🎉 <strong>Opening Night: Community & Calm</strong><br />
            On <strong>June 27, 2025</strong>, Zoe’s soft opening drew in Kigali’s wellness lovers — with music, mats, and meaning. Friends flowed through Pilates routines and celebrated new beginnings.
          </p>
          <p>
            The vibe? Peaceful yet powerful. A safe space to sweat, stretch, and reconnect.
          </p>
        </div>
        <img src="/images/zo2.png" alt="Opening class with women group" style={responsiveImage} />

      </div>

      {/* Section 3 — Founder */}
      <div style={{ ...blockAlt, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            🧘‍♀️ <strong>Meet the Founder: Celine Umurerwa</strong><br />
            After experiencing the transformative power of Pilates in her own life, <strong>Celine</strong> founded Zoe to help women discover strength, softness, and soul through movement. Her motto? "Healing is a journey — and we walk it together."
          </p>
          <p>
            Her vision extends beyond physical fitness — Celine aims to create a space where women feel empowered, supported, and connected. Through every class and session, she nurtures not just the body, but the mind and spirit, fostering confidence, balance, and a renewed sense of self.
          </p>
        </div>
        <img src="/images/zo3.png" alt="Instructor guiding wellness class" style={responsiveImage} />
      </div>

      {/* Section 4 — Image Right */}
      <div style={{ ...block, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            💪 <strong>Real Friends Do Pilates</strong><br />
            Zoe’s community keeps growing through themed group sessions and workshops. It’s a place where women cheer each other on, try new things, and build inner strength that lasts long after the class ends.
          </p>
          <p>
            On social media, their mantra echoes loud: <em>#StrongGracefulWomen</em>.
          </p>
        </div>
        <img src="/images/zo4.png" alt="Group class showing unity" style={responsiveImage} />

      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          🌸 <strong>Final Frame</strong><br />
          Zoe Wellness Studio isn’t just a studio — it’s a story. A soft space with a strong heartbeat. Whether you’re in it for the stretches, the stillness, or the sisterhood, Zoe reminds Kigali’s women that life is better when we move together.
        </p>
      </div>

    </div>
  );
};

// Styles
const containerStyle = { padding: '2rem', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.6 };
const fullWidthBlock = { width: '100%', marginBottom: '2rem' };
const block = { display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' };
const blockAlt = { display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'flex-start' };
const textStyle = { flex: 1, minWidth: '50%' };
const responsiveImage = { width: '100%', maxWidth: '420px', height: 'auto', objectFit: 'cover', borderRadius: '10px' };
const finalParagraphStyle = { width: '100%', marginTop: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' };

export default ZoeWellness;


