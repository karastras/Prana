import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import { motion } from "framer-motion";
import './style.scss';

const Philosophy = ({pageVariants, pageTransition}) => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='philosophy'>
            <Helmet>
                <title>Prana | Philosiphie</title>
            </Helmet>
            <div className="philosophy-message">
                <p className="philosophy-content">
                    Lors de la création en 2011 et jusqu'à ce jour, mon idée est de vous offrir un lieu unique où nous pouvons
                     effectuer des prestations de qualité tout en respectant le monde qui nous entoure.
                </p>
                <p className="philosophy-content">
                    J'ai fait le choix d'utiliser et de vous proposer des produits respectant la nature tout en gardant une 
                    efficacité irréprochable.
                </p>    
                <p className="philosophy-content">
                    J'ai également comme volonté de mettre en avant chez Prana le "made in France".     
                    C'est une action à moindre échelle qui, je l'éspère, saura vous séduire et éventuellement vous inciter à en
                    faire de même.
                </p>    
               <p className="philosophy-content">
                   Car nous avons beau penser que nous ne pouvons pas changer les choses, Gandhi disait:
                </p>
               <p className="philosophy-content">
                   "Sois le changement que tu veux voir dans le monde"
                </p>
            </div>
            <div className='philosophy-end'>
                <div className='philosophy-text'>
                    Au plaisir de vous recevoir chez nous...
                </div>
                <div className='philosophy-author'>
                    Marine 🌺
                </div>
            </div>

        </motion.div>
    );
};

Philosophy.propTypes = {
    pageVariants : PropTypes.shape({
        initial: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
        in: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
        out: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
    }).isRequired,
    pageTransition :PropTypes.shape({        
            duration: PropTypes.number.isRequired,
            transition: PropTypes.string.isRequired,        
    }).isRequired,
};

export default Philosophy;