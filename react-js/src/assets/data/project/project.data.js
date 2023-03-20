
import metallicaPreviewImage from '../../images/trabalhos/metallica-albums/albums.png';

const metallicaHtmlContent = require('./metallica-albums.dhtml');

const projectData = [
  {
    id: 4,
    title: "Metallica Albums",
    imagePreview: {
      url: metallicaPreviewImage,
      title: "Metallica Albums"
    },
    relatedLinks: [
      {
        link: "https://haraheique.github.io/metallica-albums-store/",
        title: "Metallica Album website"
      },
      {
        link: "https://github.com/HaraHeique/metallica-albums-store",
        title: "Source code"
      }
    ],
    aboutContent: readHTMLContentFile(metallicaHtmlContent)
  }
];

async function readHTMLContentFile(filename) {
  console.log(metallicaHtmlContent)

  return await fetch(filename)
    .then(response => response.text())
    .catch(error => console.error(error));
}

export default projectData;