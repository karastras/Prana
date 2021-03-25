import React from 'react';
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
            <div className='home-text'>je suis Welcome</div>
            <div className='home-content'>
                <Carousel className='home-carousel'>
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