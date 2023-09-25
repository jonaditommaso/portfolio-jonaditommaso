import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { clsx } from 'clsx';

const Skill = ({width = 80, height = 70, marginB, marginT, icon, figcaption, showSkills}) => {

    const [discovered, setDiscovered] = useState(false);
    const [damaged, setDamaged] = useState(false);
    const [shaking, setShaking] = useState('');

    useEffect(() => {
        if(showSkills === true) {
            setDamaged(false)
            setDiscovered('flex')
        }
        if((showSkills === false) && (!damaged)) {
            setDiscovered(false)
        }
    }, [showSkills])

    const damageSkill = () => {
        if(!damaged) {
            setDamaged(true);
            setShaking('shaking');
            setTimeout(() => {
                setShaking('')
            }, 150);
        }
    }

    const handleDiscover = () => {
        setDamaged(false)
        setDiscovered('flex')
    }

    return (
        <div
            className={clsx(styles['skill'], styles[`${shaking}`], !discovered && styles['blur'])}
            onClick={damageSkill}
            style={{background: discovered && '#FFFFFF', cursor: discovered && 'default'}}
        >
            {damaged &&
                <Image
                    src="/assets/img/crack.png"
                    alt="crack"
                    onClick={handleDiscover}
                    width={120}
                    height={100}
                />
            }
            {discovered && <div className={styles['container-image-skill']}>
                <Image
                    src={`/assets/img/icons/${icon}.png`}
                    alt={`${icon}`}
                    width={width}
                    height={height}
                    style={{
                        marginBottom: marginB && marginB,
                        marginTop: marginT && marginT
                    }}
                />
                <figcaption>{figcaption}</figcaption>
            </div>}
        </div>
    );
}

export default Skill;