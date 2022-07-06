import { fetchJson } from '../api/fetchJson';
import { useT } from "../context/LanguageContext";
import Head from 'next/head';
import OurDogs from '../components/Dogs&Puppies/OurDogs';

const OurDogsPage = props => {
    const t = useT();

    return(
        <>
            <Head>
                <title>Corgi Happy House | {t?.ourDogs_nav}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <OurDogs ourDogsData={props.ourDogsData}/>
        </>
    )
}

export async function getServerSideProps() {
    const getDogs = await fetchJson('/api/ourdogpages?populate=*', 'get');

    if (!getDogs) {
        return {
            redirect: {
            destination: "/notfoundpage",
            },
        }
    }

    const ourDogsData = getDogs.data.map((dog) => {
      return dog['attributes'];
    });
  return {
    props: {
        ourDogsData
    },
  };
}

export default OurDogsPage