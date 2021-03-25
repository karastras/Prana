import React from 'react';

import './style.scss';

const Peggy = () => {
    return(
        <div className='peggy'>
            <h2 className='peggy-titlepage'>
                Peggy Sage
            </h2>
            <div className='peggy-content'>
                <h3 className='peggy-title'>
                    Une conception globale de la beauté
                </h3>
                <span className='peggy-text'>
                Depuis plus de 90 ans, une marque professionnelle qui met son expertise à votre service
                en manucurie / prothésie ongulaire & nail art / soins / maquillage / formation professionnelle.
                Devenue la marque incontournable prisée à travers toutes les générations de femmes, pétillante
                de dynamisme par ses créations, aussi tendance que technique, au gré des saisons. Notre 
                philosophie : une large sélection de couleurs et de textures, une innovation constante, une 
                qualité irréprochable et un service client d’exception. Je suis LA marque de beauté française,
                professionnelle autant que lifestyle, maintenant disponible en ligne pour votre plus grand plaisir.
                </span>
                <h3 className='peggy-title'>
                    Peggy Sage à l’heure du digital !
                </h3 >
                <span className='peggy-text'>
                Chez Peggy Sage, notre préoccupation principale : vous offrir les meilleurs produits au prix le plus
                juste en vous faisant bénéficier des conseils experts de notre équipe passionnée. Utiliser un produit
                Peggy Sage, c’est s’assurer d’une qualité irréprochable pour une beauté sans faille. Parce que votre
                beauté nécessite des produits adaptés selon le moment de l’année, Peggy Sage propose des nouveautés
                spécifiques marquées autour de temps forts que sont les 4 saisons. Certaines de nos nouveautés 
                techniques sont réassorties à l’année et d’autres plus trendy sont disponibles uniquement le temps 
                de la saison. 
                </span>
            </div>
                <a className='peggy-link' href='https://www.peggysage.com/fr-FR/'>Site officiel de Peggy Sage</a>
            <div>
                <span>
                    (En cliquant sur le lien vous allé être dirigé sur une page externe à notre site)
                </span>
            </div>

        </div>
    )
};

export default Peggy;