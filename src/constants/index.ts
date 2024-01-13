import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  kubernetes,
  angular,
  azure,
  cpp,
  csharp,
  gradle,
  java,
  maven,
  python,
  sql,
  desjardins,
  groupeazur,
  projetperso,
  projet4,
  colorization,
  motscroises,
  jeudecourse,
  thiago
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "pdf",
    title: "PDF Resume",
  },

];

const services: TService[] = [
  {
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps",
    icon: mobile,
  },
  {
    title: "AI specialization",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML / CSS",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "Java",
    icon: java,
  }
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "Desjardins",
    icon: desjardins, // Replace with your actual icon variable
    iconBg: "#383E56", // Replace with the desired background color
    date: "2020 - Present",
    points: [
      "Created multiple web apps using Angular / React, empowered by modern technologies like RxJs, NgRx, SASS, Web-Components, etc.",
      "Used Java Spring Boot to create a Backend for Fronted (BFF) and Microservices connected to SQL Databases.",
      "Deployed applications in Azure Cloud environments, from dev to production, using CI and CD tools like Concourse, Artifactory, Git.",
      "Managed multiple Azure Kubernetes Servers (AKS) to assure stability and continuous delivery.",
      "Implemented a custom layer of OpenId Connect protocol in our Liferay Portal to respect the company’s needs and enhance security.",
      "Wrote unit tests and integration tests for both backend and frontend applications, with Jasmine, Karma, Selenium, and Junit."
    ],
  },
  {
    title: "Software Engineer Intern",
    companyName: "Groupe AZUR",
    icon: groupeazur, // Replace with your actual icon variable
    iconBg: "#E6DEDD", // Replace with the desired background color
    date: "2018",
    points: [
      "Participated in the development of professional web applications for IATA using Angular and HTML5.",
      "Fixed multiple issues in the Backend, implemented in C# with .NET framework.",
      "Worked with a big data SQL database containing 1M+ rows, while having to maintain efficient requests."
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Valentin is extremely motivated and focused on his work, while else being someone funny and enjoyable to have at the work place. ",
    name: "Thiago Barbosa",
    designation: "Sr Developer",
    company: "Azur Group",
    image: thiago,
  }
];

const projects: TProject[] = [
  {
    name: "Platform for Studying Together",
    description:
      "A personal project designed to facilitate collaborative study among Polytechnique students. The platform enables students to view and schedule their own revision sessions and labs work, fostering a community-based learning environment.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: projetperso,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "FPGA Accelerator / Web IDE",
    description:
      "This project's objective is to enhance code processing speed. It utilizes Facebook's Pytorch library on an FPGA card system in the AWS cloud. Efficiency gains are achieved through a web interface or Python CLI, and by reengineering Pytorch's lower-level functions using OpenCL.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: projet4,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Video Colorization - Deep Learning",
    description:
      "Employing a full-convolution architecture, it transforms grayscale videos into its color version. It leverages a dataset of 40,000 ImageNet images for its training process, demonstrating the application of deep learning in image colorization.",
    tags: [
      {
        name: "Pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Numpy",
        color: "pink-text-gradient",
      },
    ],
    image: colorization,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Web Games - Crossword",
    description:
      "Multiplayer crossword game for browsers. Real-time communication is done via socket.io, and the algorithm for generating a 10x10 grid is completed in less than 10 seconds.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: motscroises,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Web Games - Car Racing",
    description:
      "3D car racing game using the Threejs library. The player has the ability to create their own tracks and compete against AI of varying skill levels.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "WebGL",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "pink-text-gradient",
      },
    ],
    image: jeudecourse,
    sourceCodeLink: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
