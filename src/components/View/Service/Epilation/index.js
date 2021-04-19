import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import Prices from '../Prices';

import { motion } from "framer-motion";
import './style.scss';

const Epilation = ({
    openedWo,
    isOpenWo,
    openedMen,
    isOpenMen,
    list,
    pageVariants,
    pageTransition
    }) => {
        return(
            <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className='epilation'>
                <Helmet>
                    <title>Prana | Epilation</title>
                </Helmet>
                <div className='epilation-woman'>
                    <img className='epilation-img'src="https://nsm09.casimages.com/img/2021/03/18//21031810381017254117321791.jpg" alt="tarifiaction des prestations en épilation pour femmes" />
                    <div className='epilation-link'>
                        <Link smooth to="#price-women">
                            <button className='epilation-button' type='button' onClick={ isOpenWo } >                       
                                    Cliquer pour afficher les tarifs femmes
                            </button>
                        </Link>
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
                                list.epilWo.map((priceObject) => (
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
                    <Link smooth to="#price-men">
                        <button className='epilation-button' type='button' onClick={ isOpenMen } >
                            Cliquer pour afficher les tarifs hommes
                        </button>
                    </Link>
                        <table id="price-men" className={openedMen? 'epilation-priceMen' : 'epilation-priceMen-closed'}>
                            <thead>
                                <tr>
                                    <th className='epilation-title'>Tarifs Hommes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.epilMen.map((priceObject) => (
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

            </motion.div>
        );
};

Epilation.propTypes = {
    openedWo: PropTypes.bool.isRequired,
    isOpenWo: PropTypes.func.isRequired,
    openedMen: PropTypes.bool.isRequired,
    isOpenMen: PropTypes.func.isRequired,
    listWo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
    listMen: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}

export default Epilation;