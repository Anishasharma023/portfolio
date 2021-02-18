import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import php from "../../assets/img/skills/php.svg";
import codeigniter from "../../assets/img/skills/codeigniter.png";


export const skills = {
  frontend: [
    {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: L_BOOTSTRAP,
      skillName: "Bootstrap",
    },
    {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
    {
      link: "https://react-bootstrap.github.io/",
      imgAltText: "React Bootstrap",
      imgSrc: L_REACT_BOOTSTRAP,
      skillName: "React Bootstrap",
    },
    /*{
      link: "https://material-ui.com/",
      imgAltText: "Material-UI",
      imgSrc: L_MATERIALUI,
      skillName: "Material-UI",
    },
    {
      link: "https://styled-components.com/",
      imgAltText: "styled-components",
      imgSrc: L_STYLED_COMPONENTS,
      skillName: "styled-components",
    },*/
    
  ],

  backend: [
    {
      link: "https://pages.github.com/",
      imgAltText: "Core PHP",
      imgSrc: php,
      skillName: "Core PHP",
    },

    {
      link: "https://pages.github.com/",
      imgAltText: "Codeigniter",
      imgSrc: codeigniter,
      skillName: "Codeigniter",
    },

  ],
  
  hostingPlatforms: [
    {
      link: "https://pages.github.com/",
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
  ],
  databases: [
    {
      link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: L_GIT,
      skillName: "GIT",
    },
  ],
};
