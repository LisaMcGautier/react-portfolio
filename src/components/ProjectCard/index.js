import React from "react";


function Project(props) {
    return (

        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
                <div className="card">

                    <img src={props.image} className="card-img-top" alt={props.alt} />
                    <div className="card-body alert-info">

                        <h5 className="card-title">{props.title}</h5>
                        <a className="btn btn-success" href={props.url} role="button">Launch App</a>

                        {/* <a className="btn btn-dark" href="https://github.com/swatso2020/Project2" role="button">Go to Repo</a>
                        <a className="btn btn-light" href="screenshots/cookin.html" target="_blank" role="button">screenshots</a>
                        <a className="btn btn-info" href="https://infinite-falls-09874.herokuapp.com/" role="button">App on Heroku</a> */}
                    </div>
                </div>
            </div>
        </div>

        // <div className="row row-cols-1 row-cols-md-2">
        //     <div className="col mb-4">
        //         <div className="card">
        //             <img src="https://images.unsplash.com/photo-1518291344630-4857135fb581?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        //                 className="card-img-top" alt="cooking" />
        //             <div className="card-body alert-info">
        //                 <h5 className="card-title">What's Cookin'   (Project 2)</h5>
        //                 <a className="btn btn-dark" href="https://github.com/swatso2020/Project2" role="button">Go to Repo</a>
        //                 <a className="btn btn-light" href="screenshots/cookin.html" target="_blank" role="button">screenshots</a>
        //                 <a className="btn btn-info" href="https://infinite-falls-09874.herokuapp.com/" role="button">App on Heroku</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Project;