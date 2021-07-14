import React, { useEffect, useState } from "react";
import {
  useFollowMutation,
  useUnfollowedQuery,
} from "../../../generated/graphql";
import { User } from "../../../redux/slices/userSlice";
import { isServer } from "../../../utils/isServer";
import Verified from "../../icons/Verified";
import ProfilePic from "../ProfilePic";

const WhoToFollows = () => {
  const [, follow] = useFollowMutation();
  const [{ data }] = useUnfollowedQuery({
    pause: isServer(),
  });
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    if (data?.unfollowed?.edges) {
      setUsers(data.unfollowed.edges.map((edge) => edge?.node) as User[]);
    }
  }, [data]);
  if (users.length === 0) return null;
  const followCallback = (userId?: number) => {
    if (userId) {
      follow({ userId }).then((res) => {
        if (res.data?.follow?.success) {
          setUsers((users) => users.filter((user) => user.pk !== userId));
        }
      });
    }
  };
  return (
    <div className="bg-gray-100 my-4 pt-2 rounded-xl">
      <div className="flex items-center justify-between px-4 mb-4">
        <h3 className="font-extrabold text-xl">Who to follow</h3>
      </div>
      {users.map((user) => (
        <WhoToFollow
          key={user.pk}
          user={user}
          followCallback={followCallback}
        />
      ))}
      <div className="hover:bg-gray-200 cursor-pointer text-blue-400 rounded-b-xl p-4">
        Show more
      </div>
    </div>
  );
};

const WhoToFollow: React.FC<{
  user: User;
  followCallback: (userId?: number) => void;
}> = ({ user, followCallback }) => {
  return (
    <div className="flex justify-between hover:bg-gray-200 px-4 cursor-pointer py-2 items-center">
      <div className="flex">
        <ProfilePic src={user.photo} />
        <div className="leading-none ml-2">
          <h4 className="font-bold text-base">
            {user.displayName} {user.verified && <Verified />}
          </h4>
          <span className="text-sm text-gray-600">@{user.username}</span>
        </div>
      </div>
      <button
        className="outline-none rounded-full px-4 py-1 border border-blue-400 text-blue-400 hover:bg-blue-100 hover:bg-opacity-80"
        onClick={() => followCallback(user.pk)}
      >
        Follow
      </button>
    </div>
  );
};

export default WhoToFollows;
