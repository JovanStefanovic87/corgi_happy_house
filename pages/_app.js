import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/Globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </LanguageProvider>
  )
}

export default MyApp
