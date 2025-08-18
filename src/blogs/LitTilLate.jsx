import React from "react";

const FineDiningKigali = () => {
  return (
    <div style={containerStyle}>
      {/* Inject responsive CSS */}
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
          white-space: nowrap;
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
            grid-template-columns: repeat(2, 1fr);
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
          🍽️ <strong>Fine Dining in Kigali: Elegance, Flavors & Unforgettable Nights</strong>
          <br />
          From sophisticated rooftops to vibrant culinary havens, Kigali's fine dining scene
          offers exquisite flavors and elegant atmospheres where the night truly belongs to you.
          Join us as we explore five top restaurants that celebrate taste, style, and unforgettable experiences.
        </p>
      </div>

      {/* Section 1 — Lilly Fine Dining */}
      <div className="rowBlock">
        <div className="imageGrid">
          <img src="/images/lily1.png" alt="Lilly Fine Dining" />
          <img src="/images/lily2.png" alt="Lilly Fine Dining" />
          <img src="/images/lily3.png" alt="Lilly Fine Dining" />
          <img src="/images/lily4.png" alt="Lilly Fine Dining" />
          <a href="https://lilly-rwanda.com/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🌆 Visit Lilly Fine Dining
          </a>
        </div>
        <div className="textBlock">
          <p>🌆 <strong>Lilly Fine Dining</strong></p>
          <p>Perched atop one of Kigali’s tallest buildings, Lilly offers breathtaking panoramic views of the city skyline. The floor-to-ceiling windows bathe the room in evening light, turning every meal into a celebration.</p>
          <p>Here, artful dishes crafted with passion meet impeccable service — a place where every bite feels like a love letter to your palate. The sophisticated vibe invites romance, laughter, and moments you’ll cherish forever.</p>
          <p>Whether it's an intimate dinner or a festive gathering, Lilly sets the scene for unforgettable memories framed by the glittering cityscape.</p>
          <a href="https://lilly-rwanda.com/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🌆 Visit Lilly Fine Dining
          </a>
        </div>
      </div>

      {/* Section 2 — Rua Restaurant */}
      <div className="rowBlock alt">
        <div className="imageGrid">
          <img src="/images/rua1.png" alt="Rua Restaurant" />
<img src="/images/rua2.png" alt="Rua Restaurant" />
<img src="/images/rua3.png" alt="Rua Restaurant" />
<img src="/images/rua4.png" alt="Rua Restaurant" />

          <a href="https://rua.rw/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🌟 Visit Rua Restaurant
          </a>
        </div>
        <div className="textBlock">
          <p>🌟 <strong>Rua Restaurant</strong></p>
          <p>Rua charms with its warm, sophisticated ambiance and a menu that showcases Rwanda’s rich culinary heritage elevated by a modern touch. Every dish is a carefully balanced masterpiece, inviting you to savor the country’s freshest flavors.</p>
          <p>Pair your meal with a cup of CAFERWA coffee or a handcrafted cocktail to complete the experience. Rua’s intimate setting is perfect for meaningful conversations and shared moments.</p>
          <p>Here, passion for food meets heartfelt hospitality — making every visit feel like coming home.</p>
          <a href="https://rua.rw/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🌟 Visit Rua Restaurant
          </a>
        </div>
      </div>

      {/* Section 3 — Pinnacle Kigali */}
      <div className="rowBlock">
        <div className="imageGrid">
          <img src="/images/pin1.png" alt="Pinnacle Kigali" />
<img src="/images/pin2.png" alt="Pinnacle Kigali" />
<img src="/images/pin3.png" alt="Pinnacle Kigali" />
<img src="/images/pin4.png" alt="Pinnacle Kigali" />

          <a href="https://www.thepinnaclekigali.com/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            ✨ Visit Pinnacle Kigali
          </a>
        </div>
        <div className="textBlock">
          <p>✨ <strong>The Pinnacle Kigali</strong></p>
          <p>Rising high above Kigali, Pinnacle is more than just a restaurant — it’s a destination. Its sleek, modern design pairs with sweeping city views that dazzle as the sun sets and the lights come alive.</p>
          <p>The menu is a refined fusion of global flavors with local ingredients, creating dishes that surprise and delight with every bite. The chic, elegant atmosphere makes it ideal for celebrations, business dinners, or simply indulging in the finer things.</p>
          <p>At Pinnacle, every detail is crafted to elevate your dining into an experience of pure delight.</p>
          <a href="https://www.thepinnaclekigali.com/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            ✨ Visit The Pinnacle Kigali
          </a>
        </div>
      </div>

      {/* Section 4 — Khana Kazana */}
      <div className="rowBlock alt">
        <div className="imageGrid">
          <img src="/images/kk1.png" alt="Khana Kazana" />
<img src="/images/kk2.png" alt="Khana Kazana" />
<img src="/images/kk3.png" alt="Khana Kazana" />
<img src="/images/kk4.png" alt="Khana Kazana" />

          <a href="https://khanakhazana.rw/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🍛 Visit Khana Kazana
          </a>
        </div>
        <div className="textBlock">
          <p>🍛 <strong>Khana Kazana</strong></p>
          <p>This culinary jewel marries authentic Indian spices with subtle African touches, crafting a flavorful and aromatic dining journey. Each dish is a celebration of rich heritage, prepared with love and care.</p>
          <p>Warm hospitality, elegant presentation, and a welcoming atmosphere make Khana Kazana a favorite for those craving bold, comforting flavors in a refined setting.</p>
          <p>It's where every meal feels like a festive celebration of taste and tradition.</p>
          <a href="https://khanakhazana.rw/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🍛 Visit Khana Kazana
          </a>
        </div>
      </div>

      {/* Section 5 — Kozo Restaurant */}
      <div className="rowBlock">
        <div className="imageGrid">
         <img src="/images/ko1.png" alt="Kozo Restaurant" />
<img src="/images/ko2.png" alt="Kozo Restaurant" />
<img src="/images/ko3.png" alt="Kozo Restaurant" />
<img src="/images/ko4.png" alt="Kozo Restaurant" />

          <a href="https://www.kozogh.com/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🌿 Visit Kozo Restaurant
          </a>
        </div>
        <div className="textBlock">
          <p>🌿 <strong>Kozo Restaurant</strong></p>
          <p>Nestled within a lush garden setting, Kozo offers a serene escape from the city buzz. Its farm-to-table philosophy shines through in every dish, bursting with freshness and creativity.</p>
          <p>The cozy yet sophisticated vibe invites you to unwind while indulging in a menu inspired by Rwanda’s natural bounty, paired with carefully selected wines and cocktails.</p>
          <p>Kozo is a sanctuary where elegance meets comfort, making every dining experience feel personal and memorable.</p>
          <a href="https://www.kozogh.com/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🌿 Visit Kozo Restaurant
          </a>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          Kigali’s fine dining gems are more than restaurants — they are experiences of flavor, ambiance, and connection. Whether you seek rooftop glamour, cultural fusion, or serene elegance, the city’s vibrant culinary scene has a table waiting just for you.
        </p>
      </div>
    </div>
  );
};

// Base inline styles
const containerStyle = { padding: "2rem", fontFamily: "'Montserrat', sans-serif", lineHeight: "1.6", color: "#333" };
const fullWidthBlock = { width: "100%", marginBottom: "1.5rem" };
const finalParagraphStyle = { marginTop: "2rem", backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "10px", color: "#333" };

export default FineDiningKigali;

