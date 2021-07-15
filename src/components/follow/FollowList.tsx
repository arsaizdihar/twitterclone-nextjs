import Link from "next/link";
import React, { useState } from "react";
import { useFollowMutation } from "../../generated/graphql";
import { User } from "../../redux/slices/userSlice";
import Verified from "../icons/Verified";
import ProfilePic from "../main-ui/ProfilePic";
interface Props {
  followLists: User[];
  setFollowLists: React.Dispatch<React.SetStateAction<User[]>>;
}

export const FollowButton: React.FC<{
  isSelf?: boolean;
  isFollowed?: boolean;
  followCallback: () => void;
}> = ({ isSelf, isFollowed, followCallback }) => {
  const [isHover, setIsHover] = useState(false);
  if (isSelf) return null;
  return (
    <button
      className={`font-bold rounded-full px-4 border border-blue-400 ${
        isFollowed
          ? "bg-blue-400 text-white hover:bg-red-700 hover:border-red-700"
          : "text-blue-400 hover:bg-blue-100"
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={followCallback}
    >
      {isFollowed ? (isHover ? "Unfollow" : "Following") : "Follow"}
    </button>
  );
};

const FollowList: React.FC<Props> = ({ followLists, setFollowLists }) => {
  const [, follow] = useFollowMutation();
  const followCallback = (userId?: number) => {
    if (userId) {
      follow({ userId }).then((res) => {
        if (res.data?.follow?.success) {
          setFollowLists((fs) =>
            fs.map((f) =>
              f.pk === userId ? { ...f, isFollowed: !f.isFollowed } : f
            )
          );
        }
      });
    }
  };
  return (
    <div className="w-full flex flex-col py-1">
      {followLists.map((f) => (
        <div key={f.pk} className="flex bg-white mb-0.5 p-2 space-x-4">
          <div className="flex-shrink-0">
            <ProfilePic src={f.photo} username={f.username} />
          </div>
          <div className="flex flex-grow flex-col">
            <div className="flex justify-between">
              <div className="leading-none">
                <div className="flex">
                  <Link href={`/user/${f.username}`}>
                    <a className="font-bold hover:underline">{f.displayName}</a>
                  </Link>
                  {f.verified && <Verified />}
                </div>
                <span className="text-gray-600">@{f.username}</span>
              </div>
              {
                <FollowButton
                  isSelf={f.isSelf}
                  isFollowed={f.isFollowed}
                  followCallback={() => followCallback(f.pk)}
                />
              }
            </div>
            <p className="mt-1 text-gray-700">{f.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FollowList;
