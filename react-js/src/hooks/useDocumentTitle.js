import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';

export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titlePrefix = "Harã Heique";
    const dynamicTitles = {
      "/": "Portfolio Online",
      "/portfolio": "Portfolio",
      "/curriculum": "Curriculum",
      "/contact": "Contact"
    };

    document.title = `${titlePrefix} - ${dynamicTitles[location.pathname]}`;

  }, [location.pathname]);
};