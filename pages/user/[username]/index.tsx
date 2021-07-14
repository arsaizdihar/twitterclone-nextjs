import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import useUser from "../../../src/components/auth/useUser";
import Head from "../../../src/components/main-ui/Head";
import LeftBar from "../../../src/components/main-ui/LeftBar";
import MessagesBar from "../../../src/components/main-ui/MessagesBar";
import RightBar from "../../../src/components/main-ui/rightbar/RightBar";
import Profile from "../../../src/components/profile/Profile";
import { useUserQuery } from "../../../src/generated/graphql";
import { createUrqlClient } from "../../../src/utils/createUrqlClient";

interface Props {
  username: string;
}

const UserProfile: NextPage<Props> = ({ username }) => {
  const { user } = useUser(false);
  const [{ data, fetching }] = useUserQuery({ variables: { username } });
  const [isOpen, setIsOpen] = useState(false);
  const profileUser = data?.user;
  return (
    <>
      <Head
        title={`${data?.user?.displayName} (@${data?.user?.username}) | Twitter Clone`}
        description={`The latest Tweets from ${data?.user?.displayName} (@${data?.user?.username}). ${data?.user?.bio}`}
        imageURL={profileUser?.photo || undefined}
      ></Head>
      <div className="flex min-h-screen justify-center">
        <LeftBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <Profile
          isCurrentUser={profileUser?.username === user?.username}
          username={username}
          user={profileUser || ({} as any)}
        />
        <RightBar />
        <MessagesBar />
      </div>
    </>
  );
};

UserProfile.getInitialProps = (ctx) => {
  return { username: ctx.query.username } as Props;
};
export default withUrqlClient(createUrqlClient, { ssr: true })(
  UserProfile as any
);
