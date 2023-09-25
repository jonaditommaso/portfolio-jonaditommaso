import { links } from "@/utils/links";
import Link from "next/link";
import { AiFillHome } from 'react-icons/ai'
import styles from './styles.module.css'
import NavigationLinks from "./NavigationLinks";

const Header = () => {
    return (
        <div>
            <div className={styles['header']}>

                <Link className={styles['home-icon']} href='/'>
                    <AiFillHome style={{ fontSize: '30px' }}/>
                </Link>

                <div className={styles['links']}>
                    { links.map((link) => <NavigationLinks key={link} link={link} />) }

                    <a className={styles['link']}
                        href="https://drive.google.com/file/d/15fqnxKnlVpBGr13rzQMSFPU66ZMf466p/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>RESUME</span>
                    </a>
                </div>
            </div>
            <hr style={{width: '100%'}} />
        </div>
    );
}

export default Header;