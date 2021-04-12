import React from 'react';
import {Helmet} from 'react-helmet-async';
import PropTypes from 'prop-types';

import Prices from '../Prices';

import './style.scss';

const BodyCare = ({ data, opened, isOpen }) => {
    return(        
        <div className='bodyCare'>
            <Helmet>
                <title>Prana | Soin du corps</title>
            </Helmet>          
            <img className='bodyCare-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810380917254117321789.jpg" alt="tarifiaction des prestations sur les soins du corps" />
            <div className='bodyCare-link'>
                <a href="#price-body">
                    <button className='bodyCare-button' type='button' onClick={isOpen} >
                        Cliquer pour afficher les tarifs
                    </button>
                </a>
                <table id="price-body" className={ opened ? 'bodyCare-price' : 'bodyCare-price-closed'}>
                    <thead>
                        <tr>
                            <th className='bodyCare-title'>Tarifs</th>
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

BodyCare.propTypes = {
    opened: PropTypes.bool.isRequired,
    isOpen: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default BodyCare;