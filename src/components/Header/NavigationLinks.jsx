import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from 'clsx';
import styles from './styles.module.css'
import { useTranslation } from "next-i18next";

const NavigationLinks = ({ link }) => {
    const { asPath } = useRouter();
    const isActive = asPath.split('/')[1] === link;
    const { t } = useTranslation(['common']);

    return (
        <Link href={link} className={clsx(styles['link'], isActive ? styles['link-clicked'] : '')}>
            <span>{t(link).toUpperCase()}</span>
        </Link>
    );
}

export default NavigationLinks;