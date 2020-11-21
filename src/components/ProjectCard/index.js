import React from "react";

function Project(props) {
    return (

        // <div className="row row-cols-1 row-cols-md-2">

            <div className="col mb-4">
                <div className="card">

                    <img src={props.image} className="card-img-top" alt={props.alt} />
                    <div className="card-body alert-info">

                        <h5 className="card-title">{props.title}</h5>
                        <a className="btn btn-dark shadow" href={props.github} target="_blank" rel="noopener noreferrer" role="button">Github repo</a>
                        <a className="btn btn-info m-3 shadow" href={props.deploy} target="_blank" rel="noopener noreferrer" role="button">Deployed app</a>
                        <a className="btn btn-light shadow" href={props.screenshot} target="_blank" rel="noopener noreferrer" role="button">screenshot</a>
                        
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default Project;