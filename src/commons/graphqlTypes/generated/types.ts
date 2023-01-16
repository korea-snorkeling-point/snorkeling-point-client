export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Upload: any;
};

export type IAddrOne = {
  __typename?: 'AddrOne';
  addr: Scalars['String'];
  id: Scalars['String'];
  snkBoards: Array<ISnkBoard>;
};

export type IAddrTwo = {
  __typename?: 'AddrTwo';
  addr: Scalars['String'];
  id: Scalars['String'];
  snkBoards: Array<ISnkBoard>;
};

export type IBuddyBoard = {
  __typename?: 'BuddyBoard';
  buddyBoardComments: Array<IBuddyBoardComment>;
  buddyBoardImages: Array<IBuddyBoardImage>;
  buddyChatRoom: IBuddyChatRoom;
  buddyParties: Array<IBuddyParty>;
  description: Scalars['String'];
  id: Scalars['String'];
  isFull: Scalars['Boolean'];
  meetDate: Scalars['String'];
  members: Scalars['Int'];
  snkBoard: ISnkBoard;
  title: Scalars['String'];
};

export type IBuddyBoardComment = {
  __typename?: 'BuddyBoardComment';
  buddyBoard: IBuddyBoard;
  buddyBoardSubComments: Array<IBuddyBoardSubComment>;
  comment: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type IBuddyBoardImage = {
  __typename?: 'BuddyBoardImage';
  buddyBoard: IBuddyBoard;
  id: Scalars['String'];
  img: Scalars['String'];
  isMain: Scalars['Boolean'];
};

export type IBuddyBoardSubComment = {
  __typename?: 'BuddyBoardSubComment';
  buddyBoardComment: IBuddyBoardComment;
  comment: Scalars['String'];
  id: Scalars['String'];
  user: IUser;
};

export type IBuddyChatMessage = {
  __typename?: 'BuddyChatMessage';
  buddyChatRoom: IBuddyChatRoom;
  id: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  senderId: Scalars['String'];
  user: IUser;
};

export type IBuddyChatRoom = {
  __typename?: 'BuddyChatRoom';
  buddyBoard: IBuddyBoard;
  buddyChatMessages: Array<IBuddyChatMessage>;
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
};

export type IBuddyParty = {
  __typename?: 'BuddyParty';
  buddyBoard: IBuddyBoard;
  id: Scalars['String'];
  role: Scalars['String'];
  user: IUser;
};

export type ICreateSnkBoardInput = {
  addrDetail: Scalars['String'];
  addrOne: Scalars['String'];
  addrTwo: Scalars['String'];
  description: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  snkBoardImages: Array<Scalars['String']>;
  snkBoardTags: Array<Scalars['String']>;
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  gender: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** Return : 생성된 SnkBoard */
  createSnkBoard: ISnkBoard;
  /** 회원가입 */
  createUser: IUser;
  /** Return : 삭제 성공 여부 */
  deleteSnkBoard: Scalars['Boolean'];
  /** Return : deletedAt(유저 정보 삭제된 시간) */
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  /** Return : 수정된 SnkBoard - 업데이트 로직 논의 필요 (버디보드 연결) */
  updateSnkBoard: ISnkBoard;
  /** 회원 정보 수정 */
  updateUser: IUser;
  /** Return : 버킷 주소 (파일 위치). prefix : [https://storage.googleapis.com/] */
  uploadFile: Array<Scalars['String']>;
};

export type IMutationCreateSnkBoardArgs = {
  createSnkBoardInput: ICreateSnkBoardInput;
};

export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};

export type IMutationDeleteSnkBoardArgs = {
  snkBoardId: Scalars['String'];
};

export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};

export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type IMutationUpdateSnkBoardArgs = {
  snkBoardId: Scalars['String'];
  updateSnkBoardInput: IUpdateSnkBoardInput;
};

export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IMutationUploadFileArgs = {
  files: Array<Scalars['Upload']>;
};

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT',
}

export type IPayment = {
  __typename?: 'Payment';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  impUid: Scalars['String'];
  payMoney: Scalars['Int'];
  paymentType: IPayment_Status_Enum;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  /** 회원 조회 */
  fetchAllUsers: Array<IUser>;
  /** 회원 한명 조회 */
  fetchOneUser: IUser;
  /** Return : id 값으로 조회된 SnkBoard 정보 */
  fetchSnkBoard: ISnkBoard;
  /** Return : 스노클링 포인트 리스트 */
  fetchSnkBoards: Array<ISnkBoard>;
};

export type IQueryFetchOneUserArgs = {
  email: Scalars['String'];
};

export type IQueryFetchSnkBoardArgs = {
  snkBoardId: Scalars['String'];
};

export type IQueryFetchSnkBoardsArgs = {
  page: Scalars['Float'];
};

export type ISnkBoard = {
  __typename?: 'SnkBoard';
  addrDetail: Scalars['String'];
  addrOne: IAddrOne;
  addrTwo: IAddrTwo;
  buddyBoards: Array<IBuddyBoard>;
  description: Scalars['String'];
  id: Scalars['String'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  snkBoardBookMarks: Array<ISnkBoardBookMark>;
  snkBoardImages: Array<ISnkBoardImage>;
  snkBoardLikes: Array<ISnkBoardLike>;
  snkBoardTags: Array<ISnkBoardTag>;
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ISnkBoardBookMark = {
  __typename?: 'SnkBoardBookMark';
  id: Scalars['String'];
  role: Scalars['String'];
  snkBoard: ISnkBoard;
  user: IUser;
};

export type ISnkBoardImage = {
  __typename?: 'SnkBoardImage';
  id: Scalars['String'];
  img: Scalars['String'];
  isMain: Scalars['Boolean'];
  snkBoard: ISnkBoard;
};

export type ISnkBoardLike = {
  __typename?: 'SnkBoardLike';
  id: Scalars['String'];
  role: Scalars['String'];
  snkBoard: ISnkBoard;
  user: IUser;
};

export type ISnkBoardTag = {
  __typename?: 'SnkBoardTag';
  id: Scalars['String'];
  name: Scalars['String'];
  snkBoards: Array<ISnkBoard>;
};

export type IUpdateSnkBoardInput = {
  addrDetail?: InputMaybe<Scalars['String']>;
  addrOne?: InputMaybe<Scalars['String']>;
  addrTwo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  snkBoardImages?: InputMaybe<Array<Scalars['String']>>;
  snkBoardTags?: InputMaybe<Array<Scalars['String']>>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  buddyBoardComments: Array<IBuddyBoardComment>;
  buddyBoardSubComments: Array<IBuddyBoardSubComment>;
  buddyChatMessages: Array<IBuddyChatMessage>;
  buddyParties: Array<IBuddyParty>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  gender: Scalars['String'];
  id: Scalars['String'];
  nickname: Scalars['String'];
  payments: Array<IPayment>;
  profileImg: Scalars['String'];
  snkBoardBookMarks: Array<ISnkBoardBookMark>;
  snkBoardLikes: Array<ISnkBoardLike>;
  updatedAt: Scalars['DateTime'];
};
