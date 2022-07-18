import "../styles/ProjectList.css";
import Project from "./Project";
import { useState, useEffect } from "react";

function ProjectList() {
  const [githubData, setGithubData] = useState([]);

  const fetchData = () => {
    return fetch("https://api.github.com/users/jolshylar/repos")
      .then((res) => res.json())
      .then((data) => setGithubData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="projects">
      <h1 className="members--title" data-aos="fade-down">Our Projects</h1>
      <div className="project-container">
        <div className="project-list">
          {githubData.length > 0 && githubData.map((project) => (
            <Project key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
