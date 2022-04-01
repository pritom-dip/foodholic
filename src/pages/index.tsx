import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '@/modules/HomePage';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>foodholic</title>
        <meta name='description' content='Developed by Pritom' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomePage />
    </div>
  );
};

export default Home;
