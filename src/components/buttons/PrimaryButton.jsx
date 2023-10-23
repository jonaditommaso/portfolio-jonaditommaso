import { Button } from '@mui/material';
import styles from './styles.module.css';

const PrimaryButton = ({ onClick, children }) => {

    return (
        <Button size="small" variant="outlined" onClick={onClick} className={styles['primary']}>
            {children}
        </Button>
    );
}

export default PrimaryButton;