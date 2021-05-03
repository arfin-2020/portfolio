import React from 'react';
import hantsman from '../../../images/huntsman.png'
import emajhon from '../../../images/emajhon.png'
import doctorPortal from '../../../images/doctorPortal.png'
import bookHouse from '../../../images/bookHouse.png'
import ProjectDetails from './ProjectDetails';
import Navbar from '../Nabvar/Navbar';
const Project = () => {
    const projects = [
        {
            id:"1",
            image: hantsman,
            title: "Huntsman Photography",
            technology: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Firebase, MongoDB, Payment system Stripe, etc.",
            live: "https://huntsmen-photography.web.app/",
            git: "https://github.com/arfin-2020/Huntsmen-Photography",
            summary: "It's a full MERN stack Web Application. It’s a Photography type web application. Where everyone easily contacts the photographer for photography. Here you can see the order list, you can add here review, service, etc. Also, update a booking status. It also has Google authentication within firebase.",
            
        },
        {   id:"2",
            image: emajhon,
            title: "EmaJhon Ecommerce(MERN)",
            technology: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Firebase, MongoDB, Payment system Stripe, etc.",
            live: "https://boring-shaw-6c4634.netlify.app/",
            git: "https://github.com/arfin-2020/ema-jhon-clientside",
            summary: "It's a full MERN stack Website. It’s an ecommerce website. Here you can buy any products. You can easily add to the cart for your buying purpose. You can check your order list & also remove your order before place order. You can order to your address. Here I have use stripe payment gateway. It also has Google authentication within firebase.",
            
        },
        {   id:"3",
            image: doctorPortal,
            title: "Doctors Portal(MERN)",
            technology: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Firebase, MongoDB, etc.",
            live: "https://doctor-portal-94182.web.app/",
            git: "https://github.com/arfin-2020/Doctors-portal",
            summary: "It is a full stack website. This site is good service provider. Here you can easily get your doctor’s appointment with your desire. You can see here patient list. You can add here new doctors information. It also has Google authentication within firebase.",
            
        },
        // {
        //     image: bookHouse,
        //     title: "Online Book House",
        //     technology: "HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Firebase, MongoDB, etc.",
        //     live: "https://book-a10.web.app/",
        //     git: "https://github.com/arfin-2020/Online-Book-Hose",
        //     summary: "This is a Book selling website. Here you can buy any kind of books. Also you can add here your preferable books & also remove books. It also has Google authentication within firebase.",
            
        // },
    ]
    return (
            <div>
            <Navbar/>
                <section className="d-flex justify-content-center">
            <div className ='row w-75 pt-5 m-5'>
                <h1 style = {{textAlign:"center", color:"#64ffda"}}>My Project</h1>
                {
                        projects.map(project=><ProjectDetails key={project.id} project={project}></ProjectDetails>)
                }
            </div>
        </section>
            </div>
    
    );
};

export default Project;