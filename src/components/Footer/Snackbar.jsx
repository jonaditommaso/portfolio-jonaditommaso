import Image from 'next/image';
import { SnackbarProvider, useSnackbar } from 'notistack';

const Snackbar = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClick = (variant) => enqueueSnackbar('Email copied! Redirecting to Gmail...', {variant});

    return (
        <SnackbarProvider maxSnack={3} autoHideDuration={1400}>
            <div onClick={() => handleClick('info')}>
            <Image
                src="/assets/img/gmail.png"
                alt="gmail"
                style={{ marginTop: '10px', marginLeft: '6px'}}
                width={67}
                height={54}
                loading="lazy"
                decoding="async"
            />
        </div>
        </SnackbarProvider>
    );
}

export default Snackbar;