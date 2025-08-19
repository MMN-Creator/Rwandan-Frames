import React, { useState, useEffect } from 'react';

const Kwibohora31 = () => {
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
          🇷🇼 <strong>#Kwibohora31: Rwanda’s Journey of Liberation and Renewal</strong><br />
          Every year on July 4th, Rwanda marks Liberation Day — remembering the courage and sacrifice that ended the 1994 Genocide against the Tutsi and sparked a new vision of unity, dignity, and peace.
        </p>
        <p>
          This day is both a solemn remembrance and a call to action — a commitment by every Rwandan to carry forward the legacy of freedom with purpose and responsibility.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div style={responsiveRow()}>
        <img src={process.env.PUBLIC_URL + "/images/k1.png"} alt="President Kagame speaking" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🎙️ <strong>President Kagame’s Message</strong><br />
            “This Rwanda cannot live on the whims of others,” President Paul Kagame reminded citizens. Liberation was hard-won and must never be taken for granted. He urged young people to carry the torch forward, emphasizing that freedom is a responsibility, not a gift.
          </p>
          <p>
            He emphasized, “No person with a conscience and dignity takes the life of another. It happened once, and once is already too much.”
          </p>
          <p>His words were a call to unity , reminding all Rwandans that peace and progress require active commitment. The lessons of the past are not just history—they are a guide for safeguarding the future, ensuring that the horrors once endured are never repeated.</p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src={process.env.PUBLIC_URL + "/images/k2.png"} alt="Youth gathering for Kwibohora" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            👥 <strong>The Youth Perspective</strong><br />
            Rwandan youth carry a powerful legacy of sacrifice and courage from those who fought for freedom. As Colbert Rulinda reminds us, the liberators were young people who risked everything for the nation’s survival. Today’s youth must honor that sacrifice by prioritizing the country, taking responsibility early, and actively contributing to national development.
          </p>
          <p>
            Albertine Umukunzi adds that youth have always been at the forefront—driven by idealism and courage—and that perseverance and willingness to make sacrifices are essential for continued progress. Together, their voices call on young Rwandans to embody resilience, unity, and commitment as keys to shaping Rwanda’s future.
          </p>
        </div>
      </div>

      {/* Section 3 — Image Left */}
      <div style={responsiveRow()}>
       <img src={process.env.PUBLIC_URL + "/images/k3.png"} alt="Rwandan Embassy event in Egypt" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🌍 <strong>Global Reflection and Solidarity</strong><br />
            On Kwibohora Day, Rwanda’s Ambassador to Egypt, Dan Munyuza, celebrated the nation’s journey from liberation to resilience. He highlighted Rwanda’s strong international partnerships and praised its consistent 7–8% economic growth and thriving innovation-driven economy—showing how the legacy of freedom continues to drive unity and progress.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src={process.env.PUBLIC_URL + "/images/k4.png"} alt="President Kagame at Mulindi Museum" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🛡️ <strong>The Liberation Struggle</strong><br />
            President Kagame shared candid details about the difficult path to freedom — the loss of leader Fred Rwigema, the resilience of the RPF-Inkotanyi, and the unwavering commitment despite setbacks.
          </p>
          <p>
            The National Liberation Museum in Mulindi stands as a reminder of the struggle’s challenges and triumphs, preserving the story of Rwanda’s fight for survival.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={{ width: '100%', marginTop: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' }}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          Liberation Day is not only about remembering the past — it’s a living legacy. It challenges every Rwandan to build peace, unity, and prosperity for the future. As Kagame said, “Remember this whole journey… do yourselves and your nation proud.”  
        </p>
      </div>

    </div>
  );
};

export default Kwibohora31;



