import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Carousel from 'react-bootstrap/Carousel';

import { motion } from "framer-motion";
import './style.scss';

const Home = ({ data, pageVariants, pageTransition }) => {
    return (        
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='home'>
            <Helmet>
                <title>Prana | Acceuil</title>
            </Helmet>
                <div className='home-text'>
                    <p className="home-adress">Nous vous accueillons au: </p>
                    <p className="home-adress">4, rue de la Poterne</p>
                    <p className="home-adress">68250 Rouffach </p>
                <Link className="home-link" to="/find-us">
                    Horaires / Nous trouver
                </Link>
                </div>
                <div className='home-content'>
                    <Carousel className='home-carousel' interval={null}>                    
                        {
                            data.map((pictureObject) => (
                                <Carousel.Item key={pictureObject.id}>
                                    <img
                                        className="home-img d-block w-100"
                                        src={pictureObject.url}
                                        alt={pictureObject.alt}
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>                                
                            ))
                        }
                    </Carousel>
                </div>
        </motion.div>        
    );
};

Home.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired
        }),
    ).isRequired,
};

export default Home;