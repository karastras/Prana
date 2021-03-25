import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import error from '../../../assets/error404/error404.jpg';
import "./style.scss";


const Error = () => {
    return (
        <div className='error'>
            <Helmet>
                <title>Prana | Erreur 404</title>
            </Helmet>
            <div className='error-message'>
                Page introuvable, erreur 404
            </div>
            <img className='error-img' src={error} alt=""/>
            <div className='error-button'>
                <Link className="home-link" to="/">
                    Retour à l'accueil
                </ Link>
            </div>
        </div>
    );
};

export default Error;