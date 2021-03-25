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
                <div className='epilation-link'>
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedWo(!openedWo);
                    }} >
                        Cliquer pour afficher les tarifs femmes
                    </button>
                    <table className={ openedWo ? 'epilation-priceWo' : 'epilation-priceWo-closed'}>
                        <h3 className='epilation-title'>Tarifs Femmes</h3>  
                        {
                            listWo.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                                ))
                        }
                        <h3 className='epilation-title'>Forfait</h3>                       
                            <tr>
                                <td>3 zones</td>
                                <td></td>
                                <td className='epilation-package-reduce'>-5%</td>
                            </tr>                            
                            <tr>
                                <td>4 zones</td>
                                <td></td>
                                <td className='epilation-package-reduce'>-10%</td>
                            </tr> 
                    </table>
                </div>               
            </div>

            <div className='epilation-man'>
                <img className='epilation-img'src={epilationM} alt="" />
                <div className='epilation-link'>
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedMen(!openedMen);
                    }} >
                        Cliquer pour afficher les tarifs hommes
                    </button>

                    <table className={openedMen? 'epilation-priceMen' : 'epilation-priceMen-closed'}>
                        <h3 className='epilation-title'>Tarifs Hommes</h3>
                        {
                            listMen.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                                ))
                        }
                        <h3 className='epilation-title'>Forfait</h3>                       
                            <tr>
                                <td>3 zones</td>
                                <td></td>
                                <td className='epilation-package-reduce'>-5%</td>
                            </tr>                            
                            <tr>
                                <td>4 zones</td>
                                <td></td>
                                <td className='epilation-package-reduce'>-10%</td>
                            </tr>                       
                    </table>
                </div> 
            </div>

        </div>
    );
};

export default Epilation;