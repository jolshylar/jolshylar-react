import "../styles/Project.css";
import { BiLinkExternal } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

function Project({ project }) {
  const getPreview = (name) => {
    try {
      return require(`../images/previews/${name}.png`);
    } catch (err) {
      return require("../images/previews/unavailable.png");
    }
  };

  return (
    <div className="project-card" data-aos="flip-left">
      <img
        className="preview"
        alt="project preview"
        src={getPreview(project.name)}
      />
      <div className="content">
        <h2>{project.name}</h2>
        <div className="content--info">
          <ul>
            <li>
              Stars: {project.stargazers_count} <AiOutlineStar />
            </li>
            <li>Language: {project.language}</li>
          </ul>
        </div>
        <a href={project.homepage || project.html_url}>
          <button>
            <BiLinkExternal /> Visit
          </button>
        </a>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
