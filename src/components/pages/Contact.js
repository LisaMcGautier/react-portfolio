import React from "react";

function Contact() {
  return (
    <div>
      <h1></h1>
      <main class="container">
        <div class="card">
          <div class="alert alert-info" role="alert">
            <h3>Contact</h3>
          </div>

          <div class="form-group pl-3 pr-3">
            <label for="exampleFormControlInput1">Name</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Lisa McDonald" />
          </div>
          <div class="form-group pl-3 pr-3">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="dlanodcm4517@gmail.com" />
          </div>
          <div class="form-group pl-3 pr-3">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
          </div>
          <div>
            <a class="btn btn-primary" href="https://www.linkedin.com/in/lisa-mcdonald-gautier/" role="button">LinkedIn</a>
            <a class="btn btn-dark" href="https://github.com/LisaMcGautier" role="button">GitHub</a>
            <a class="btn btn-info" href="mcdonald resume.pdf" role="button">View resume</a>
          </div>

        </div>
      </main>
    </div>
  );
}

export default Contact;
