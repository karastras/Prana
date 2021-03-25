import React from 'react';
import offers01 from '../../../assets/offers/offers01.jpg';

import './style.scss';

const Offers = () => {
    return (
        <div className="offers">
            <h2 className='offers-title'>
                Retrouvez nos offres du moment
            </h2>
            <div className="offers-container">
                <div className="offers-offer">
                    <img className='offers-img' src={offers01} alt='' />
                    <div className='offers-content'>
                        <h4 className='offers-titles'>
                            Coffret de noël 
                        </h4>
                        <span className='offers-text'>
                            une huile essentielle 100ml <br />
                            une bougie parfumée  <br />
                            une crème  <br />
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
                            une bougie parfumée <br />
                            une crème  <br />
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
                            une bougie parfumée  <br />
                            une crème  <br />
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
                            une bougie parfumée  <br />
                            une crème  <br />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;