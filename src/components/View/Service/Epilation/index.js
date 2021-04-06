import {React, useState} from 'react';
import { Helmet } from 'react-helmet-async';

import Prices from '../Prices';

import listWo from '../../../../data/epilationPriceWo';
import listMen from '../../../../data/epilationPriceMen';

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
                <img className='epilation-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810381017254117321791.jpg" alt="tarifiaction des prestations en épilation pour femmes" />
                <div className='epilation-link'>
                    <a href="#price-women">
                        <button className='epilation-button' type='button' onClick={() => {
                            setOpenedWo(!openedWo);
                        }} >                       
                                Cliquer pour afficher les tarifs femmes
                        </button>
                    </a>
                    <table id="price-women" className={ openedWo ? 'epilation-priceWo' : 'epilation-priceWo-closed'}>
                        <thead>
                            <tr>
                                <th className='epilation-title'>
                                    Tarifs Femmes
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            listWo.map((priceObject) => (
                                <Prices key={priceObject.id} {...priceObject} />
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className='epilation-title'>Forfait</th>                       
                            </tr>
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
                        </tfoot>
                    </table>
                </div>               
            </div>

            <div className='epilation-man'>
                <img className='epilation-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810381017254117321790.jpg" alt="tarifiaction des prestations en épilation pour homme" />
                <div className='epilation-link'>
                <a href="#price-men">
                    <button className='epilation-button' type='button' onClick={() => {
                        setOpenedMen(!openedMen);
                    }} >
                        Cliquer pour afficher les tarifs hommes
                    </button>
                </a>
                    <table id="price-men" className={openedMen? 'epilation-priceMen' : 'epilation-priceMen-closed'}>
                        <thead>
                            <tr>
                                <th className='epilation-title'>Tarifs Hommes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listMen.map((priceObject) => (
                                    <Prices key={priceObject.id} {...priceObject} />
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th className='epilation-title'>Forfait</th>                       
                            </tr>
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
                        </tfoot>
                    </table>
                </div> 
            </div>

        </div>
    );
};

export default Epilation;