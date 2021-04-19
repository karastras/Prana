import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { motion } from "framer-motion";
import './style.scss';

const Offers = ({ data, pageVariants, pageTransition }) => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="offers">
            <Helmet>
                <title>Prana | Nos offres</title>
            </Helmet>
            <h2 className='offers-title'>
                Retrouvez nos coffrets à offrir:
            </h2>
            <div className="offers-container">
                { 
                    data.map((offersObject)=>(                    
                            <div className="offers-offer" key={offersObject.id}>
                                <img className='offers-img' src={offersObject.url} alt={offersObject.alt} />
                                <div className='offers-content'>
                                    <h4 className='offers-titles'>
                                        {offersObject.title} 
                                    </h4>
                                    <ul className='offers-text'>
                                        {
                                            offersObject.text.map((textObject) => {
                                                return (
                                                    <li key={textObject}>
                                                        {textObject}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                    ))
                }
            </div>
        </motion.div>
    );
};

Offers.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.arrayOf(
                    PropTypes.string.isRequired
            )
        })
    )
}

export default Offers;