import type { NextPage } from "next";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import HomePage from "../components/homePage/HomePage";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          {session && session.user ? (
            <HomePage
              signButton={<button onClick={() => signOut()}>Sign out</button>}
            />
          ) : (
            <HomePage
              signButton={<button onClick={() => signIn()}>Sign in</button>}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
