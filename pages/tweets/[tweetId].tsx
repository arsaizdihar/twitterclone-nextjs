import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
import React, { useState } from "react";
import useUser from "../../src/components/auth/useUser";
import LeftBar from "../../src/components/main-ui/LeftBar";
import MessagesBar from "../../src/components/main-ui/MessagesBar";
import RightBar from "../../src/components/main-ui/rightbar/RightBar";
import TweetDetail from "../../src/components/main-ui/tweet/TweetDetail";
import { useTweetDetailQuery } from "../../src/generated/graphql";
import { createUrqlClient } from "../../src/utils/createUrqlClient";
import { isServer } from "../../src/utils/isServer";
interface Props {
  tweetId: string;
}
const TweetDetailPage: NextPage<Props> = ({ tweetId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser();
  const [{ data, fetching }] = useTweetDetailQuery({
    pause: isServer(),
    variables: { id: parseInt(tweetId) },
  });
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Twitter Clone made in nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen justify-center">
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <TweetDetail data={data} />
        <RightBar />
        <MessagesBar />
      </div>
    </div>
  );
};

TweetDetailPage.getInitialProps = (ctx) => {
  return { tweetId: ctx.query.tweetId } as Props;
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  TweetDetailPage as any
);
