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

const PrimaryButton = ({ onClick, children }) => {

    return (
        <MuiButton size="small" variant="outlined" onClick={onClick} className={styles['primary-button']}>
            {children}
        </MuiButton>
    );
}

export default PrimaryButton;