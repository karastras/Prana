import React from 'react';
import { Helmet } from 'react-helmet-async';

import './style.scss';

const Offers = ({data}) => {
    return (
        <div className="offers">
            <Helmet>
                <title>Prana | Nos offres</title>
            </Helmet>
            <h2 className='offers-title'>
                Retrouvez nos coffrets à offrir:
            </h2>
            <div className="offers-container">
                { 
                    data.map((offersObject)=>(                    
                            <div className="offers-offer" key={offersObject.id}>
                                <img className='offers-img' src={offersObject.url} alt={offersObject.alt} />
                                <div className='offers-content'>
                                    <h4 className='offers-titles'>
                                        {offersObject.title} 
                                    </h4>
                                    <ul className='offers-text'>
                                        {
                                            offersObject.text.map((textObject) => {
                                                return (
                                                    <li key={textObject}>
                                                        {textObject}
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Offers;