import React, { useState } from 'react';
import { SDetails, SBtnDetails } from '../assets/styles/app.styles';

interface IDesc {
    text: string;
    maxLength: number;
}

export default function Description({ text, maxLength }: IDesc) {
    const [details, setDetails] = useState(false);

    if (text.length <= maxLength) {
        return <div>{text}</div>;
    } else if (text.length > maxLength && details === true) {
        return (
            <SDetails>
                {text}
                <SBtnDetails onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </SBtnDetails>
            </SDetails>
        );
    } else {
        return (
            <SDetails>
                {text.substring(0, maxLength) + '...'}
                <SBtnDetails onClick={() => setDetails(prev => !prev)}>
                    {details ? 'Hide Details' : 'Show Details'}
                </SBtnDetails>
            </SDetails>
        );
    }
}
