import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import { useFetchProject } from "../hooks/useFetchProject";

const Project = () => {
  const { id } = useParams();
  const { project, content } = useFetchProject(id);

  if (!project) return (<p>Carregando...</p>);

  return (
    <>
      <Breadcrumb previousPage="Portfolio" currentPage={project.title} />
      <article>
        <h1>{project.title}</h1>
        <img className="foto-trabalhos" src={project.imagePreview.url} alt={project.imagePreview.title} title={project.imagePreview.title} />

        <h2>About Project</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>

        <h2>Related links:</h2>
        <p>
          {
            project.relatedLinks.map(item => (
              <React.Fragment key={item.title}>
                <a className="link" href={item.link} target="_blank">{item.title}</a><br />
              </React.Fragment>
            ))
          }
        </p>
      </article>
    </>
  );
};

export default Project;