import React from "react";
import ProjectCard from "../ProjectCard/index";
import projects from "../../projects.json";

function Home() {
  return (
    <div>
      <br />
      <h1>Projects</h1>

      <ProjectCard />

      {projects.map((project) => <ProjectCard key={project.id} image={project.image} alt={project.alt} title={project.title} href={project.href} />)}

      {/* {friendsList.map((friend)=><FriendCard key={friend.id} name={friend.name} image={friend.image} occupation={friend.occupation} location={friend.location} />)} */}

    </div>

  );
}

export default Home;
