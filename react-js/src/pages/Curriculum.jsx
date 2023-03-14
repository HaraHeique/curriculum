import './Curriculum.css';

import Breadcrumb from '../components/Breadcrumb';

const Curriculum = () => {
  const printScreen = (event) => {
    event.preventDefault();
  };

  return (
    <main className="curriculum">
      <section className="content">
        <Breadcrumb currentPage={Curriculum.name} />
        <article>
          <h1>Curriculum</h1>
          <section className="dados-pessoais">
            <div>
              <h2>
                Personal Info
                <a id="btn-print" onClick={printScreen} title="Print Screen" style={{ float: 'right' }} href="#">
                  <i className="fa fa-print" aria-hidden="true"></i>
                </a>
              </h2>
            </div>
            <hr />
            <img className="cv-pic" src="../img/profile-photo.jpg" alt="Foto Harã Heique"
              title="Profile Heik's Portfolio" />

            <h3 style={{ marginTop: '40px' }}>Name:</h3>
            <p>Harã Heique dos Santos</p>

            <h3>GitHub:</h3>
            <p><a href="https://github.com/HaraHeique" target="_blank">HaraHeique</a></p>

            <h3>Birth Date:</h3>
            <p>May 25th, 1996</p>

            <h3 style={{ clear: 'left' }}>Residence:</h3>
            <p>Serra, Brazil</p>

            <h3>Languages:</h3>
            <p>
              Portuguese (Native)<br />
              English (Advanced)
            </p>
          </section>
          <section className="educacao">
            <h2>Education</h2>
            <hr />
            <h3>2016-present</h3>
            <p>Bachelor's Degree in Information Systems - Instituto Federal Espírito Santo (Brazil). Expected to finish in 2021.</p>

            <h3>2015-2016</h3>
            <p>Professional Technician in Industrial Automation - Instituto Federal Espírito Santo (Brazil).</p>
          </section>
          <section className="habilidades">
            <h2>Skills</h2>
            <hr />
            <h3>Development Tools</h3>
            <p>Git | GitHub | Azure | Heroku | Firebase</p>

            <h3>Development Programming Tools (Front-End)</h3>
            <p>HTML | CSS | JavaScript | Typescript | jQuery | Angular</p>

            <h3>Development Programming Tools (Back-End)</h3>
            <p>C# | Python | Java | C | Ladder | ASP.NET | ASP.NET Core | Entity Framework | Entity Framework Core | PostgreSQL | SQL Server</p>

            <h3>Programming Concepts</h3>
            <p>Systems Modeling | UML | Clean Code | SOLID | DRY | KISS | DDD | MVC</p>

            <h3>Digital Arts</h3>
            <p>Photoscape | AutoCAD</p>
          </section>
          <section className="experiencia">
            <h2>Work Experience</h2>
            <hr />

            <h3>2020-present</h3>
            <p>Software Developer at Otimize IT Consulting and Services - Vitória (Brazil)</p>

            <h3>2020-2020</h3>
            <p>Web Developer at Time-Now Engenharia - Vitória (Brazil)</p>

            <h3>2019-2020</h3>
            <p>Profissional Internship at Time-Now Engenharia - Vitória (Brazil)</p>

            <h3>2018-2019</h3>
            <p>Profissional Internship at AEVO - Vitória (Brazil)</p>

            <h3>2013-2014</h3>
            <p>Young Apprentice in eletrical area - Vila Velha (Brazil)</p>
          </section>
          <section className="sobre-mim">
            <h2>A Little Bit About me</h2>
            <hr />
            <p>I have a little less than 1 year of IT experience focused on systems development and
              about 2 years in the electrical area for maintenance, installations, industrial instrumentation
              and plant programming (just a little).</p>

            <p>When I was finishing high school I had an interest in the electrical area, which I did
              course of industrial automation with the intention of performing a graduation in this area.
              However, I realized that the main electrical sub-areas I liked were very focused on IT,
              mainly in the development and programming areas.</p>

            <p>In 2016 I started my bachelor's degree in Information Systems at IFES (Campus Serra) and until
              this moment I did not finish it. I'm also doing profissional internship in the area of ​​systems
              development, where I like it and learn a lot.</p>

            <p>Among all my hobbies, including the area of ​​development, are: exercising and practicing sports,
              most of them, playing online games and watching animes and certain series/movies.</p>
          </section>
          <section className="contato">
            <h2>Contact</h2>
            <hr />
            <p>heikacademicos@hotmail.com</p>
            <p>+5527998808574</p>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Curriculum;