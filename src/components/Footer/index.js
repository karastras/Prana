import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';


const Footer = () => {
    return(
        <div className="footer">
            <ul className='footer-list'>
                <li>
                    <NavLink to="/about-us" className='footer-content'>
                        Qui sommes-nous?
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us" className='footer-content'>
                        Contactez nous
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/legal-notice" className='footer-content'>
                        Mentions légales
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Footer; 