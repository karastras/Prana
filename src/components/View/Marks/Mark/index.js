import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

import { motion } from "framer-motion";
import './style.scss';

const Mark = ({
    id,
    tagTitle,
    title1,
    title2,
    text1,
    text2,
    title3,
    url,
    link,
    pageVariants,
    pageTransition
    }) => {
        return(
//className='mark' do some conflicts in css with Bootstrap and others, so i use 'label'
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} key={id} className='label'>                    
                <Helmet>
                    <title>{tagTitle}</title>
                </Helmet>
                <h2 className='label-titlepage'>
                    {title1}
                </h2>
                <div className='label-content'>
                    <h3 className='label-title'>
                        {title2}
                    </h3>
                    <ol className='label-text'>
                        {
                        text1.map((textObject) => {
                            return (
                            <li key={textObject} >
                                {textObject}
                            </li>
                            );
                        })}
                    </ol>
                    <h3 className='label-title'>
                        {title3}
                    </h3 >
                    <ol className='label-text'>
                        {
                            text2.map((textObject) => {
                                return (
                                    <li key={textObject} >
                                        {textObject}
                                    </li>
                                );
                        })}
                    </ol>
                </div>
                    <a className='label-link' target='_blank' rel='noreferrer' href={url}>
                        {link}
                    </a>
                <div>
                    <span>
                        (En cliquant sur le lien vous allez être dirigé sur une page externe à notre site)
                    </span>
                </div>
            </motion.div>
    )
};

Mark.protoTypes = {
    id: PropTypes.number.isRequired,
    tagTitle: PropTypes.string.isRequired,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
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

export default Mark;