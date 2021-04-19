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
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default Massage;