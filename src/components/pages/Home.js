import React from "react";
import ProjectCard from "../ProjectCard/index";
import projects from "../../projects.json";

function Home() {
  return (
    <div>
      <br />
      <div className="container">
        <div className="card">
          <div className="alert alert-info" role="alert">
            <h2>Projects</h2>
          </div>

          <div className="card-body">

            <div className="row row-cols-1 row-cols-md-2">

              {projects.map((project) => <ProjectCard key={project.id} image={project.image} alt={project.alt} title={project.title} github={project.github} deploy={project.deploy} screenshot={project.screenshot} />)}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
