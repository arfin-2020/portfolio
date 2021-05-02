import React from 'react';
import Footer from '../../Footer/Footer';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navbar from '../Nabvar/Navbar';
import Project from '../Project/Project';
import Provide from '../ProvideSection/Provide';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Provide/>
            <Project/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;