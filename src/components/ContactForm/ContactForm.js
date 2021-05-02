import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Nabvar/Navbar';

const ContactForm = () => {
    return (
        
        <div><Navbar/>
            <section className="contact my-5 py-5">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h1 className="text-white">Get In Touch</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address *"/>
                            </div><br/>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject *"/>
                            </div><br/>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                            </div><br/>
                            <div className="form-group text-center">
                                <button type="button" className="fency-btn"> Submit </button>
                            </div>
                        </form>
                    </div>
                </div>
        </section>
        <Footer/>
        </div>
    );
};

export default ContactForm;