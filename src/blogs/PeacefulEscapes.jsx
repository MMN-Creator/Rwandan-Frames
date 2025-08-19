import React from 'react';

const ReviveTheChildInYou = () => {
  return (
    <div style={containerStyle}>

      {/* Inject CSS for responsiveness */}
      <style>{`
        .rowBlock,
        .rowBlock.alt {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }
        .rowBlock.alt {
          flex-direction: row-reverse;
        }
        .textBlock {
          flex: 1;
          min-width: 50%;
        }
        .imageGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.4rem;
          flex: 1;
        }
        .imageGrid img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
        }
        .linkDesktop {
          display: inline-block;
          margin-top: 0.4rem;
          color: #b22234;
          text-decoration: none;
          font-weight: 700;
          white-space: nowrap; /* Keep on one line */
        }
        .linkMobile {
          display: none;
          margin-top: 0.4rem;
          color: #b22234;
          text-decoration: none;
          font-weight: 700;
          width: 100%;
          text-align: left;
          white-space: nowrap;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
          .rowBlock,
          .rowBlock.alt {
            flex-direction: column;
            text-align: left;
          }
          .textBlock {
            order: 1;
            width: 100%;
            text-align: left;
          }
          .imageGrid {
            order: 2;
            grid-template-columns: repeat(2, 1fr); /* Keep 2×2 layout */
            width: 100%;
          }
          .imageGrid img {
            height: 160px;
          }
          .linkDesktop {
            display: none;
          }
          .linkMobile {
            display: block;
          }
        }
        @media (max-width: 480px) {
          .imageGrid {
            grid-template-columns: 1fr;
          }
          .imageGrid img {
            height: 140px;
          }
        }
      `}</style>

      {/* Intro */}
      <div style={fullWidthBlock}>
        <p>
          🎯 <strong>Revive the Child in You — Fun & Play Across Rwanda</strong><br />
          Sometimes, the best way to recharge isn’t through rest — it’s through play. Rwanda’s recreation hubs invite you to laugh louder, move freely, and rediscover that joyful spark we often leave behind in childhood. From thrilling games to splashes of water and pure adrenaline, here’s where the fun lives.
        </p>
      </div>

      {/* Section 1 — Kigali Universe */}
      <div className="rowBlock">
        <div className="imageGrid">
          <img src={process.env.PUBLIC_URL + "/images/ku1.png"} alt="Kigali Universe" />
<img src={process.env.PUBLIC_URL + "/images/ku2.png"} alt="Kigali Universe" />
<img src={process.env.PUBLIC_URL + "/images/ku3.png"} alt="Kigali Universe" />
<img src={process.env.PUBLIC_URL + "/images/ku4.png"} alt="Kigali Universe" />

        </div>
        <div className="textBlock">
          <p>
            🕹️ <strong>Kigali Universe — Kigali</strong><br />
            An arcade paradise right in the heart of the city. Kigali Universe is where the lights flash, the games buzz, and friendly competition fills the air. From racing simulators to basketball hoops, it’s a place where time disappears in the best way.
          </p>
          <p>
            Whether you’re here with friends or flying solo, the mix of old-school arcade charm and modern gaming keeps the energy high and the smiles wide.
            Right in the vibrant Kigali city, it brings people together for game nights, watching matches together and even host friendly competitions.
          </p>
        </div>
      </div>

      {/* Section 2 — Simba Centre */}
      <div className="rowBlock alt">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/sc1.png"} alt="Simba Centre" />
<img src={process.env.PUBLIC_URL + "/images/sc2.png"} alt="Simba Centre" />
<img src={process.env.PUBLIC_URL + "/images/sc3.png"} alt="Simba Centre" />
<img src={process.env.PUBLIC_URL + "/images/sc4.png"} alt="Simba Centre" />

        </div>
        <div className="textBlock">
          <p>
            🎳 <strong>Simba Centre — Kigali</strong><br />
            Bowling lanes, pool tables, and the hum of friendly competition make Simba Centre a go-to spot for group fun. It’s as much about the games as it is about the lively, welcoming vibe that keeps you coming back.
          </p>
          <p>
            With its central location and all-ages atmosphere, it’s a perfect pick for weekend hangouts or after-work unwinding. As evening falls, the ground-level fountains spring to life at 6 pm, with kids laughing and darting through the water. From its rooftop perch, the city lights spread out below, making nights here as magical as the days.
          </p>
        </div>
      </div>

      {/* Section 3 — Acacus */}
      <div className="rowBlock">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/ac1.png"} alt="Acacus Kigali" />
<img src={process.env.PUBLIC_URL + "/images/ac2.png"} alt="Acacus Kigali" />
<img src={process.env.PUBLIC_URL + "/images/ac3.png"} alt="Acacus Kigali" />
<img src={process.env.PUBLIC_URL + "/images/ac4.png"} alt="Acacus Kigali" />

        </div>
        <div className="textBlock">
          <p>
            🎯 <strong>Acacus — Kigali</strong><br />
            Known for its vibrant game setups and playful energy, Acacus is a haven for anyone wanting a break from routine. Whether you’re diving into interactive games or just enjoying the upbeat space, it’s a reminder that fun is a serious business.
          </p>
          <p>
            The go-kart track adds an extra rush of excitement, letting both kids and adults feel the thrill of the race. Laughter fills the air as children light up with energy and friends cheer each other on. It’s a place where you can break free from routine, share in the fun, and leave with stories worth retelling.
          </p>
        </div>
      </div>

      {/* Section 4 — Bambino */}
      <div className="rowBlock alt">
        <div className="imageGrid">
          <img src={process.env.PUBLIC_URL + "/images/ba1.png"} alt="Bambino Amusement Park" />
<img src={process.env.PUBLIC_URL + "/images/ba2.png"} alt="Bambino Amusement Park" />
<img src={process.env.PUBLIC_URL + "/images/ba3.png"} alt="Bambino Amusement Park" />
<img src={process.env.PUBLIC_URL + "/images/ba4.png"} alt="Bambino Amusement Park" />

        </div>
        <div className="textBlock">
          <p>
            🎠 <strong>Bambino Amusement Park — Kigali</strong><br />
            A classic in Kigali’s recreation scene, Bambino is where roller coasters meet laughter-filled playgrounds. Families, friends, and couples alike find something to enjoy here, from merry-go-rounds to mini-trains.
          </p>
          <p>
            The open-air setting makes it perfect for a day out under Rwanda’s beautiful skies. As children’s laughter echoes and rides whirl in the background, Bambino feels like a slice of pure, carefree joy — a place where fun is timeless and memories are made effortlessly.
          </p>
        </div>
      </div>

      {/* Section 5 — Summer Palace Rwanda */}
      <div className="rowBlock">
        <div className="imageGrid">
        <img src={process.env.PUBLIC_URL + "/images/sp1.png"} alt="Summer Palace Rwanda" />
<img src={process.env.PUBLIC_URL + "/images/sp2.png"} alt="Summer Palace Rwanda" />
<img src={process.env.PUBLIC_URL + "/images/sp3.png"} alt="Summer Palace Rwanda" />
<img src={process.env.PUBLIC_URL + "/images/sp4.png"} alt="Summer Palace Rwanda" />

        </div>
        <div className="textBlock">
          <p>
            💦 <strong>Summer Palace Rwanda — Kigali</strong><br />
            Think giant water slides, cool pools, and the sound of pure joy. Summer Palace is Rwanda’s ultimate water park experience, perfect for hot days or just letting loose in the most refreshing way possible.
          </p>
          <p>
            Whether you’re zipping down slides or lounging poolside, this is where the city’s playful side truly comes to life. 
          </p>
          <p>
            From the thrill-seekers racing to the bottom to families sharing slow moments in the shallow pools, Summer Palace offers a refreshing escape that’s as lively as it is unforgettable.
          </p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          Play has no age limit — and these places prove it. In Rwanda, fun is for the young at heart, the curious, and anyone ready to swap their to-do list for a to-play list. We’ve only named a few — from game hubs to water parks — but there’s more out there: Fazenda, hidden corners, and gems yet to be found. Keep exploring, keep playing — the joy never stops.
        </p>
      </div>
    </div>
  );
};

// Base inline styles
const containerStyle = { padding: '2rem', fontFamily: "'Montserrat', sans-serif", lineHeight: '1.6', color: '#333' };
const fullWidthBlock = { width: '100%', marginBottom: '1.5rem' };
const finalParagraphStyle = { marginTop: '2rem', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', color: '#333' };

export default ReviveTheChildInYou;

