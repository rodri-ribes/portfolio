import { TFunction } from "i18next";
import { ProjectCard } from "../CardProject/CardProject";

export default function apps(translation: TFunction): ProjectCard[] {
  return [
    {
      title: "E-commerce Dress",
      type: translation("filter.projects"),
      technology:
        "JavaScript, React JS, SCSS, TanStack Query, MongoDB, Moongose (ODM), JsonWebToken, Bcrypt, Node JS, Express",
      img: "/img/slider/projects/mateek/1.jpeg",
      linkDeploy: "https://ecommerce-react-client-jade.vercel.app/",
      linkGithub: "https://github.com/rodri-ribes/ecommerce-dress-react",
      text: translation("projects.description-mateek"),
      deployed: "finished",
      templateimg: '',
      images: [
        "projects/mateek/1.jpeg",
        "projects/mateek/2.jpeg",
        "projects/mateek/3.jpeg",
        "projects/mateek/4.jpeg",
        "projects/mateek/5.jpeg",
        "projects/mateek/6.jpeg",
      ],
    },
    {
      title: "RibesCompress",
      type: translation("filter.apps"),
      technology: "JavaScript, React JS, SCSS",
      img: "./img/slider/apps/ribescompress/1.jpg",
      linkDeploy: "https://ribes-compress.vercel.app/",
      linkGithub: "https://github.com/rodri-ribes/RibesCompress",
      text: translation("apps.description-ribescompress"),
      deployed: "finished",
      templateimg: '',
      images: ["apps/ribescompress/1.jpg"],
    },
    {
      title: "Technology E-Commerce",
      type: translation("filter.templates"),
      technology: "JavaScript, React JS, SCSS",
      img: "/img/slider/templates/technology-ecommerce/technology-ecommerce-1.jpg",
      linkDeploy: "https://technology-ecommerce-template.vercel.app/",
      linkGithub:
        "https://github.com/rodri-ribes/technology-ecommerce-template/",
      text: translation("templates.description-technology-ecommerce"),
      templateimg:
        "./img/slider/templates/technology-ecommerce/templateimg.jpg",
      deployed: "finished",
      
      images: [
        "templates/technology-ecommerce/technology-ecommerce-1.jpg",
        "templates/technology-ecommerce/technology-ecommerce-2.jpg",
        "templates/technology-ecommerce/technology-ecommerce-3.jpg",
        "templates/technology-ecommerce/technology-ecommerce-4.jpg",
        "templates/technology-ecommerce/technology-ecommerce-5.jpg",
        "templates/technology-ecommerce/technology-ecommerce-6.jpg",
        "templates/technology-ecommerce/technology-ecommerce-7.jpg",
      ],
    },
    {
      title: "KFC",
      type: translation("filter.templates"),
      technology: "JavaScript, React JS, SCSS",
      img: "/img/slider/templates/kfc/kfc-template-1.jpg",
      linkDeploy: "https://kfc-template.vercel.app/",
      linkGithub: "https://github.com/rodri-ribes/kfc-template",
      text: translation("templates.description-kfc"),
      templateimg: "./img/slider/templates/kfc/templateimg.jpg",
      deployed: "finished",
      images: [
        "templates/kfc/kfc-template-1.jpg",
        "templates/kfc/kfc-template-2.jpg",
        "templates/kfc/kfc-template-3.jpg",
        "templates/kfc/kfc-template-4.jpg",
        "templates/kfc/kfc-template-5.jpg",
        // "templates/kfc-template-6.jpg",
      ],
    },
    {
      title: "Top-Gym",
      type: translation("filter.templates"),
      technology: "JavaScript, React JS",
      img: "/img/slider/templates/top-gym/top-gym-1.jpg",
      linkDeploy: "https://top-gym-ribes.netlify.app/",
      linkGithub: "https://github.com/rodri-ribes/top-gym",
      text: translation("projects.description-top-gym"),
      deployed: "finished",
      templateimg: '',

      images: [
        "templates/top-gym/top-gym-1.jpg",
        "templates/top-gym/top-gym-2.jpg",
        "templates/top-gym/top-gym-3.jpg",
        "templates/top-gym/top-gym-4.jpg",
      ],
    },
    {
      title: "Wiki-Games",
      type: translation("filter.projects"),
      technology: "JavaScript, React JS, Redux",
      img: "/img/slider/projects/wiki-games/wiki-games-1.jpg",
      linkDeploy: "https://wiki-games-ribes.netlify.app/",
      linkGithub: "https://github.com/rodri-ribes/games-app",
      text: translation("projects.description-wiki-games"),
      deployed: "finished",
      templateimg: '',

      images: [
        "projects/wiki-games/wiki-games-1.jpg",
        "projects/wiki-games/wiki-games-2.jpg",
        "projects/wiki-games/wiki-games-3.jpg",
        "projects/wiki-games/wiki-games-4.jpg",
        "projects/wiki-games/wiki-games-5.jpg",
        "projects/wiki-games/wiki-games-6.jpg",
        "projects/wiki-games/wiki-games-7.jpg",
        "projects/wiki-games/wiki-games-8.jpg",
        "projects/wiki-games/wiki-games-9.jpg",
        "projects/wiki-games/wiki-games-10.jpg",
      ],
    },
    {
      title: "Express Market",
      type: translation("filter.projects"),
      technology:
        "TypeScript, Angular v13, Node JS, Express JS, Mongoose (ODM), MongoDB, Bcrypt, JWT",
      img: "/img/slider/projects/express-market/express-market-1.jpg",
      linkDeploy: "",
      linkGithub: "https://github.com/rodri-ribes/ExpressMarket",
      text: translation("projects.description-express-market"),
      deployed: translation("projects.suspend"),
      templateimg: '',

      images: [
        "projects/express-market/express-market-1.jpg",
        "projects/express-market/express-market-2.jpg",
        "projects/express-market/express-market-3.jpg",
        "projects/express-market/express-market-4.jpg",
      ],
    },
    {
      title: "Search App",
      type: translation("filter.apps"),
      technology: "JavaScript, React JS, Redux",
      img: "/img/slider/projects/search-app/search-app-1.jpg",
      linkDeploy: "https://search-ribes.netlify.app/",
      linkGithub: "https://github.com/rodri-ribes/search-app",
      text: translation("projects.description-search-app"),
      deployed: "finished",
      templateimg: '',

      images: [
        "projects/search-app/search-app-1.jpg",
        "projects/search-app/search-app-2.jpg",
        "projects/search-app/search-app-3.jpg",
        "projects/search-app/search-app-4.jpg",
      ],
    },
    {
      title: "BookITech",
      type: translation("filter.projects"),
      technology:
        "JavaScript, React JS, Redux JS, Node JS, Express JS, Mongoose (ODM), MongoDB, Bcrypt, JWT",
      img: "/img/slider/projects/booki-tech/booki-tech-1.jpg",
      linkDeploy: "https://bookitech-olive.vercel.app/",
      linkGithub: "https://github.com/rodri-ribes/BookITech",
      text: translation("projects.description-bookitech"),
      deployed: "finished",
      templateimg: '',

      images: [
        "projects/booki-tech/booki-tech-1.jpg",
        "projects/booki-tech/booki-tech-2.jpg",
        "projects/booki-tech/booki-tech-3.jpg",
        "projects/booki-tech/booki-tech-4.jpg",
      ],
    },
    // {
    //   title: "Wheater-App",
    //   type: translation("filter.apps"),
    //   technology: "JavaScript, React JS, Redux JS",
    //   img: "/img/slider/wheater.jpg",
    //   linkDeploy: "https://weather-ribes.netlify.app/",
    //   linkGithub: "https://github.com/rodri-ribes/weather-app",
    //   text: translation("projects.description-wheater-app"),
    //   deployed: "finished",
    //   images: [" sdad"],
    // },
  ];
}
