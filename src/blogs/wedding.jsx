import React from 'react';

const WeddingSeason = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Montserrat', lineHeight: '1.6' }}>
      <p>
        💍 <strong>Love Season 2025: Weddings That Broke the Mold in Rwanda</strong><br />
        This year, Rwanda’s weddings weren’t just about vows — they were about <em>vibes</em>. From all-white elegance to surprise engagements, love was truly in the air.
      </p>

      <div style={sideBySideWrapper}>
       <img src={process.env.PUBLIC_URL + "/images/weddingcover.png"} alt="Rwandan wedding scene" style={imgStyleSide} />
<img src={process.env.PUBLIC_URL + "/images/dancingwed.png"} alt="Wedding guests dancing" style={imgStyleSide} />

      </div>

      <p>
        Let’s take a scroll through the standouts. Some we expected. Some, we <em>did not</em> see coming.
      </p>
      <p>
        There was drama, joy, couture, and real moments that had us talking for days.
      </p>

      {/* 1. Musemakweri & Bonnette */}
      <h3>✨ <strong>1. Musemakweri & Bonnette: The Comeback Wedding</strong></h3>
      <p>
        Married back in 2020 under COVID lockdown, their first wedding was quiet. This time? It was a full-on masterpiece.
      </p>
      <div style={imgGrid}>
      <img src={process.env.PUBLIC_URL + "/images/bonette6.png"} alt="Bonnette in all-white dress" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/allwhite.png"} alt="Indina attire moment" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/bonette3.png"} alt="Black dress reception vibe" style={imgStyleGrid} />

      </div>

      <p>
        All-white theme. Indina outfits for gusaba. And a black-dress grand finale. It was bold, beautiful, and absolutely worth the wait.
      </p>

      {/* 2. Vestine & Idrissa */}
      <h3>🎤 <strong>2. Vestine & Idrissa: A Love Rooted in Worship</strong></h3>
      <p>
        Gospel singer Vestine officially wed Idrissa Ouedraogo, decided to go beyond their civil wedding that took place at the start of the year. They had their religious ceremony and traditional ceremony during summer, and it was beautiful.
      </p>
      <div style={imgGrid}>
       <img src={process.env.PUBLIC_URL + "/images/vestine2.png"} alt="Vestine civil ceremony" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/vestine3.png"} alt="Engagement behind-the-scenes" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/vestine4.png"} alt="Bridal shower magic" style={imgStyleGrid} />

      </div>

      <p>
        Their earlier engagement was private — no cameras, just intention. Their wedding later bloomed into a vibrant celebration filled with joy, music, and faith.
      </p>

      <p>
        “He’s not just my husband,” she said. “He’s my home, my sanctuary, my peace.”  
        We felt that.
      </p>

      {/* 3. Kathia & Adonis */}
      <h3>💌 <strong>3. Kathia & Adonis: The Love That Was Meant</strong></h3>
      <p>
        They’re saying "I do" on September 5, 2025. A love story that silences the critics.
      </p>
      <div style={imgGrid}>
       <img src={process.env.PUBLIC_URL + "/images/kathia1.png"} alt="Kathia and Adonis engagement" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/kathia2.png"} alt="Soft moments" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/kathia3.png"} alt="Save the date vibes" style={imgStyleGrid} />

      </div>

      <p>
        Yes — it's not her first engagement. And yes — that doesn't matter. Because this one? It’s real. It’s grounded. It’s God’s better plan.
      </p>

      {/* 4. Miss Maolithia & Cedric */}
      <h3>💍 <strong>4. Miss Maolithia & Cedric: Fit for Forever</strong></h3>
      <p>
        On August 2, 2025, she said yes to her fitness coach Cedric. “Forever begins with yes,” she captioned.
      </p>
      <div style={imgGrid}>
       <img src={process.env.PUBLIC_URL + "/images/maolithia1.png"} alt="The ring moment" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/maolithia2.png"} alt="Engagement celebration" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/maolithia3.png"} alt="Couple glow" style={imgStyleGrid} />

      </div>

      <p>
        We love the balance they bring — strength, softness, and a shared drive.
      </p>

      {/* 5. Negrita & the Unknown Fiancé */}
      <h3>🤫 <strong>5. Negrita: The Surprise Engagement</strong></h3>
      <p>
        The internet didn’t even see this coming. On Josine’s first podcast on Moments with Jo, she had joked saying that she wasn’t even dating anyone.
      </p>
      <div style={imgGrid}>
      <img src={process.env.PUBLIC_URL + "/images/Picture47.png"} alt="Podcast moment" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/Picture48.png"} alt="Soft glow-up moment" style={imgStyleGrid} />
<img src={process.env.PUBLIC_URL + "/images/Picture49.png"} alt="Engagement mystery" style={imgStyleGrid} />

      </div>

      <p>
        So when she showed up <em>engaged</em>, fans were like: hold up. Was it rushed? Was she pretending? Or was God just working quietly?
      </p>

      <p>
        Either way, it’s giving “divine detour.” And we’re watching this one.
      </p>

      <p>
        🌿 <strong>Why These Stories Matter</strong><br />
        These couples aren’t just trending — they’re choosing purpose, resilience, and joy. Their paths are different, but one thread runs through them all: 
        Love that’s real, raw, and rooted in something deeper.
      </p>

      <p>
        💫 <strong>Final Frame</strong><br />
        Whether it was black dresses or no photos allowed — these weddings gave us everything and the ones yet to be celebrated aren't just expected to be everything but mostly authentic.
      </p>
    </div>
  );
};

const sideBySideWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1.5rem',
  marginBottom: '2rem'
};

const imgStyleSide = {
  width: '48%',
  height: '340px',
  objectFit: 'cover',
  borderRadius: '10px'
};

const imgGrid = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '1rem',
  margin: '1.5rem 0'
};

const imgStyleGrid = {
  flex: '1',
  maxWidth: '32%',
  height: '380px', // slightly higher for the drama
  objectFit: 'cover',
  borderRadius: '10px'
};
export default WeddingSeason;
