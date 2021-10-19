import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import profileImage from "../../../public/img/profile.jpeg";
import { useFollowMutation, useGetTweetsQuery } from "../../generated/graphql";
import { User } from "../../redux/slices/userSlice";
import { isServer } from "../../utils/isServer";
import { FollowButton } from "../follow/FollowList";
import Private from "../icons/Private";
import Verified from "../icons/Verified";
import Tweet, { tweetObject } from "../main-ui/tweet/Tweet";

interface Props {
  isCurrentUser: boolean;
  user: User;
  username: string;
}

const Profile: React.FC<Props> = ({ isCurrentUser, user, username }) => {
  const [{ data, fetching }] = useGetTweetsQuery({
    pause: isServer(),
    variables: { username: username },
  });
  const router = useRouter();
  const [tweets, setTweets] = useState<tweetObject[]>([]);
  const [, follow] = useFollowMutation();
  const followCallback = () => {
    if (user.pk) {
      follow({ userId: user.pk });
    }
  };
  useEffect(() => {
    if (data?.tweets) {
      const tweetsData = data?.tweets?.edges;
      setTweets(tweetsData.map((tw) => tw?.node as any));
    }
  }, [data?.tweets]);
  return (
    <div className="bg-gray-100 max-w-[600px] flex-grow px-0.5 min-h-screen">
      <div className="bg-white flex p-2 items-center">
        <Link href="/">
          <a className="text-blue-400 hover:bg-blue-100 h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
            >
              <g>
                <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
              </g>
            </svg>
          </a>
        </Link>
        <h1 className="ml-2 font-bold">{user.displayName}</h1>
        {user.private && <Private />}
        {user.verified && <Verified />}
      </div>
      <div className="h-48 bg-yellow-700 w-full"></div>
      <div className="px-4 bg-white py-2">
        <div className="relative">
          <div className="absolute bottom-0 right-0 left-0 bg-white h-32 w-32 rounded-full border-4 border-white">
            <Image
              src={user.photo || (profileImage as any)}
              alt="profile"
              layout="fill"
              className="rounded-full"
            />
          </div>
          <div className="flex justify-end">
            {isCurrentUser ? (
              <button className="outline-none bg-white border border-blue-400 text-blue-400 py-2 px-4 rounded-full font-bold hover:bg-blue-100">
                Edit profile
              </button>
            ) : (
              !isServer() && (
                <FollowButton
                  isFollowed={user.isFollowed}
                  followCallback={followCallback}
                  isRequested={user.isRequested}
                />
              )
            )}
          </div>
        </div>
        <div className="leading-tight">
          <div className="py-2">
            <h2 className="font-bold text-lg flex items-center">
              {user.displayName} {user.private && <Private />}
              {user.verified && <Verified />}
            </h2>
            <h3 className="text-sm text-gray-600">@{user.username}</h3>
          </div>
        </div>
        <div className="leading-tight">
          <p className="">{user.bio}</p>
          <a className="text-xs text-blue-400 cursor-pointer hover:underline">
            Translate bio
          </a>
        </div>
        <div className="flex py-2 space-x-4">
          <Link href={`${router.asPath}/following`}>
            <a className="cursor-pointer hover:underline">
              <span className="text-lg font-bold">{user.followingCount}</span>{" "}
              Following
            </a>
          </Link>
          <Link href={`${router.asPath}/followers`}>
            <a className="cursor-pointer hover:underline">
              <span className="text-lg font-bold">{user.followersCount}</span>{" "}
              Followers
            </a>
          </Link>
        </div>
      </div>
      <div className="flex justify-evenly bg-white font-bold text-gray-700">
        <div className="flex-grow flex justify-center hover:bg-blue-100 text-blue-400 cursor-pointer">
          <div className="py-3 border-b-4 border-blue-400">Tweets</div>
        </div>
        <div className="flex-grow flex justify-center hover:bg-blue-100 hover:text-blue-400 cursor-pointer">
          <div className="py-3">Tweets & replies</div>
        </div>
        <div className="flex-grow flex justify-center hover:bg-blue-100 hover:text-blue-400 cursor-pointer">
          <div className="py-3">Media</div>
        </div>
        <div className="flex-grow flex justify-center hover:bg-blue-100 hover:text-blue-400 cursor-pointer">
          <div className="py-3">Likes</div>
        </div>
      </div>
      <div>
        {tweets.map((tw, idx) => (
          <Tweet key={idx} tweet={tw} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
