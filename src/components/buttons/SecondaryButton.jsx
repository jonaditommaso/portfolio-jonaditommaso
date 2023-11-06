import Button from '@mui/material/Button';
import styles from './styles.module.css';
import { styled } from '@mui/material/styles';

const MuiButton = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: '#160e08',
    fontFamily: 'Montserrat, sans-serif',
}));

const SecondaryButton = ({ children, onClick }) => {

    return (
        <MuiButton size="small" variant="contained" className={styles['secondary-button']} onClick={onClick ? onClick : undefined}>
            {children}
        </MuiButton>
    );
}

export default SecondaryButton;