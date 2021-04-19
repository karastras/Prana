import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { motion } from "framer-motion";
import "./style.scss";

const Error = ({pageVariants, pageTransition}) => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='error'>
            <Helmet>
                <title>Prana | Erreur 404</title>
            </Helmet>
            <div className='error-message'>
                Page introuvable, erreur 404
            </div>
            <img className='error-img' src="https://nsm09.casimages.com/img/2021/03/25//21032511180217254117333913.jpg" alt=""/>
            <div className='error-button'>
                <Link className="home-link" to="/">
                    Retour à l'accueil
                </ Link>
            </div>
        </motion.div>
    );
};

export default Error;