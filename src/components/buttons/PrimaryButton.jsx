import Button from '@mui/material/Button';
import styles from './styles.module.css';

const PrimaryButton = ({ onClick, children }) => {

    return (
        <Button size="small" variant="outlined" onClick={onClick} className={styles['primary-portfolio-button']}>
            {children}
        </Button>
    );
}

export default PrimaryButton;