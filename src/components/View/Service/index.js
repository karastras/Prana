import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import epilation01 from '../../../assets/service/card/epilation01.jpg';
import massage from '../../../assets/carousel01/massage01.jpg';
import './style.scss';

const Service = () => {
    return (
        <div className="service">
            <div>
                <Link className='service-link' to="/find-us">
                    <Card className='service-card' >
                        <Card.Img className='service-img' variant="top" src={epilation01} />
                        <Card.Body className='service-body'>
                            <Card.Title className='service-title' >Epilation</Card.Title>
                            <Card.Text className='service-text'>
                                Tarifs, zones et forfait
                            </Card.Text>
                                <button className='service-button'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
            <div>
                <Link className='service-link' to="/find-us">
                    <Card className='service-card' >
                        <Card.Img className='service-img' variant="top" src={epilation01} />
                        <Card.Body className='service-body'>
                            <Card.Title className='service-title' >Epilation</Card.Title>
                            <Card.Text className='service-text'>
                                Tarifs, zones et forfait
                            </Card.Text>
                                <button className='service-button'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
            <div>
                <Link className='service-link' to="/find-us">
                    <Card className='service-card' >
                        <Card.Img className='service-img' variant="top" src={epilation01} />
                        <Card.Body className='service-body'>
                            <Card.Title className='service-title' >Epilation</Card.Title>
                            <Card.Text className='service-text'>
                                Tarifs, zones et forfait
                            </Card.Text>
                                <button className='service-button'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
            <div>
                <Link className='service-link' to="/find-us">
                    <Card className='service-card' >
                        <Card.Img className='service-img' variant="top" src={epilation01} />
                        <Card.Body className='service-body'>
                            <Card.Title className='service-title' >Epilation</Card.Title>
                            <Card.Text className='service-text'>
                                Tarifs, zones et forfait
                            </Card.Text>
                                <button className='service-button'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
            <div>
                <Link className='service-link' to="/find-us">
                    <Card className='service-card' >
                        <Card.Img className='service-img' variant="top" src={epilation01} />
                        <Card.Body className='service-body'>
                            <Card.Title className='service-title' >Epilation</Card.Title>
                            <Card.Text className='service-text'>
                                Tarifs, zones et forfait
                            </Card.Text>
                                <button className='service-button'>Go somewhere</button>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
            
        </div>
    );
};

export default Service;