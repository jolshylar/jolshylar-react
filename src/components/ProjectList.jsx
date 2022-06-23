import "../styles/ProjectList.css";
import Project from "./Project";
import { useState, useEffect } from "react";

function ProjectList() {
  const [repos, setRepos] = useState();
  const ignoredRepoNames = [".github", "jolshylar"];

  const getGithubRepos = async () => {
    const response = await fetch(
      "https://api.github.com/users/jolshylar/repos"
    ).then((response) => response.json());

    const repositories = response.filter(
      (repo) => !ignoredRepoNames.includes(repo.name)
    );
    setRepos(repositories);
  };

  useEffect(() => {
    getGithubRepos();
  });

  return (
    <div className="projects">
      <h1 className="members--title">Our Projects</h1>
      <div className="project-container">
        <div className="project-list">
          {repos && repos.map((repo) => <Project project={repo} />)}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
