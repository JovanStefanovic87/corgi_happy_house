import { fetchJson } from '../api/fetchJson';
import { useT } from "../context/LanguageContext";
import Head from 'next/head';
import Gallery from '../components/Gallery/Gallery'

const GalleryPage = props => {
    const t = useT();

    return(
        <>
            <Head>
                <title>Corgi Happy House | {t?.gallery_nav}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
                <Gallery galleryData={props.galleryData}/>
        </>
    )
}

export async function getServerSideProps() {
    const getGallery = await fetchJson('/api/galleries?populate=*', 'get');

    if (!getGallery) {
        return {
            redirect: {
            destination: "/notfoundpage",
            },
        }
    }

    const galleryData = getGallery.data.map((item) => {
      return item['attributes'];
    });
  return {
    props: {
        galleryData
    },
  };
}

export default GalleryPage