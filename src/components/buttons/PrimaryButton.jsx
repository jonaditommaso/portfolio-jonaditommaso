import Button from '@mui/material/Button';
import styles from './styles.module.css';
import { styled } from '@mui/material/styles';

const MuiButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#160e08',
    fontFamily: 'Montserrat, sans-serif',
}));

const PrimaryButton = ({ onClick, children }) => {

    return (
        <MuiButton size="small" variant="outlined" onClick={onClick} className={styles['primary-button']}>
            {children}
        </MuiButton>
    );
}

export default PrimaryButton;