import "../styles/ProjectList.css";
import data from "../data/projects";
import Project from "./Project";

function ProjectList() {
  return (
    <div className="projects">
      <h1 className="members--title">Our Projects</h1>
      <div className="project-container">
        <div className="project-list">
          {data.map((project) => (
            <Project project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
