import React, { useState, useEffect } from 'react';

const IndependenceLiberation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsiveRow = (reverse = false) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
    alignItems: 'flex-start',
    gap: '2rem',
    marginBottom: '3rem',
  });

  const responsiveImg = {
    width: isMobile ? '100%' : '420px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  const responsiveText = {
    flex: 1,
    minWidth: isMobile ? '100%' : '50%',
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}>

      {/* Intro — Full Width */}
      <div style={{ width: '100%', marginBottom: '3rem' }}>
        <p>
          🇷🇼 <strong>One Month, Two Milestones: Why July Matters in Rwanda</strong><br />
          For Rwandans, July isn’t just another month — it’s a time that brings together two defining moments in our history: Independence Day and Liberation Day. These days mark not just a change in politics, but a shift in national identity, pride, and purpose.
        </p>
        <p>
          This season reminds us of where we’ve come from and encourages us to move forward with resilience, unity, and love for our country.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div style={responsiveRow()}>
        <img src="/images/i2.png" alt="Rwanda's Independence Day 1962" style={responsiveImg} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <div style={responsiveText}>
          <p>
            🎉 <strong>July 1st — Independence Day</strong><br />
            In 1962, Rwanda officially gained independence from Belgian colonial rule. That day, the Rwandan flag flew for the first time — and with it, a new dream began. Even though life remained hard, the sense of pride was undeniable. This was the beginning of owning our story.
          </p>
          <p>
            Independence Day is a powerful reminder that freedom isn’t a finish line — it’s a foundation. One that calls for hard work, perseverance, and unity.
          </p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src="/images/i3.png" alt="Liberation Day 1994" style={responsiveImg} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <div style={responsiveText}>
          <p>
            🕊️ <strong>July 4th — Liberation Day</strong><br />
            After the 1994 Genocide against the Tutsi, Rwanda stood on the edge of total collapse. But on July 4, the Rwandan Patriotic Army ended the killings and opened the door to healing and rebuilding. It marked not only the end of the genocide against the Tutsi — but the beginning of national renewal.
          </p>
          <p>
            Liberation gave us more than safety; it gave us the strength to rebuild — to start businesses, go back to school, trust our neighbors again, and live without fear.
          </p>
        </div>
      </div>

      {/* Section 3 — Image Left */}
      <div style={responsiveRow()}>
        <img src="/images/i5.png" alt="President Kagame speech" style={responsiveImg} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <div style={responsiveText}>
          <p>
            🎙️ <strong>Words that Still Echo</strong><br />
            During the 30th Liberation celebration, President Paul Kagame said: “Liberation is not a one-time event. It is a mindset.” He called it a pact of trust — <em>igihango</em> — that binds Rwandans together in peace and purpose.
          </p>
          <p>
            His words remind us that what was fought for with sacrifice must now be protected with discipline and unity.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src="/images/i4.png" alt="Rwandan youth today" style={responsiveImg} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
        <div style={responsiveText}>
          <p>
            👥 <strong>The Youth Today</strong><br />
            As young Rwandans, we inherit more than just the result — we inherit the responsibility. Independence gave us a name; liberation gave us our heartbeat. Now, we must write the next chapter.
          </p>
          <p>
            Whether we’re coding apps, farming, or teaching — our daily acts of integrity, innovation, and unity are how we honor July.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={{ width: '100%', marginTop: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' }}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          No fireworks, no loud parties. Just purpose. July is when Rwanda remembers what it means to rise. So let’s teach our children why these days matter. Let’s honor the past, live fully in the present, and build a future rooted in unity and hope. 
        </p>
      </div>

    </div>
  );
};

export default IndependenceLiberation;
