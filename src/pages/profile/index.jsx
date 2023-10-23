import React, { useState } from 'react';
import LearnMoreButton from '@/components/LearnMoreButton';
import GoTopButton from '@/components/GoTopButton';
import Image from 'next/image';
import styles from './styles.module.css'

const Profile = () => {

    const [showDescription, setShowDescription] = useState('none');

    return (
        <>
        <div className={styles["container"]}>
            <div className={styles["content"]}>
                {/* <div className={styles['container-profile-image']}>
                    <Image
                        className={styles["image"]}
                        src="/assets/img/jonathan.png"
                        alt="me"
                        loading="lazy"
                        decoding="async"
                        width={380}
                        height={450}
                    />
                </div> */}
                <LearnMoreButton handleClick={setShowDescription} />
            </div>
        </div>

        <div
            className={styles["description"]}
            style={{display: showDescription}}
        >
            <div className={styles["text"]}>
                My name is <strong><i>Jonathan Manuel Campos</i></strong>. I am a Frontend Developer looking to reinforce my experience as a programmer.
                <br/>
                <br/>
                I consider myself an enthusiastic, curious and resilient person.
                <br/>
                <br/>
                My current goal is to obtain a job opportunity that allows me to continue learning, continue growing and continue advancing.
            </div>

        </div>
        </>
    );
}

export default Profile;