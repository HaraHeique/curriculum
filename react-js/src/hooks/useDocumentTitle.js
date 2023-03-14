import { useLocation } from 'react-router-dom'; 
import { useEffect } from 'react';

export const useDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titlePrefix = "Harã Heique";
    const dynamicTitles = {
      "/": "Portfolio Online",
      "/curriculum": "Curriculum"
    };

    document.title = `${titlePrefix} - ${dynamicTitles[location.pathname]}`;

  }, [location.pathname]);
};