import React from 'react';

import './style.scss';

const Caramel = () => {
    return(
        <div className='caramel'>
            <h2 className='caramel-titlepage'>
                Couleur Caramel
            </h2>
            <div className='caramel-content'>
                <h3 className='caramel-title'>
                    La marque naturelle et bio de référence
                </h3>
                <span className='caramel-text'>
                    Couleur Caramel est une marque de la société Nature cos <br />
                    Nous partageons des valeurs fortes fondées sur le développement 
                    durable car il nous semble être une évidence pour réussir et 
                    construire un avenir intelligent fait d’équilibres.
                    La charte Couleur Caramel pour un développement durable réclame 
                    un engagement avec soi-même. Il s’agit d’un engagement responsable
                    et réalisable, une vision du monde d’aujourd’hui qui influence 
                    positivement le monde de demain, en d’autres mots un appel au bon sens.
                </span>
                <h3 className='caramel-title'>
                    Les 4 respects:
                </h3 >
                <span className='caramel-text'>
                    Respect de l'environnement : En utilisant des ingrédients issus de l’agriculture
                    biologique chaque fois que possible. Prioriser l’Eco-conception des produits,
                    des packagings et présentoirs.<br/>
                    Respect de nos clients : Une qualité professionnelle et des produits avec un dosage
                    pigmentaire répondant à toutes les exigences techniques des professionnels.<br/>
                    Respect des animaux : Couleur Caramel s’est engagée dès sa création à respecter 
                    la condition animale en ne réalisant aucun test cosmétique sur les animaux.<br/>
                    Respect de la qualtité : Innover en permanence grâce à notre laboratoire de Recherche
                    & Développement qui conjugue les dernières méthodes de fabrication avec l’intelligence
                    végétale.
                </span>
            </div>
                <a className='caramel-link' href='https://www.couleur-caramel.com/'>Site officiel de Couleur Caramel</a>
            <div>
                <span>
                    (En cliquant sur le lien vous allé être dirigé sur une page externe à notre site)
                </span>
            </div>

        </div>
    )
};

export default Caramel;