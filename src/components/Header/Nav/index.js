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
<<<<<<< HEAD
                <NavLink exact className="navLink" to="/find-us">
                    Nous trouver
=======
                <NavLink exact className="navLink" to="/gallery">
                    Gallerie
>>>>>>> d3c987d3e64c67dde0e1ef1b4d6090f3ccbe8eaf
                </NavLink>
                
        </div>
        
    );
};

export default Nav; 