import Head from 'next/head';
import Home from '../components/Home/Home';

const Index = () => {
  return (
    <>
      <Head>
          <title>Corgi Happy House</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Home />
    </>
  )
}

  export default Index