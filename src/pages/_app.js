import ContainerLayout from '@/layouts/ContainerLayout'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'


function App({ Component, pageProps }) {
  return (
    <ContainerLayout>
      <Component {...pageProps} />
    </ContainerLayout>
  )
}

export default appWithTranslation(App)
