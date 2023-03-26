import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';

export const useDocumentTitle = (title = null) => {
  const location = useLocation();

  useEffect(() => {
    const titlePrefix = "Harã Heique";
    const dynamicTitles = {
      "/": "Portfolio Online",
      "/portfolio": "Portfolio",
      "/my-curriculum": "Curriculum",
      "/contact": "Contact"
    };

    if (!title) {
      document.title = `${titlePrefix} - ${dynamicTitles[location.pathname]}`;
    } else if (location.pathname.startsWith('/project')) {
      document.title = `Portfolio - ${title}`;
    }

  }, [location.pathname, title]);
};