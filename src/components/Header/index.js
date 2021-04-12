import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import data from '../../data/datamenu';

import './style.scss';

const Header = ({open, toggle, closed}) => {
    return(
        <div className="header">
            <div className='header-titles'>
                <Link className="header-title" to="/">
                        Prana
                </Link>                
                <Link className="header-title2" to="/">
                    Jardin du Corps
                </Link>
            </div> 
            <div className="header-content">
                <h2 className="header-slogan">
                    Institut de Beauté Biologique 🌷
                </h2>
{/* _________________________________________________ burger menu _____________________________________________________________________ */}
                <button className={ open ? 'header-button header-button--open ' : 'header-button header-button--closed'} onClick={toggle}>
                    <div className={ open ? 'header-burger header-burger--open--1 ' : 'header-burger'}/> 
                    <div className={ open ? 'header-burger header-burger--open--2 ' : 'header-burger'}/> 
                    <div className={ open ? 'header-burger header-burger--open--3 ' : 'header-burger'}/>                    
                    <div className="header-burger-text">
                        Menu
                    </div>
                </ button >
{/* ____________________________________________________________________________________________________________________________________*/}
                <div className="header-nav">
                    <Nav open={open} closed={closed} list={data} />
                </div>
            </div>
        </div>

    );
};

Header.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    closed: PropTypes.func.isRequired
}

export default Header; 