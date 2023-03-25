
import metallicaPreviewImage from '../../images/trabalhos/metallica-albums/albums.png';
import timeConnectPreviewImage from '../../images/trabalhos/timeconnect/timeconnect-GPP1.png';
import filaZeroPreviewImage from '../../images/trabalhos/filazero/filazero-homepage.png';
import instagramPreviewImage from '../../images/trabalhos/instagram-clone/homepage.png';
import devioMvcPreviewImage from '../../images/trabalhos/devio-mvc/produto-details.PNG';
import apredendoInglesPreviewImage from '../../images/trabalhos/aprendendo-ingles/homepage.png';

const metallicaHtmlContent = require('./metallica-albums.dhtml');
const timeConnectHtmlContent = require('./timeconnect.dhtml');
const filaZeroHtmlContent = require('./filazero.dhtml');
const instagramHtmlContent = require('./instagram-clone.dhtml');
const devioMvcHtmlContent = require('./devio-mvc.dhtml');
const aprendendoInglesHtmlContent = require('./aprendendo-ingles.dhtml');

const projectData = [
  {
    id: 1,
    title: "Time-Connect PPM",
    imagePreview: {
      url: timeConnectPreviewImage,
      title: "Time-Connect PPM"
    },
    relatedLinks: [
      {
        link: "http://www.timenow.com.br/en/",
        title: "Time-Now Engenharia"
      },
      {
        link: "http://www.aevo.com.br/",
        title: "AEVO"
      },
      {
        link: "https://www.timenow.com.br/time-connect/",
        title: "Time-Connect"
      },
      {
        link: "https://www.timenow.com.br/gerenciamento-de-implantacao-de-projetos/",
        title: "Time-Now business process"
      }
    ],
    aboutContent: readHTMLContentFile(timeConnectHtmlContent)
  },
  {
    id: 2,
    title: "Fila Zero",
    imagePreview: {
      url: filaZeroPreviewImage,
      title: "Homepage"
    },
    relatedLinks: [
      {
        link: "https://docs.google.com/presentation/d/1UrmvfHpkkUF1ujDwcLQNgJ1IWDYhhyCwnNhIpdvS2Go/edit?usp=sharing",
        title: "Work presentation Fila Zero"
      },
      {
        link: "https://github.com/lukasg18/Topicos-Trabalho-BD2",
        title: "Documentation Fila Zero"
      },
      {
        link: "https://github.com/HaraHeique/frontend-POO-without-angular",
        title: "Front-end code"
      },
      {
        link: "https://github.com/lukasg18/poo2-backend",
        title: "Back-end code"
      }
    ],
    aboutContent: readHTMLContentFile(filaZeroHtmlContent)
  },
  {
    id: 3,
    title: "Instagram Clone",
    imagePreview: {
      url: instagramPreviewImage,
      title: "Homepage"
    },
    relatedLinks: [
      {
        link: "https://haraheique.github.io/clone-instagram/",
        title: "Instagram Clone Website"
      },
      {
        link: "https://github.com/HaraHeique/clone-instagram",
        title: "Source code"
      },
      {
        link: "https://www.instagram.com/",
        title: "Instagram"
      }
    ],
    aboutContent: readHTMLContentFile(instagramHtmlContent)
  },
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
  },
  {
    id: 5,
    title: "DevIO MVC",
    imagePreview: {
      url: devioMvcPreviewImage,
      title: "Product Detail"
    },
    relatedLinks: [
      {
        link: "https://deviomvc.azurewebsites.net/",
        title: "DevIO MVC website"
      },
      {
        link: "https://github.com/HaraHeique/devio-mvc-dotnet-5",
        title: "Source code"
      },
      {
        link: "https://www.eduardopires.net.br/",
        title: "Eduardo Pires"
      },
      {
        link: "https://desenvolvedor.io/",
        title: "Desenvolvedor.io"
      }
    ],
    aboutContent: readHTMLContentFile(devioMvcHtmlContent)
  },
  {
    id: 6,
    title: "Aprendendo Inglês",
    imagePreview: {
      url: apredendoInglesPreviewImage,
      title: "Homepage"
    },
    relatedLinks: [
      {
        link: "https://haraheique.github.io/jogo-aprendendo-ingles/",
        title: "Aprendendo Inglês website"
      },
      {
        link: "https://github.com/HaraHeique/jogo-aprendendo-ingles",
        title: "Source code"
      },
      {
        link: "https://www.udemy.com/course/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/",
        title: "Course"
      }
    ],
    aboutContent: readHTMLContentFile(aprendendoInglesHtmlContent)
  }
];

async function readHTMLContentFile(filename) {
  return await fetch(filename)
    .then(response => response.text())
    .catch(error => console.error(error));
}

export default projectData;