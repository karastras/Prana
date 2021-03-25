import React from 'react';
import pregnant01 from '../../../../assets/service/massage/pregnant01.jpg';
import massage03 from '../../../../assets/service/massage/massage03.jpg';
import massage04 from '../../../../assets/service/massage/massage04.jpg';


import './style.scss';

const Massage = () => {
    return(
        <div className='massage'>
            <div className='massage-pregnant'>
                <img className='massage-img' src={pregnant01} alt='' />
                <div className='massage-content'>
                    <h4 className='massage-title'>
                        Le massage Femme Enceinte
                    </h4>
                    <span className='massage-text'>
                        Du côté des futures mamans, le massage prénatal agit 
                        sur le développement du corps des femmes pendant la 
                        grossesse : il soulage les douleurs et les tensions 
                        musculaires ainsi que les crampes dans les jambes.
                    </span>
                </div>
            </div>
            <div className='massage-stone'>
                <img className='massage-img' src={massage03} alt='' />
                <div className='massage-content'>
                    <h4 className='massage-title'>
                        Le massage aux pierres chaudes
                    </h4>
                    <span className='massage-text'>
                    Le massage aux pierres chaudes associe les bienfaits d'un
                     mini-sauna à un massage drainant lymphatique. La chaleur 
                     irradie le corps et permet de se relaxer complètement.
                     Les muscles sont rapidement moins douloureux et relâchés, 
                     et le bien-être que cela procure est total.
                    </span>
                </div>
            </div>
            <div className='massage-deep'>
                <img className='massage-img' src={massage04} alt='' />
                <div className='massage-content'>
                    <h4 className='massage-title'>
                        Le massage sportif "Deep Tissue"
                    </h4>
                    <span className='massage-text'>
                        Le massage des tissus profonds est une technique pratiquée 
                        généralement avec une certaine intensité afin de relâcher 
                        les tensions les plus profondes. Les mouvements sont exécutés
                        très lentement et en profondeur. Ils sont surtout concentrés sur
                        les muscles et les fascias qui les entourent.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Massage;