import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './style.scss';

const Footer = () => {
    return(
        <div className="footer">
            <ul className='footer-list'>
                <li>
                    <Link to="/find-us" className='footer-content'>
                        Contact
                    </Link>
                </li>
                <li>
                    <NavLink to="/legal-notice" className='footer-content'>
                        Mentions légales
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sitemap" className='footer-content'>
                        Plan du site
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Footer; 