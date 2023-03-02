
import moreImg from './assets/icons/moreIcon.png'

function Projects() {
    return (
        <div className="see">
            <h1 className="projects-h1">Projects</h1>
            <div className="projects-Card py-5 bg-light">
                <div className="container ">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        <div className="col">
                            <svg className="bd-placeholder-img card-img-top" width="60%" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect></svg>
                            <div className="card-body">
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Code</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="projects-btn" src={moreImg} alt="more-Icon"></img>
        </div>
    )
}

export default Projects;