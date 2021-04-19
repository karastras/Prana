import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet-async';

import Prices from '../Prices';

import { motion } from "framer-motion";
import './style.scss';

const BodyCare = ({ data, opened, isOpen, pageVariants, pageTransition }) => {
    return(        
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='bodyCare'>
            <Helmet>
                <title>Prana | Soin du corps</title>
            </Helmet>          
            <img className='bodyCare-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810380917254117321789.jpg" alt="tarifiaction des prestations sur les soins du corps" />
            <div className='bodyCare-link'>
                <Link smooth to="#price-body">
                    <button className='bodyCare-button' type='button' onClick={isOpen} >
                        Cliquer pour afficher les tarifs
                    </button>
                </Link>
                <table id="price-body" className={ opened ? 'bodyCare-price' : 'bodyCare-price-closed'}>
                    <thead>
                        <tr>
                            <th className='bodyCare-title'>Tarifs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.bodyPrice.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                            ))
                        }
                    </tbody>
                </table>
            </div>               
        </motion.div>
    )
}

BodyCare.propTypes = {
    opened: PropTypes.bool.isRequired,
    isOpen: PropTypes.func.isRequired,
    data: PropTypes.shape({ 
        bodyPrice: PropTypes.arrayOf(
            PropTypes.shape({
            id: PropTypes.number.isRequired,
            })
        )
    })
}

export default BodyCare;