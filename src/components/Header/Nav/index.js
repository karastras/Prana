import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Nav = ({open, toggle, list}) => {
    return(
        <div className="nav" >
            <ul className={open ? 'nav-list nav-list--open' : 'nav-list nav-list--closed'}>
                {
                    list.map((listObject) => (
                        <li key={listObject.id} onClick={toggle} >
                            <NavLink  exact className="nav-links" to={listObject.path} >
                                {listObject.title}
                            </NavLink>
                        </li>
                        
                    ))
                }               
            </ul>               
        </div>        
    );
};

export default Nav;