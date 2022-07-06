import { fetchJson } from '../api/fetchJson';
import { useT } from "../context/LanguageContext";
import Head from 'next/head';
import OurPuppies from '../components/Dogs&Puppies/OurPuppies'

const OurPuppiesPage = props => {
    const t = useT();
    return(
        <>
            <Head>
                <title>Corgi Happy House | {t?.puppies_nav}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <OurPuppies ourPuppiesData={props.ourPuppiesData}/>
        </>
    )
}

export async function getServerSideProps() {
    const getPuppies = await fetchJson('/api/ourpuppiespages?populate=*', 'get');
    
    if (!getPuppies) {
        return {
            redirect: {
            destination: "/notfoundpage",
            },
        }
    }
    
    const ourPuppiesData = getPuppies.data.map((puppie) => {
    return puppie['attributes'];
    });

  return {
    props: {
        ourPuppiesData
    },
  };
}

export default OurPuppiesPage