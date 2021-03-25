import React, {useState} from 'react';
import skinCare01 from '../../../../assets/service/price/skinCare01.jpg';
import Prices from '../Prices';
import list from '../../../../data/skinCarePrice';

import './style.scss';

const SkinCare = () => {
    
    const [opened, setOpened] = useState (false);
    

    return(        
        <div className='skinCare'>
            <img className='skinCare-img'src={skinCare01} alt="" />
            <div>
                <button className='skinCare-button' type='button' onClick={() => {
                    setOpened(!opened);
                }} >
                    Cliquer pour afficher les tarifs femmes
                </button>
                <ul className={ opened ? 'skinCare-price' : 'skinCare-price-closed'}>
                    <h3 className='skinCare-title'>Tarifs Femmes</h3>  
                    {
                        list.map((priceObject) => (
                            <Prices key={priceObject.id} {...priceObject} />
                            ))
                    }
                    <li className='skinCare-package'>
                        <h3 className='skinCare-title'>Forfait</h3>
                        <div className='skinCare-package-offer'>
                            <span>3 zones</span>
                            <span className='skinCare-package-reduce'>-5%</span>
                        </div>
                        <div className='skinCare-package-offer'>
                            <span>4 zones</span>
                            <span className='skinCare-package-reduce'>-10%</span>
                        </div>
                    </li>
                </ul>
            </div>               
        </div>
    )
}

export default SkinCare;