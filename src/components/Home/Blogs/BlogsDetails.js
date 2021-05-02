import React from 'react';

const BlogsDetails = ({blog}) => {
    return (
        <div className="contant col-md-4 mb-3 p-3">
        <div className = 'main-container text-center'>
                <div className="card" style={{"width": '28rem', height: '500px'}}>
                {/* <img  src={blog.image} alt=""  height="300px" width = "300px"/> */}
                <div className="card-body">
                    <h5 className="card-title text-dark">{blog.title}</h5>
                    <p className="card-text text-dark">{blog.details}</p>
                </div>
                </div>
        </div>
</div>
    );
};

export default BlogsDetails;