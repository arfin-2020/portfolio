import React from 'react';
import './ProvideDetails.css'
const ProvideDetails = ({provide}) => {
    return (
            <div className="contant col-md-4 mb-3 p-3 align-items-center">
                    <div className ='main-container text-center'>
                            <div className="card" style={{"width": '28rem', height: '500px'}}>
                            <img  src={provide.image} alt=""  height="300px" width = "300px"/>
                            <div className="card-body">
                                <h5 className="card-title text-dark">{provide.title}</h5>
                                <p className="card-text text-dark">{provide.details}</p>
                            </div>
                            </div>
                    </div>
        </div>
      
    );
};

export default ProvideDetails;