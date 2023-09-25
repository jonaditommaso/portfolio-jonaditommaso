import React, { useState } from 'react';
import { BsChevronUp } from 'react-icons/bs'
import { clsx } from 'clsx';
import styles from './styles.module.css';

function GoTopButton() {

    const [showButton, setShowButton] = useState(false);

    if(typeof window !== 'undefined') {
        window.onscroll = () => {
            if(document.documentElement.scrollTop > 65) {
                setShowButton(true);
            }
            else {
                setShowButton(false);
            }
        }
    }

    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <div className={clsx(styles['container-button'], !showButton && styles['hide'])}>
                <div className={styles["go-top-container"]} onClick={goTop}>
                    <div className={styles["go-top"]}>
                        <BsChevronUp style={{ fontSize: '30px' }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GoTopButton;
