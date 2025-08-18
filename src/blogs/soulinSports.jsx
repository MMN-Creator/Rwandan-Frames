import React, { useState, useEffect } from 'react';

const SoulInSports = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>

      {/* Intro — Full Width */}
      <div style={fullWidthBlock}>
        <p>
          🏀 <strong>The Soul in Sports: What Movement Teaches Us</strong><br />
          This summer, Rwanda stood tall — not just in arenas, but in spirit. Sports revealed themselves not only as games, but as metaphors. For growth. For unity. For dreaming beyond borders. In courts and camps, something deeper echoed: movement teaches us who we are becoming.
        </p>
      </div>

      {/* Section 1 */}
      <div style={{ ...blockAlt, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            🌱 <strong>Bigger Than Basketball</strong><br />
            
          </p>
          <p>
           Giants of Africa is living proof: 320 campers, 20 nations, and the quiet presence of LA Clippers star <strong>Kawhi Leonard</strong>. But the true magic wasn’t in the spotlight — it was in the shift of mindset. A new vision for youth emerged: to believe, to build, to lead — not just on the court, but far beyond it.

Kawhi’s visit reminded us that real confidence begins within — it’s not shaped by applause, nor dependent on approval. As he once said:

“I like being the underdog so they don't expect what's going to happen. It pushes me to work harder and do the things I'm not doing better.”
          </p>
        </div>
       <img src="/images/s5.png" alt="Coach encouraging players at GOA" style={responsiveImage} />

      </div>

      {/* Section 2 */}
      <div style={{ ...block, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            🎖️ <strong>APR’s Grit, MVP’s Glory</strong><br />
            <strong>APR Basketball Club</strong> stormed into third place with poise and pride in the BAL 2025 season. Their rise is a story of self-belief — and a mirror for a nation that refuses to settle. In a field dominated by bigger names and international rosters, APR showed that grit, discipline, and homegrown unity can still shake the table. Their bronze is Rwanda’s badge of resilience. They’re not just playing the game — they’re raising the bar for what local talent can do on continental stages.
          </p>
        </div>
       <img src="/images/s6.png" alt="APR Basketball celebrating" style={responsiveImage} />

      </div>

      {/* Section 3 */}
      <div style={{ ...blockAlt, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            🚴 <strong>Rolling Inspiration</strong><br />
           Rwandan referee Alice Umutesi is redefining what it means to rise in the world of sports. Selected to officiate at the FIFA U17 Women’s World Cup, she has shown that dedication and courage can carry Rwandans—and Africans—onto the global stage. 
          </p>
          <p>Following her twin sister Aline Umutoni, Alice carries a legacy of resilience—showing Rwandans, especially young girls, that sports can be a stage for leadership and hope.</p>
         <p>
          Her journey reminds us that the soul of sports is more than competition; it is inspiration. It is proof that when one Rwandan rises, an entire generation sees new possibilities.
         </p>
        </div>
        <img src="/images/s2.png" alt="Youth unity at GOA camp" style={responsiveImage} />

      </div>

      {/* Section 4 */}
      <div style={{ ...block, flexDirection: isMobile ? 'column' : 'row' }}>
        <div style={textStyle}>
          <p>
            🏗️ <strong>When Cities Move, So Do Futures</strong><br />
            “Sport is not a distraction from development, but a dynamic catalyst for it.” — <em>President Kagame</em><br />
            From BK Arena, to the revamped Amahoro Stadium, to Zaria Court, Rwanda is no longer asking “if” it should invest in sport. It is leading. Investing. Building stages before scouting stars — so that stars will come.
          </p>
          <p>
            “Sports should be an economic priority for every country,” said <strong>Clare Akamanzi</strong>, CEO of NBA Africa. “If you're not putting sports at the center of your economic growth, then you're already playing from behind.”
          </p>
        </div>
       <img src="/images/s3.png" alt="Kigali skyline near Zaria Court" style={responsiveImage} />

      </div>

      {/* Section 5 */}
      <div style={{ ...blockAlt, flexDirection: isMobile ? 'column' : 'row-reverse' }}>
        <div style={textStyle}>
          <p>
            💬 <strong>Voices of Vision</strong><br />
            “My mom used to pull my ear and ask, ‘Will basketball feed you?’ It’s feeding a whole lot of people now.” — <em>Masai Ujiri</em><br /><br />
            Ujiri’s mission is clear: build ecosystems, not just events. Create jobs, not just highlights. Lift cities, not just teams. As he said: “We can all support each other and even make ourselves bigger.”
          </p>
        </div>
        <img src="/images/s4.png" alt="Zaria Court event launch" style={responsiveImage} />

      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          “Courts create communities. Venues create value. Ecosystems create economies.” — <em>Masai Ujiri</em><br /><br />
          “I may not be good at sports or business, but I’ve learned how to support those who are and create the conditions for them to succeed.” — <em>President Paul Kagame</em><br /><br />
          In Rwanda, sport is no longer just a game. It’s a movement, a ministry, a model for how the continent can grow. From humble courts to global stages, the lesson is clear: believe, build, and run your race.
        </p>
      </div>

    </div>
  );
};

// Styles
const containerStyle = { padding:'2rem', fontFamily:'Montserrat, sans-serif', lineHeight:1.6 };
const fullWidthBlock = { width:'100%', marginBottom:'2rem' };
const block = { display:'flex', gap:'2rem', marginBottom:'2rem', alignItems:'flex-start' };
const blockAlt = { display:'flex', gap:'2rem', marginBottom:'2rem', alignItems:'flex-start' };
const textStyle = { flex:1, minWidth:'50%' };
const responsiveImage = { width:'100%', maxWidth:'420px', height:'auto', objectFit:'cover', borderRadius:'10px' };
const finalParagraphStyle = { width:'100%', marginTop:'3rem', backgroundColor:'#f9f9f9', padding:'2rem', borderRadius:'10px' };

export default SoulInSports;

