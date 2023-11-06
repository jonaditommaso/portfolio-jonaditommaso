import Head from 'next/head'
import styles from '@/styles/Home.module.css'
// import PresentationCode from '@/components/PresentationCode'
import Image from 'next/image'
import InfoChip from '@/components/InfoChip'
import { quickInfoChips } from '@/utils/quickInfoChips'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Home() {
  const { t } = useTranslation(['common']);

  return (
    <>
      <Head>
        <title>{"Jonathan's portfolio"}</title>
        {/*
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles['home-container']}>
        <div className={styles['home-left']}>
          <div className={styles['presentation']}>
            <div className={styles['hello-text']}>
              {t('hello')}<span style={{color: '#ed6c87'}}>.</span>
            </div>

            <div className={styles['name-text']}>
              {t('i_am')} Jona<span style={{color: '#86d9f3'}}>.</span>
            </div>
          </div>

          <div className={styles['job']}>
            {`<`}{t('frontend_developer')} {`/>`}
          </div>

          <div>
            <a
              href="https://drive.google.com/file/d/15fqnxKnlVpBGr13rzQMSFPU66ZMf466p/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <PrimaryButton>
                  {t('download_resume')}
              </PrimaryButton>
            </a>
            <SecondaryButton onClick={() => {}}>
                {t('hire_via_code')}
            </SecondaryButton>
          </div>
        </div>

        <div className={styles['container-image']}>
          {/* <PresentationCode /> */}
          <Image
              className={styles['self-image']}
              src="/assets/img/jonathan2.png"
              alt="me"
              // width={250} con jonathan.png
              // height={321}
              width={256}
              height={382}
          />
          {quickInfoChips.map(data => (
            <div key={data.key} style={data.style}>
              <InfoChip data={data} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['common'])),
      },
    };
  } catch (error) {
    console.error('Check this error:', error);
  }
}