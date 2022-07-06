import Head from 'next/head';
import Image from 'next/image'
import PageNotFound from '../assets/Img/PageNotFound.jpg'

const notfoundpage   = () => {

    const style = {
        display: 'block',
        margin: 'auto',
        marginTop: '10vh',
        width: '100vw', 
        maxWidth: '800px'
    }
    return(
        <>
            <Head>
                <title>Corgi Happy House | Page Not Found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div style={style}>
                <Image 
                    src={PageNotFound}
                    alt='PageNotFound'
                    layout="responsive"
                    width={651}
                    height={433}
                    unoptimized={true}/>
            </div>
        </>
    )
}

export default notfoundpage 