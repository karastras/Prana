import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav';
import data from '../../data/datamenu';
import './style.scss';


const Header = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open)
    };
    return(
        <div className="header">
            <Link className="header-link" to="/">

            <div className="header-titles">
                <h1 className="header-title">
                    Prana
                </h1>
                <h2 className="header-title2">
                    Jardin du Corps
                </h2>
            </div>
            </Link>
            <div className="header-content">
                <h2 className="header-slogan">
                    Institut de Beauté Biologique 🌷
                </h2>
                <button className={ open ? 'header-button header-button--open ' : 'header-button header-button--closed'} onClick={toggle}>
                    <div className={ open ? 'header-burger header-burger--open--1 ' : 'header-burger'}/> 
                    <div className={ open ? 'header-burger header-burger--open--2 ' : 'header-burger'}/> 
                    <div className={ open ? 'header-burger header-burger--open--3 ' : 'header-burger'}/>                    
                    <div className="header-burger-text">
                        Menu
                    </div>
                </ button >
                <div className="header-nav">
                    <Nav open={open} toggle={toggle} list={data} />
                </div>
            </div>
        </div>

    );
};

export default Header; 