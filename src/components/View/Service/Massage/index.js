import React from 'react';
import { Helmet } from 'react-helmet-async';

import './style.scss';

const Massage = ({data}) => {
    return(
        <div className='massage'>
            <Helmet>
                <title>Prana | Massage</title>
            </Helmet>
                {
                    data.map((dataObject) => {
                        return (
                            <div className='massage-pregnant'>
                                <img className='massage-img' src={dataObject.url} alt={dataObject.alt} />
                                <div className='massage-content'>
                                    <h4 className='massage-title'>
                                        {dataObject.title}
                                    </h4>
                                    <span className='massage-text'>
                                        {dataObject.text}
                                    </span>
                                </div>
                            </div>
                    );})
                }            
        </div>
    )
}

export default Massage;