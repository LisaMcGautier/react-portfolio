import React from "react";


function Project(props) {
    return (

        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">

                    <img src={props.image} className="card-img-top" alt={props.alt} />
                    <div className="card-body alert-info">

                        <h5 className="card-title">{props.title}</h5>
                        <a className="btn btn-success" href={props.url} target="_blank" rel="noopener noreferrer" role="button">Launch App</a>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;