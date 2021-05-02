import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Project.css'
const ProjectDetails = ({project}) => {
    return (
        <div style = {{height:"700px",textAlign:"justify"}} className=" project-hover cotainer-fluid row d-flex align-items-center project-style mb-5">
                            <div className="col-md-6">
                                <img  className ="img-fluid" src={project.image} alt="" height="300px" width = "600px"/>
                            </div>
                            <div className="col-md-4 offset-md-1">
                                <h2 className="text-dark">{project.title}</h2>
                                <p className="text-dark">{project.summary}</p>
                                <p className = "text-dark"><b>Technology: {project.technology}</b></p>
                                <a href ={project.git} target="_blanck">
                                 <FontAwesomeIcon className = "fa-2x icons-margin" color ="black"  icon={faGithub} height = "40px" width = '40px'/>
                                 <a href ={project.live} target="_blanck">
                                 <button  className="live-btn">Live</button>
                                </a>
                                </a>
                                
                            </div>
        </div>
    );
};

export default ProjectDetails;