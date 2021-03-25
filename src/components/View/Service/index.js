import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';
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
                    data.map((cardObject)=>(                        
                        <Link className='service-link' to={cardObject.path}>
                        <Card key={cardObject.id} className='service-card' >
                            <Card.Img className='service-img' variant="top" src={cardObject.url} />
                            <Card.Body className='service-body'>
                                <Card.Title className='service-titles' >{cardObject.title}</Card.Title>
                                <Card.Text className='service-text'>
                                    {cardObject.text}
                                </Card.Text>
                                    <button className='service-button'>Consulter</button>
                            </Card.Body>
                        </Card>
                    </Link>
                        )
                        )
                    }                
            </div>            
        </div>
    );
};

export default Service;