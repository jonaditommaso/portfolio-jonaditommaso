import Image from "next/image";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from "./Snackbar";
import styles from './styles.module.css';

const Footer = () => {

    const messageAndGoGmail = (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.open('https://mail.google.com/mail/u/0/#inbox?compose=new', '_blank');
        }, 1500);
    }

    return (
        <>
             <hr style={{width: '100%'}} />
            <div className={styles.footer}>
                <div className={styles['footer-images']}>

                    <a href="https://github.com/jonaditommaso" target="_blank" rel="noreferrer">
                        <Image
                            src="/assets/img/github.png"
                            alt="github"
                            width={36}
                            height={36}
                            loading="lazy"
                            decoding="async"
                        />

                    </a>

                    <a
                        onClick={e => messageAndGoGmail(e) }
                        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <CopyToClipboard text="jonaditommaso@gmail.com">
                            <Snackbar />
                        </CopyToClipboard>
                    </a>

                    <a href="https://www.linkedin.com/in/jonacampos" target="_blank" rel="noreferrer">
                        <Image
                            src="/assets/img/linkedin.png"
                            alt="linkedin"
                            width={57}
                            height={57}
                            loading="lazy"
                            decoding="async"
                        />
                    </a>

                </div>
            </div>
        </>
    );
}

export default Footer;