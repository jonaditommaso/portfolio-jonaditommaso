import React, { useState } from 'react';
import Skill from '@/components/Skill';
import Button from '@mui/material/Button';
import { BsInfoCircle } from 'react-icons/bs'
import Modal from '@/components/Modal';
import { skills } from '@/utils/skills';
import styles from './styles.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Skills = () => {
    const [showAll, setShowAll] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { t } = useTranslation(['common']);

    const renderButton = () =>  <Button onClick={()=> setShowModal(false)}>{t('got_it')}</Button>

    return (
        <>
            <div className={styles["modal-button-container"]}>
                <Button
                    size="small"
                    variant="outlined"
                    onClick={()=> setShowAll(!showAll)}
                >
                    {!showAll ? t('see_all_skills') : t('restore_crystals')}
                </Button>
                <BsInfoCircle onClick={() => setShowModal(true)} size={23} style={{cursor: 'pointer', color: 'white'}} />

                <Modal
                    title={t('info_crystals')}
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

export async function getStaticProps({ locale }) {
    try {
      return {
        props: {
          ...(await serverSideTranslations(locale, ['common'])),
        },
      };
    } catch (error) {
      console.error('Check this error:', error);
    }
  }