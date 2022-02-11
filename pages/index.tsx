import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex font-bold">
      <Head>
        <title>Basic configuration</title>
        <meta
          name="description"
          content="Basic NextJS app configuration with TypeScript, ESLint, Prettier and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
