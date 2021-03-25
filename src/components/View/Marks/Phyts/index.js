import React from 'react';

import './style.scss';

const Phyts = () => {
    return(
        <div className='phyts'>
            <h2 className='phyts-titlepage'>
                Phyt's
            </h2>
            <div className='phyts-content'>
                <h3 className='phyts-title'>
                    Phyt’s, la beauté bio sans compromis !
                </h3>
                <span className='phyts-text'>
                Les cosmétiques Phyt’s sont le gage d’une nouvelle expérience pour vous et votre peau.<br/>
                Labellisés COSMEBIO, ils vont plus loin que la charte en proposant une majorité de formules
                100% d’origine naturelle c’est-à-dire sans conservateur et sans colorant de synthèse et 
                majoritairement vegan.<br/>
                Hors des modes, les soins PHYT'S™ sont à la fois certifiés Bio, innovants, plaisirs, rassurants
                et efficaces, authentiques et tendances.<br/>
                Ils sont élaborés par notre centre de recherche interne depuis bientôt 50 ans et sont fabriqués 
                en France près de Cahors dans le Lot, le tout basée sur une éthique associant écologie et naturalité.<br/>
                Choisir Phyt’s, c’est la garantie d’assurer à votre peau efficacité et plaisir, tout en préservant 
                la planète et les êtres vivants. Que demander de mieux !
                </span>
                <h3 className='phyts-title'>
                    Un savoir-faire et une expertise reconnus à l'international
                </h3 >
                <span className='phyts-text'>
                    PHYT’S contribue à la recherche de naturalité et la protection de l’environnement, deux préoccupations 
                    mondiales pour l’avenir de la planète.<br/>
                    Notre savoir-faire en cosmétique certifiée bio, d’origine naturelle et notre expertise de « l’Esthétique à la Française » 
                    amènent de plus en plus de clients à nous faire confiance à l’international.<br/>
                    Nous sommes distribués dans plus de 45 pays répartis sur tous les continents et ce chiffre est en progression constante.<br/>
                    Le succès rencontré à l’export, nous a permis de mettre en oeuvre de véritables partenariats avec certains distributeurs 
                    en Europe, en Australie et plus récemment en Asie et Amérique du Nord. 
                </span>
            </div>
                <a className='phyts-link' href='https://www.phyts.com/'>Site officiel de Phyt's</a>
            <div>
                <span>
                    (En cliquant sur le lien vous allé être dirigé sur une page externe à notre site)
                </span>
            </div>

        </div>
    )
};

export default Phyts;