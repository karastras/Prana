import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Nav = ({open, closed, list}) => {
    return(
        <div className="nav" >
                                                    {/* burger menu */}
            <ul className={open ? 'nav-list nav-list--open' : 'nav-list nav-list--closed'}>
                {
                    list.map((listObject) => (
                        <li key={listObject.id} onClick={closed} >
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

Nav.propTypes = {
    open: PropTypes.bool.isRequired,
    closed: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired
        })
    )
}

export default Nav;