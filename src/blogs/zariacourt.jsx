import React, { useState, useEffect } from 'react';

const ZariaCourt = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sideBySideStyle = (reverse = false) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
    gap: '2rem',
    marginBottom: '3rem',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  });

  const leftColumn = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const responsiveImage = {
    width: isMobile ? '100%' : '420px', // keep original width on desktop
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    alignSelf: 'stretch',
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}>
      
      {/* Intro — Full Width */}
      <div style={{ width: '100%', marginBottom: '3rem' }}>
        <p>
          🌟 <strong>Zaria Court Kigali: Where Basketball Meets Culture</strong><br />
          Officially unveiled on <strong>July 28, 2025</strong>, Zaria Court Kigali is the first flagship venue from <strong>Zaria Group</strong> — co‑founded by <strong>Masai Ujiri</strong> and supported by the Rwandan government.
        </p>
        <p>
          🇷🇼 Located beside Amahoro Stadium and BK Arena, this $26M mixed-use space blends sport, culture, hospitality, and youth entrepreneurship into a single vibrant ecosystem. It’s Rwanda’s bold step into the future of sport-led community development.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div style={sideBySideStyle(true)}>
       <img src={process.env.PUBLIC_URL + "/images/z1.png"} alt="Zaria Court facade" style={responsiveImage} />

        <div style={leftColumn}>
          <p>
            🎨 <strong>Turning History Into Hope</strong><br />
            What was once a former UN COVID‑19 logistics site is now a creative hub. Led by Masai Ujiri and the Rwanda Development Board (RDB), Zaria Court features a public basketball court, boutique hotel, coworking spaces, art installations, and retail containers — all designed by NLÉ architects.
          </p>
          <p>
            It’s a transformation from concrete to culture — reimagining what a public space can be for youth and the future of Kigali.
          </p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div style={sideBySideStyle()}>
        <div style={leftColumn}>
          <p>
            🎉 <strong>Launch Night with Giants</strong><br />
            On <strong>July 28, 2025</strong>, <strong>President Paul Kagame</strong> and <strong>Masai Ujiri</strong> officially opened Zaria Court in Remera. Ujiri described it as “a place where African excellence takes center stage.” President Kagame praised the project for empowering youth, promoting creativity, and building community.
          </p>
        </div>
       <img src={process.env.PUBLIC_URL + "/images/g22.png"} alt="Opening ceremony crowd" style={responsiveImage} />

      </div>

      {/* Section 3 — Image Left */}
      <div style={sideBySideStyle(true)}>
       <img src={process.env.PUBLIC_URL + "/images/z3.png"} alt="Public court & community" style={responsiveImage} />

        <div style={leftColumn}>
          <p>
            🏗️ <strong>Designed for People</strong><br />
            The space now employs over <strong>500 youth and women entrepreneurs</strong> through event programming, creative workshops, and business incubators. It’s a living campus of opportunity — reflecting Rwanda’s commitment to inclusive urban development.
          </p>
          <p>
            Whether you're playing pickup basketball or launching a new startup, Zaria Court is built for everyday Rwandans with big dreams.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div style={sideBySideStyle()}>
        <div style={leftColumn}>
          <p>
            🌍 <strong>Giants of Africa’s Global Blueprint</strong><br />
            Zaria Court was also featured in the <strong>Giants of Africa Festival 2025</strong> — serving not just as a venue but a vision of what’s possible when sports, design, and purpose align. Ujiri plans to replicate the Zaria model in other African countries by 2030.
          </p>
        </div>
        <img src={process.env.PUBLIC_URL + "/images/z4.png"} alt="Container retail and lounge" style={responsiveImage} />

      </div>

      {/* Final Frame */}
      <div style={{
        width: '100%',
        marginTop: '3rem',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
      }}>
        <p>
          🌱 <strong>Final Frame</strong><br />
          Zaria Court Kigali isn’t just architecture — it’s aspiration. Built with vision, led by giants, and loved by the community, it stands as Rwanda’s new intersection of sports, culture, and opportunity. The future is wide open.  
        </p>
      </div>
    </div>
  );
};

export default ZariaCourt;


