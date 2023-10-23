import React, { useState } from 'react';
import PrimaryButton from '../buttons/PrimaryButton';

const LearnMoreButton = ({ handleClick }) => {

    const [isClose, setIsClose] = useState(true);

    const showAndHide = () => {
        if(isClose) {
            handleClick('flex');
            setIsClose(false)
        }
        else {
            handleClick('none');
            setIsClose(true);
        }
    }


    return (
        <PrimaryButton onClick={() => showAndHide()}>
            {isClose ? 'LEARN MORE' : 'HIDE'}
        </PrimaryButton>
    );
}

export default LearnMoreButton;