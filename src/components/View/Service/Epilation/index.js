import {React, useState} from 'react';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Prana | Epilation</title>
            </Helmet>
            <div className='epilation-woman'>
                <img className='epilation-img'src={epilationW} alt="" />
                <div className='epilation-link'>
                    <a href="#price-women">
                        <button className='epilation-button' type='button' onClick={() => {
                            setOpenedWo(!openedWo);
                        }} >                       
                                Cliquer pour afficher les tarifs femmes
                        </button>
                    </a>
                    <table id="price-women" className={ openedWo ? 'epilation-priceWo' : 'epilation-priceWo-closed'}>
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
                <a href="#price-men">
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedMen(!openedMen);
                    }} >
                        Cliquer pour afficher les tarifs hommes
                    </button>
                </a>
                    <table id="price-men" className={openedMen? 'epilation-priceMen' : 'epilation-priceMen-closed'}>
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