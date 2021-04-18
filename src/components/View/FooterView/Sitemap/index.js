import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './style.scss';

const Sitemap = () => {
    return(
        <div className='sitemap'>
            <Helmet>
                <title>Prana | Plan du site</title>
            </Helmet>
            <ul className="sitemap-ul">
                <li className="sitemap-link" >   
                    <Link className="sitemap-link" to='/' >
                        Accueil
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/service' >
                        Préstations
                    </Link>
                    <ul className="sitemap-ul">
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/epilation' >
                                Epilation
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/skinCare' >
                                Soin de la peau
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/bodyCare' >
                                Soin du corps
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/massage' >
                                Massage
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/philosophy' >
                        Philosophie
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/offers' >
                        Offres
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/marks' >
                        Nos marques
                    </Link>
                    <ul className="sitemap-ul">
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/couleur-caramel' >
                                Couleur Caramel
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/phyts' >
                                Phyt's
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/vitacology' >
                                Vitacology
                            </Link>
                        </li>
                        <li className="sitemap-link">
                            <Link className="sitemap-link" to='/peggy-sage' >
                                Peggy Sage
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/find-us' >
                        Nous trouver
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/contact-us' >
                        Contactez-nous
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/legal-notice' >
                        Mentions légales
                    </Link>
                </li>
                <li className="sitemap-link">
                    <Link className="sitemap-link" to='/sitemap' >
                        Plan du site
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default Sitemap;