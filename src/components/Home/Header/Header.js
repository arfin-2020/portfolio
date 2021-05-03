import React from 'react';
import topImage from '../../../images/Arfin01.png' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Header.css'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
    return (
        <div style = {{height:"800px"}} className="cotainer-fluid row d-flex align-items-center "> 
            <div className="col-md-4 offset-md-1">
                <p>HELLO THERE!</p>
                <h2>I'm Arfin Chowdhury Arif.</h2>
               <li>Web Developer || Programmer</li> <br/>
                        <p style = {{textAlign:'justify'}}>I love to learn new technology. Still, I am learning. 
                        I also love problem-solving. Actually, I am very passionate to solve problems & 
                        learning upcoming technologies. I am currently working with React, Node, MongoDB, Express etc
                        </p>
                <div className ="icons">
                        <a href ="https://www.linkedin.com/in/arfin-chowdhury-arif-0b6308173/" target="_blanck">
                        <FontAwesomeIcon className = "fa-2x icons-margin"  icon={faLinkedinIn} height = "40px" width = '40px'/>
                        </a>
                        <a href ="https://www.facebook.com/Arfin005/" target="_blanck">
                        <FontAwesomeIcon className = "fa-2x icons-margin"  icon={faFacebook} height = "40px" width = '40px'/>
                        </a>
                        <a href ="https://github.com/arfin-2020" target="_blanck">
                        <FontAwesomeIcon className = "fa-2x icons-margin" color ="black"  icon={faGithub} height = "40px" width = '40px'/>
                        </a>
                        <a href ="mailto:arfinchowdhuryarif7@gmail.com" target="_blanck">
                        <FontAwesomeIcon className = "fa-2x icons-margin" color = "red" icon={faEnvelope} height = "40px" width = '40px'/>
                        </a>
                </div>
                <a href ="https://www.linkedin.com/in/arfin-chowdhury-arif-0b6308173/" target="_blanck">
                        <button  className="fency-btn">Hire Me</button>
                </a>
                <a href ="https://drive.google.com/file/d/1_EmRh6su3P9BTrrgZtg8loEazWO4bPc2/view?usp=sharing" target="_blanck">
                        <button className="fency-btn">Resume</button>
                </a>
            </div>
            <div className="col-md-6 mt-3">
                <img className="img-fluid image" src={topImage} alt="" height="550px" width ="550px" />
            </div>
        </div>
    );
};

export default Header;