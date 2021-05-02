import React from 'react';
import graphics from '../../../images/graphics.png'
import webDesign from '../../../images/webDesign.png'
import mern from '../../../images/mern.png'
import ProvideDetails from '../ProvideDetails/ProvideDetails';
const Provide = () => {
    const provides = [
        {   id:"1",
            image: graphics,
            title: 'Graphics Design',
            details: "I am a graphics Designer. I can Design Poster, Banner, BillBoard, Business Cart, Flyer book Cover page etc. I am expert in Photoshop, Illustrator, Powerpoint.",
        },
        {
            id:"2",
            image: webDesign,
            title: 'Web Design',
            details: "I am also Web Designer. I can design website where I use HTML, CSS, JavaScript, Bootstrap, React etc."
        },
        {
            id:"3",
            image: mern,
            title: 'MERN Stack Web Developer',
            details: "I am a MERN Stack Web Developer. Expert in MongoDB, Express, React, Node."
        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className ='row w-75 pt-5 m-5'>
                <h1 style = {{textAlign:"center", color:"#ff8882"}}>What I Provide</h1>
                {
                        provides.map(provide=><ProvideDetails key={provide.id} provide={provide}></ProvideDetails>)
                }
            </div>
        </section>
    );
};

export default Provide;