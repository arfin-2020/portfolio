import React from 'react';
import BlogsDetails from './BlogsDetails';

const Blogs = () => {
    const blogs = [
        
       {
            id:"1",
            image: "",
            title: 'Comming soon',
            details: "Comming soon",
        },
        {
            id:"2",
            image: "",
            title: 'Comming soon',
            details: "Comming soon"
        },
        {
            id:"3",
            image: "",
            title: 'Comming soon',
            details: "Comming soon"
        }
        
    ];
    return (
        <section className="d-flex justify-content-center">
        <div className ='row w-75 pt-5 m-5'>
            <h1 style = {{textAlign:"center", color:"#ff8882"}}>My Blogs</h1>
            {
                    blogs.map(blog=><BlogsDetails key={blog.id} blog={blog}></BlogsDetails>)
            }
        </div>
    </section>
    );
};

export default Blogs;