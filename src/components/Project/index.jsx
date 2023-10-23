import React, { useState } from 'react';
import Image from 'next/image';
import GoTopButton from '../GoTopButton';
import styles from './styles.module.css'
import SeeCodeButton from '../SeeCodeButton';
import LearnMoreButton from '../LearnMoreButton';

const Project = ({image, alt, href, description, codeDirection, title}) => {

    const [showDescription, setShowDescription] = useState('none');

    return (
        <div className={styles["project"]}>

            <a target='_blank' rel="noopener noreferrer" href={href}>
                <Image
                    width={500}
                    height={300}
                    src={image}
                    alt={alt}
                    loading='eager'
                />
            </a>

            <div>
                <p className={styles["project-title"]}>
                    {title}
                </p>
            </div>

            <div className={styles["project-buttons"]}>
                <div className={styles["buttons"]}>
                    <LearnMoreButton handleClick={setShowDescription} />
                    <SeeCodeButton code={codeDirection} />
                </div>

            </div>

            <div
                className={styles["description"]}
                style={{display: showDescription}}
            >
                <div className={styles["text"]}>
                    {description}
                </div>
            </div>
        </div>
    );
}

export default Project;