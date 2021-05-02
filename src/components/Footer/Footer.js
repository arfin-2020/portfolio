import React from 'react';

const Footer = () => {
    return (
        <div className="copyRight text-center text-white">
                <p>Design & Build By <a href="https://github.com/arfin-2020">Arfin Chowdhury Arif</a> </p>
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;