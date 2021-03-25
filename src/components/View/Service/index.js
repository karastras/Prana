import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import epilation01 from '../../../assets/service/card/epilation01.jpg';
import soinPeau01 from '../../../assets/service/card/soinPeau01.jpg';
import chouchou01 from '../../../assets/service/card/chouchou01.jpg';
import massage01 from '../../../assets/service/card/massage01.jpg';

import './style.scss';

const Service = () => {
    return (
        <div className="service">
            <div className='service-title'>
                <h2>
                    Retrouvez tous nos soins pour femmes et hommes               
                </h2>
            </div>
            <div className='service-content'>
                <div className="service-cards">
                    <Link className='service-link' to="/epilation">
                        <Card className='service-card' >
                            <Card.Img className='service-img' variant="top" src={epilation01} />
                            <Card.Body className='service-body'>
                                <Card.Title className='service-title' >Epilation</Card.Title>
                                <Card.Text className='service-text'>
                                    Toutes les zones du corps au détail ou par forfait
                                </Card.Text>
                                    <button className='service-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="service-cards">
                    <Link className='service-link' to="/skinCare">
                        <Card className='service-card' >
                            <Card.Img className='service-img' variant="top" src={soinPeau01} />
                            <Card.Body className='service-body'>
                                <Card.Title className='service-title' >Prendre soin de sa peau </Card.Title>
                                <Card.Text className='service-text'>
                                    Modelage du dos, cuir chevelu, soins des mains et des pieds,...
                                </Card.Text>
                                    <button className='service-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="service-cards">
                    <Link className='service-link' to="/bodyCare">
                        <Card className='service-card' >
                            <Card.Img className='service-img' variant="top" src={chouchou01} />
                            <Card.Body className='service-body'>
                                <Card.Title className='service-title' >Chouchouter son corps</Card.Title>
                                <Card.Text className='service-text'>
                                    Modelage décontractant, relaxant, tonifiant, fermeté, gommage,...
                                </Card.Text>
                                    <button className='service-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="service-cards">
                    <Link className='service-link' to="/massage">
                        <Card className='service-card' >
                            <Card.Img className='service-img' variant="top" src={massage01} />
                            <Card.Body className='service-body'>
                                <Card.Title className='service-title' >Massage</Card.Title>
                                <Card.Text className='service-text'>
                                    Massage aux pierres chaudes, sportif, femme enceinte,...
                                </Card.Text>
                                    <button className='service-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Service;