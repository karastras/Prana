import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { motion } from "framer-motion";
import './style.scss';

const Massage = ({data, pageVariants, pageTransition}) => {
    return(
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='massage'>
            <Helmet>
                <title>Prana | Massage</title>
            </Helmet>
                {
                    data.massage.map((dataObject) => {
                        return (
                            <div className='massage-pregnant' key={ dataObject.id } >
                                <img className='massage-img' src={dataObject.url} alt={dataObject.alt} />
                                <div className='massage-content'>
                                    <h4 className='massage-title'>
                                        {dataObject.title}
                                    </h4>
                                    <span className='massage-text'>
                                        {dataObject.text}
                                    </span>
                                </div>
                            </div>
                    );})
                }            
        </motion.div>
    )
}

Massage.propTypes = {
    data: PropTypes.shape({
        massage: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired,
        ).isRequired,
    }).isRequired,    
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
}

export default Massage;