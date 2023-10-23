import styles from './styles.module.css';

const InfoChip = ({ data }) => {
    const { mainData, topic, description } = data;

    return (
        <div className={styles['container-chip']}>
            <div className={styles['main-data']}>
                {mainData}
            </div>
            <div className={styles['aside-data-container']}>
                <div className={styles['topic-data']}>{topic}</div>
                <div className={styles['description-data']}>{description}</div>
            </div>
        </div>
    );
}

export default InfoChip;