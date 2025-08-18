import React from 'react';

const BingeWatch = () => {
  return (
    <div>
      <p>
        🎬 <strong>Lights, Popcorn, Action! Darina Hosts Her First Binge Watch Night</strong><br />
        On Friday night, July 25th, something cozy and cinematic happened at Katina’s Kafe — the very first edition of *Binge Watch with Darina*.
      </p>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <img src="/images/binge4.png" alt="Darina welcoming guests at Binge Watch" style={imgStyleBalancedLeft} />
        <p style={{ flex: 1 }}>
          The event kicked off at 6PM and stretched late into the night. The featured film? The action-packed classic, <em>The Mummy</em> — 2 hours of thrilling adventure that had everyone hooked. Hosted by Kayumba Darina, 2nd runner-up Miss Rwanda 2022 and one of the most vibrant creatives in Kigali right now — this night was all about vibes, community, and curated taste.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <p style={{ flex: 1 }}>
          Big shoutout went to <strong>Migo Events</strong> for the screen setup, the incredible team at <strong>Katina’s Kafe</strong> for the cozy venue, and <strong>That Girl</strong> (yes, that’s her IG handle!) — a local movie critic who handpicked the film.
        </p>
        <img src="/images/binge2.png" alt="Katna’s Café movie setup" style={imgStyleBalancedRight} />
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <img src="/images/binge3.png" alt="Darina enjoying the movie night" style={imgStyleSmallLeft} />
        <p style={{ flex: 1 }}>
          And of course... Darina didn’t forget to thank *her man, her man, her man* ❤️. It’s giving soft launch, it’s giving support goals.<br />
          Her closing words? A warm thank-you to everyone who showed up and made it what it was — plus a teaser: “See you at the second edition.”
        </p>
      </div>

      <p>
        🍿 <strong>Final Frame</strong><br />
        From flicks to friendship, *Binge Watch with Darina* is more than just movies — it’s a vibe. If you missed the first one, the second might just be your golden ticket.  
        Kigali's film nights just got a new queen.
      </p>
    </div>
  );
};

const imgStyleBalancedLeft = {
  width: '40%',
  height: '280px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const imgStyleBalancedRight = {
  width: '30%',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '10px',
};

const imgStyleSmallLeft = {
  width: '30%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '10px',
};

export default BingeWatch;
