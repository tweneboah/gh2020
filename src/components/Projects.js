import React, { useState, useEffect } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchProject = async () => {
    try {
      const res = await axios.get(
        "https://teklinco-project-manager.herokuapp.com/projects"
      );
      console.log(res.data);
      setProjects((prevState) => {
        return [res.data];
      });
      setProjects(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProject();
  }, []);

  console.log(projects);
  return (
    <div>
      <h1>Projects</h1>
      {projects === [] ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <h1>{project.title}</h1>
                <h1>{project.description}</h1>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
