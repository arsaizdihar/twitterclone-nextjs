import React from "react";
import { TweetDetailQuery } from "../../../generated/graphql";
import { User } from "../../../redux/slices/userSlice";
import ReplyInput from "./ReplyInput";
import Tweet from "./Tweet";

interface Props {
  data?: TweetDetailQuery;
}

const TweetDetail: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-gray-100 max-w-[600px] flex-grow min-h-screen">
      {data?.tweet && (
        <>
          <Tweet tweet={data.tweet as any} />
          <ReplyInput
            tweetUser={data.tweet.user as User}
            tweetId={data.tweet.pk as number}
          />
          {data.tweet.comments.edges.map((tweet) => (
            <Tweet key={tweet?.node?.pk} tweet={tweet?.node as any} />
          ))}
        </>
      )}
    </div>
  );
};

export default TweetDetail;
