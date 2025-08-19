// src/blogs/CelebFashion.jsx
import React from "react";

const CelebFashion = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Montserrat, sans-serif",
        lineHeight: "1.6",
      }}
    >
      {/* Intro Paragraph */}
      <p style={{ marginBottom: "2rem" }}>
        Fashion in Rwanda’s celebrity world? No runway required. This isn’t
        about red carpets or curated rules — it’s about <em>vibes</em>,
        confidence, and those moments when someone steps out and you just go…
        wow.
      </p>

      <p style={{ marginBottom: "2rem" }}>
        These aren’t picks based on fashion panels or voting systems. It’s pure
        chaos. Pure love. Just outfits that made us stop scrolling.
      </p>

      {/* Row: Left picture, paragraph, right picture */}
      <div style={rowWrapper}>
        <img
          src={process.env.PUBLIC_URL + "/images/Picture54.png"}
          alt="Celebrity red carpet"
          style={sideImageStyle}
        />

        <div style={middleParagraphStyle}>
          <p>
            So, here’s to the ones who dressed like the main character — whether
            they were headed to a café, a concert, or simply a moment of ✨
            being ✨.
          </p>
          <p>
            🌛 <strong>Style Watch: No Rules, Just Radiance</strong>
            <br />
            This feature isn’t a competition. It’s just a celebration of
            standout moments where our stars chose <em>style</em> —<br />
            and style chose them right back.
          </p>
        </div>

        <img
          src={process.env.PUBLIC_URL + "/images/Picture55.png"}
          alt="Sunday service attire"
          style={sideImageStyle}
        />
      </div>

      {/* Sabine Mutabazi */}
      <p>
        🔥 <strong>Sabine Mutabazi’s Red + White Glow-Up</strong>
        <br />
        On July 11<sup>th</sup>, during the <em>Kwibohora 31</em> celebration in
        Canada, Sabine made a jaw-dropping appearance in a bold red pant set,
        paired with a sleeveless white coat.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/sabine1.png"}
          alt="Sabine in red & white"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/sabine2.png"}
          alt="Sabine full-body outfit"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/sabine3.png"}
          alt="Sabine full-body outfit"
          style={imgStyleUniform}
        />
      </div>

      <p>
        The look? Chic. Powerful. Effortlessly patriotic with glam to spare.
      </p>

      {/* Tracy Umukunzi */}
      <p>
        💅 <strong>Tracy Umukunzi: Consistency is the Dress Code</strong>
        <br />
        Whether it’s a brunch, or an IG soft launch, Tracy never misses. Her eye
        for structure, softness, and drama is unmatched.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/tracy1.png"}
          alt="Tracy Mukunzi stunning outfit"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/tracy2.png"}
          alt="Tracy's glam moment"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/tracy3.png"}
          alt="Tracy's glam moment"
          style={imgStyleUniform}
        />
      </div>

      <p>
        Her fashion choices feel like poetry in motion — and we’re here for
        every verse.
      </p>

      {/* Element Eleéeh */}
      <p>
        🎤 <strong>Element: When the Producer Becomes the Poster</strong>
        <br />
        At his Dallas concert this summer, Element wasn’t just serving sound —
        he served looks.
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/ele1.png"}
          alt="Element on stage"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/ele2.png"}
          alt="Element’s fashion moment"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/ele3.png"}
          alt="Element’s fashion moment"
          style={imgStyleUniform}
        />
      </div>

      <p>
        Sleek fit, cool tones, and charisma for days. Music and fashion clearly
        go hand in hand with this one.
      </p>

      {/* Jolly Mutesi */}
      <p>
        👑 <strong>Mutesi Jolly: A Walking Fashion Era</strong>
        <br />
        Honestly? What *hasn’t* Jolly worn this year that didn’t serve?
      </p>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <img
          src={process.env.PUBLIC_URL + "/images/jolly1.png"}
          alt="Jolly Mutesi bold look"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/jolly2.png"}
          alt="Fashion queen moment"
          style={imgStyleUniform}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/jolly3.png"}
          alt="Jolly being iconic"
          style={imgStyleUniform}
        />
      </div>

      <p>
        She is — and might forever be — the definition of fashion royalty in
        Rwanda. Her looks walk, talk, and sometimes her style whispers, “Catch
        me if you can!”
      </p>

      <p>
        🧵 <strong>Final Frame</strong>
        <br />
        These picks are random, unfiltered, and full of love for the bold, the
        beautiful, and the style-savvy. If it made us gasp, pause, or screenshot
        — it made the cut.
      </p>
    </div>
  );
};

// Styles
const rowWrapper = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "stretch", // ensures equal heights
  gap: "1rem",
  marginBottom: "2rem",
};

const sideImageStyle = {
  width: "30%",
  objectFit: "cover",
  borderRadius: "10px",
};

const middleParagraphStyle = {
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  lineHeight: "1.6",
};

const imgStyleUniform = {
  width: "30%",
  height: "400px",
  objectFit: "cover",
  borderRadius: "10px",
};

export default CelebFashion;
