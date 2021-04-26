import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import Carousel from 'react-bootstrap/Carousel';

// pictures carousel
import picture01 from '../../../../assets/prana01.JPG';
import picture02 from '../../../../assets/prana02a.JPG';
import picture03 from '../../../../assets/prana02b.JPG';
import picture04 from '../../../../assets/prana03.JPG';
import picture05 from '../../../../assets/prana04.JPG';
import picture06 from '../../../../assets/prana05.JPG';
import picture07 from '../../../../assets/prana06.JPG';
import picture08 from '../../../../assets/prana07.JPG';
import picture09 from '../../../../assets/prana08.JPG';
import picture10 from '../../../../assets/prana09.JPG';

import { motion } from "framer-motion";
import './style.scss';

const LegalNotice = ({pageVariants, pageTransition}) => {
    return(
        <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition} className="legal">
            <Helmet>
                <title>Prana | Mentions légales</title>
            </Helmet>
            <div className="legal-head">
                <h3 className="legal-title">Hello 👋</h3>
                <div className="legal-content">
                    <p className="legal-text" >
                        Merci d'avoir passé de votre temps à découvrir le site 🙏 et notamment cette page qui n'est en général pas des plus intéressante à consulter. 😬 <br/>
                        Je vais faire au mieux pour rendre ce moment le plus agréable possible.
                    </p>
                    <p className="legal-text">
                        Avant tout, les raisons de l'existence de ce site 🤔:
                    </p>
                    <p className="legal-text">
                        Après un rendez-vous dans un institut d'esthétique à Rouffach en Alsace, j'ai consulté le site internet existant, développé avec le site <a target='_blank' rel='noreferrer' href="https://www.wix.com/">Wix</a>*.
                        Celui-ci présentait quelques bugs d'affichage, des liens non-fonctionnels, la partie responsive était de mauvaise qualité pour l'expérience utilisateur 📵
                        et beaucoup de points de qualité web <a target='_blank' rel='noreferrer' href="https://directory.opquast.com/fr/certificat/Q1OE2V/">OPQUAST</a>* étaient non-respectés. <br/>
                        Suite à une discussion avec la gérante de l'établissement, un contrat oral a été établi entre nous qui m’engageait à produire un site fonctionnel, graphiquement similaire à celui existant. Un délai d’un mois a été fixé et
                        la nouvelle version serait le point de départ d'ajouts de nouvelles fonctionnalités pour la suite. 🚀 <br/>
                        Mais, par intérêt envers des services plus complets et plus adaptés à son activité (logicel de paie, logiciel de caisse, site internet,...), le projet a été annulé deux jours avant la date de livraison et
                        n’a donc plus eu aucune utilité ou raison d’être. Avec un accord écrit de sa part j'ai pu conserver et utiliser le travail effectué à des fins professionnelles 
                        pour enrichir mon portefolio et pouvoir montrer mon savoir-faire sur un projet concret. 👨‍💻
                    </p>
                    <p className="legal-text">
                        Vous trouverez dans le carrousel ci-dessous les captures d'écran de l'ancien site en question qui m'ont servi de maquette pour mon travail.
                    </p>
                </div>
            </div>            
            <Carousel className='legal-carousel' interval={null}>                        
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture01}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture02}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture03}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture04}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture05}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture06}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture07}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture08}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture09}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="legal-img d-block w-100"
                        src={picture10}
                        alt="page de l'ancien site prana rouffach"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>                        
            </Carousel>
            <div className="legal-foot">
                <p className="legal-text">
                    Toutes les photos, images (hormis les plaquettes de tarifs) proviennent de banques d’images gratuites comme <a target='_blank' rel='noreferrer' href="https://pixabay.com/fr/">Pixabay</a>*, elles ne sont pas représentatives
                    de la réalité des produits et de l'institut. Les offres présentes dans la section "<Link className="legal-link" to="/offers" >Offres</Link>" ne sont là qu’à titre d’exemple.<br/>                    
                    Le site a été entièrement développé sous <a target='_blank' rel='noreferrer' href="https://fr.reactjs.org/">REACT</a>* v.17 en partant du <a target='_blank' rel='noreferrer' href="https://create-react-app.dev/docs/getting-started/">create-react-app</a>*. Seul Bootstrap a été utilisé pour le "Carousel" et certaines "Cards". <br/>
                    Il respecte au mieux les normes établies par <a target='_blank' rel='noreferrer' href="https://directory.opquast.com/fr/certificat/Q1OE2V/">OPQUAST</a>*, notamment l'accessibilité aux personnes en situation de handicap. Le code source de ce site est la propriété
                    de Mr Burrus Jérôme 8, rue des Récollets 68250 Rouffach-France et exclut tous droits d'utilisation ou de reproduction sans son accord.
                </p>
                <p className="legal-text">
                    Pour toutes demandes, suggestions,... vous pouvez adresser directement un mail à <a href="mailto:burrusjerome@gmail.com">burrusjerome@gmail.com</a> .
                </p>
                <p className="legal-text">
                    Merci à vous d'avoir été jusque là 👏
                </p>
                <p className="legal-prevent">
                    (* En cliquant sur les liens ci-dessus vous allez être dirigé vers une page externe au site)
                </p>
            </div>
        </motion.div>
    );
};

LegalNotice.propTypes = {
    pageVariants : PropTypes.shape({
        initial: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
        in: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
        out: PropTypes.shape({
            opacity: PropTypes.number.isRequired,
            x: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
              ]).isRequired,
        }).isRequired,
    }).isRequired,
    pageTransition :PropTypes.shape({        
            duration: PropTypes.number.isRequired,
            transition: PropTypes.string.isRequired,        
    }).isRequired,
};

export default LegalNotice;