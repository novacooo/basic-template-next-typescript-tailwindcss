import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Basic configuration</title>
      <meta
        name="description"
        content="Basic NextJS app configuration with TypeScript, ESLint, Prettier and TailwindCSS"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex h-full flex-col items-center justify-center bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-300">
        Basic NextJS app configuration with TypeScript, ESLint, Prettier and TailwindCSS
      </h1>
      <h2 className="mt-4 text-xl text-gray-400">by novaco</h2>
    </div>
  </>
);

export default Home;
