import React from "react";

function About() {
  return (
    <div>
      <br/>
      <div className="container">
        <div className="card">
          <div className="alert alert-info" role="alert">
            <h2>About Me</h2>
          </div>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-12">
              <img src="https://images.unsplash.com/photo-1570694236386-615cb025956b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" className="rounded float-left m-md-3" alt="Morning Wave" width="300" height="300" />
            </div>

            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-7 offset-md-2 col-md-6 col-sm-12">
            <br/>
            <br/>
              <p> <b>Skills acquired:</b> <em>HTML, CSS, JavaScript, jQuery, Bootstrap, GitHub, Heroku, Materialize, JSON, NodeJS, ExpressJS, AJAX, APIs, MySQL, MongoDb, ReactJS, ... </em> </p>
              <p className="text-md-center m-sm-3">I am learning to code with University of Miami Coding Bootcamp. My educational background is in theatre. My work experience includes technical theatre (lighting and backstage) and secondary education. For the past decade, I have been teaching high school Theatre and English. I chose to pursue coding bootcamp because I am interested in expanding my skillset and increasing my earning potential. <br/> <b> The page you are looking at is a work in progress.</b> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
