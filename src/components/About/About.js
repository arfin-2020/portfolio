import React from 'react';
import Header from '../Home/Header/Header';
import Navbar from '../Home/Nabvar/Navbar';
import './About.css'
const About = () => {
    return (
        <div>
        <Navbar/>
            <Header/>
            <section className = "d-flex justify-content-center">
            <div className='row w-75 pt-5 m-5'>
                <div style = {{textAlign:'left'}} className ='col-md-6 mb-5'>
                            <h1>My Skills</h1>
                            <h3>Expertise:</h3>
                            <h6>HTML, CSS3, Bootstrap5, JavaScript (ES6), React JS, React Router, React Bootstrap etc.</h6>
                            <h3>Comfortable:</h3>
                            <h6>Node, Mongo</h6>
                            <h3>Familiar:</h3>
                            <h6>C, C++</h6>
                            <h3>Extra Skills:</h3>
                            <h6>Adobe Photoshop,Adobe Illustrator</h6>
                            <h3>Operating System:</h3>
                            <h6>Windows,linux</h6>
                            <h3>Tools & Software:</h3>
                            <h6>Git, VS-Code, Chrome Dev Tools, Heroku, Netlify, Firebase, MS Work, MS Excell etc.</h6>
                </div>
                <div style = {{textAlign:'left'}} className ='col-md-6'>
                            <h1>My Education</h1>
                            <h5>B.Sc Eng. in Computer Science & Engineering,<br/>German University Bangladesh.</h5>
                            <p>6th Semester (Running)</p>
                            <p>Session: 2018-2022</p>
                </div>
            </div>
            </section>
        </div>
    );
};

export default About;