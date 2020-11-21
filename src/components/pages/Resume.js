import React from "react";

import resume from "../../assets/mcdonaldresume.pdf";

function Resume() {
  return (
    <div>
      <br />
      <div className="container">
        <div className="card">
          <div className="alert alert-info" role="alert">
            <h2>Resume</h2>
          </div>

          <div className="card-body">

            <p>Click on a link to view my resume.</p>

            <a className="btn btn-primary shadow" href="https://docs.google.com/document/d/1Eztzt8KSfQuLfV07t5BxYEDhVRjX52tCK7rofDFVTjU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" role="button">Google Doc</a>
            <a className="btn btn-danger m-3 shadow" href={resume} target="_blank" rel="noopener noreferrer" role="button">PDF</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
