import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import projectData from "../assets/data/project/project.data";

import Breadcrumb from "../components/Breadcrumb";

const Project = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    const projectFound = projectData.find(project => project.id === Number(id));
    setProject(projectFound);
    getContent();

    async function getContent() {
      setContent(await projectFound.aboutContent);
    }
  }, [id]);

  if (!project) return (<p>Carregando...</p>);

  return (
    <>
      <Breadcrumb previousPage="Portfolio" currentPage={project.title} />
      <article>
        <h1>{project.title}</h1>
        <img class="foto-trabalhos" src={project.imagePreview.url} alt={project.imagePreview.title} title={project.imagePreview.title} />

        <h2>About Project</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>

        <h2>Related links:</h2>
        <p>
          {
            project.relatedLinks.map(item => (
              <>
                <a class="link" href={item.link} target="_blank">{item.title}</a><br />
              </>
            ))
          }
        </p>
      </article>
    </>
  );
};

export default Project;