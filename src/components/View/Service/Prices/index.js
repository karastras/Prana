import React from 'react';
import PropTypes from 'prop-types';

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

Prices.propoTypes = {
    label: PropTypes.string.isRequired,
    time: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default Prices;