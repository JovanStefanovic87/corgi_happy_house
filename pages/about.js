import { useT } from "../context/LanguageContext";
import Head from 'next/head';
import About from '../components/About/About'

const AboutPage = () => {
    const t = useT();

    return(
        <>
            <Head>
                <title>Corgi Happy House | {t?.about_nav}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <About />
        </>
    )
}

  export default AboutPage