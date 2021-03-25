import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import caramel01 from '../../../assets/marks/caramel01.jpg';
import phyts01 from '../../../assets/marks/phyts01.jpg';
import vitacology01 from '../../../assets/marks/vitacology01.jpg';
import peggySage01 from '../../../assets/marks/peggySage01.jpg';

import './style.scss';

const Marks = () => {
    return (
        <div className='marks'>
          <div className='marks-title'>
                <h2>
                    Retrouvez toutes nos marques utilisées en institut               
                </h2>
            </div>
            <div className='marks-content'>
                <div className="marks-cards">
                    <Link className='marks-link' to="/couleur-caramel">
                        <Card className='marks-card' >
                            <Card.Img className='marks-img' variant="top" src={caramel01} />
                            <Card.Body className='marks-body'>
                                <Card.Title className='marks-titles' >Couleur Caramel</Card.Title>
                                <Card.Text className='marks-text'>
                                    La marque naturelle et bio de référence
                                </Card.Text>
                                    <button className='marks-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="marks-cards">
                    <Link className='marks-link' to="/phyts">
                        <Card className='marks-card' >
                            <Card.Img className='marks-img' variant="top" src={phyts01} />
                            <Card.Body className='marks-body'>
                                <Card.Title className='marks-titles' >Phyt's</Card.Title>
                                <Card.Text className='marks-text'>
                                    Cosmétique bio, 100% d'ingrédients d'origine naturelle depuis 1972
                                </Card.Text>
                                    <button className='marks-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="marks-cards">
                    <Link className='marks-link' to="/vitacology">
                        <Card className='marks-card' >
                            <Card.Img className='marks-img' variant="top" src={vitacology01} />
                            <Card.Body className='marks-body'>
                                <Card.Title className='marks-titles' >Vitacology</Card.Title>
                                <Card.Text className='marks-text'>
                                    La nature, soin de votre vie
                                </Card.Text>
                                    <button className='marks-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="marks-cards">
                    <Link className='marks-link' to="/peggy-sage">
                        <Card className='marks-card' >
                            <Card.Img className='marks-img' variant="top" src={peggySage01} />
                            <Card.Body className='marks-body'>
                                <Card.Title className='marks-titles' >Peggy Sage</Card.Title>
                                <Card.Text className='marks-text'>
                                  Une conception globale de la beauté depuis plus de 90 ans
                                </Card.Text>
                                    <button className='marks-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default Marks;