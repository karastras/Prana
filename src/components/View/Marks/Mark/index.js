import React from 'react';
import { Helmet } from 'react-helmet-async';
import './style.scss';

const Mark = ({
    id,
    tagTitle,
    title1,
    title2,
    text1,
    text2,
    title3,
    url,
    link
}) => {
    return(
                /* classname='mark' do some conflicts in css with Bootstrap and others, so i use 'label' */
            <div key={id} className='label'>                    
                <Helmet>
                    <title>{tagTitle}</title>
                </Helmet>
                <h2 className='label-titlepage'>
                    {title1}
                </h2>
                <div className='label-content'>
                    <h3 className='label-title'>
                        {title2}
                    </h3>
                    <ol className='label-text'>
                        {
                        text1.map((textObject) => {
                            return (
                            <li key={textObject.id} >
                                {textObject.text}
                            </li>
                            );
                        })}
                    </ol>
                    <h3 className='label-title'>
                        {title3}
                    </h3 >
                    <ol className='label-text'>
                        {
                            text2.map((textObject) => {
                                return (
                                <li key={textObject.id} >
                                    {textObject.text}
                                </li>
                                );
                        })}
                    </ol>
                </div>
                    <a className='label-link' target='_blank' rel='noreferrer' href={url}>
                        {link}
                    </a>
                <div>
                    <span>
                        (En cliquant sur le lien vous allez être dirigé sur une page externe à notre site)
                    </span>
                </div>
            </div>
    )
};

export default Mark;