import Button from '@mui/material/Button';
import styles from './styles.module.css';

const SecondaryButton = ({ children, onClick }) => {

    return (
        <Button size="small" variant="contained" className={styles['secondary']} onClick={onClick ? onClick : undefined}>
            {children}
        </Button>
    );
}

export default SecondaryButton;