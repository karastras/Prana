import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = ({open}) => {
    
    return(
        <div className="nav" >
            <ul className={open ? 'nav-list nav-list--open' : 'nav-list'}>
                <li key="Accueil">
                    <NavLink exact className="nav-links" to="/" >
                        Accueil
                    </NavLink>

                </li>
                <li key="Prestations">
                    <NavLink exact className="nav-links" to="/service">
                        Prestations
                    </NavLink>

                </li>
                <li key="Philosophie">
                    <NavLink exact className="nav-links" to="/philosophy">
                        Philosophie
                    </NavLink>

                </li>
                <li key="Offres">
                    <NavLink exact className="nav-links" to="/offers">
                        Offres
                    </NavLink>

                </li>
                <li key="Nos marques">
                    <NavLink exact className="nav-links" to="/marks">
                        Nos marques
                    </NavLink>

                </li>
                <li key="Nous trouver">
                    <NavLink exact className="nav-links" to="/find-us">
                        Nous trouver
                    </NavLink>
                </li>
            </ul>
                
        </div>
        
    );
};

export default Nav;