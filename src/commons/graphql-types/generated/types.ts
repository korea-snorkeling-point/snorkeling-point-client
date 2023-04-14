export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type IAdminUser = {
  __typename?: 'AdminUser';
  account: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
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

export type ICreateAdminUserInput = {
  account: Scalars['String'];
  password: Scalars['String'];
};

export type ICreateProductInput = {
  address: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  productCategory: Scalars['String'];
  productImages?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
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
  title: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  gender: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type IFetchProductOutput = {
  __typename?: 'FetchProductOutput';
  address: Scalars['String'];
  description: Scalars['String'];
  isLike: Scalars['Boolean'];
  price: Scalars['Float'];
  productCategory: Scalars['String'];
  productImages?: Maybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  /** Return : 발급된 Admin AccessToken */
  adminLogin: Scalars['String'];
  /** Return : Admin User 로그아웃 성공여부 (true / false) */
  adminLogout: Scalars['Boolean'];
  /** 유저 닉네임 중복 여부 */
  checkNickname: Scalars['Boolean'];
  /** Return : 생성된 adminUser 정보 */
  createAdminUser: IAdminUser;
  /** Return : 메일발송 성공 여부 (true / false) */
  createMailToken: Scalars['Boolean'];
  createProduct: IProduct;
  /** 상품 카테고리 등록 */
  createProductCategory: IProductCategory;
  /** Return : 생성된 ProductLike 정보 */
  createProductLike: IProductLike;
  /** Return : 생성된 SnkBoard */
  createSnkBoard: ISnkBoard;
  /** Return : 북마크 생성 성공 여부 */
  createSnkBookMark: Scalars['Boolean'];
  /** Return : 좋아요 생성 성공 여부 */
  createSnkLike: Scalars['Boolean'];
  /** 회원가입 */
  createUser: IUser;
  /** Return : 계정 삭제 여부 */
  deleteAdminUser: Scalars['Boolean'];
  deleteProduct: Scalars['Boolean'];
  /** Return : 좋아요 삭제 성공 여부 */
  deleteProductLike: Scalars['Boolean'];
  /** Return : 삭제 성공 여부 */
  deleteSnkBoard: Scalars['Boolean'];
  /** Return : 북마크 삭제 성공 여부 */
  deleteSnkBookMark: Scalars['Boolean'];
  /** Return : 좋아요 삭제 성공 여부 */
  deleteSnkLike: Scalars['Boolean'];
  /** Return : deletedAt(유저 정보 삭제된 시간) */
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  /** Return : 재발급된 AccessToken */
  restoreAccessToken: Scalars['String'];
  /** Return : 재발급된 AdminAccessToken */
  restoreAdminAccessToken: Scalars['String'];
  /** Return : 북마크 삭제 복구 여부 */
  restoreSnkBookMark: Scalars['Boolean'];
  /** Return : 좋아요 삭제 복구 여부 */
  restoreSnkLike: Scalars['Boolean'];
  updateProduct: IProduct;
  /** Return : 수정된 SnkBoard - 업데이트 로직 논의 필요 (버디보드 연결) */
  updateSnkBoard: ISnkBoard;
  /** 회원 정보 수정 */
  updateUser: IUser;
  /** Return : 버킷 주소 (파일 위치). prefix : [https://storage.googleapis.com/] */
  uploadFile: Array<Scalars['String']>;
  /** Return : 로그아웃 성공여부 (true / false) */
  userLogout: Scalars['Boolean'];
  /** Return : 인증토큰 일치 여부 (true / false) */
  verifyMailToken: Scalars['Boolean'];
};


export type IMutationAdminLoginArgs = {
  account: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationCheckNicknameArgs = {
  nickname: Scalars['String'];
};


export type IMutationCreateAdminUserArgs = {
  createAdminUserInput: ICreateAdminUserInput;
};


export type IMutationCreateMailTokenArgs = {
  email: Scalars['String'];
  type: Scalars['String'];
};


export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
};


export type IMutationCreateProductCategoryArgs = {
  productCategory: Scalars['String'];
};


export type IMutationCreateProductLikeArgs = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateSnkBoardArgs = {
  createSnkBoardInput: ICreateSnkBoardInput;
};


export type IMutationCreateSnkBookMarkArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateSnkLikeArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteAdminUserArgs = {
  account: Scalars['String'];
};


export type IMutationDeleteProductArgs = {
  productId: Scalars['String'];
};


export type IMutationDeleteProductLikeArgs = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationDeleteSnkBoardArgs = {
  snkBoardId: Scalars['String'];
};


export type IMutationDeleteSnkBookMarkArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationDeleteSnkLikeArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationDeleteUserArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRestoreSnkBookMarkArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationRestoreSnkLikeArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IMutationUpdateProductArgs = {
  productId: Scalars['String'];
  updateProductInput: IUpdateProductInput;
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


export type IMutationVerifyMailTokenArgs = {
  code: Scalars['String'];
  email: Scalars['String'];
};

export enum IPayment_Status_Enum {
  Cancel = 'CANCEL',
  Payment = 'PAYMENT'
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

export type IProduct = {
  __typename?: 'Product';
  address: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  isSold: Scalars['Boolean'];
  price: Scalars['Int'];
  productCategory: IProductCategory;
  productImages: Array<IProductImage>;
  productLikes: Array<IProductLike>;
  title: Scalars['String'];
  user: IUser;
};

export type IProductCategory = {
  __typename?: 'ProductCategory';
  category: Scalars['String'];
  id: Scalars['String'];
};

export type IProductImage = {
  __typename?: 'ProductImage';
  id: Scalars['String'];
  img: Scalars['String'];
  isMain: Scalars['Boolean'];
  product: IProduct;
};

export type IProductLike = {
  __typename?: 'ProductLike';
  id: Scalars['String'];
  product: IProduct;
  user: IUser;
};

export type IQuery = {
  __typename?: 'Query';
  fetchAllProducts: Array<IProduct>;
  /** 회원 조회 */
  fetchAllUsers: Array<IUser>;
  /** Return : User가 BookMark한 SnkBoards */
  fetchBookMarkedSnkBoards: Array<ISnkBoard>;
  /** Return : User가 Like한 SnkBoards */
  fetchLikedSnkBoards: Array<ISnkBoard>;
  /** 회원 한명 조회 */
  fetchOneUser: IUser;
  /** 상품 조회 */
  fetchProduct: IFetchProductOutput;
  /** Return : 사용자의 Board Like 여부 */
  fetchProductLike: Scalars['Boolean'];
  /** Return : id 값으로 조회된 SnkBoard 정보 */
  fetchSnkBoard: ISnkBoard;
  /** Return : 스노클링 포인트 리스트 */
  fetchSnkBoards: Array<ISnkBoard>;
  /** Return : 해당 Board의 유저 BookMark 여부 */
  fetchSnkBookMark: Scalars['Boolean'];
  /** Return : 해당 Board의 유저 Like 여부 */
  fetchSnkLike: Scalars['Boolean'];
  /** Return : 좋아요 Top Five SnkBoards */
  fetchTopFiveSnkBoards: Array<ISnkBoard>;
  /** Return : User의 BookMarks 정보 */
  fetchUserSnkBookMarks: Array<ISnkBoardBookMark>;
  /** Return : User의 모든 SnkboardLike */
  fetchUserSnkLikes: Array<ISnkBoardLike>;
  /** Return : SnkBoard에 좋아요를 누른 유저 목록 */
  fetchWhoLikesBoard: Array<IUser>;
};


export type IQueryFetchAllProductsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchBookMarkedSnkBoardsArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchLikedSnkBoardsArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchOneUserArgs = {
  email: Scalars['String'];
};


export type IQueryFetchProductArgs = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchProductLikeArgs = {
  productId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchSnkBoardArgs = {
  snkBoardId: Scalars['String'];
};


export type IQueryFetchSnkBoardsArgs = {
  page: Scalars['Float'];
};


export type IQueryFetchSnkBookMarkArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchSnkLikeArgs = {
  snkBoardId: Scalars['String'];
  userId: Scalars['String'];
};


export type IQueryFetchUserSnkBookMarksArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchUserSnkLikesArgs = {
  userId: Scalars['String'];
};


export type IQueryFetchWhoLikesBoardArgs = {
  snkBoardId: Scalars['String'];
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
  title: Scalars['String'];
};

export type ISnkBoardBookMark = {
  __typename?: 'SnkBoardBookMark';
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  snkBoard: ISnkBoard;
  updatedAt: Scalars['DateTime'];
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
  createdAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  id: Scalars['String'];
  snkBoard: ISnkBoard;
  updatedAt: Scalars['DateTime'];
  user: IUser;
};

export type ISnkBoardTag = {
  __typename?: 'SnkBoardTag';
  id: Scalars['String'];
  name: Scalars['String'];
  snkBoards: Array<ISnkBoard>;
};

export type IUpdateProductInput = {
  address?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  productCategory?: InputMaybe<Scalars['String']>;
  productImages?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
};

export type IUpdateSnkBoardInput = {
  addrDetail?: InputMaybe<Scalars['String']>;
  addrOne?: InputMaybe<Scalars['String']>;
  addrTwo?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  lat?: InputMaybe<Scalars['Float']>;
  lng?: InputMaybe<Scalars['Float']>;
  snkBoardImages: Array<Scalars['String']>;
  snkBoardTags: Array<Scalars['String']>;
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
  product: Array<IProduct>;
  productLikes: Array<IProductLike>;
  profileImg: Scalars['String'];
  snkBoardBookMarks: Array<ISnkBoardBookMark>;
  snkBoardLikes: Array<ISnkBoardLike>;
  updatedAt: Scalars['DateTime'];
};
