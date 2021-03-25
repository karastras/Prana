import React from 'react';
import Nav from './Nav';
import './style.scss';


const Header = () => {
    return(
        <div className="header">
            <div className="header-titles">
                <h1 className="header-title">
                    Prana
                </h1>
                <h2 className="header-title2">
                    Jardin du Corps
                </h2>
            </div>
            <div className="header-content">
                <h2 className="header-slogan">
                 Institut de Beauté Biologique 🌷
                </h2>
                <div className="header-nav">
                    <Nav />
                </div>
            </div>
        </div>

    );
};

export default Header; 