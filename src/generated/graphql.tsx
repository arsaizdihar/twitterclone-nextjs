import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   *
   *     Errors messages and codes mapped to
   *     fields or non fields errors.
   *     Example:
   *     {
   *         field_name: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         other_field: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ],
   *         nonFieldErrors: [
   *             {
   *                 "message": "error message",
   *                 "code": "error_code"
   *             }
   *         ]
   *     }
   *
   */
  ExpectedErrorType: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};

export type AcceptFollow = {
  __typename?: 'AcceptFollow';
  success?: Maybe<Scalars['Boolean']>;
};


export type DeleteTweet = {
  __typename?: 'DeleteTweet';
  success?: Maybe<Scalars['Boolean']>;
};


export type FollowUser = {
  __typename?: 'FollowUser';
  success?: Maybe<Scalars['Boolean']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWithFollowNode>;
  isRequested?: Maybe<Scalars['Boolean']>;
};


export type LikeMutation = {
  __typename?: 'LikeMutation';
  success?: Maybe<Scalars['Boolean']>;
  isLiked?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  success?: Maybe<Scalars['Boolean']>;
  follow?: Maybe<FollowUser>;
  acceptFollow?: Maybe<AcceptFollow>;
  postTweet?: Maybe<PostTweet>;
  likeTweet?: Maybe<LikeMutation>;
  retweet?: Maybe<RetweetMutation>;
  deleteTweet?: Maybe<DeleteTweet>;
  refetch?: Maybe<RefetchMutation>;
  /**
   * Register user with fields defined in the settings.
   *
   * If the email field of the user model is part of the
   * registration fields (default), check if there is
   * no user with that email or as a secondary email.
   *
   * If it exists, it does not register the user,
   * even if the email field is not defined as unique
   * (default of the default django user model).
   *
   * When creating the user, it also creates a `UserStatus`
   * related to that user, making it possible to track
   * if the user is archived, verified and has a secondary
   * email.
   *
   * Send account verification email.
   *
   * If allowed to not verified users login, return token.
   */
  register?: Maybe<Register>;
  /**
   * Update user model fields, defined on settings.
   *
   * User must be verified.
   */
  updateAccount?: Maybe<UpdateAccount>;
  /**
   * Obtain JSON web token for given user.
   *
   * Allow to perform login with different fields,
   * and secondary email if set. The fields are
   * defined on settings.
   *
   * Not verified users can login by default. This
   * can be changes on settings.
   *
   * If user is archived, make it unarchive and
   * return `unarchiving=True` on output.
   */
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  refreshToken?: Maybe<RefreshToken>;
  /** Same as `grapgql_jwt` implementation, with standard output. */
  revokeToken?: Maybe<RevokeToken>;
};


export type MutationFollowArgs = {
  userId: Scalars['Int'];
};


export type MutationAcceptFollowArgs = {
  userId: Scalars['Int'];
};


export type MutationPostTweetArgs = {
  commentTo?: Maybe<Scalars['Int']>;
  file?: Maybe<Scalars['Upload']>;
  text: Scalars['String'];
};


export type MutationLikeTweetArgs = {
  tweetId: Scalars['Int'];
};


export type MutationRetweetArgs = {
  tweetId: Scalars['Int'];
};


export type MutationDeleteTweetArgs = {
  id: Scalars['Int'];
};


export type MutationRefetchArgs = {
  data?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  username: Scalars['String'];
  displayName: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
};


export type MutationUpdateAccountArgs = {
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};


export type MutationTokenAuthArgs = {
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationRevokeTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID'];
};

/**
 * Obtain JSON web token for given user.
 *
 * Allow to perform login with different fields,
 * and secondary email if set. The fields are
 * defined on settings.
 *
 * Not verified users can login by default. This
 * can be changes on settings.
 *
 * If user is archived, make it unarchive and
 * return `unarchiving=True` on output.
 */
export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  user?: Maybe<UserNode>;
  unarchiving?: Maybe<Scalars['Boolean']>;
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PostTweet = {
  __typename?: 'PostTweet';
  tweet?: Maybe<TweetNode>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  followers?: Maybe<UserWithFollowNodeConnection>;
  following?: Maybe<UserWithFollowNodeConnection>;
  unfollowed?: Maybe<UserWithFollowNodeConnection>;
  tweets?: Maybe<TweetNodeConnection>;
  tweet?: Maybe<TweetNode>;
  me?: Maybe<UserWithFollowNode>;
  user?: Maybe<UserWithFollowNode>;
  users?: Maybe<UserWithFollowNodeConnection>;
};


export type QueryFollowersArgs = {
  uname: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryFollowingArgs = {
  uname: Scalars['String'];
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryUnfollowedArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type QueryTweetsArgs = {
  commentToPk?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  excludeComment?: Maybe<Scalars['Boolean']>;
  timeline?: Maybe<Scalars['Boolean']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};


export type QueryTweetArgs = {
  id: Scalars['Int'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUsersArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type RefetchMutation = {
  __typename?: 'RefetchMutation';
  success?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RefreshToken = {
  __typename?: 'RefreshToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

/**
 * Register user with fields defined in the settings.
 *
 * If the email field of the user model is part of the
 * registration fields (default), check if there is
 * no user with that email or as a secondary email.
 *
 * If it exists, it does not register the user,
 * even if the email field is not defined as unique
 * (default of the default django user model).
 *
 * When creating the user, it also creates a `UserStatus`
 * related to that user, making it possible to track
 * if the user is archived, verified and has a secondary
 * email.
 *
 * Send account verification email.
 *
 * If allowed to not verified users login, return token.
 */
export type Register = {
  __typename?: 'Register';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
  refreshToken?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type RetweetMutation = {
  __typename?: 'RetweetMutation';
  success?: Maybe<Scalars['Boolean']>;
  isRetweeted?: Maybe<Scalars['Boolean']>;
};

/** Same as `grapgql_jwt` implementation, with standard output. */
export type RevokeToken = {
  __typename?: 'RevokeToken';
  revoked: Scalars['Int'];
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};

export type TweetNode = Node & {
  __typename?: 'TweetNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  user?: Maybe<UserWithFollowNode>;
  createdAt: Scalars['DateTime'];
  text?: Maybe<Scalars['String']>;
  commentTo?: Maybe<TweetNode>;
  image?: Maybe<Scalars['String']>;
  likes?: Maybe<UserWithFollowNodeConnection>;
  comments: TweetNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  likesCount?: Maybe<Scalars['Int']>;
  retweetCount?: Maybe<Scalars['Int']>;
  commentsCount?: Maybe<Scalars['Int']>;
  isLiked?: Maybe<Scalars['Boolean']>;
};


export type TweetNodeLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_Icontains?: Maybe<Scalars['String']>;
  username_Istartswith?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
  status_Archived?: Maybe<Scalars['Boolean']>;
  status_Verified?: Maybe<Scalars['Boolean']>;
  status_SecondaryEmail?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type TweetNodeCommentsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};

export type TweetNodeConnection = {
  __typename?: 'TweetNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TweetNodeEdge>>;
};

/** A Relay edge containing a `TweetNode` and its cursor. */
export type TweetNodeEdge = {
  __typename?: 'TweetNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<TweetNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/**
 * Update user model fields, defined on settings.
 *
 * User must be verified.
 */
export type UpdateAccount = {
  __typename?: 'UpdateAccount';
  success?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Scalars['ExpectedErrorType']>;
};


export type UserNode = Node & {
  __typename?: 'UserNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  /** Required. 30 characters or fewer. Letters and digits. */
  username: Scalars['String'];
  bio: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  tweets: TweetNodeConnection;
  likes: TweetNodeConnection;
  retweets: TweetNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
};


export type UserNodeTweetsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};


export type UserNodeLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};


export type UserNodeRetweetsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};

export type UserWithFollowNode = Node & {
  __typename?: 'UserWithFollowNode';
  /** The ID of the object. */
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean'];
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean'];
  dateJoined: Scalars['DateTime'];
  displayName: Scalars['String'];
  email: Scalars['String'];
  /** Required. 30 characters or fewer. Letters and digits. */
  username: Scalars['String'];
  bio: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  private: Scalars['Boolean'];
  tweets: TweetNodeConnection;
  likes: TweetNodeConnection;
  retweets: TweetNodeConnection;
  pk?: Maybe<Scalars['Int']>;
  archived?: Maybe<Scalars['Boolean']>;
  verified?: Maybe<Scalars['Boolean']>;
  secondaryEmail?: Maybe<Scalars['String']>;
  followersCount?: Maybe<Scalars['Int']>;
  followingCount?: Maybe<Scalars['Int']>;
  isSelf?: Maybe<Scalars['Boolean']>;
  isFollowed?: Maybe<Scalars['Boolean']>;
  isFollowing?: Maybe<Scalars['Boolean']>;
  isRequested?: Maybe<Scalars['Boolean']>;
};


export type UserWithFollowNodeTweetsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};


export type UserWithFollowNodeLikesArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};


export type UserWithFollowNodeRetweetsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  user?: Maybe<Scalars['ID']>;
  commentTo?: Maybe<Scalars['ID']>;
};

export type UserWithFollowNodeConnection = {
  __typename?: 'UserWithFollowNodeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserWithFollowNodeEdge>>;
};

/** A Relay edge containing a `UserWithFollowNode` and its cursor. */
export type UserWithFollowNodeEdge = {
  __typename?: 'UserWithFollowNodeEdge';
  /** The item at the end of the edge */
  node?: Maybe<UserWithFollowNode>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type RegularUserFragment = (
  { __typename?: 'UserWithFollowNode' }
  & Pick<UserWithFollowNode, 'id' | 'displayName' | 'email' | 'username' | 'bio' | 'pk' | 'photo' | 'verified' | 'followersCount' | 'followingCount' | 'isFollowed' | 'isFollowing' | 'isSelf' | 'private' | 'isRequested'>
);

export type DeleteTweetMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteTweetMutation = (
  { __typename?: 'Mutation' }
  & { deleteTweet?: Maybe<(
    { __typename?: 'DeleteTweet' }
    & Pick<DeleteTweet, 'success'>
  )> }
);

export type FollowMutationVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type FollowMutation = (
  { __typename?: 'Mutation' }
  & { follow?: Maybe<(
    { __typename?: 'FollowUser' }
    & Pick<FollowUser, 'success' | 'isFollowed' | 'isRequested'>
    & { user?: Maybe<(
      { __typename?: 'UserWithFollowNode' }
      & RegularUserFragment
    )> }
  )> }
);

export type LikeTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type LikeTweetMutation = (
  { __typename?: 'Mutation' }
  & { likeTweet?: Maybe<(
    { __typename?: 'LikeMutation' }
    & Pick<LikeMutation, 'success' | 'isLiked'>
  )> }
);

export type LoginMutationVariables = Exact<{
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  email?: Maybe<Scalars['String']>;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'refreshToken' | 'refreshExpiresIn' | 'success' | 'errors'>
    & { user?: Maybe<(
      { __typename?: 'UserNode' }
      & Pick<UserNode, 'id' | 'pk' | 'displayName' | 'username' | 'email' | 'bio' | 'photo' | 'verified'>
    )> }
  )> }
);

export type PostTweetMutationVariables = Exact<{
  text: Scalars['String'];
  file?: Maybe<Scalars['Upload']>;
  commentTo?: Maybe<Scalars['Int']>;
}>;


export type PostTweetMutation = (
  { __typename?: 'Mutation' }
  & { postTweet?: Maybe<(
    { __typename?: 'PostTweet' }
    & Pick<PostTweet, 'success'>
    & { tweet?: Maybe<(
      { __typename?: 'TweetNode' }
      & Pick<TweetNode, 'id' | 'pk' | 'text' | 'createdAt' | 'likesCount' | 'retweetCount' | 'isLiked'>
    )> }
  )> }
);

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken?: Maybe<(
    { __typename?: 'RefreshToken' }
    & Pick<RefreshToken, 'success' | 'errors' | 'token' | 'refreshExpiresIn'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  displayName: Scalars['String'];
  password1: Scalars['String'];
  password2: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'Register' }
    & Pick<Register, 'success' | 'errors' | 'token' | 'refreshToken'>
  )> }
);

export type RetweetTweetMutationVariables = Exact<{
  tweetId: Scalars['Int'];
}>;


export type RetweetTweetMutation = (
  { __typename?: 'Mutation' }
  & { retweet?: Maybe<(
    { __typename?: 'RetweetMutation' }
    & Pick<RetweetMutation, 'success' | 'isRetweeted'>
  )> }
);

export type FollowersQueryVariables = Exact<{
  username: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type FollowersQuery = (
  { __typename?: 'Query' }
  & { followers?: Maybe<(
    { __typename?: 'UserWithFollowNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserWithFollowNodeEdge' }
      & Pick<UserWithFollowNodeEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'UserWithFollowNode' }
        & RegularUserFragment
      )> }
    )>> }
  )> }
);

export type FollowingQueryVariables = Exact<{
  username: Scalars['String'];
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type FollowingQuery = (
  { __typename?: 'Query' }
  & { following?: Maybe<(
    { __typename?: 'UserWithFollowNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserWithFollowNodeEdge' }
      & Pick<UserWithFollowNodeEdge, 'cursor'>
      & { node?: Maybe<(
        { __typename?: 'UserWithFollowNode' }
        & RegularUserFragment
      )> }
    )>> }
  )> }
);

export type GetTweetsQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
  commentTo?: Maybe<Scalars['ID']>;
  first?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['String']>;
  excludeComment?: Maybe<Scalars['Boolean']>;
  offset?: Maybe<Scalars['Int']>;
  timeline?: Maybe<Scalars['Boolean']>;
  commentToPk?: Maybe<Scalars['Int']>;
}>;


export type GetTweetsQuery = (
  { __typename?: 'Query' }
  & { tweets?: Maybe<(
    { __typename?: 'TweetNodeConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ), edges: Array<Maybe<(
      { __typename?: 'TweetNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'TweetNode' }
        & Pick<TweetNode, 'id' | 'pk' | 'text' | 'createdAt' | 'likesCount' | 'retweetCount' | 'commentsCount' | 'isLiked' | 'image'>
        & { user?: Maybe<(
          { __typename?: 'UserWithFollowNode' }
          & RegularUserFragment
        )> }
      )> }
    )>> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'UserWithFollowNode' }
    & RegularUserFragment
  )> }
);

export type TweetDetailQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TweetDetailQuery = (
  { __typename?: 'Query' }
  & { tweet?: Maybe<(
    { __typename?: 'TweetNode' }
    & Pick<TweetNode, 'id' | 'pk' | 'text' | 'createdAt' | 'likesCount' | 'retweetCount' | 'commentsCount' | 'isLiked' | 'image'>
    & { user?: Maybe<(
      { __typename?: 'UserWithFollowNode' }
      & RegularUserFragment
    )> }
  )> }
);

export type UnfollowedQueryVariables = Exact<{ [key: string]: never; }>;


export type UnfollowedQuery = (
  { __typename?: 'Query' }
  & { unfollowed?: Maybe<(
    { __typename?: 'UserWithFollowNodeConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'UserWithFollowNodeEdge' }
      & { node?: Maybe<(
        { __typename?: 'UserWithFollowNode' }
        & RegularUserFragment
      )> }
    )>> }
  )> }
);

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'UserWithFollowNode' }
    & RegularUserFragment
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on UserWithFollowNode {
  id
  displayName
  email
  username
  bio
  pk
  photo
  verified
  followersCount
  followingCount
  isFollowed
  isFollowing
  isSelf
  private
  isRequested
}
    `;
export const DeleteTweetDocument = gql`
    mutation DeleteTweet($id: Int!) {
  deleteTweet(id: $id) {
    success
  }
}
    `;
export type DeleteTweetMutationFn = Apollo.MutationFunction<DeleteTweetMutation, DeleteTweetMutationVariables>;

/**
 * __useDeleteTweetMutation__
 *
 * To run a mutation, you first call `useDeleteTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTweetMutation, { data, loading, error }] = useDeleteTweetMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTweetMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTweetMutation, DeleteTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTweetMutation, DeleteTweetMutationVariables>(DeleteTweetDocument, options);
      }
export type DeleteTweetMutationHookResult = ReturnType<typeof useDeleteTweetMutation>;
export type DeleteTweetMutationResult = Apollo.MutationResult<DeleteTweetMutation>;
export type DeleteTweetMutationOptions = Apollo.BaseMutationOptions<DeleteTweetMutation, DeleteTweetMutationVariables>;
export const FollowDocument = gql`
    mutation Follow($userId: Int!) {
  follow(userId: $userId) {
    success
    isFollowed
    user {
      ...RegularUser
    }
    isRequested
  }
}
    ${RegularUserFragmentDoc}`;
export type FollowMutationFn = Apollo.MutationFunction<FollowMutation, FollowMutationVariables>;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFollowMutation(baseOptions?: Apollo.MutationHookOptions<FollowMutation, FollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowMutation, FollowMutationVariables>(FollowDocument, options);
      }
export type FollowMutationHookResult = ReturnType<typeof useFollowMutation>;
export type FollowMutationResult = Apollo.MutationResult<FollowMutation>;
export type FollowMutationOptions = Apollo.BaseMutationOptions<FollowMutation, FollowMutationVariables>;
export const LikeTweetDocument = gql`
    mutation LikeTweet($tweetId: Int!) {
  likeTweet(tweetId: $tweetId) {
    success
    isLiked
  }
}
    `;
export type LikeTweetMutationFn = Apollo.MutationFunction<LikeTweetMutation, LikeTweetMutationVariables>;

/**
 * __useLikeTweetMutation__
 *
 * To run a mutation, you first call `useLikeTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeTweetMutation, { data, loading, error }] = useLikeTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useLikeTweetMutation(baseOptions?: Apollo.MutationHookOptions<LikeTweetMutation, LikeTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeTweetMutation, LikeTweetMutationVariables>(LikeTweetDocument, options);
      }
export type LikeTweetMutationHookResult = ReturnType<typeof useLikeTweetMutation>;
export type LikeTweetMutationResult = Apollo.MutationResult<LikeTweetMutation>;
export type LikeTweetMutationOptions = Apollo.BaseMutationOptions<LikeTweetMutation, LikeTweetMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String, $password: String!, $email: String) {
  tokenAuth(username: $username, password: $password, email: $email) {
    token
    refreshToken
    refreshExpiresIn
    success
    errors
    user {
      id
      pk
      displayName
      username
      email
      bio
      photo
      verified
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const PostTweetDocument = gql`
    mutation PostTweet($text: String!, $file: Upload, $commentTo: Int) {
  postTweet(text: $text, file: $file, commentTo: $commentTo) {
    success
    tweet {
      id
      pk
      text
      createdAt
      likesCount
      retweetCount
      isLiked
    }
  }
}
    `;
export type PostTweetMutationFn = Apollo.MutationFunction<PostTweetMutation, PostTweetMutationVariables>;

/**
 * __usePostTweetMutation__
 *
 * To run a mutation, you first call `usePostTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postTweetMutation, { data, loading, error }] = usePostTweetMutation({
 *   variables: {
 *      text: // value for 'text'
 *      file: // value for 'file'
 *      commentTo: // value for 'commentTo'
 *   },
 * });
 */
export function usePostTweetMutation(baseOptions?: Apollo.MutationHookOptions<PostTweetMutation, PostTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostTweetMutation, PostTweetMutationVariables>(PostTweetDocument, options);
      }
export type PostTweetMutationHookResult = ReturnType<typeof usePostTweetMutation>;
export type PostTweetMutationResult = Apollo.MutationResult<PostTweetMutation>;
export type PostTweetMutationOptions = Apollo.BaseMutationOptions<PostTweetMutation, PostTweetMutationVariables>;
export const RefreshTokenDocument = gql`
    mutation refreshToken {
  refreshToken {
    success
    errors
    token
    refreshExpiresIn
  }
}
    `;
export type RefreshTokenMutationFn = Apollo.MutationFunction<RefreshTokenMutation, RefreshTokenMutationVariables>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshTokenMutation, RefreshTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument, options);
      }
export type RefreshTokenMutationHookResult = ReturnType<typeof useRefreshTokenMutation>;
export type RefreshTokenMutationResult = Apollo.MutationResult<RefreshTokenMutation>;
export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<RefreshTokenMutation, RefreshTokenMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $username: String!, $displayName: String!, $password1: String!, $password2: String!) {
  register(
    email: $email
    username: $username
    displayName: $displayName
    password1: $password1
    password2: $password2
  ) {
    success
    errors
    token
    refreshToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      displayName: // value for 'displayName'
 *      password1: // value for 'password1'
 *      password2: // value for 'password2'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RetweetTweetDocument = gql`
    mutation RetweetTweet($tweetId: Int!) {
  retweet(tweetId: $tweetId) {
    success
    isRetweeted
  }
}
    `;
export type RetweetTweetMutationFn = Apollo.MutationFunction<RetweetTweetMutation, RetweetTweetMutationVariables>;

/**
 * __useRetweetTweetMutation__
 *
 * To run a mutation, you first call `useRetweetTweetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRetweetTweetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [retweetTweetMutation, { data, loading, error }] = useRetweetTweetMutation({
 *   variables: {
 *      tweetId: // value for 'tweetId'
 *   },
 * });
 */
export function useRetweetTweetMutation(baseOptions?: Apollo.MutationHookOptions<RetweetTweetMutation, RetweetTweetMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RetweetTweetMutation, RetweetTweetMutationVariables>(RetweetTweetDocument, options);
      }
export type RetweetTweetMutationHookResult = ReturnType<typeof useRetweetTweetMutation>;
export type RetweetTweetMutationResult = Apollo.MutationResult<RetweetTweetMutation>;
export type RetweetTweetMutationOptions = Apollo.BaseMutationOptions<RetweetTweetMutation, RetweetTweetMutationVariables>;
export const FollowersDocument = gql`
    query Followers($username: String!, $after: String, $first: Int) {
  followers(uname: $username, after: $after, first: $first) {
    edges {
      cursor
      node {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useFollowersQuery__
 *
 * To run a query within a React component, call `useFollowersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowersQuery({
 *   variables: {
 *      username: // value for 'username'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFollowersQuery(baseOptions: Apollo.QueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
      }
export function useFollowersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowersQuery, FollowersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowersQuery, FollowersQueryVariables>(FollowersDocument, options);
        }
export type FollowersQueryHookResult = ReturnType<typeof useFollowersQuery>;
export type FollowersLazyQueryHookResult = ReturnType<typeof useFollowersLazyQuery>;
export type FollowersQueryResult = Apollo.QueryResult<FollowersQuery, FollowersQueryVariables>;
export const FollowingDocument = gql`
    query Following($username: String!, $after: String, $first: Int) {
  following(uname: $username, after: $after, first: $first) {
    edges {
      cursor
      node {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useFollowingQuery__
 *
 * To run a query within a React component, call `useFollowingQuery` and pass it any options that fit your needs.
 * When your component renders, `useFollowingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFollowingQuery({
 *   variables: {
 *      username: // value for 'username'
 *      after: // value for 'after'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useFollowingQuery(baseOptions: Apollo.QueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
      }
export function useFollowingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FollowingQuery, FollowingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FollowingQuery, FollowingQueryVariables>(FollowingDocument, options);
        }
export type FollowingQueryHookResult = ReturnType<typeof useFollowingQuery>;
export type FollowingLazyQueryHookResult = ReturnType<typeof useFollowingLazyQuery>;
export type FollowingQueryResult = Apollo.QueryResult<FollowingQuery, FollowingQueryVariables>;
export const GetTweetsDocument = gql`
    query getTweets($after: String, $commentTo: ID, $first: Int, $username: String, $excludeComment: Boolean, $offset: Int, $timeline: Boolean, $commentToPk: Int) {
  tweets(
    after: $after
    commentTo: $commentTo
    first: $first
    username: $username
    excludeComment: $excludeComment
    offset: $offset
    timeline: $timeline
    commentToPk: $commentToPk
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        user {
          ...RegularUser
        }
        id
        pk
        text
        createdAt
        likesCount
        retweetCount
        commentsCount
        isLiked
        image
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useGetTweetsQuery__
 *
 * To run a query within a React component, call `useGetTweetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTweetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTweetsQuery({
 *   variables: {
 *      after: // value for 'after'
 *      commentTo: // value for 'commentTo'
 *      first: // value for 'first'
 *      username: // value for 'username'
 *      excludeComment: // value for 'excludeComment'
 *      offset: // value for 'offset'
 *      timeline: // value for 'timeline'
 *      commentToPk: // value for 'commentToPk'
 *   },
 * });
 */
export function useGetTweetsQuery(baseOptions?: Apollo.QueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
      }
export function useGetTweetsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTweetsQuery, GetTweetsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTweetsQuery, GetTweetsQueryVariables>(GetTweetsDocument, options);
        }
export type GetTweetsQueryHookResult = ReturnType<typeof useGetTweetsQuery>;
export type GetTweetsLazyQueryHookResult = ReturnType<typeof useGetTweetsLazyQuery>;
export type GetTweetsQueryResult = Apollo.QueryResult<GetTweetsQuery, GetTweetsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const TweetDetailDocument = gql`
    query tweetDetail($id: Int!) {
  tweet(id: $id) {
    user {
      ...RegularUser
    }
    id
    pk
    text
    createdAt
    likesCount
    retweetCount
    commentsCount
    isLiked
    image
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useTweetDetailQuery__
 *
 * To run a query within a React component, call `useTweetDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useTweetDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTweetDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTweetDetailQuery(baseOptions: Apollo.QueryHookOptions<TweetDetailQuery, TweetDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TweetDetailQuery, TweetDetailQueryVariables>(TweetDetailDocument, options);
      }
export function useTweetDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TweetDetailQuery, TweetDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TweetDetailQuery, TweetDetailQueryVariables>(TweetDetailDocument, options);
        }
export type TweetDetailQueryHookResult = ReturnType<typeof useTweetDetailQuery>;
export type TweetDetailLazyQueryHookResult = ReturnType<typeof useTweetDetailLazyQuery>;
export type TweetDetailQueryResult = Apollo.QueryResult<TweetDetailQuery, TweetDetailQueryVariables>;
export const UnfollowedDocument = gql`
    query Unfollowed {
  unfollowed {
    edges {
      node {
        ...RegularUser
      }
    }
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useUnfollowedQuery__
 *
 * To run a query within a React component, call `useUnfollowedQuery` and pass it any options that fit your needs.
 * When your component renders, `useUnfollowedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUnfollowedQuery({
 *   variables: {
 *   },
 * });
 */
export function useUnfollowedQuery(baseOptions?: Apollo.QueryHookOptions<UnfollowedQuery, UnfollowedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UnfollowedQuery, UnfollowedQueryVariables>(UnfollowedDocument, options);
      }
export function useUnfollowedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UnfollowedQuery, UnfollowedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UnfollowedQuery, UnfollowedQueryVariables>(UnfollowedDocument, options);
        }
export type UnfollowedQueryHookResult = ReturnType<typeof useUnfollowedQuery>;
export type UnfollowedLazyQueryHookResult = ReturnType<typeof useUnfollowedLazyQuery>;
export type UnfollowedQueryResult = Apollo.QueryResult<UnfollowedQuery, UnfollowedQueryVariables>;
export const UserDocument = gql`
    query User($username: String!) {
  user(username: $username) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;