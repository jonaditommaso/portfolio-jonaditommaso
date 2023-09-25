import ContainerLayout from '@/layouts/ContainerLayout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ContainerLayout>
      <Component {...pageProps} />
    </ContainerLayout>
  )
}
