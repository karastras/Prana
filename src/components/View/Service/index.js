import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss';

const Service = ({data}) => {
    return (
        <div className="service">
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
        </div>
    );
};

Service.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({ 
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default Service;