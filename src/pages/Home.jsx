import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BlogCard";
import BlogPopup from "../components/BlogPopup";
import BingeWatch from "../blogs/binge";
import CelebFashion from "../blogs/fashion";
import ChateauLeMarara from "../blogs/marara";
import NaomiesHusband from "../blogs/naomie";
import WeddingSeason from "../blogs/wedding";
import GiantsOfAfrica from "../blogs/giantsofafrica";
import BALNewSeason from "../blogs/balnewseason";
import ZariaCourt from "../blogs/zariacourt";
import ZoeWellness from "../blogs/zoewellness";
import SoulInSports from "../blogs/soulinSports";
import Kwibohora30 from "../blogs/kwibohora30";
import KwitaIzina30 from "../blogs/kwitaizina2025";
import IndependenceDay from "../blogs/independenceday";
import Umuganura2025 from "../blogs/umuganura2025";
import SpecialUmuganda from "../blogs/specialumuganda";
import FeelingLikeHome from "../blogs/FeelingLikeHome";
import SafeAndSound from "../blogs/SafeAndSound";
import PeacefulEscapes from "../blogs/PeacefulEscapes";
import LitTillLate from "../blogs/LitTilLate";
import SoulSatisfiers from "../blogs/SoulSatisfiers";

const images = [
  process.env.PUBLIC_URL + "/images/rwa4.jfif", 
  process.env.PUBLIC_URL + "/images/rwa4.jfif", 
  process.env.PUBLIC_URL + "/images/rwa4.jfif"
];

const blogPosts = [
  {
    category: "Culture & Lifestyle",
    posts: [
      {
        title: "July 1st — Rwanda’s Independence Reimagined",
        image: process.env.PUBLIC_URL +"/images/i1.png",
        date: "July 1, 2025",
        excerpt:
          "What Independence means to the new generation of Rwandans.  _Rwandans proudly raise your flags",
        contentComponent: <IndependenceDay />,
        views: 0,
        likes: 0,
      },
      {
        title: "Kwibohora 31 — The Spirit of Liberation",
        image: process.env.PUBLIC_URL +"/images/k5.png",
        date: "July 4, 2025",
        excerpt:
          "“Remember this whole journey, remember your responsibilities, individually and collectively, and do yourselves and your nation proud.”_PK",
        contentComponent: <Kwibohora30 />,
        views: 0,
        likes: 0,
      },
      {
        title: "Umuganura 2025 — A Harvest of Excellence",
        image: process.env.PUBLIC_URL +"/images/u0.png",
        date: "August 2, 2025",
        excerpt:
          "“Isoko y’ubumwe n’ishingiro ryo kwigira.” (A source of unity and foundation for self-reliance)",
        contentComponent: <Umuganura2025 />,
        views: 0,
        likes: 0,
      },
      {
        title: "Kwita Izina — 20 Years of Naming & Protecting",
        image: process.env.PUBLIC_URL +"/images/kw6.png",
        date: "September 5, 2025",
        excerpt:
          "Honoring gorillas, culture, and conservation — 20 years strong.",
        contentComponent: <KwitaIzina30 />,
        views: 0,
        likes: 0,
      },
      {
        title: "Special Umuganda — Culture & Community Work Meet",
        image: process.env.PUBLIC_URL +"/images/um6.png",
        date: "July 26, 2025",
        excerpt: "How tradition meets civic spirit during global events.",
        contentComponent: <SpecialUmuganda />,
        views: 0,
        likes: 0,
      },
    ],
  },
  {
    category: "Sports",
    posts: [
      {
        title: "Giants of Africa in Kigali",
        image: process.env.PUBLIC_URL +"/images/g23.png",
        date: "July 26 – August 2, 2025",
        excerpt:
          "A celebration of energy, talent, and community the event brought to the capital.",
        contentComponent: <GiantsOfAfrica />,
        views: 0,
        likes: 0,
      },
      {
        title: "BAL’s New Season Unfolds",
        image: process.env.PUBLIC_URL +"/images/b1.png",
        date: "May 17 - May 25, 2025",
        excerpt:
          "Rwanda’s role in the Basketball Africa League’s rise and local talent growth.",
        contentComponent: <BALNewSeason />,
        views: 0,
        likes: 0,
      },
      {
        title: "Zaria Court: A Space Reimagined",
        image: process.env.PUBLIC_URL +"/images/z5.png",
        date: "June 2025",
        excerpt:
          "From cement to chic — the newly opened court’s cultural vibe spotlighted.",
        contentComponent: <ZariaCourt />,
        views: 0,
        likes: 0,
      },
      {
        title: "Zoe Wellness Studio on the Rise",
        image: process.env.PUBLIC_URL +"/images/zo6.png",
        date: "2025",
        excerpt:
          "Inside Kigali’s trendy wellness and fitness wave taking Instagram by storm.",
        contentComponent: <ZoeWellness />,
        views: 0,
        likes: 0,
      },
      {
        title: "The Soul in Sports: What Movement Teaches Us",
        image: process.env.PUBLIC_URL +"/images/s7.png",
        date: "July 2025",
        excerpt:
          "A reflective dive into what sports reveal about discipline, identity, and spirit.",
        contentComponent: <SoulInSports />,
        views: 0,
        likes: 0,
      },
    ],
  },
  {
    category: "Entertainment",
    posts: [
      {
        title: "Château le Marara",
        image: process.env.PUBLIC_URL +"/images/Picture45.png",
        date: "July 14, 2025",
        excerpt: "The drama that had Kigali buzzing this summer.",
        contentComponent: <ChateauLeMarara />,
        views: 0,
        likes: 0,
      },
      {
        title: "Naomie's Husband in Public",
        image: process.env.PUBLIC_URL +"/images/mic1.png",
        date: "July 12, 2025",
        excerpt: "Caught taking public transport—what did social media say?",
        contentComponent: <NaomiesHusband />,
        views: 0,
        likes: 0,
      },
      {
        title: "Wedding Season 2025",
        image: process.env.PUBLIC_URL +"/images/weddingcover1.png",
        date: "July 14, 2025",
        excerpt:
          "Gowns, glitz, and unforgettable moments from Rwanda’s wedding season.",
        contentComponent: <WeddingSeason />,
        views: 0,
        likes: 0,
      },
      {
        title: "Celebrities & Their Fashion",
        image: process.env.PUBLIC_URL +"/images/Picture50.png",
        date: "2025",
        excerpt:
          "Fashion is what you buy, Style is what you do with it, a space for self-expression",
        contentComponent: <CelebFashion />,
        views: 0,
        likes: 0,
      },
      {
        title: "Binge Watch Diaries with Darina",
        image: process.env.PUBLIC_URL +"/images/binge1.png",
        date: "July 25, 2025",
        excerpt: "Our top shows and movies of the summer.",
        contentComponent: <BingeWatch />,
        views: 0,
        likes: 0,
      },
    ],
  },
  {
    category: "Hidden Gems",
    posts: [
      {
        title: "Feeling Like Home",
        image: process.env.PUBLIC_URL +"/images/co.png",
        date: "2025",
        excerpt:
          "Warm atmospheres, friendly faces, and spaces that welcome you like family — from cozy cafés to resorts.",
        contentComponent: <FeelingLikeHome />,
        views: 0,
        likes: 0,
      },
      {
        title: "Safe & Sound",
        image: process.env.PUBLIC_URL +"/images/p5.png",
        date: "2025",
        excerpt:
          "Where peace of mind is guaranteed — well-lit streets, trusted spots, and places you can unwind without worry.",
        contentComponent: <SafeAndSound />,
        views: 0,
        likes: 0,
      },
      {
        title: "Where Your Inner Child Runs Free",
        image: process.env.PUBLIC_URL +"/images/gm.png",
        date: "2025",
        excerpt:
          "From thrilling games to vibrant hangouts, Rwanda’s entertainment spots bring people together for laughter, energy, and unforgettable moments.",
        contentComponent: <PeacefulEscapes />,
        views: 0,
        likes: 0,
      },
      {
        title: "Elegant Evenings",
        image: process.env.PUBLIC_URL +"/images/mwah.png",
        date: "2025",
        excerpt:
          "Fine dining spots where passion meets elegance, and every night is a special experience.",
        contentComponent: <LitTillLate />,
        views: 0,
        likes: 0,
      },
      {
        title: "Soul Satisfiers",
        image: process.env.PUBLIC_URL +"/images/hii.png",
        date: "2025",
        excerpt:
          "Malls, gyms, churches, and places that speak to your deepest wants — mind, body, and soul in harmony.",
        contentComponent: <SoulSatisfiers />,
        views: 0,
        likes: 0,
      },
    ],
  },
];

function Home() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [commentsMap, setCommentsMap] = useState({});
  const [likedPosts, setLikedPosts] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setBackgroundImage(images[randomIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddComment = (title, newComment) => {
    setCommentsMap((prev) => ({
      ...prev,
      [title]: [...(prev[title] || []), newComment],
    }));
  };

  const handleLikeToggle = (title) => {
    setLikedPosts((prev) => {
      const isLiked = prev[title];
      blogPosts.forEach((category) => {
        category.posts.forEach((post) => {
          if (post.title === title) {
            if (!isLiked) post.likes += 1;
            else post.likes -= 1;
          }
        });
      });
      return { ...prev, [title]: !isLiked };
    });
  };


  return (
    <div
      id="top"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <header
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "70vh", // pushes it midway vertically
    textAlign: "center",
    padding: "0 2rem",
  }}
>
  <h1
    style={{
      fontSize: "3rem",
      color: "#800000",
      marginBottom: "1rem",
    }}
  >
    Welcome to Rwandan Frames
  </h1>
  <p
    style={{
      fontStyle: "italic",
      fontSize: "1.6rem",
      color: "white",
      marginBottom: "3rem", // gives space before button
    }}
  >
    Viewing Rwanda Through Unique Lenses
  </p>

  
</header>
<div style={{ textAlign: "center", margin: "0.2rem 0 1.5rem 0" }}> {/* moved block further up */}
  <p
    style={{
      color: "#800000",
      fontWeight: "bold",
      fontSize: "1.3rem",
      display: "inline-block",
      backgroundColor: "white",
      padding: "0.5rem 1rem",
      borderRadius: "25px",
      marginBottom: "0.5rem", // heading closer to buttons
    }}
  >
    Where Would You Like to Start From?
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
    }}
  >
    {["Culture & Lifestyle", "Sports", "Entertainment", "Hidden Gems"].map(
      (cat, idx) => (
        <button
          key={idx}
          onClick={() => {
            const section = document.getElementById(
              cat.toLowerCase().replace(/ & | /g, "-")
            );
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#800000",
            fontWeight: "bold",
            fontSize: "1.1rem",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
            borderRadius: "25px",
            border: "2px solid #800000",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#800000";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#800000";
          }}
        >
          {cat}
        </button>
      )
    )}
  </div>
</div>



        <section id="blogs-section" style={{ padding: "2rem" }}>
         {blogPosts.map((categoryData, index) => (
  <div
    key={index}
    id={categoryData.category.toLowerCase().replace(/ & | /g, "-")}
    style={{ marginBottom: "3rem" }}
  >

              <h2
                style={{
                  color: "#800000",
                  fontWeight: "bold",
                  backgroundColor: "white",
                  display: "inline-block",
                  padding: "0.3rem 1rem",
                  borderRadius: "20px",
                  fontSize: "1.2rem",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                }}
              >
                {categoryData.category}
              </h2>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "2rem",
                  justifyContent: "flex-start",
                }}
              >
                {categoryData.posts.map((post, idx) => (
                  <BlogCard
                    key={idx}
                    title={post.title}
                    image={post.image}
                    date={post.date}
                    excerpt={post.excerpt}
                    views={post.views}
                    likes={post.likes}
                    liked={likedPosts[post.title] || false}
                    onLike={() => handleLikeToggle(post.title)}
                    onClick={() => setSelectedPost(post)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* About Section */}
        <section
          id="about"
          style={{ padding: "4rem 2rem", backgroundColor: "#fff", color: "#333" }}
        >
          <h2 style={{ color: "#800000" }}>About Us</h2>
          <p>
            My name is <strong>Marie-Merci</strong>, and I’m the founder of{" "}
            <strong>Rwandan Frames</strong>. This project started as part of my
            internship, but it quickly became something much more personal and
            meaningful.
          </p>
          <p>
            I’ve always loved Rwanda — not just its breathtaking landscapes, but
            the way it’s growing, healing, and becoming more beautiful every
            single day. One day, I had a dream of building a publishing platform
            that would frame Rwanda in the most authentic, inspiring, and
            creative way possible. I had even written it as part of my New
            Year’s resolution — and by the grace of God, here we are.
          </p>
          <p>
            <strong>Rwandan Frames</strong> is here to tell stories. To bring
            you short, catchy, yet credible glimpses into Rwanda’s people,
            events, and daily life. Whether it's a major celebration or a simple
            street moment, we want it seen and remembered.
          </p>
          <p>
            This is just the beginning. I pray that God grows this platform
            beyond what I can imagine — to reach and impact more people, and to
            honor the beauty of our nation, always through the right lens.
          </p>
          <p>
            <em>Thank you for visiting. You’re part of the Frame now.</em>
          </p>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{ padding: "4rem 2rem", backgroundColor: "#f5f5f5", color: "#333" }}
        >
          <h2 style={{ color: "#800000" }}>Contact Us</h2>
          <p>We’d love to hear from you! Reach out with questions, opportunities, or just to connect.</p>
          <div style={{ marginTop: "1.5rem" }}>
            <p>
              <strong>Email:</strong> rwandanframes@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> Available upon request
            </p>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <strong>View Rwanda From Other Frames Narrating The Same Story:</strong>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "0.5rem",
              }}
            >
              <a href="https://www.instagram.com/visitrwanda_now/" target="_blank" rel="noopener noreferrer" style={{ color: "#800000", textDecoration: "none" }}>Visit Rwanda</a>
              <span>|</span>
              <a href="https://www.instagram.com/thenewtimesrwanda/" target="_blank" rel="noopener noreferrer" style={{ color: "#800000", textDecoration: "none" }}>The New Times</a>
              <span>|</span>
              <a href="https://www.instagram.com/igiheofficial/" target="_blank" rel="noopener noreferrer" style={{ color: "#800000", textDecoration: "none" }}>IGIHE</a>
              <span>|</span>
              <a href="https://www.instagram.com/rwanda__/" target="_blank" rel="noopener noreferrer" style={{ color: "#800000", textDecoration: "none" }}>Rwanda Official</a>
            </div>
          </div>
        </section>

        {/* Suggestions Section */}
<section
  id="suggestions"
  style={{ padding: "4rem 2rem", backgroundColor: "#fff", color: "#333" }}
>
  <h2 style={{ color: "#800000", marginBottom: "1rem" }}>Suggestions</h2>
  <p style={{ marginBottom: "1.5rem" }}>
    Know a person, story, or event we should cover? Submit your thoughts and help us keep Rwanda seen and celebrated.
  </p>

  <form
    action="https://formspree.io/f/mjkodrea" // your Formspree form link
    method="POST"
    data-email="rwandanframes@gmail.com"
    style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", maxWidth: "calc(100% - 2rem)" }}
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem", width: "100%" }}
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email (optional)"
      style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem", width: "100%" }}
    />
    <textarea
      name="message"
      placeholder="Your Suggestion..."
      required
      rows="5"
      style={{ padding: "0.8rem", borderRadius: "5px", border: "1px solid #ccc", fontSize: "1rem", width: "100%" }}
    />
    <button
      type="submit"
      style={{ padding: "0.8rem 1.2rem", backgroundColor: "#800000", color: "white", border: "none", borderRadius: "5px", fontSize: "1rem", cursor: "pointer", alignSelf: "flex-start" }}
    >
      Submit Suggestion
    </button>
  </form>
</section>


        {/* Footer */}
        <footer style={{ backgroundColor: "#800000", padding: "0.5rem", textAlign: "center" }}>
          <p>&copy; 2025 Rwandan Frames. All Rights Reserved.</p>
        </footer>
      </div>

      {selectedPost && (
        <BlogPopup
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onAddComment={handleAddComment}
          comments={commentsMap[selectedPost.title] || []}
        />
      )}
    </div>
  );
}

export default Home;
