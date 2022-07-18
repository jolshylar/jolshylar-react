import "../../styles/ProjectCard.css";
import { IoStar, IoLink } from "react-icons/io5";

function Project({ project }) {
  const iconStyles = { width: 12, height: 12 }

  return (
    <div className="project-card" data-aos="flip-left">
      <>
        <img
          className="preview"
          alt="project preview"
          src={`/images/previews/${project.name}.png`}
        />
        <div className="content">
          <h2>{project.name}</h2>
          <div className="content--info">
            <ul>
              <li style={{ alignItems: "center" }}>
                Stars: {project.stargazers_count} <IoStar style={iconStyles} />
              </li>
              <li>Language: {project.language}</li>
            </ul>
          </div>
          <a href={project.homepage || project.html_url}>
            <button>
              <IoLink style={iconStyles} /> Visit
            </button>
          </a>
          <p>{project.description}</p>
        </div>
      </>
    </div>
  );
}

export default Project;
