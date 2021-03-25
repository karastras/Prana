import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import './style.scss';


const Header = () => {
    return(
        <div className="header">
            <Link className="header-link" to="/">

            <div className="header-titles">
                <h1 className="header-title">
                    Prana
                </h1>
                <h2 className="header-title2">
                    Jardin du Corps
                </h2>
            </div>
            </Link>
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