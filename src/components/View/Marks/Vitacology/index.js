import React from 'react';

import './style.scss';

const Vitacology = () => {
    return(
        <div className='vitacology'>
            <h2 className='vitacology-titlepage'>
                Vitacology
            </h2>
            <div className='vitacology-content'>
                <h3 className='vitacology-title'>
                    La qualité de la cosmétique biologique pour la durabilité de notre vie écologique
                </h3>
                <span className='vitacology-text'>
                    La philosophie de Vitacology repose sur la volonté des fondateurs de proposer le meilleur 
                    de la nature à la beauté des femmes, tout en rendant à la nature les bienfaits qu'elle 
                    nous offre chaque jour.<br/>
                    En effet, leur passion de l'Aromathérapie et de la Phytothérapie est d'offrir le meilleur 
                    des plantes pour obtenir les formules certifiées BIO les plus efficaces.<br/>
                    Notre équipe composée de pharmaciens et de biologistes mettent tout leur savoir faire dans 
                    la recherche des meilleures associations d'huiles essentielles et d'huiles végétales biologiques, 
                    afin d'optimiser leurs résultats bénéfiques pour la spécificité de chaque type de peau.
                </span>
                <h3 className='vitacology-title'>
                    Vitacology c'est aussi...
                </h3 >
                <span className='vitacology-text'>
                    Notre passion, c'est également notre engagement dans la protection de la nature. C'est la raison 
                    pour laquelle, les fondateurs ont créé l'association :<br/>
                    «Vitacology, just Nature » afin d'aider à une meilleure connaissance de notre nature et de sa 
                    biodiversité, tout en contribuant à de réels projets d'actions en sa faveur.<br/>
                    Cet hymne à la nature débute avec les noms des produits cosmétiques évocateurs de la flore, la 
                    faune, tout ce qui nous rapproche de notre terre… d'où le nom Terressence™  donné à nos concentrés 
                    d'huiles essentielles et d'huiles végétales biologiques issues des essences obtenues par distillation 
                    des plantes cultivées avec l'aide de notre terre.<br/>
                    Convaincus que l'être humain peut améliorer son bien être, tout en veillant à celui des autres espèces 
                    qui l'entourent, nous vous invitons à découvrir notre cosmétique BIO dédiée à la fois aux plaisirs des 
                    sens et à l'univers de la biodiversité de notre terre :<br/>
                    La beauté biologique et la vie écologique.
                </span>
            </div>
                <a className='vitacology-link' href='http://www.vitacology.fr/'>Site officiel de Vitacology</a>
            <div>
                <span>
                    (En cliquant sur le lien vous allé être dirigé sur une page externe à notre site)
                </span>
            </div>

        </div>
    )
};

export default Vitacology;