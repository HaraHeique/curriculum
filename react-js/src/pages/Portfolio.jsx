import Breadcrumb from '../components/Breadcrumb';

import portfolioData from '../assets/data/portfolio.data';

const Portfolio = () => {
  return (
    <main className="portfolio">
      <section className="content">
        <Breadcrumb currentPage={Portfolio.name} />
        <section className="portfolio-pics">
          <h1>Portfolio</h1>
          <div className="projects">
            {
              portfolioData.projects.map(project => (
                <div key={project.id} className="miniatura" style={{ backgroundImage: `url(${project.image})` }}>
                  {/* Colocar <Link></Link> aí no local do href */}
                  <a href="#">
                    <div className="blackbox">
                      <div className="blackbox-text">
                        <h1>{project.projectName}</h1>
                        <h2>{project.role}</h2>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </section>
        <aside>
          <p>See More on my <a className="link" href={portfolioData.githubLink} target="_blank">GitHub</a>.</p>
        </aside>
      </section>
    </main>
  );
};

export default Portfolio;