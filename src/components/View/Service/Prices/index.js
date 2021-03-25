import React from 'react'
import './style.scss';

const Prices = ({label, time, price}) => {
    return(
        <li className='prices'>
            <span className='prices-label'>{label}</span>
            <span className='prices-time'>{time}</span>
            <span className='prices-price'>{price}€</span>
        </li>
    )
};

export default Prices;