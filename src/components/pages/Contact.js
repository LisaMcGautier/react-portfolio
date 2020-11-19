import React from "react";

function Contact() {
  return (
    <div>
      <br/>
      <main className="container">
        <div className="card">
          <div className="alert alert-info" role="alert">
            <h3>Contact</h3>
          </div>

          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlInput1">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lisa McDonald" />
          </div>
          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="dlanodcm4517@gmail.com" />
          </div>
          <div className="form-group pl-3 pr-3">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <div>
            <a className="btn btn-primary" href="https://www.linkedin.com/in/lisa-mcdonald-gautier/" role="button">LinkedIn</a>
            <a className="btn btn-dark m-3" href="https://github.com/LisaMcGautier" role="button">GitHub</a>
            <a className="btn btn-info" href="mcdonald resume.pdf" role="button">View resume</a>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Contact;
