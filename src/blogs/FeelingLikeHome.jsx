import React from 'react';

const FeelingLikeHome = () => {
  return (
    <div style={containerStyle}>

      {/* Inject CSS for responsiveness */}
      <style>{`
        .rowBlock {
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
          position: relative;
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
        }
        .linkMobile {
          display: none;
          margin-top: 0.4rem;
          text-align: center;
          width: 100%;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 768px) {
          .rowBlock,
          .rowBlock.alt {
            flex-direction: column;
          }
          .textBlock {
            order: 1;
            width: 100%;
          }
          .imageGrid {
            order: 2;
            grid-template-columns: repeat(2, 1fr);
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
          🏡 <strong>Feeling Like Home: Cozy Retreats & Warm Vibes Across Rwanda</strong><br />
          Some places leave their mark not through grandeur, but through the way they make you feel at home. From the moment you arrive, you’re met with warmth, comfort, and genuine care. In this journey, we begin in Kigali’s lively neighborhoods before venturing into Rwanda’s serene escapes—where good food, connection, and heartfelt hospitality make every visit unforgettable.
        </p>
      </div>

      {/* Section 1 — Mukati na Butta */}
      <div className="rowBlock">
        <div className="textBlock">
          <p>
            🍽️ <strong>Mukati na Butta — Kigali</strong><br />
            Tucked away in Kigali’s lively streets, Mukati na Butta is more than just a café — it’s a home away from home. The moment you step inside, you’re greeted with the smell of freshly baked bread, the soft murmur of friendly conversations, and an atmosphere that feels as familiar as your own living room.
          </p>
          <p>
            Every corner here radiates warmth, from the thoughtful design to the friendly staff who remember your favorite order. It’s the kind of place where strangers can become friends over a cup of coffee or a hearty breakfast. Their new reservation policy ensures that the space remains intimate and calm, making each visit special.
          </p>
          <a href="https://mukatinabutta.rw/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Discover Mukati na Butta
          </a>
        </div>
        <div className="imageGrid">
          <img src="/images/mn1.png" alt="Mukati na Butta" />
          <img src="/images/mn2.png" alt="Mukati na Butta" />
          <img src="/images/mn3.png"  alt="Mukati na Butta" />
          <img src="/images/mn4.png" alt="Mukati na Butta" />
          <a href="https://mukatinabutta.rw/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Discover Mukati na Butta
          </a>
        </div>
      </div>

      {/* Section 2 — Kivu Noir */}
      <div className="rowBlock alt">
        <div className="textBlock">
          <p>
            ☕ <strong>Kivu Noir Café — Kigali</strong><br />
            At Kivu Noir Café, coffee is more than a drink — it’s a story. This warm and inviting space in Kigali serves some of the finest Red Bourbon Arabica coffee grown on the fertile shores of Lake Kivu. The aroma hits you before you even step inside, inviting you to slow down and savor the moment.
          </p>
          <p>
            The café itself feels like a safe corner of the city — perfect for casual meet-ups, quiet reading sessions, or simply enjoying a well-crafted latte while people-watching. And beyond the walls, Kivu Noir’s journey is deeply tied to Rwanda’s coffee heritage, reflecting dedication to quality and fair trade practices.
          </p>
          <a href="https://www.kivunoir.rw/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Experience Kivu Noir Café
          </a><br />
          <a href="https://rw.kivunoir.coffee/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Learn About Kivu Noir’s Coffee Heritage
          </a>
        </div>
        <div className="imageGrid">
          <img src="/images/kn1.png"  alt="Kivu Noir Cafe" />
          <img src="/images/kn2.png"  alt="Kivu Noir Cafe" />
          <img src="/images/kn3.png"  alt="Kivu Noir Cafe" />
          <img src="/images/kn4.png"  alt="Kivu Noir Cafe" />
          <a href="https://www.kivunoir.rw/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Experience Kivu Noir Café
          </a>
          <a href="https://rw.kivunoir.coffee/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Learn About Kivu Noir’s Coffee Heritage
          </a>
        </div>
      </div>

      {/* Transitional text */}
      <div style={fullWidthBlock}>
        <p style={{ fontStyle: 'italic', color: '#666', borderTop: '1px solid #ddd', paddingTop: '0.75rem' }}>
          Leaving Kigali’s comforting embrace, we head into Rwanda’s open landscapes — where time slows down and each place offers its own version of home.
        </p>
      </div>

      {/* Section 3 — Vintage Cottage */}
      <div className="rowBlock">
        <div className="textBlock">
          <p>
            🏞️ <strong>Vintage Cottage Resort — Rwamagana</strong><br />
            On the gentle shores of Lake Muhazi, Vintage Cottage Resort offers a retreat where nature’s beauty and human warmth blend seamlessly. Wooden cottages, leafy gardens, and peaceful lake views create the perfect backdrop for slow mornings and long, laughter-filled evenings.
          </p>
          <p>
            Whether you’re enjoying a lakeside breakfast, kayaking across the calm waters, or simply watching the sunset reflect on the ripples, the resort gives you space to reconnect with yourself and others.
          </p>
          <a href="https://vintagecottagerwanda.com/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Visit Vintage Cottage Resort
          </a>
        </div>
        <div className="imageGrid">
          <img src="/images/vc1.png" alt="Vintage Cottage Resort" />
          <img src="/images/vc2.png" alt="Vintage Cottage Resort" />
          <img src="/images/vc3.png" alt="Vintage Cottage Resort" />
          <img src="/images/vc4.png" alt="Vintage Cottage Resort" />
          <a href="https://vintagecottagerwanda.com/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Visit Vintage Cottage Resort
          </a>
        </div>
      </div>

      {/* Section 4 — Farmhouse Rwanda */}
      <div className="rowBlock alt">
        <div className="textBlock">
          <p>
            🚜 <strong>Farmhouse Rwanda — Kinigi</strong><br />
            Farmhouse Rwanda combines rustic charm with refined comfort. Surrounded by farmland and the towering volcanoes of the Virunga range, it’s a place where nature and nurture meet. Fresh, farm-to-table meals and spacious, cozy rooms make every stay restorative.
          </p>
          <p>
            Here, mornings begin with mist over the fields and the sound of roosters crowing — a reminder of life’s simplest pleasures.
          </p>
          <a href="https://farmhouserwanda.com/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Discover Farmhouse Rwanda
          </a>
        </div>
        <div className="imageGrid">
          <img src="/images/fh1.png" alt="Farmhouse Rwanda" />
          <img src="/images/fh2.png" alt="Farmhouse Rwanda" />
          <img src="/images/fh3.png" alt="Farmhouse Rwanda" />
          <img src="/images/fh4.png" alt="Farmhouse Rwanda" />
          <a href="https://farmhouserwanda.com/" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Discover Farmhouse Rwanda
          </a>
        </div>
      </div>

      {/* Section 5 — Amarembo */}
      <div className="rowBlock">
        <div className="textBlock">
          <p>
            🌿 <strong>Amarembo by Touch Down — Ruhengeri, Kinigi</strong><br />
            Amarembo by Touch Down is a luxurious escape framed by lush gardens and panoramic views of the Virunga mountains. Whether you’re enjoying a candlelit dinner, strolling through the grounds, or watching the sunset over the peaks, this place offers tranquility without losing touch with comfort.
          </p>
          <a href="https://amarembobytouchdown.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkDesktop">
            Visit Amarembo by Touch Down
          </a>
        </div>
        <div className="imageGrid">
          <img src="/images/a1.png" alt="Amarembo by Touch Down" />
          <img src="/images/a2.png" alt="Amarembo by Touch Down" />
          <img src="/images/a3.png" alt="Amarembo by Touch Down" />
          <img src="/images/a4.png" alt="Amarembo by Touch Down" />
          <a href="https://amarembobytouchdown.com" target="_blank" rel="noopener noreferrer" style={linkStyle} className="linkMobile">
            Visit Amarembo by Touch Down
          </a>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          From the cozy corners of Kigali to the open landscapes of Rwanda’s countryside, each of these places proves that feeling at home is about more than just comfort — it’s about the people, the care, and the moments shared.
        </p>
      </div>

    </div>
  );
};

// Base inline styles
const containerStyle = { padding: '2rem', fontFamily: "'Montserrat', sans-serif", lineHeight: '1.6', color: '#333' };
const fullWidthBlock = { width: '100%', marginBottom: '1.5rem' };
const linkStyle = { color: '#b22234', textDecoration: 'none', fontWeight: '700' };
const finalParagraphStyle = { marginTop: '2rem', backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '10px', color: '#333' };

export default FeelingLikeHome;





