import React, {Component} from 'react';
import {BreakAfterString} from './Helper';

const SectionTitle = (props) => {
    const {TitleAlignment,TitleData,BreakingNumber} = props
    const texting = BreakAfterString(TitleData,BreakingNumber);

    return(
        <div className={`block-title  ${TitleAlignment}`}>
            <div className="block-title__text">
                <div dangerouslySetInnerHTML={{ __html:  `${texting}`}} />
            </div>
        </div>
    )
}

export default SectionTitle;