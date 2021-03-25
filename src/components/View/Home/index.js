import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
>>>>>>> d3c987d3e64c67dde0e1ef1b4d6090f3ccbe8eaf
import Carousel from 'react-bootstrap/Carousel';
import massage01 from '../../../assets/carousel01/massage01.jpg';
import massage02 from '../../../assets/carousel01/massage02.jpg';
import massage03 from '../../../assets/carousel01/massage03.jpg';
import massage04 from '../../../assets/carousel01/massage04.jpg';
import massage05 from '../../../assets/carousel01/massage05.jpg';


import './style.scss';


const Home = () => {
    return (
        <div className='home'>
<<<<<<< HEAD
            <div className='home-text'>
                <p className="home-adress">Nous vous accueillons au: </p>
                <p className="home-adress">4, rue de la Poterne</p>
                <p className="home-adress">68250 Rouffach </p>
            <Link exact className="home-link" to="/find-us">
                Nous trouver
            </Link>
            </div>
            <div className='home-content'>
                <Carousel className='home-carousel' interval={null}>                    
=======
            <div className='home-text'>je suis Welcome</div>
            <div className='home-content'>
                <Carousel className='home-carousel'>
>>>>>>> d3c987d3e64c67dde0e1ef1b4d6090f3ccbe8eaf
                    <Carousel.Item>
                        <img
                        className="home-img d-block w-100"
                        src={massage01}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="home-img d-block w-100"
                        src={massage02}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="home-img d-block w-100"
                        src={massage03}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="home-img d-block w-100"
                        src={massage04}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="home-img d-block w-100"
                        src={massage05}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;