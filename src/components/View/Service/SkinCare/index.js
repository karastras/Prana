import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Prices from '../Prices';

import './style.scss';

const SkinCare = ({ data, opened, isOpen }) => {
    return(        
        <div className='skinCare'>
            <Helmet>
                <title>Prana | Soin de la peau</title>
            </Helmet>
            <img className='skinCare-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810380917254117321788.jpg" alt="tarifiaction des prestations sur les soins de la peau" />            
            <div className='skinCare-link'>
                <a href="#price-skin">
                    <button className='skinCare-button' type='button' onClick={ isOpen } >
                        Cliquer pour afficher les tarifs
                    </button>
                </a>
                <table id="price-skin" className={ opened ? 'skinCare-price' : 'skinCare-price-closed'}>
                    <thead>
                        <tr>
                            <th className='skinCare-title'>Tarifs</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.map((priceObject) => (
                            <Prices key={priceObject.id} {...priceObject} />
                            ))
                        }
                    </tbody>
                </table>
            </div>               
        </div>
    )
}

SkinCare.propTypes = {
    opened: PropTypes.bool.isRequired,
    isOpen: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}
export default SkinCare;
