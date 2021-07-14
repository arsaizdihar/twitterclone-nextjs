import { withUrqlClient } from "next-urql";
import Head from "next/head";
import useUser from "../src/components/auth/useUser";
import LeftBar from "../src/components/main-ui/LeftBar";
import Main from "../src/components/main-ui/Main";
import MessagesBar from "../src/components/main-ui/MessagesBar";
import RightBar from "../src/components/main-ui/rightbar/RightBar";
import { createUrqlClient } from "../src/utils/createUrqlClient";

function Home() {
  const { user, loading } = useUser();
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone made in nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen justify-center">
        <LeftBar />
        <Main />
        <RightBar />
        <MessagesBar />
      </div>
    </div>
  );
}

export default withUrqlClient(createUrqlClient)(Home);
