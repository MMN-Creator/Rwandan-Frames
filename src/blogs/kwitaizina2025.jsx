import React, { useState, useEffect } from 'react';

const KwitaIzina2025 = () => {
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
          🌻 <strong>#KwitaIzina2025: Honouring Rwanda’s Conservation Legacy</strong><br />
          On September 5, the foothills of Volcanoes National Park will once again come alive for Kwita Izina—Rwanda’s unique baby gorilla naming ceremony that blends tradition, conservation, and community celebration.
        </p>
        <p>
          This 20th edition marks two decades of safeguarding endangered mountain gorillas while empowering local communities and promoting eco-tourism as a pillar of sustainable development.
        </p>
      </div>

      {/* Section 1 — Image Left */}
      <div style={responsiveRow()}>
        <img src={process.env.PUBLIC_URL + "/images/kw1.png"} alt="Kwita Izina ceremony crowd" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🌍 <strong>A Legacy of Conservation</strong><br />
            Since 2005, over 395 baby gorillas have been named, and more than <strong>Rwf12.86 billion</strong> has funded 1,108 community projects. This year's ceremony will celebrate 40 baby gorillas, with 18 born in 2024 alone.
          </p>
          <p>
            These efforts have transformed Rwanda into a global model of conservation-driven development, with gorilla tourism alone contributing <strong>1% to Rwanda's GDP</strong>.
          </p>
        </div>
      </div>

      {/* Section 2 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src={process.env.PUBLIC_URL + "/images/kw2.png"} alt="First Lady Jeannette Kagame at Kwita Izina" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            👑 <strong>Message from the First Lady</strong><br />
            Jeannette Kagame reaffirmed Rwanda’s resolve: “We will not choose between prosperity and the environment. We will strive for both.”
          </p>
          <p>
            She reminded the nation that, “Nature can persist without us, but we cannot persist without it.” Her call was clear: honor nature with gratitude and protect it with urgency.
          </p>
        </div>
      </div>

      {/* Section 3 — Image Left */}
      <div style={responsiveRow()}>
        <img src={process.env.PUBLIC_URL + "/images/kw3.png"} alt="Namers with baby gorilla names" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🌟 <strong>Global Voices, Local Impact</strong><br />
            Over the years celebrity namers included <strong>Kevin Hart, Idris & Sabrina Elba, Danai Gurira</strong>, and global conservation leaders. They named gorillas with powerful meanings: <em>Gakondo</em> (Heritage), <em>Uburinganire</em> (Gender Equality), <em>Narame</em> (Longevity), and more.
          </p>
          <p>
            Their presence amplified Rwanda’s commitment to nature, people, and purpose—showcasing the balance of tradition and global collaboration.
          </p>
          <p>
            Beyond star power, their messages resonated deeply—emphasizing sustainability, unity, and respect for Rwanda’s heritage. By bridging worlds, the ceremony became more than symbolic; it turned into a global call to protect what matters most.
          </p>
        </div>
      </div>

      {/* Section 4 — Image Right */}
      <div style={responsiveRow(true)}>
        <img src={process.env.PUBLIC_URL + "/images/kw4.png"} alt="Community projects in Rwanda" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            📈 <strong>Empowering Communities</strong><br />
            More than conservation, Kwita Izina uplifts communities. This year, RDB launched a new <strong>maternity unit</strong> and a <strong>potato seed conservation facility</strong> in Nyaruguru District, improving health and agricultural resilience.
          </p>
          <p>
            Governor Maurice Mugabowagahunde noted over 5,000 agribusinesses have been supported through the revenue-sharing scheme—a testament to inclusive development.
          </p>
        </div>
      </div>

      {/* Section 5 — Image Left */}
      <div style={responsiveRow()}>
        <img src={process.env.PUBLIC_URL + "/images/kw5.png"} alt="Volcanoes National Park and tourism" style={responsiveImg} />
        <div style={responsiveText}>
          <p>
            🌏 <strong>Explore More: What to Expect in Kinigi</strong><br />
            From gorilla trekking to golden monkey tracking, Iby’iwacu Cultural Village, Musanze Caves, and luxury lodges—the region offers rich eco-tourism experiences. 
          </p>
          <p>
            Visitors can also explore the <strong>Ellen DeGeneres Campus</strong>, <strong>Dian Fossey's Tomb</strong>, and the majestic <strong>Twin Lakes of Burera & Ruhondo</strong>.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={{ width: '100%', marginTop: '3rem', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '10px' }}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          Kwita Izina is more than a ceremony; it is Rwanda’s declaration to the world: nature and humanity can thrive together. As the nation celebrates 20 years of naming gorillas, it celebrates a shared future of hope, harmony, and resilience.
        </p>
      </div>

    </div>
  );
};

export default KwitaIzina2025;

