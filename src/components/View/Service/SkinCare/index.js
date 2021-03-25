import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import skinCare01 from '../../../../assets/service/price/skinCare01.jpg';
import Prices from '../Prices';
import list from '../../../../data/skinCarePrice';

import './style.scss';

const SkinCare = () => {
    
    const [opened, setOpened] = useState (false);
    

    return(        
        <div className='skinCare'>
            <Helmet>
                <title>Prana | Soin de la peau</title>
            </Helmet>
            <img className='skinCare-img'src={skinCare01} alt="" />            
            <div className='skinCare-link'>
                <a href="#price-skin">
                    <button className='skinCare-button' type='button' onClick={() => {
                        setOpened(!opened);
                    }} >
                        Cliquer pour afficher les tarifs
                    </button>
                </a>
                <table id="price-skin" className={ opened ? 'skinCare-price' : 'skinCare-price-closed'}>
                    <h3 className='skinCare-title'>Tarifs</h3>  
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

export default SkinCare;
