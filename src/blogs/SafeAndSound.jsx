import React from "react";

const SafeAndSound = () => {
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
        <p>
          🛡️ <strong>Safe & Sound: Peace of Mind in Rwanda’s Trusted Retreats</strong><br />
          Finding peace means more than quiet spaces — it’s about feeling secure wherever you go. Whether it’s well-lit streets, trusted community spots, or nature’s calm embrace, these places offer a sanctuary where you can relax without worry.
        </p>
        <p>
          We begin this journey close to the city in Kigali’s Nyandungu Urban Wetland, then explore the wide-open spaces of Akagera National Park, and finish with the serene wilderness of Nyungwe Forest — each offering unique ways to unwind safely.
        </p>
      </div>

      {/* Section 1 — Nyandungu Urban Wetland */}
      <div className="rowBlock">
        <div className="textBlock">
          <p>
            🌿 <strong>Nyandungu Eco-park — Kigali</strong><br />
            Just a short drive from Kigali’s heart, Nyandungu Eco-park offers a refreshing escape wrapped in nature’s calm. Well-maintained paths, clear signage, and regular community patrols make it one of the safest urban green spaces to enjoy peaceful walks or birdwatching.
          </p>
          <p>
            This eco-park is not only a haven for wildlife but also a cherished spot for locals to connect with nature without the worries of city noise or traffic. Evening visits are especially soothing, with gentle lighting creating a tranquil ambiance.
          </p>
          <a href="https://www.nyandunguecopark.rw/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🌿 Explore Nyandungu Eco-park
          </a>
        </div>
        <div className="imageGrid">
          <img src={process.env.PUBLIC_URL + "/images/ne6.png"} alt="Nyandungu Urban Wetland" />
<img src={process.env.PUBLIC_URL + "/images/ne2.png"} alt="Nyandungu Urban Wetland" />
<img src={process.env.PUBLIC_URL + "/images/ne5.png"} alt="Nyandungu Urban Wetland" />
<img src={process.env.PUBLIC_URL + "/images/ne1.png"} alt="Nyandungu Urban Wetland" />

          <a href="https://www.nyandunguecopark.rw/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🌿 Explore Nyandungu Eco-park
          </a>
        </div>
      </div>

      {/* Section 2 — The Green Carpet */}
      <div className="rowBlock alt">
        <div className="textBlock">
          <p>
            🌳 <strong>The Green Carpet — Kigali Nyarutarama</strong><br />
            Nestled in the heart of Kigali, The Green Carpet is an urban sanctuary where lush lawns, winding paths, and towering trees create a serene escape from city life. Well-lit and carefully maintained, it invites visitors to enjoy leisurely walks, peaceful picnics, and quiet moments under the shade.
          </p>
          <p>
            This vibrant green space is cherished for its safe, welcoming atmosphere — a place where families, joggers, and friends gather to recharge and connect with nature, right in the city’s pulse.
          </p>
        </div>
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/p1.png"} alt="The Green Carpet Kigali" />
<img src={process.env.PUBLIC_URL + "/images/p2.png"} alt="The Green Carpet Kigali" />
<img src={process.env.PUBLIC_URL + "/images/p3.png"} alt="The Green Carpet Kigali" />
<img src={process.env.PUBLIC_URL + "/images/p4.png"} alt="The Green Carpet Kigali" />

        </div>
      </div>

      {/* Section 3 — Akagera National Park */}
      <div className="rowBlock alt">
        <div className="textBlock">
          <p>
            🦓 <strong>Akagera National Park — Eastern Rwanda</strong><br />
            For those craving open spaces and a safari adventure, Akagera National Park combines breathtaking landscapes with a strong security presence. The park’s professional rangers and guided tours ensure visitors experience wildlife safely and respectfully.
          </p>
          <p>
            Whether it’s watching zebras graze by the lake or enjoying a sunset over rolling savannahs, Akagera provides peace of mind alongside stunning views — letting you fully immerse yourself in nature’s beauty.
          </p>
          <a href="https://visitakagera.org/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🦓 Visit Akagera National Park
          </a>
        </div>
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/ak1.png"} alt="Akagera National Park" />
<img src={process.env.PUBLIC_URL + "/images/ak2.png"} alt="Akagera National Park" />
<img src={process.env.PUBLIC_URL + "/images/ak3.png"} alt="Akagera National Park" />
<img src={process.env.PUBLIC_URL + "/images/ak4.png"} alt="Akagera National Park" />

          <a href="https://visitakagera.org/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🦓 Visit Akagera National Park
          </a>
        </div>
      </div>

      {/* Transitional text */}
      <div style={fullWidthBlock}>
        <p style={transitionTextStyle}>
          Leaving the wide-open savannahs behind, we journey to the lush, protected rainforests of Nyungwe — a place where quiet safety meets vibrant life.
        </p>
      </div>

      {/* Section 4 — Nyungwe Forest */}
      <div className="rowBlock">
        <div className="textBlock">
          <p>
            🌲 <strong>Nyungwe Forest National Park — Southwestern Rwanda</strong><br />
            Nyungwe’s ancient rainforest offers an unmatched blend of adventure and tranquility. Guided treks on well-marked trails ensure safety as you discover chimpanzees, rare birds, and towering trees in this pristine wilderness.
          </p>
          <p>
            Night walks illuminate the forest’s magical life while guides share stories that deepen your sense of belonging in this protected paradise. Safety and respect for nature here create a peaceful atmosphere perfect for reflective escapes.
          </p>
          <a href="https://www.nyungweforestnationalpark.org/" target="_blank" rel="noopener noreferrer" className="linkDesktop">
            🌲 Discover Nyungwe Forest
          </a>
        </div>
        <div className="imageGrid">
         <img src={process.env.PUBLIC_URL + "/images/ny1.png"} alt="Nyungwe Forest National Park" />
<img src={process.env.PUBLIC_URL + "/images/ny2.png"} alt="Nyungwe Forest National Park" />
<img src={process.env.PUBLIC_URL + "/images/ny3.png"} alt="Nyungwe Forest National Park" />
<img src={process.env.PUBLIC_URL + "/images/ny4.png"} alt="Nyungwe Forest National Park" />

          <a href="https://www.nyungweforestnationalpark.org/" target="_blank" rel="noopener noreferrer" className="linkMobile">
            🌲 Discover Nyungwe Forest
          </a>
        </div>
      </div>

      {/* Final Frame */}
      <div style={finalParagraphStyle}>
        <p>
          ✨ <strong>Final Frame</strong><br />
          Safety and peace of mind make any experience richer. From urban wetlands to vast savannahs and lush rainforests, Rwanda offers trusted places where you can breathe deeply, explore boldly, and rest soundly.
        </p>
      </div>

    </div>
  );
};

const containerStyle = { padding: "2rem", fontFamily: "'Montserrat', sans-serif", lineHeight: "1.6", color: "#333" };
const fullWidthBlock = { width: "100%", marginBottom: "1.5rem" };
const transitionTextStyle = { fontStyle: "italic", color: "#666", borderTop: "1px solid #ddd", paddingTop: "0.75rem" };
const finalParagraphStyle = { marginTop: "2rem", backgroundColor: "#f9f9f9", padding: "1.5rem", borderRadius: "10px", color: "#333" };

export default SafeAndSound;
