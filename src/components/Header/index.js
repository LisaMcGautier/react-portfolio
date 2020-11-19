import React from "react";
import "./style.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-warning">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <a className="navbar-brand p-3 mb-2 bg-primary btn btn-outline-primary text-white font-italic"
                            href="#">Lisa McDonald</a>
                    </div>
                </div>

                {/* <div className="row">
                    <div className="col-sm-12 navbar-nav">
                        <a className="nav-item nav-link" href="index.html">About</a>
                        <a className="nav-item nav-link" href="contact.html">Contact</a>
                        <a className="nav-item nav-link active" href="#">Portfolio<span class="sr-only">(current)</span></a>
                    </div>
                </div> */}
                
            </div>
        </nav>
    );
}

export default Header;
