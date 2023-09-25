import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.css'

function Modal({ open,  title, actions, onDismiss }) {
    if (typeof document === 'undefined' || !open) return null;

    return (
        ReactDOM.createPortal(
            <>
                <div className={styles["overlay"]} onClick={onDismiss}></div>
                <div className={styles["modal"]} onClick={e => e.stopPropagation()}>
                    <div className={styles["title"]}>
                        <h4>{title}</h4>
                    </div>
                    <div className={styles["actions"]}>{actions}</div>
                </div>
            </>,
            document.querySelector('#portal')
        )
    );
}

export default Modal;