import profilePhoto from '../images/profile-photo.jpg';

const personalInfo = {
  profilePhoto,
  title: "Profile Heik's Portfolio",
  fullName: "Harã Heique dos Santos",
  github: {
    link: "https://github.com/HaraHeique",
    userName: "HaraHeique"
  },
  birthDate: "May 25th, 1996",
  city: "Serra",
  country: "Brazil",
  languages: [
    "Portuguese (Native)",
    "English (Advanced)"
  ]
};

const education = [
  {
    period: "2016-2021",
    course: "Bachelor's Degree in Information Systems",
    school: "Instituto Federal Espírito Santo, Brazil"
  },
  {
    period: "2015-2016",
    course: "Professional Technician in Industrial Automation",
    school: "Instituto Federal Espírito Santo, Brazil"
  },
];

const skills = [
  {
    type: "General Development Tools",
    tools: ["Git", "GitHub", "Azure", "Azure DevOps", "Firebase", "Heroku"]
  },
  {
    type: "Development Programming Tools (Front-End)",
    tools: ["HTML", "CSS", "JavaScript", "Typescript", "jQuery", "Angular", "React", "Razor"]
  },
  {
    type: "Development Programming Tools (Back-End)",
    tools: ["C#", "Python", "Java", "C", "Ladder", ".NET Framework", ".NET Core", "Node.js", "Nest.js", "Express.js"]
  },
  {
    type: "Infrastructure Component Tools",
    tools: ["PostgreSQL", "SQL Server", "Redis", "Azure Service Bus", "RabbitMQ", "Kafka", "Docker", "Kubernetes"]
  },
  {
    type: "Programming Concepts",
    tools: ["Systems Modeling", "UML", "Clean Code", "SOLID", "DRY", "KISS", "DDD", "MVC", "Layered Architectures (Clean, Hexagonal, Onion, 3 layers and so on)", "Vertical Slice Architecture", "Event Driven Architecture"]
  },
  {
    type: "Digital Arts",
    tools: ["Photoscape", "AutoCAD"]
  },
];

const experiences = [
  {
    period: "2023-present",
    position: "Software Developer (mainly on Backend)",
    company: "Neon Pagamentos S.A",
    location: "São Paulo, Brazil"
  },
  {
    period: "2021-2022",
    position: "Software Developer",
    company: "Lambda3 Informatica LTDA",
    location: "São Paulo, Brazil"
  },
  {
    period: "2020-2021",
    position: "Software Developer",
    company: "Otimize IT Consulting and Services",
    location: "Espírito Santo, Brazil"
  },
  {
    period: "2020-2020",
    position: "Web Developer",
    company: "Time-Now Engenharia",
    location: "Espírito Santo, Brazil"
  },
  {
    period: "2019-2020",
    position: "Profissional Internship",
    company: "Time-Now Engenharia",
    location: "Espírito Santo, Brazil"
  },
  {
    period: "2018-2019",
    position: "Profissional Internship",
    company: "AEVO Information Tecnology S.A",
    location: "Espírito Santo, Brazil"
  },
  {
    period: "2013-2014",
    position: "Young Apprentice in eletrical area",
    company: "Chocolates Garoto LTDA",
    location: "Espírito Santo, Brazil"
  },
];

const aboutMe = {
  title: "A Little Bit About me",
  description: `
    I'm working in software development area for about 5 years focused on different types 
    of business systems and about 2 years in the electrical area for maintenance, installations, 
    industrial instrumentation and plant programming (just a little). <br/>
    
    When I was finishing high school I had an interest in the electrical area, which I did
    course of industrial automation with the intention of performing a graduation in this area.
    However, I realized that the main electrical sub-areas I liked were very focused on IT,
    mainly in the development and programming areas. <br/>

    In 2016 I started my bachelor's degree in Information Systems at IFES (Campus Serra) and graduated in 2021.
    Today I'm working on a fintech (Financial Technology) called Neon as software developer focused mainly on back-end part. <br/>

    Among all my hobbies, including the area of software development and architecture, are: exercising and practicing some sports,
    most of them, playing online games and watching animes and certain series/movies.
  `
};

const contact = {
  email: "heikacademicos@hotmail.com",
  phoneNumber: "+5527998808574"
};

const curriculumData = {
  personalInfo, education, skills, 
  experiences, aboutMe, contact
};

export default curriculumData;