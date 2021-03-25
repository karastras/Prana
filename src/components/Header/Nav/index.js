import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return(
        <div >
                <NavLink exact className="navLink" to="/">
                    Accueil
                </NavLink>
                <NavLink exact className="navLink" to="/service">
                    Prestations
                </NavLink>
                <NavLink exact className="navLink" to="/philosophy">
                    Philosophie
                </NavLink>
                <NavLink exact className="navLink" to="/offers">
                    Offres
                </NavLink>
                <NavLink exact className="navLink" to="/marks">
                    Nos marques
                </NavLink>
                <NavLink exact className="navLink" to="/gallery">
                    Gallerie
                </NavLink>
                
        </div>
        
    );
};

export default Nav; 