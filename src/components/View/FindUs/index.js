import React from 'react';
import { Helmet } from 'react-helmet';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


import './style.scss';

const FindUs = () => {
    return (
        <div className='findUs'>
            <Helmet>
                <title>Prana | Nous trouver</title>
            </Helmet>
            <div className='findUs-left'>
                <div className='findUs-content'>
                    <h3 className='findUs-title'>
                        Prana, jardin du Corps                        
                    </h3>
                    <div className='findUs-informations'>
                        <address className='findUs-street'>
                            4, rue de la Poterne 
                        </address>
                        <address className='findUs-CityCode'>
                            68250 Rouffach
                        </address>
                        <address className='findUs-phone'>
                            Téléphone: <a className='findUs-number' href="tel:0389274528">03 89 27 45 28</a>*
                        </address>
                        <address className='findUs-mail'>
                            E-mail: <a href="mailto:pranajardinducorps@gmail.com">pranajardinducorps@gmail.com</a>*
                        </address>
                        <h4 className='findUs-timeTitle'>
                            Horaires: 
                        </h4>
                        <span className='findUs-time'>
                            Du lundi au vendredi de 09h à 17h45<br/>
                            Le samedi de 08h à 16h
                        </span>
                        <div className='findUs-follow'>
                            <h4>
                                Suivez-nous sur Facebook*
                            </h4>
                            <div>
                            <a target='_blank' rel='noreferrer' href="https://www.facebook.com/Prana-Jardin-du-Corps-470208896661318"
                                className="youtube social">
                                <FontAwesomeIcon icon={faFacebook} size="3x" />
                            </a>
                            <div className="findUs-prevent">(* En cliquant sur l'icône et les liens ci-dessus vous allez être dirigé vers une page externe au site)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='findUs-right'>
                <div className='findUs-map'>
                    <iframe alt='Carte google montrant où Prana se situe dans Rouffach' title="Prana on googlemap"           
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10687.83475938612!2d7.2992215!3d47.9565229!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf9bd898d291e1943!2sPrana%2C%20jardin%20du%20Corps!5e0!3m2!1sfr!2sch!4v1614927607483!5m2!1sfr!2sch" 
                    width="600" height="500" allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div> 

                
                         
        </div>
    );
};

export default FindUs;