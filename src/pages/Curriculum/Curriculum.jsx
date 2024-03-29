import './Curriculum.css';
import curriculumData from '../../assets/data/curriculum.data';
import Breadcrumb from '../../components/Breadcrumb';
import React from 'react';

const Curriculum = () => {
  const { personalInfo, education, skills, experiences, aboutMe, contact } = curriculumData;

  const printScreen = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
    <>
      <Breadcrumb currentPage="Curriculum" />
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
          <img className="cv-pic" src={personalInfo.profilePhoto} alt={personalInfo.fullName}
            title={personalInfo.title} />

          <h3 style={{ marginTop: '40px' }}>Name:</h3>
          <p>{personalInfo.fullName}</p>

          <h3>GitHub:</h3>
          <p><a href={personalInfo.github.link} target="_blank">{personalInfo.github.userName}</a></p>

          <h3>Birth Date:</h3>
          <p>{personalInfo.birthDate}</p>

          <h3 style={{ clear: 'left' }}>Residence:</h3>
          <p>{`${personalInfo.city}, ${personalInfo.country}`}</p>

          <h3>Languages:</h3>
          <p dangerouslySetInnerHTML={{ __html: personalInfo.languages.join('</br>') }}></p>
        </section>
        <section className="educacao">
          <h2>Education</h2>
          <hr />
          {
            education.map(item => (
              <React.Fragment key={item.course}>
                <h3>{item.period}</h3>
                <p>{item.course} - {item.school}</p>
              </React.Fragment>
            ))
          }
        </section>
        <section className="habilidades">
          <h2>Skills</h2>
          <hr />
          {
            skills.map(item => (
              <React.Fragment key={item.type}>
                <h3>{item.type}</h3>
                <p>{item.tools.join(' | ')}</p>
              </React.Fragment>
            ))
          }
        </section>
        <section className="experiencia">
          <h2>Work Experience</h2>
          <hr />
          {
            experiences.map(item => (
              <React.Fragment key={item.period}>
                <h3>{item.period}</h3>
                <p>{item.position} at {item.company} - {item.location}</p>
              </React.Fragment>
            ))
          }
        </section>
        <section className="sobre-mim">
          <h2>{aboutMe.title}</h2>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: aboutMe.description }}></p>
        </section>
        <section className="contato">
          <h2>Contact</h2>
          <hr />
          <p><b>Email:</b> {contact.email}</p>
          <p><b>Phone:</b> {contact.phoneNumber}</p>
        </section>
      </article>
    </>
  );
};

export default Curriculum;