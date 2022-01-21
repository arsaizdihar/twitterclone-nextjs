import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useUser from "../../../src/components/auth/useUser";
import Head from "../../../src/components/main-ui/Head";
import LeftBar from "../../../src/components/main-ui/LeftBar";
import MessagesBar from "../../../src/components/main-ui/MessagesBar";
import RightBar from "../../../src/components/main-ui/rightbar/RightBar";
import Profile from "../../../src/components/profile/Profile";
import apolloClient from "../../../src/core/apollo";
import {
  UserDocument,
  UserQueryResult,
  UserWithFollowNode,
} from "../../../src/generated/graphql";
import { User } from "../../../src/redux/slices/userSlice";
import { isServer } from "../../../src/utils/isServer";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username } = ctx.query;

  const result = await apolloClient.query<UserQueryResult["data"]>({
    query: UserDocument,
    variables: { username },
  });
  return {
    props: { username, user: result.data?.user },
  };
};

interface Props {
  username: string;
  user: UserWithFollowNode;
}

const UserProfile: NextPage<Props> = ({ username, user: data }) => {
  const { user } = useUser(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const profileUser = data as User;

  useEffect(() => {
    if (!data?.id) {
      router.push("/");
    }
  }, [data, router]);
  if (!data?.id && isServer()) {
    return (
      <Head
        title={`No user found. | Twitter Clone`}
        description={`No user found`}
      ></Head>
    );
  }
  return (
    <>
      <Head
        title={`${data?.displayName || "Profile"} (@${
          data?.username || ""
        }) | Twitter Clone`}
        description={`The latest Tweets from ${data?.displayName || ""} (@${
          data?.username || ""
        }). ${data?.bio}`}
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
export default UserProfile;
