import React from 'react';
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



const LegalNotice = () => {
    return(
        <div className="legal">
            <Helmet>
                <title>Prana | Mentions légales</title>
            </Helmet>
            <div className="legal-content">
                Bonjour, 
                avant tout merci d'avoir passer de votre temps à découvrir le site et notamment cette page qui n'est en général pas des plus intéressantes à consulter.
                Je vais essayer de faire au mieux pour rendre ce moment le moins désagréable possible.
                Avant tout le pourquoi de l'existance de ce site. 
                Après une consultation dans un institut à Rouffach en Alsace. Un site internet était existant, développer avec <a target='_blank' rel='noreferrer' href="https://www.wix.com/"> Wix</a>.
                Le site présentait quelques bugs d'affichage, des liens non-fonctionnels, la partie responsive était de mauvaise qualité pour l'expérience utilisateur 
                et beaucoup de points de qualité web <a target='_blank' rel='noreferrer' href="https://directory.opquast.com/fr/certificat/Q1OE2V/">OPQUAST</a> étaient non-respectés.
                Suite à nos discussions, un contrat oral a établit entre nous m’engageait à produire un site fonctionnel, similaire à celui existant sous un délai d’un mois et
                serait le point de départ d'ajouts de nouvelles fonctionnalités pour la suite.
                Mais par intérêt envers des services plus complet et plus adaptés à son activité, le projet a été annulé deux jours avant la date de livraison et
                n’a donc plus eu aucune utilité ou raison d’être. Avec un accord écrit de sa part j'ai pu conserver et utiliser le travail effectué à des fins professionnelles 
                pour enrichir mon portefolio et pouvoir montrer mon savoir-faire sur un projet concret.
                Vous trouverez dans le Carousel ci-dessous les captures d'écrans de l'ancien site en question qui m'a servit de maquette pour mon travail.
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
            <div>
                Toutes les photos, images (hormis les plaquettes de tarifs) proviennent dans des banques d’images gratuite comme pixabay.com, elles ne sont pas représentatives
                de la réalité des produits et de l'institut. Les offres présentes dans la section "Offres" ne sont là qu’à titre d’exemple.
                Le site à été entièrement développé sous REACT v17 en partant du create-react-app. Seul Bootstrap a été utlisé pour le "Carousel" et "certaines Cards".
                Il respecte aux mieux les normes établit par OPQUAST , notamment l'accessibilité aux personnes en situtations de handicap.
                Pour toutes demandes,suggestions,.... vous pouvez m'adresser directement un mail burrus.jerome@gmail.com .
                Merci d'avoir été jusque là ;)
            </div>
        </div>
    );
};

export default LegalNotice; 