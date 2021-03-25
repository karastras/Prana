import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.scss';

const Marks = ({data}) => {
    return (
        
        <div className='marks'>
        <Helmet>
            <title>Prana | Nos marques</title>
        </Helmet>
          <h2 className='marks-title'>
                
                    Retrouvez toutes nos marques utilisées en institut               
               
            </h2>
            <div className='marks-content'>
                
                    { 
                    data.map((markObject) => (                        
                        <Link className='marks-link' to={markObject.path}>
                            <Card className='marks-card' >
                                <Card.Img className='marks-img' variant="top" src={markObject.url} />
                                <Card.Body className='marks-body'>
                                    <Card.Title className='marks-titles' >{markObject.title}</Card.Title>
                                    <Card.Text className='marks-text'>
                                        {markObject.text}
                                    </Card.Text>
                                        <button className='marks-button'>Consulter</button>
                                </Card.Body>
                            </Card>
                        </Link>
                            ))
                    }                
            </div>
        </div>
    );
};

export default Marks;