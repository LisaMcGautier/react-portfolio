import React from "react";

function Contact() {
  return (
    <div>
      <br />
      <div className="container">
        <div className="card">
          <div className="alert alert-info" role="alert">
            <h2>Contact</h2>
          </div>

          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlInputName">Name</label>
            <input type="text" className="form-control" id="exampleFormControlInputName" placeholder="Lisa McDonald" />
          </div>
          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlInputEmail">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInputEmail" placeholder="dlanodcm4517@gmail.com" />
          </div>
          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlTextareaMessage">Message</label>
            <textarea className="form-control" id="exampleFormControlTextareaMessage" rows="5"
              placeholder="Thank you for visiting my portfolio! Click the links below to open my LinkedIn and Github profiles."></textarea>
          </div>
          <div>

            <a className="btn btn-primary m-3" href="https://www.linkedin.com/in/lisa-mcdonald-gautier/" target="_blank" rel="noopener noreferrer" role="button">LinkedIn</a>
            <a className="btn btn-dark" href="https://github.com/LisaMcGautier" target="_blank" rel="noopener noreferrer" role="button">GitHub</a>
            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;
