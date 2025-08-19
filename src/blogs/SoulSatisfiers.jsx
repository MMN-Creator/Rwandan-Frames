import React from "react";

const SoulfulSpaces = () => {
  return (
    <div style={containerStyle}>
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
          text-align: left;
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
          }
          .textBlock {
            order: 1;
            width: 100%;
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
        <p>🌟 <strong>Mind, Body & Soul: Places to Nourish Your Whole Being in Rwanda</strong><br />
          From vibrant malls and inspiring museums to peaceful spaces for reflection and dynamic fitness centers, these spots offer ways to connect deeply with yourself and the world around you.
        </p>
        <p>Let’s explore a variety of places where you can grow, relax, and find harmony — whether through knowledge, worship, wellness, or community.</p>
      </div>

      {/* Section 1 — Kigali Public Library */}
      <div className="rowBlock">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/lib.png"} alt="Kigali Public Library" />
<img src={process.env.PUBLIC_URL + "/images/lib2.png"} alt="Kigali Public Library" />
<img src={process.env.PUBLIC_URL + "/images/lib3.png"} alt="Kigali Public Library" />
<img src={process.env.PUBLIC_URL + "/images/lib1.png"} alt="Kigali Public Library" />

        </div>
        <div className="textBlock">
          <p>📚 <strong>Kigali Public Library — Kigali</strong></p>
          <p>A vibrant hub for knowledge seekers and curious minds, the Kigali Public Library offers a peaceful atmosphere to read, learn, and engage with the community. Beyond books, it hosts workshops, exhibitions, and spaces for quiet reflection — a true sanctuary for the soul.</p>
          <p>Whether you’re diving into new worlds on the page or attending a cultural event, this is a place where minds expand and hearts find peace.</p>
        </div>
      </div>

      {/* Section 2 — Huye Museum */}
      <div className="rowBlock alt">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/muse.png"} alt="Huye Museum" />
<img src={process.env.PUBLIC_URL + "/images/muse2.png"} alt="Huye Museum" />
<img src={process.env.PUBLIC_URL + "/images/muse3.png"} alt="Huye Museum" />
<img src={process.env.PUBLIC_URL + "/images/muse4.png"} alt="Huye Museum" />
        </div>
        <div className="textBlock">
          <p>🏛️ <strong>Huye Museum — Southern Province</strong></p>
          <p>For a deep dive into Rwanda’s rich history and culture, Huye Museum is unmatched. Through thoughtfully curated exhibits, it connects visitors to the roots of Rwanda’s identity and heritage — feeding both the mind and the spirit.</p>
          <p>Walking through its halls is like a journey of discovery, perfect for those seeking meaning and connection beyond the surface.</p>
        </div>
      </div>

      {/* Section 3 — Chic Mall */}
      <div className="rowBlock">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/chic.png"} alt="Chic Mall" />
<img src={process.env.PUBLIC_URL + "/images/chic2.png"} alt="Chic Mall" />
<img src={process.env.PUBLIC_URL + "/images/chic3.png"} alt="Chic Mall" />
<img src={process.env.PUBLIC_URL + "/images/chic1.png"} alt="Chic Mall" />

        </div>
        <div className="textBlock">
          <p>🛍️ <strong>Chic Mall — Kigali</strong></p>
          <p>Chic Mall is more than shopping — it’s a vibrant social space that brings people together. With stylish boutiques, cozy cafes, and dynamic events, it’s the perfect spot to recharge your mind and body while indulging in the city’s best.</p>
          <p>Whether you’re grabbing a coffee or exploring the latest trends, Chic Mall balances energy with comfort.</p>
        </div>
      </div>

      {/* Section 4 — Kibeho Prayer Site */}
      <div className="rowBlock alt">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/kibeho.png"} alt="Kibeho Prayer Site" />
<img src={process.env.PUBLIC_URL + "/images/kibeho2.png"} alt="Kibeho Prayer Site" />
<img src={process.env.PUBLIC_URL + "/images/kibeho3.png"} alt="Kibeho Prayer Site" />
<img src={process.env.PUBLIC_URL + "/images/kibeho4.png"} alt="Kibeho Prayer Site" />

        </div>
        <div className="textBlock">
          <p>🙏 <strong>Kibeho Prayer Site — Southern Province</strong></p>
          <p>A sacred space drawing people from across Rwanda and beyond, Kibeho offers quiet reflection, deep spiritual connection, and a sense of peace that renews the soul. The serene surroundings and communal prayers create a powerful atmosphere for those seeking God’s presence.</p>
          <p>It’s a place where faith meets heart, and visitors find strength in shared devotion.</p>
        </div>
      </div>

      {/* Section 5 — Waka Fitness Studio */}
      <div className="rowBlock">
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/waka.png"} alt="Waka Fitness Studio" />
<img src={process.env.PUBLIC_URL + "/images/waka2.png"} alt="Waka Fitness Studio" />
<img src={process.env.PUBLIC_URL + "/images/waka3.png"} alt="Waka Fitness Studio" />
<img src={process.env.PUBLIC_URL + "/images/waka4.png"} alt="Waka Fitness Studio" />

        </div>
        <div className="textBlock">
          <p>💪 <strong>Waka Fitness Studio — Kigali</strong></p>
          <p>Combining expert coaching with a welcoming community, Waka Fitness Studio helps you nurture your body and mind. From energizing group classes to personalized workouts, it’s a space where health and motivation thrive side by side.</p>
          <p>More than a gym, it’s a place to find balance, build strength, and reconnect with your physical and mental well-being.</p>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>✨ <strong>Final Frame</strong><br />
          These soulful spaces offer diverse ways to nurture your mind, body, and spirit in Rwanda. Whether seeking knowledge, reflection, community, or wellness, there’s a place waiting to welcome you with open arms.
        </p>
      </div>
    </div>
  );
};

// Base inline styles
const containerStyle = { padding: "2rem", fontFamily: "'Montserrat', sans-serif", lineHeight: "1.6", color: "#333" };
const fullWidthBlock = { width: "100%", marginBottom: "1.5rem" };
const finalParagraphStyle = { marginTop: "2rem", backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "10px", color: "#333" };

export default SoulfulSpaces;
