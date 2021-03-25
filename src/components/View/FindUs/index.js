import React from 'react';
import pranaMap from '../../../assets/map/pranaMap.jpg';

import './style.scss';

const FindUs = () => {
    return (
        <div className='findUs'>  
            <a href="https://www.google.com/maps/place/Prana,+jardin+du+Corps/@47.956322,7.2991564,17.25z/data=!4m5!3m4!1s0x0:0xf9bd898d291e1943!8m2!3d47.9565229!4d7.2992215">        
                <img className='findUs-img' src={pranaMap} alt ="" />   
            </a>         
        </div>
    );
};

export default FindUs;