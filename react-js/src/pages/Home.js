import React from 'react';
import profileImage from '../assets/images/profile-home1.jpeg';

const Home = () => {
  const imageDetails = {
    image: profileImage,
    alt: 'Harã Heique Photo',
    title: "Profile Heik's Portfolio"
  };

  return (
    <div className="home">
      <main>
        <article className="capa">
          <section className="profile-pic">
            <img src={imageDetails.image} alt={imageDetails.alt} title={imageDetails.title} />
          </section>
          <section className="profile-title">
            <h1>Harã Heique<span>dos Santos</span></h1>
            <h2>Software Developer - Software Architecture Enthusiastic</h2>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;