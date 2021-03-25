import {React, useState} from 'react';
import Prices from '../Prices';

import listWo from '../../../../data/epilationPriceWo';
import listMen from '../../../../data/epilationPriceMen';

import epilationW from '../../../../assets/service/price/epilationW.jpg';
import epilationM from '../../../../assets/service/price/epilationM.jpg';

import './style.scss';




const Epilation = () => {

    const [openedWo, setOpenedWo] = useState (false);
    const [openedMen, setOpenedMen] = useState (false);

    return(
        <div className='epilation'>

            <div className='epilation-woman'>
                <img className='epilation-img'src={epilationW} alt="" />
                <div>
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedWo(!openedWo);
                    }} >
                        Cliquer pour afficher les tarifs femmes
                    </button>
                    <ul className={ openedWo ? 'epilation-priceWo' : 'epilation-priceWo-closed'}>
                        <h3 className='epilation-title'>Tarifs Femmes</h3>  
                        {
                            listWo.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                                ))
                        }
                        <li className='epilation-package'>
                            <h3 className='epilation-title'>Forfait</h3>
                            <div className='epilation-package-offer'>
                                <span>3 zones</span>
                                <span className='epilation-package-reduce'>-5%</span>
                            </div>
                            <div className='epilation-package-offer'>
                                <span>4 zones</span>
                                <span className='epilation-package-reduce'>-10%</span>
                            </div>
                        </li>
                    </ul>
                </div>               
            </div>

            <div className='epilation-man'>
                <img className='epilation-img'src={epilationM} alt="" />
                <div>
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedMen(!openedMen);
                    }} >
                        Cliquer pour afficher les tarifs hommes
                    </button>

                    <ul className={openedMen? 'epilation-priceMen' : 'epilation-priceMen-closed'}>
                        <h3 className='epilation-title'>Tarifs Hommes</h3>
                        {
                            listMen.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                                ))
                        }
                        <li className='epilation-package'>
                            <h3 className='epilation-title'>Forfait</h3>
                            <div className='epilation-package-offer'>
                                <span>3 zones</span>
                                <span className='epilation-package-reduce'>-5%</span>
                            </div>
                            <div className='epilation-package-offer'>
                                <span>4 zones</span>
                                <span className='epilation-package-reduce'>-10%</span>
                            </div>
                        </li>
                    </ul>
                </div> 
            </div>

        </div>
    );
};

export default Epilation;