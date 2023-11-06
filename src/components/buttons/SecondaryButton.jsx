import Button from '@mui/material/Button';
import styles from './styles.module.css';
import { styled } from '@mui/material/styles';

const MuiButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: 'black',
    margin: '10px',
    fontFamily: 'Montserrat, sans-serif',
    '&:hover': {
        transition: '0.3s'
      },
}));

const SecondaryButton = ({ children, onClick }) => {

    return (
        <MuiButton size="small" variant="contained" className={styles['secondary-button']} onClick={onClick ? onClick : undefined}>
            {children}
        </MuiButton>
    );
}

export default SecondaryButton;