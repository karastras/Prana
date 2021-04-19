import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion";
import './style.scss';

const Marks = ({data, pageVariants, pageTransition}) => {
    return (        
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='marks'>
            <Helmet>
                <title>Prana | Nos marques</title>
            </Helmet>
            <h2 className='marks-title'>                
                    Retrouvez toutes nos marques utilisées en institut               
            </h2>
            <div className='marks-content'>                
                { 
                    data.map((markObject) => (                        
                        <Link className='marks-link' key={markObject.id} to={markObject.path}>
                            <Card className='marks-card' >
                                <Card.Img className='marks-img' variant="top" src={markObject.img} alt={markObject.alt} />
                                <Card.Body className='marks-body'>
                                    <Card.Title className='marks-titles' >{markObject.title1}</Card.Title>
                                    <Card.Text className='marks-text'>
                                        {markObject.title2}
                                    </Card.Text>
                                        <button className='marks-button'>Consulter</button>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                }                
            </div>
        </motion.div>
    );
};

Marks.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            title1: PropTypes.string.isRequired,
            title2: PropTypes.string.isRequired
        })
    )
}

export default Marks;