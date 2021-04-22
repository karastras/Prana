import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import { motion } from "framer-motion";
import './style.scss';

const Service = ({data, pageVariants, pageTransition}) => {
    return (
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="service">
            <Helmet>
                <title>Prana | Prestations</title>
            </Helmet>
            <h2 className='service-title'>                
                    Retrouvez tous nos soins pour femmes et hommes                
            </h2>
            <div className='service-content'>
                {
                    data.service.map((cardObject)=>(                        
                        <Link key={cardObject.id} className='service-link' to={cardObject.path}>
                            <Card className='service-card' >
                                <Card.Img className='service-img' variant="top" src={cardObject.url} alt={cardObject.alt} />
                                <Card.Body className='service-body'>
                                    <Card.Title className='service-titles' >{cardObject.title}</Card.Title>
                                    <Card.Text className='service-text'>
                                        {cardObject.text}
                                    </Card.Text>
                                        <button className='service-button'>Consulter</button>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                }                
            </div>            
        </motion.div>
    );
};

Service.propTypes = {
    data: PropTypes.shape({ 
        service: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                path: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired,
        )
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
};

export default Service;