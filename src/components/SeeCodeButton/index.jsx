import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styles from './styles.module.css'
import SecondaryButton from '../buttons/SecondaryButton';

const SeeCodeButton = ({ code }) => {
    return (
        <div className={styles['container']}>
            <a
                href={code}
                target="_blank"
                rel="noreferrer"
            >
                <div className={styles["container-button"]}>
                    <SecondaryButton>
                        <AiFillGithub style={{ fontSize: '20px' }} />
                        <span className={styles["see-code-text-button"]}>SEE CODE</span>
                    </SecondaryButton>
                </div>
            </a>
        </div>
    );
}

export default SeeCodeButton;