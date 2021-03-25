import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return(
        <div className="navigation">
            <div className="navigation-NavLinks">
                <NavLink exact className="navigation-NavLink" to="/home">
                    Acceuil
                </NavLink>
                <NavLink exact className="navigation-NavLink" to="/service">
                    Prestations
                </NavLink>
                <NavLink exact className="navigation-NavLink" to="/philosophy">
                    Philosophie
                </NavLink>
                <NavLink exact className="navigation-NavLink" to="/offers">
                    Offres
                </NavLink>
                <NavLink exact className="navigation-NavLink" to="/marks">
                    Nos marques
                </NavLink>
                <NavLink exact className="navigation-NavLink" to="/gallery">
                    Gallerie
                </NavLink>
                
            </div>
        </div>
        
    );
};

export default Nav; 