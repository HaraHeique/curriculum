import { useState, useEffect } from "react";
import projectData from "../assets/data/project/project.data";

export const useFetchProject = (id) => {
  const [project, setProject] = useState(null);
  const [content, setContent] = useState('');

  // OBS.: Posso também encapsular essa parte dentro de um função e retorná-la do hook, mas assim tudo bem também
  useEffect(() => {
    const projectFound = projectData.find(project => project.id === Number(id));
    setProject(projectFound);
    getContent();

    async function getContent() {
      setContent(await projectFound.aboutContent);
    }
  }, [id]);

  return { project, content };
};