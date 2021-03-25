import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

const Offers = () => {
    return (
        <div className="offers">
            <Helmet>
                <title>Prana | Nos offres</title>
            </Helmet>
            <h2 className='offers-title'>
                Retrouvez nos coffrets à offrir:
            </h2>
            <div className="offers-container">
                <div className="offers-offer">
                    <img className='offers-img' src="https://nsm09.casimages.com/img/2021/03/18//21031810380517254117321773.jpg" alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de noël 
                        </h4>
                        <ul className='offers-text'>
                            <li>
                                1 huile essentielle 100ml
                            </li>
                            <li>
                                1 bougie parfumée 
                            </li>
                            <li>
                                1 crème de nuit
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src="https://nsm09.casimages.com/img/2021/03/18//21031810380517254117321772.jpg" alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de la Saint-Valentin 
                        </h4>
                        <ul className='offers-text'>
                            <li>
                                Pour lui: 1 fluide anti-âge tonifiant
                            </li>
                            <li>
                                Pour elle: 2 crêmes jour et nuit
                            </li>
                            <li>
                                Pour les deux: 1 huile de massage
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src="https://nsm09.casimages.com/img/2021/03/18//21031810380517254117321774.jpg" alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Energie
                        </h4>
                        <ul className='offers-text'>
                            <li>
                                1 bon pour massage tonifiant

                            </li>
                            <li>
                                1 huile essentielle 100ml
                            </li>
                            <li>
                                1 crème de jour
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src="https://nsm09.casimages.com/img/2021/03/18//21031810380617254117321776.jpg" alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Détente 
                        </h4>
                        <ul className='offers-text'>
                            <li>
                                1 bon pour soin du visage complet
                            </li>
                            <li>
                                1 bon pour soin du corps complet
                            </li>
                            <li>
                                1 bon pour massage relaxant
                            </li>
                            <li>
                                1 crème + 1 huile essentielle
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;