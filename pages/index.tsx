import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />{" "}
        <button onClick={() => signOut()}>Sign out</button>{" "}
      </>
    );
  }
  return (
    <div className='text-4xl font-bold'>
      <h1>Sign in First</h1>
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default Home;
