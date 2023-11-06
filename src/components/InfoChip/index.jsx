import styles from './styles.module.css';
import { useTranslation } from "next-i18next";

const InfoChip = ({ data }) => {
    const { t } = useTranslation(['common']);
    const { mainData, topic, description } = data;

    return (
        <div className={styles['container-chip']}>
            <div className={styles['main-data']}>
                {mainData}
            </div>
            <div className={styles['aside-data-container']}>
                <div className={styles['topic-data']}>{t(topic)}</div>
                <div className={styles['description-data']}>{t(description)}</div>
            </div>
        </div>
    );
}

export default InfoChip;