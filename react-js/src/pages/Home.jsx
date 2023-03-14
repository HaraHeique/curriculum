import homeData from '../assets/data/home.data';

const Home = () => {
  const { imageDetails, profileDetails } = homeData;

  return (
    <main className="home">
      <article className="capa">
        <section className="profile-pic">
          <img src={imageDetails.image} alt={imageDetails.alt} title={imageDetails.title} />
        </section>
        <section className="profile-title">
          <h1>{profileDetails.firstName}<span>{profileDetails.lastName}</span></h1>
          <h2>{profileDetails.tags.join(' - ')}</h2>
        </section>
      </article>
    </main>
  );
};

export default Home;