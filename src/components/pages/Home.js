import React from "react";
import ProjectCard from "../ProjectCard/index";
import projects from "../../projects.json";

function Home() {
  return (
    <div>
      <br />
      <h1>Projects</h1>

      {projects.map((project) => <ProjectCard key={project.id} image={project.image} alt={project.alt} title={project.title} href={project.href} />)}

    </div>

  );
}

export default Home;
