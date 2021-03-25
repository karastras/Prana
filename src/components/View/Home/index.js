import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Carousel from 'react-bootstrap/Carousel';
import list from '../../../data/carousel';

import './style.scss';

const Home = () => {
    return (        
        <div className='home'>
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
                            list.map((pictureObject) => (
                                <Carousel.Item key={pictureObject.id}>
                                    <img
                                        className="home-img d-block w-100"
                                        src={pictureObject.url}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>                                
                            ))
                        }
                    </Carousel>
                </div>
        </div>        
    );
};

export default Home;