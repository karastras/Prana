import React from 'react'
import './style.scss';

const Prices = ({label, time, price}) => {
    return(
        <tr className='prices'>
            <td className='prices-label'>{label}</td>
            <td className='prices-time'>{time}</td>
            <td className='prices-price'>{price}€</td>
        </tr>
    )
};

export default Prices;