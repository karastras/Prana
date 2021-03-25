import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return(
        <div className="nav" >
            <ul className="nav-list">
                <li>
                    <NavLink exact className="nav-links" to="/">
                        Accueil
                    </NavLink>

                </li>
                <li>
                    <NavLink exact className="nav-links" to="/service">
                        Prestations
                    </NavLink>

                </li>
                <li>
                    <NavLink exact className="nav-links" to="/philosophy">
                        Philosophie
                    </NavLink>

                </li>
                <li>
                    <NavLink exact className="nav-links" to="/offers">
                        Offres
                    </NavLink>

                </li>
                <li>
                    <NavLink exact className="nav-links" to="/marks">
                        Nos marques
                    </NavLink>

                </li>
                <li>
                    <NavLink exact className="nav-links" to="/find-us">
                        Nous trouver
                    </NavLink>
                </li>
            </ul>
                
        </div>
        
    );
};

export default Nav; 