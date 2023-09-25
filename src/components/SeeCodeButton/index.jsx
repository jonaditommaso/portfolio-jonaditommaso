import { Button } from '@mui/material';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import styles from './styles.module.css'

const SeeCodeButton = ({code}) => {
    return (
        <div className={styles['container']}>
            <a
                href={code}
                target="_blank"
                rel="noreferrer"
            >
                <div className={styles["container-button"]}>
                    <Button  size="small" variant="contained">
                        <AiFillGithub style={{ fontSize: '20px' }} />
                        <span className={styles["see-code-text-button"]}>SEE CODE</span>
                    </Button>
                </div>
            </a>
        </div>
    );
}

export default SeeCodeButton;