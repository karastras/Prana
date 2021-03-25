import React from 'react';
import { Helmet } from 'react-helmet';

import christmas01 from '../../../assets/offers/christmas01.jpg';
import valentine01 from '../../../assets/offers/valentine01.jpg';
import nrj01 from '../../../assets/offers/nrj01.jpg';
import relaxation01 from '../../../assets/offers/relaxation01.jpg';


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
                    <img className='offers-img' src={christmas01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de noël 
                        </h4>
                        <span className='offers-text'>
                            1 huile essentielle 100ml <br />
                            1 bougie parfumée  <br />
                            1 crème de nuit
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={valentine01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de la Saint-Valentin 
                        </h4>
                        <span className='offers-text'>
                            Pour lui:
                            1 fluide anti-âge tonifiant <br />
                            Pour elle:
                            2 crêmes jour et nuit <br />
                            Pour les deux: <br />
                            1 huile de massage
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={nrj01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Energie
                        </h4>
                        <span className='offers-text'>
                            1 bon pour massage tonifiant  <br />
                            1 huile essentielle 100ml <br />
                            1 crème de jour
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={relaxation01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Détente 
                        </h4>
                        <span className='offers-text'>
                            1 bon pour soin du visage complet  <br />
                            1 bon pour soin du corps complet <br />
                            1 bon pour massage relaxant  <br />
                            1 crème + 1 huile essentielle
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;