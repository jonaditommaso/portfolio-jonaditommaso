import { Button } from '@mui/material';
import React, { useState } from 'react';
import styles from './styles.module.css'

const CustomButton = ({handleClick}) => {

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
        <div className={styles["learn-more"]}>
            <Button size="small" variant="outlined" onClick={() => showAndHide() }>
                {isClose ? 'LEARN MORE' : 'HIDE'}
            </Button>
        </div>
    );
}

export default CustomButton;