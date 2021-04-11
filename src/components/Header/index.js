import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import data from '../../data/datamenu';
import './style.scss';


const Header = ({open, toggle}) => {
    return(
        <div className="header">
            <div className='header-titles'>
                <Link className="header-title" to="/">
                        Prana
                </Link>                
                <Link className="header-title2">
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
                    <Nav open={open} toggle={toggle} list={data} />
                </div>
            </div>
        </div>

    );
};

export default Header; 