import "../styles/Project.css";

function Project({ project }) {
  const preview = require(`../images/previews/${project.fileName}`);

  return (
    <div className="project-card">
      <img className="preview" alt="project preview" src={preview} />
      <div className="content">
        <h2>{project.name}</h2>
        <a href={project.url}>
          <button>Visit</button>
        </a>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default Project;
