import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Nabvar/Navbar';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_gmnfsef', 'template_2lx7e69', e.target, 'user_zU3VcJU814AmbyZosk6iH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          alert('Massage send successfull.')
      }
    return (
        
        <div><Navbar/>
            <section className="contact my-5 py-5">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h1 className="text-white">Get In Touch</h1>
                    </div>
                    <div className="col-md-9 mx-auto">
                         <form className="contact-form" onSubmit={sendEmail}>
                             <input type="hidden" name="contact_number" />
                                <div className = "form-group">
                                <input type="text" name="user_name" className="form-control" placeholder="Name"/>
                                </div><br/>
                                <div className="form-group">
                                <input type="email" name="user_email" className="form-control" placeholder="Email"/>
                                </div><br/>
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                                </div><br/>
                             <input type="submit" value="Send" />
                        </form>
                    </div>
                </div>
        </section>
        <Footer/>
        </div>
    );
};

export default ContactForm;