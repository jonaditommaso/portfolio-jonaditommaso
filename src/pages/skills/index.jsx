import React, { useState } from 'react';
import Skill from '@/components/Skill';
import { Button } from '@mui/material';
import { BsInfoCircle } from 'react-icons/bs'
import Modal from '@/components/Modal';
import { skills } from '@/utils/skills';
import styles from './styles.module.css';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const renderButton = () =>  <Button onClick={()=> setShowModal(false)}>Got it</Button>

    return (
        <>
            <div className={styles["modal-button-container"]}>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={()=> setShowAll(!showAll)}
                >
                    {!showAll ? 'I got tired, I want to see all of them!' : 'Restore crystals'}
                </Button>
                <BsInfoCircle onClick={() => setShowModal(true)} size={23} style={{cursor: 'pointer'}} />

                <Modal
                    title="Hit the crystals to see the skills!"
                    actions={renderButton()}
                    open={showModal}
                />
            </div>

            <div className={styles['skills-container']}>
                {skills.map(skill => {
                    return (
                        <Skill
                            key={skill.icon}
                            icon={skill.icon}
                            height={skill.height}
                            width={skill.width}
                            figcaption={skill.figcaption}
                            marginB={skill.marginB}
                            marginT={skill.marginT}
                            showSkills={showAll}
                        />
                    )
                })}
            </div>
        </>
    );
}

export default Skills;