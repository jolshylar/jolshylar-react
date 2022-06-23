import "../styles/Project.css";
import { BiLinkExternal } from "react-icons/bi";

function Project({ project }) {
  const preview = require(`../images/previews/${project.fileName}`);

  return (
    <div className="project-card">
      <img className="preview" alt="project preview" src={preview} />
      <div className="content">
        <h2>{project.name}</h2>
        <a href={project.url}>
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
