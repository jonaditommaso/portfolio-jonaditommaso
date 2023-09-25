import { useEffect, useRef, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import Swal from 'sweetalert2'
import { CongratulationsEffect } from './CongratulationsEffect';
import styles from './styles.module.css'

import { CLASS, COMMENT, CONSTRUCTOR, DEVELOPER, WRITE } from '@/utils/presentationWords';

const PresentationCode = () => {

    const [param, setParam] = useState('');
    const [showComment, setShowComment] = useState('hidden')

    const writeParam = useRef(null);

    useEffect(() => {
        writeParam.current.focus();
        setTimeout(() => {
            setShowComment('visible')
        }, 2500);
    }, []);


    const resultCode = () => {
        if(param.includes('true')) {
            return <CongratulationsEffect />
        }
        else if (param === 'false') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error has occurred, please try again.',
                confirmButtonColor: '#86d9f3',
                backdrop: false
            }).then((result) => {
                if (result.value) {
                    setParam('');
                }
            });
        }
    }

    return (
        <div className={styles['presentation-code']}>

            <div><span style={{color: '#3676BB'}}>{CLASS}</span> <span style={{color: '#45B791'}}>{DEVELOPER}</span> <span style={{color: '#B078AA'}}>{`{`}</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}><span style={{color: '#3676BB'}}>{CONSTRUCTOR}</span> (name<span style={{color: 'white'}}>,</span> technology<span style={{color: 'white'}}>,</span> hired) {`{`}</div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>name <span style={{color: 'white'}}>=</span> name<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>technology <span style={{color: 'white'}}>=</span> technology<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '40px'}}>this<span style={{color: 'white'}}>.</span>hired <span style={{color: 'white'}}>=</span> hired<span style={{color: 'white'}}>;</span></div>
            <div style={{color: '#62baf8', marginLeft: '15px'}}>{`}`}<span style={{color: 'white'}}>;</span></div>
            <div><span style={{color: '#B078AA'}}>{`}`}</span><span>;</span></div>

            <br />

            <div className={styles['final-code']}>
                 <TypewriterComponent
                    onInit={tw => {
                        tw.typeString(WRITE)
                        .start()
                    }}

                    options={{
                        delay: 25,
                        cursor: null
                    }}
                />
                <input
                    className={styles['hired-entry']}
                    maxLength="7"
                    ref={writeParam}
                    value={param}
                    onChange={e => setParam(e.target.value)}
                />
            </div>
            {resultCode()}
            <div style={{visibility: showComment, color: '#3E6839'}}>{COMMENT}</div>
        </div>
    );
}

export default PresentationCode;