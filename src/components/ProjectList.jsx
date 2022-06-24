import "../styles/ProjectList.css";
import Project from "./Project";
import data from "../data/project";

function ProjectList() {
  return (
    <div className="projects">
      <h1 className="members--title">Our Projects</h1>
      <div className="project-container">
        <div className="project-list">
          {data.map((repo) => (
            <Project key={repo.name} project={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
