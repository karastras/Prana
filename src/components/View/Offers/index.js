import React from 'react';
import offers01 from '../../../assets/offers/offers01.jpg';

import './style.scss';

const Offers = () => {
    return (
        <div className="offers">
            <h3 className='offers-title'>
                Retrouvez nos offres du moment
            </h3>
            <div className="offers-container">
                <div className="offers-offer">
                    <img className='offers-img' src={offers01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de noël 2021 
                        </h4>
                        <span className='offers-text'>
                            une huile essentielle 100ml <br />
                            une bougie parfumé "vin chaud" <br />
                            une crème "100% papa noël" <br />
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={offers01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de la Saint-Valentin 
                        </h4>
                        <span className='offers-text'>
                            une huile essentielle 100ml <br />
                            une bougie parfumé "fleur de bite" <br />
                            une crème "ciprine concentrée" <br />
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={offers01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Energie
                        </h4>
                        <span className='offers-text'>
                            une huile essentielle 100ml <br />
                            une bougie parfumé "Red bull" <br />
                            une crème qui "déchire sa mère" <br />
                        </span>
                    </div>
                </div>
                <div className="offers-offer">
                    <img className='offers-img' src={offers01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret Détente 
                        </h4>
                        <span className='offers-text'>
                            une huile essentielle 100ml <br />
                            une bougie parfumé "Canabis" <br />
                            une crème "à se mettre dans le fi**" <br />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;