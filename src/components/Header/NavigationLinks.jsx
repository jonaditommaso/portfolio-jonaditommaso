import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from 'clsx';
import styles from './styles.module.css'

const NavigationLinks = ({ link }) => {
    const { asPath } = useRouter();
    const isActive = asPath.split('/')[1] === link;

    return (
        <Link href={link} className={clsx(styles['link'], isActive ? styles['link-clicked'] : '')}>
            <span>{link?.toUpperCase()}</span>
        </Link>
    );
}

export default NavigationLinks;