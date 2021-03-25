import React, {useState} from 'react';
import {Helmet} from 'react-helmet';

import Prices from '../Prices';
import list from '../../../../data/bodyCarePrice';
import bodyCare01 from '../../../../assets/service/price/bodyCare01.jpg';


import './style.scss';

const BodyCare = () => {
    const [opened, setOpened] = useState (false);
    

    return(        
        <div className='bodyCare'>
            <Helmet>
                <title>Prana | Soin du corps</title>
            </Helmet>          
            <img className='bodyCare-img'src={bodyCare01} alt="" />
            <div className='bodyCare-link'>
                <a href="#price-body">
                    <button className='bodyCare-button' type='button' onClick={() => {
                        setOpened(!opened);
                    }} >
                        Cliquer pour afficher les tarifs
                    </button>
                </a>
                <table id="price-body" className={ opened ? 'bodyCare-price' : 'bodyCare-price-closed'}>
                    <h3 className='bodyCare-title'>Tarifs</h3>  
                    {
                        list.map((priceObject) => (
                            <Prices key={priceObject.id} {...priceObject} />
                            ))
                    }
                </table>
            </div>               
        </div>
    )
}

export default BodyCare;