import React, { useState, useEffect } from 'react';

const BALNewSeason = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sectionStyle = (reverse = false) => ({
    display: 'flex',
    flexDirection: isMobile ? 'column' : reverse ? 'row-reverse' : 'row',
    gap: '1.5rem',
    marginBottom: '3rem',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  });

  const leftColumnStyle = { display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 };

  const bigImageStyle = {
    width: isMobile ? '100%' : '420px',
    height: isMobile ? 'auto' : '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    alignSelf: 'stretch',
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Montserrat, sans-serif', lineHeight: '1.6' }}>

      {/* Intro Section */}
      <div style={fullWidthBlock}>
        <p>
          🏀 <strong>The 2025 BAL Season: Africa’s Game on a Global Stage</strong><br />
          Hosted once again by Rwanda, the Basketball Africa League (BAL) brought its 2025 season to life with world-class competition, breathtaking energy, and a spotlight on rising African talent.
        </p>
        <p>
          🇷🇼 Rwanda continues to cement its place as a basketball hub, having hosted major BAL moments including key games and cultural events that lit up Kigali — proving the country’s growing impact on the sport.
        </p>
      </div>

      {/* Section 1 — APR Wins 3rd Place */}
      <div style={sectionStyle()}>
        <div style={leftColumnStyle}>
          <p>
            🥉 <strong>APR Makes History</strong><br />
            Rwanda’s own APR finished third in the 2025 BAL season after a dominant 123–90 win against Al Ittihad Alexandria — setting a record for the highest number of points scored in a single BAL game.
          </p>
          <p>
            The win was not just a medal — it was a statement. Rwanda isn't just hosting — it's competing at the highest level.
          </p>
        </div>
        <img src="/images/b2.png"alt="APR winning moment" style={bigImageStyle} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
      </div>

      {/* Section 2 — League Momentum */}
      <div style={sectionStyle(true)}>
        <div style={leftColumnStyle}>
          <p>
            🌍 <strong>From Tip-Off to Turn-Up</strong><br />
            The 2025 BAL season featured intense matchups, vibrant courtside culture, and energetic crowds. From Kigali to Pretoria, basketball lovers witnessed a celebration of African excellence.
          </p>
          <p>
            The league’s growing visibility, global partnerships, and talented rosters continue to bridge continents through sport.
          </p>
        </div>
        <img src="/images/b4.png" alt="BAL court action" style={bigImageStyle} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
      </div>

      {/* Section 3 — Finals Recap */}
      <div style={sectionStyle()}>
        <div style={leftColumnStyle}>
          <p>
            🏆 <strong>The Grand Finale</strong><br />
            The championship game took place on June 14, 2025, at the SunBet Arena in Pretoria, South Africa — marking the first time the finals were held there. Al Ahli Tripoli were the 2025 BAL Champions.
          </p>
          <p>
            While APR clinched third, the finals showcased the very best of African basketball — skill, speed, and passion.
          </p>
        </div>
        <img src="/images/b5.png" alt="Fans in the stadium" style={bigImageStyle} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />

      </div>

      {/* Section 4 — Cultural Fusion */}
      <div style={sectionStyle(true)}>
        <div style={leftColumnStyle}>
          <p>
            🎶 <strong>Basketball Meets Culture</strong><br />
            As part of the season’s cultural celebration, Kigali played host to music nights, panel discussions, and fan events blending sport and identity. Singers such as King Promise performed at this year's BAL season, and he didn't just perform, he owned the stage, setting a vibrant energy for the season, full of good vibes.
          </p>
          <p>
            The BAL isn’t just a league — it’s a festival of talent and culture, and Rwanda continues to be its beating heart.
          </p>
        </div>
        <img src="/images/b6.png" alt="Concert at BAL Kigali" style={bigImageStyle} onError={(e) => { e.target.src = `${process.env.PUBLIC_URL}/images/rwa4.jfif`; }} />
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          🌟 <strong>Final Frame</strong><br />
          Rwanda's performance on and off the court during the 2025 BAL season reflects its growing legacy in African sports. From APR’s record-setting win to hosting unforgettable moments — the country is proving it’s not just a venue, but a vital voice in shaping basketball’s future.
        </p>
      </div>

    </div>
  );
};

// Styles
const fullWidthBlock = { width: '100%', marginBottom: '3rem' };
const finalParagraphStyle = { width: '100%', marginTop: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' };

export default BALNewSeason;
