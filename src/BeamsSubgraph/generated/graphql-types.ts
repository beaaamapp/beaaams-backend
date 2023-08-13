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
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  Int8: any;
};

export type App = {
  __typename?: 'App';
  appAddress: Scalars['Bytes'];
  id: Scalars['ID'];
  lastUpdatedBlockTimestamp: Scalars['BigInt'];
};

export type App_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<App_Filter>>>;
  appAddress?: InputMaybe<Scalars['Bytes']>;
  appAddress_contains?: InputMaybe<Scalars['Bytes']>;
  appAddress_gt?: InputMaybe<Scalars['Bytes']>;
  appAddress_gte?: InputMaybe<Scalars['Bytes']>;
  appAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  appAddress_lt?: InputMaybe<Scalars['Bytes']>;
  appAddress_lte?: InputMaybe<Scalars['Bytes']>;
  appAddress_not?: InputMaybe<Scalars['Bytes']>;
  appAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  appAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<App_Filter>>>;
};

export enum App_OrderBy {
  AppAddress = 'appAddress',
  Id = 'id',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp'
}

export type BeamsEntry = {
  __typename?: 'BeamsEntry';
  config: Scalars['BigInt'];
  id: Scalars['ID'];
  sender: User;
  senderAssetConfig: UserAssetConfig;
  userId: Scalars['String'];
};

export type BeamsEntry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeamsEntry_Filter>>>;
  config?: InputMaybe<Scalars['BigInt']>;
  config_gt?: InputMaybe<Scalars['BigInt']>;
  config_gte?: InputMaybe<Scalars['BigInt']>;
  config_in?: InputMaybe<Array<Scalars['BigInt']>>;
  config_lt?: InputMaybe<Scalars['BigInt']>;
  config_lte?: InputMaybe<Scalars['BigInt']>;
  config_not?: InputMaybe<Scalars['BigInt']>;
  config_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<BeamsEntry_Filter>>>;
  sender?: InputMaybe<Scalars['String']>;
  senderAssetConfig?: InputMaybe<Scalars['String']>;
  senderAssetConfig_?: InputMaybe<UserAssetConfig_Filter>;
  senderAssetConfig_contains?: InputMaybe<Scalars['String']>;
  senderAssetConfig_contains_nocase?: InputMaybe<Scalars['String']>;
  senderAssetConfig_ends_with?: InputMaybe<Scalars['String']>;
  senderAssetConfig_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderAssetConfig_gt?: InputMaybe<Scalars['String']>;
  senderAssetConfig_gte?: InputMaybe<Scalars['String']>;
  senderAssetConfig_in?: InputMaybe<Array<Scalars['String']>>;
  senderAssetConfig_lt?: InputMaybe<Scalars['String']>;
  senderAssetConfig_lte?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_contains?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_contains_nocase?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_ends_with?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_in?: InputMaybe<Array<Scalars['String']>>;
  senderAssetConfig_not_starts_with?: InputMaybe<Scalars['String']>;
  senderAssetConfig_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderAssetConfig_starts_with?: InputMaybe<Scalars['String']>;
  senderAssetConfig_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<User_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BeamsEntry_OrderBy {
  Config = 'config',
  Id = 'id',
  Sender = 'sender',
  SenderAssetConfig = 'senderAssetConfig',
  SenderAssetConfigAmountCollected = 'senderAssetConfig__amountCollected',
  SenderAssetConfigAmountPostSplitCollectable = 'senderAssetConfig__amountPostSplitCollectable',
  SenderAssetConfigAmountSplittable = 'senderAssetConfig__amountSplittable',
  SenderAssetConfigAssetConfigHash = 'senderAssetConfig__assetConfigHash',
  SenderAssetConfigAssetId = 'senderAssetConfig__assetId',
  SenderAssetConfigBalance = 'senderAssetConfig__balance',
  SenderAssetConfigId = 'senderAssetConfig__id',
  SenderAssetConfigLastUpdatedBlockTimestamp = 'senderAssetConfig__lastUpdatedBlockTimestamp',
  SenderId = 'sender__id',
  SenderLastUpdatedBlockTimestamp = 'sender__lastUpdatedBlockTimestamp',
  SenderSplitsReceiversHash = 'sender__splitsReceiversHash',
  UserId = 'userId'
}

export type BeamsReceiverSeenEvent = {
  __typename?: 'BeamsReceiverSeenEvent';
  beamsSetEvent: BeamsSetEvent;
  blockTimestamp: Scalars['BigInt'];
  config: Scalars['BigInt'];
  id: Scalars['ID'];
  receiverUserId: Scalars['String'];
  receiversHash: Scalars['Bytes'];
  senderUserId: Scalars['String'];
};

export type BeamsReceiverSeenEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeamsReceiverSeenEvent_Filter>>>;
  beamsSetEvent?: InputMaybe<Scalars['String']>;
  beamsSetEvent_?: InputMaybe<BeamsSetEvent_Filter>;
  beamsSetEvent_contains?: InputMaybe<Scalars['String']>;
  beamsSetEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEvent_ends_with?: InputMaybe<Scalars['String']>;
  beamsSetEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEvent_gt?: InputMaybe<Scalars['String']>;
  beamsSetEvent_gte?: InputMaybe<Scalars['String']>;
  beamsSetEvent_in?: InputMaybe<Array<Scalars['String']>>;
  beamsSetEvent_lt?: InputMaybe<Scalars['String']>;
  beamsSetEvent_lte?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_contains?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  beamsSetEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  beamsSetEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEvent_starts_with?: InputMaybe<Scalars['String']>;
  beamsSetEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  config?: InputMaybe<Scalars['BigInt']>;
  config_gt?: InputMaybe<Scalars['BigInt']>;
  config_gte?: InputMaybe<Scalars['BigInt']>;
  config_in?: InputMaybe<Array<Scalars['BigInt']>>;
  config_lt?: InputMaybe<Scalars['BigInt']>;
  config_lte?: InputMaybe<Scalars['BigInt']>;
  config_not?: InputMaybe<Scalars['BigInt']>;
  config_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<BeamsReceiverSeenEvent_Filter>>>;
  receiverUserId?: InputMaybe<Scalars['String']>;
  receiverUserId_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_gt?: InputMaybe<Scalars['String']>;
  receiverUserId_gte?: InputMaybe<Scalars['String']>;
  receiverUserId_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_lt?: InputMaybe<Scalars['String']>;
  receiverUserId_lte?: InputMaybe<Scalars['String']>;
  receiverUserId_not?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiversHash?: InputMaybe<Scalars['Bytes']>;
  receiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  senderUserId?: InputMaybe<Scalars['String']>;
  senderUserId_contains?: InputMaybe<Scalars['String']>;
  senderUserId_contains_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_ends_with?: InputMaybe<Scalars['String']>;
  senderUserId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_gt?: InputMaybe<Scalars['String']>;
  senderUserId_gte?: InputMaybe<Scalars['String']>;
  senderUserId_in?: InputMaybe<Array<Scalars['String']>>;
  senderUserId_lt?: InputMaybe<Scalars['String']>;
  senderUserId_lte?: InputMaybe<Scalars['String']>;
  senderUserId_not?: InputMaybe<Scalars['String']>;
  senderUserId_not_contains?: InputMaybe<Scalars['String']>;
  senderUserId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  senderUserId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_not_in?: InputMaybe<Array<Scalars['String']>>;
  senderUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  senderUserId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_starts_with?: InputMaybe<Scalars['String']>;
  senderUserId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BeamsReceiverSeenEvent_OrderBy {
  BeamsSetEvent = 'beamsSetEvent',
  BeamsSetEventAssetId = 'beamsSetEvent__assetId',
  BeamsSetEventBalance = 'beamsSetEvent__balance',
  BeamsSetEventBeamsHistoryHash = 'beamsSetEvent__beamsHistoryHash',
  BeamsSetEventBlockTimestamp = 'beamsSetEvent__blockTimestamp',
  BeamsSetEventId = 'beamsSetEvent__id',
  BeamsSetEventMaxEnd = 'beamsSetEvent__maxEnd',
  BeamsSetEventReceiversHash = 'beamsSetEvent__receiversHash',
  BeamsSetEventUserId = 'beamsSetEvent__userId',
  BlockTimestamp = 'blockTimestamp',
  Config = 'config',
  Id = 'id',
  ReceiverUserId = 'receiverUserId',
  ReceiversHash = 'receiversHash',
  SenderUserId = 'senderUserId'
}

export type BeamsSetEvent = {
  __typename?: 'BeamsSetEvent';
  assetId: Scalars['BigInt'];
  balance: Scalars['BigInt'];
  beamsHistoryHash: Scalars['Bytes'];
  beamsReceiverSeenEvents: Array<BeamsReceiverSeenEvent>;
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  maxEnd: Scalars['BigInt'];
  receiversHash: Scalars['Bytes'];
  userId: Scalars['String'];
};


export type BeamsSetEventBeamsReceiverSeenEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeamsReceiverSeenEvent_Filter>;
};

export type BeamsSetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BeamsSetEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beamsHistoryHash?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_contains?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_gt?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_gte?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHash_lt?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_lte?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_not?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  beamsHistoryHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsReceiverSeenEvents_?: InputMaybe<BeamsReceiverSeenEvent_Filter>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxEnd?: InputMaybe<Scalars['BigInt']>;
  maxEnd_gt?: InputMaybe<Scalars['BigInt']>;
  maxEnd_gte?: InputMaybe<Scalars['BigInt']>;
  maxEnd_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxEnd_lt?: InputMaybe<Scalars['BigInt']>;
  maxEnd_lte?: InputMaybe<Scalars['BigInt']>;
  maxEnd_not?: InputMaybe<Scalars['BigInt']>;
  maxEnd_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<BeamsSetEvent_Filter>>>;
  receiversHash?: InputMaybe<Scalars['Bytes']>;
  receiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum BeamsSetEvent_OrderBy {
  AssetId = 'assetId',
  Balance = 'balance',
  BeamsHistoryHash = 'beamsHistoryHash',
  BeamsReceiverSeenEvents = 'beamsReceiverSeenEvents',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  MaxEnd = 'maxEnd',
  ReceiversHash = 'receiversHash',
  UserId = 'userId'
}

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type CollectableEvent = {
  __typename?: 'CollectableEvent';
  amt: Scalars['BigInt'];
  assetId: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  user: User;
};

export type CollectableEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amt?: InputMaybe<Scalars['BigInt']>;
  amt_gt?: InputMaybe<Scalars['BigInt']>;
  amt_gte?: InputMaybe<Scalars['BigInt']>;
  amt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amt_lt?: InputMaybe<Scalars['BigInt']>;
  amt_lte?: InputMaybe<Scalars['BigInt']>;
  amt_not?: InputMaybe<Scalars['BigInt']>;
  amt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<CollectableEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<CollectableEvent_Filter>>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CollectableEvent_OrderBy {
  Amt = 'amt',
  AssetId = 'assetId',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  User = 'user',
  UserId = 'user__id',
  UserLastUpdatedBlockTimestamp = 'user__lastUpdatedBlockTimestamp',
  UserSplitsReceiversHash = 'user__splitsReceiversHash'
}

export type CollectedEvent = {
  __typename?: 'CollectedEvent';
  assetId: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  collected: Scalars['BigInt'];
  id: Scalars['ID'];
  user: User;
};

export type CollectedEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<CollectedEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collected?: InputMaybe<Scalars['BigInt']>;
  collected_gt?: InputMaybe<Scalars['BigInt']>;
  collected_gte?: InputMaybe<Scalars['BigInt']>;
  collected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collected_lt?: InputMaybe<Scalars['BigInt']>;
  collected_lte?: InputMaybe<Scalars['BigInt']>;
  collected_not?: InputMaybe<Scalars['BigInt']>;
  collected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<CollectedEvent_Filter>>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CollectedEvent_OrderBy {
  AssetId = 'assetId',
  BlockTimestamp = 'blockTimestamp',
  Collected = 'collected',
  Id = 'id',
  User = 'user',
  UserId = 'user__id',
  UserLastUpdatedBlockTimestamp = 'user__lastUpdatedBlockTimestamp',
  UserSplitsReceiversHash = 'user__splitsReceiversHash'
}

export type GivenEvent = {
  __typename?: 'GivenEvent';
  amt: Scalars['BigInt'];
  assetId: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  receiverUserId: Scalars['String'];
  userId: Scalars['String'];
};

export type GivenEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amt?: InputMaybe<Scalars['BigInt']>;
  amt_gt?: InputMaybe<Scalars['BigInt']>;
  amt_gte?: InputMaybe<Scalars['BigInt']>;
  amt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amt_lt?: InputMaybe<Scalars['BigInt']>;
  amt_lte?: InputMaybe<Scalars['BigInt']>;
  amt_not?: InputMaybe<Scalars['BigInt']>;
  amt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<GivenEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<GivenEvent_Filter>>>;
  receiverUserId?: InputMaybe<Scalars['String']>;
  receiverUserId_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_gt?: InputMaybe<Scalars['String']>;
  receiverUserId_gte?: InputMaybe<Scalars['String']>;
  receiverUserId_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_lt?: InputMaybe<Scalars['String']>;
  receiverUserId_lte?: InputMaybe<Scalars['String']>;
  receiverUserId_not?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GivenEvent_OrderBy {
  Amt = 'amt',
  AssetId = 'assetId',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReceiverUserId = 'receiverUserId',
  UserId = 'userId'
}

export type ImmutableSplitsCreated = {
  __typename?: 'ImmutableSplitsCreated';
  id: Scalars['ID'];
  receiversHash: Scalars['Bytes'];
  userId: Scalars['String'];
};

export type ImmutableSplitsCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ImmutableSplitsCreated_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ImmutableSplitsCreated_Filter>>>;
  receiversHash?: InputMaybe<Scalars['Bytes']>;
  receiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ImmutableSplitsCreated_OrderBy {
  Id = 'id',
  ReceiversHash = 'receiversHash',
  UserId = 'userId'
}

export type LastSetBeamsUserMapping = {
  __typename?: 'LastSetBeamsUserMapping';
  assetId: Scalars['BigInt'];
  beamsSetEventId: Scalars['String'];
  id: Scalars['ID'];
  userId: Scalars['String'];
};

export type LastSetBeamsUserMapping_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LastSetBeamsUserMapping_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beamsSetEventId?: InputMaybe<Scalars['String']>;
  beamsSetEventId_contains?: InputMaybe<Scalars['String']>;
  beamsSetEventId_contains_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEventId_ends_with?: InputMaybe<Scalars['String']>;
  beamsSetEventId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEventId_gt?: InputMaybe<Scalars['String']>;
  beamsSetEventId_gte?: InputMaybe<Scalars['String']>;
  beamsSetEventId_in?: InputMaybe<Array<Scalars['String']>>;
  beamsSetEventId_lt?: InputMaybe<Scalars['String']>;
  beamsSetEventId_lte?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_contains?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_ends_with?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_in?: InputMaybe<Array<Scalars['String']>>;
  beamsSetEventId_not_starts_with?: InputMaybe<Scalars['String']>;
  beamsSetEventId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  beamsSetEventId_starts_with?: InputMaybe<Scalars['String']>;
  beamsSetEventId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<LastSetBeamsUserMapping_Filter>>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LastSetBeamsUserMapping_OrderBy {
  AssetId = 'assetId',
  BeamsSetEventId = 'beamsSetEventId',
  Id = 'id',
  UserId = 'userId'
}

export type LastSetSplitsUserMapping = {
  __typename?: 'LastSetSplitsUserMapping';
  id: Scalars['ID'];
  splitsSetEventId: Scalars['String'];
  userId: Scalars['String'];
};

export type LastSetSplitsUserMapping_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LastSetSplitsUserMapping_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<LastSetSplitsUserMapping_Filter>>>;
  splitsSetEventId?: InputMaybe<Scalars['String']>;
  splitsSetEventId_contains?: InputMaybe<Scalars['String']>;
  splitsSetEventId_contains_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEventId_ends_with?: InputMaybe<Scalars['String']>;
  splitsSetEventId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEventId_gt?: InputMaybe<Scalars['String']>;
  splitsSetEventId_gte?: InputMaybe<Scalars['String']>;
  splitsSetEventId_in?: InputMaybe<Array<Scalars['String']>>;
  splitsSetEventId_lt?: InputMaybe<Scalars['String']>;
  splitsSetEventId_lte?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_contains?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_ends_with?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_in?: InputMaybe<Array<Scalars['String']>>;
  splitsSetEventId_not_starts_with?: InputMaybe<Scalars['String']>;
  splitsSetEventId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEventId_starts_with?: InputMaybe<Scalars['String']>;
  splitsSetEventId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum LastSetSplitsUserMapping_OrderBy {
  Id = 'id',
  SplitsSetEventId = 'splitsSetEventId',
  UserId = 'userId'
}

export type NftSubAccount = {
  __typename?: 'NFTSubAccount';
  id: Scalars['ID'];
  ownerAddress: Scalars['Bytes'];
};

export type NftSubAccount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<NftSubAccount_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<NftSubAccount_Filter>>>;
  ownerAddress?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_contains?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_gt?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_gte?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  ownerAddress_lt?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_lte?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_not?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  ownerAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum NftSubAccount_OrderBy {
  Id = 'id',
  OwnerAddress = 'ownerAddress'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  app?: Maybe<App>;
  apps: Array<App>;
  beamsEntries: Array<BeamsEntry>;
  beamsEntry?: Maybe<BeamsEntry>;
  beamsReceiverSeenEvent?: Maybe<BeamsReceiverSeenEvent>;
  beamsReceiverSeenEvents: Array<BeamsReceiverSeenEvent>;
  beamsSetEvent?: Maybe<BeamsSetEvent>;
  beamsSetEvents: Array<BeamsSetEvent>;
  collectableEvent?: Maybe<CollectableEvent>;
  collectableEvents: Array<CollectableEvent>;
  collectedEvent?: Maybe<CollectedEvent>;
  collectedEvents: Array<CollectedEvent>;
  givenEvent?: Maybe<GivenEvent>;
  givenEvents: Array<GivenEvent>;
  immutableSplitsCreated?: Maybe<ImmutableSplitsCreated>;
  immutableSplitsCreateds: Array<ImmutableSplitsCreated>;
  lastSetBeamsUserMapping?: Maybe<LastSetBeamsUserMapping>;
  lastSetBeamsUserMappings: Array<LastSetBeamsUserMapping>;
  lastSetSplitsUserMapping?: Maybe<LastSetSplitsUserMapping>;
  lastSetSplitsUserMappings: Array<LastSetSplitsUserMapping>;
  nftsubAccount?: Maybe<NftSubAccount>;
  nftsubAccounts: Array<NftSubAccount>;
  receivedBeamsEvent?: Maybe<ReceivedBeamsEvent>;
  receivedBeamsEvents: Array<ReceivedBeamsEvent>;
  splitEvent?: Maybe<SplitEvent>;
  splitEvents: Array<SplitEvent>;
  splitsEntries: Array<SplitsEntry>;
  splitsEntry?: Maybe<SplitsEntry>;
  splitsReceiverSeenEvent?: Maybe<SplitsReceiverSeenEvent>;
  splitsReceiverSeenEvents: Array<SplitsReceiverSeenEvent>;
  splitsSetEvent?: Maybe<SplitsSetEvent>;
  splitsSetEvents: Array<SplitsSetEvent>;
  squeezedBeamsEvent?: Maybe<SqueezedBeamsEvent>;
  squeezedBeamsEvents: Array<SqueezedBeamsEvent>;
  user?: Maybe<User>;
  userAssetConfig?: Maybe<UserAssetConfig>;
  userAssetConfigs: Array<UserAssetConfig>;
  userMetadataByKey?: Maybe<UserMetadataByKey>;
  userMetadataByKeys: Array<UserMetadataByKey>;
  userMetadataEvent?: Maybe<UserMetadataEvent>;
  userMetadataEvents: Array<UserMetadataEvent>;
  users: Array<User>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};


export type QueryBeamsEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsEntry_Filter>;
};


export type QueryBeamsEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeamsReceiverSeenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeamsReceiverSeenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsReceiverSeenEvent_Filter>;
};


export type QueryBeamsSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBeamsSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsSetEvent_Filter>;
};


export type QueryCollectableEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectableEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectableEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectableEvent_Filter>;
};


export type QueryCollectedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectedEvent_Filter>;
};


export type QueryGivenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGivenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivenEvent_Filter>;
};


export type QueryImmutableSplitsCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryImmutableSplitsCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ImmutableSplitsCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ImmutableSplitsCreated_Filter>;
};


export type QueryLastSetBeamsUserMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLastSetBeamsUserMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSetBeamsUserMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastSetBeamsUserMapping_Filter>;
};


export type QueryLastSetSplitsUserMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLastSetSplitsUserMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSetSplitsUserMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastSetSplitsUserMapping_Filter>;
};


export type QueryNftsubAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryNftsubAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NftSubAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftSubAccount_Filter>;
};


export type QueryReceivedBeamsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReceivedBeamsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivedBeamsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivedBeamsEvent_Filter>;
};


export type QuerySplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitEvent_Filter>;
};


export type QuerySplitsEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsEntry_Filter>;
};


export type QuerySplitsEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySplitsReceiverSeenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySplitsReceiverSeenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsReceiverSeenEvent_Filter>;
};


export type QuerySplitsSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySplitsSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsSetEvent_Filter>;
};


export type QuerySqueezedBeamsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySqueezedBeamsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SqueezedBeamsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SqueezedBeamsEvent_Filter>;
};


export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserAssetConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserAssetConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserAssetConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserAssetConfig_Filter>;
};


export type QueryUserMetadataByKeyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserMetadataByKeysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMetadataByKey_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserMetadataByKey_Filter>;
};


export type QueryUserMetadataEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryUserMetadataEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMetadataEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserMetadataEvent_Filter>;
};


export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type ReceivedBeamsEvent = {
  __typename?: 'ReceivedBeamsEvent';
  amt: Scalars['BigInt'];
  assetId: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  receivableCycles: Scalars['BigInt'];
  userId: Scalars['String'];
};

export type ReceivedBeamsEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amt?: InputMaybe<Scalars['BigInt']>;
  amt_gt?: InputMaybe<Scalars['BigInt']>;
  amt_gte?: InputMaybe<Scalars['BigInt']>;
  amt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amt_lt?: InputMaybe<Scalars['BigInt']>;
  amt_lte?: InputMaybe<Scalars['BigInt']>;
  amt_not?: InputMaybe<Scalars['BigInt']>;
  amt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<ReceivedBeamsEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<ReceivedBeamsEvent_Filter>>>;
  receivableCycles?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_gt?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_gte?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_in?: InputMaybe<Array<Scalars['BigInt']>>;
  receivableCycles_lt?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_lte?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_not?: InputMaybe<Scalars['BigInt']>;
  receivableCycles_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ReceivedBeamsEvent_OrderBy {
  Amt = 'amt',
  AssetId = 'assetId',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReceivableCycles = 'receivableCycles',
  UserId = 'userId'
}

export type SplitEvent = {
  __typename?: 'SplitEvent';
  amt: Scalars['BigInt'];
  assetId: Scalars['BigInt'];
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  receiverId: Scalars['String'];
  userId: Scalars['String'];
};

export type SplitEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amt?: InputMaybe<Scalars['BigInt']>;
  amt_gt?: InputMaybe<Scalars['BigInt']>;
  amt_gte?: InputMaybe<Scalars['BigInt']>;
  amt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amt_lt?: InputMaybe<Scalars['BigInt']>;
  amt_lte?: InputMaybe<Scalars['BigInt']>;
  amt_not?: InputMaybe<Scalars['BigInt']>;
  amt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<SplitEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SplitEvent_Filter>>>;
  receiverId?: InputMaybe<Scalars['String']>;
  receiverId_contains?: InputMaybe<Scalars['String']>;
  receiverId_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverId_ends_with?: InputMaybe<Scalars['String']>;
  receiverId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverId_gt?: InputMaybe<Scalars['String']>;
  receiverId_gte?: InputMaybe<Scalars['String']>;
  receiverId_in?: InputMaybe<Array<Scalars['String']>>;
  receiverId_lt?: InputMaybe<Scalars['String']>;
  receiverId_lte?: InputMaybe<Scalars['String']>;
  receiverId_not?: InputMaybe<Scalars['String']>;
  receiverId_not_contains?: InputMaybe<Scalars['String']>;
  receiverId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverId_not_ends_with?: InputMaybe<Scalars['String']>;
  receiverId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverId_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiverId_not_starts_with?: InputMaybe<Scalars['String']>;
  receiverId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverId_starts_with?: InputMaybe<Scalars['String']>;
  receiverId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SplitEvent_OrderBy {
  Amt = 'amt',
  AssetId = 'assetId',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReceiverId = 'receiverId',
  UserId = 'userId'
}

export type SplitsEntry = {
  __typename?: 'SplitsEntry';
  id: Scalars['ID'];
  sender: User;
  userId: Scalars['String'];
  weight: Scalars['BigInt'];
};

export type SplitsEntry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitsEntry_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SplitsEntry_Filter>>>;
  sender?: InputMaybe<Scalars['String']>;
  sender_?: InputMaybe<User_Filter>;
  sender_contains?: InputMaybe<Scalars['String']>;
  sender_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_ends_with?: InputMaybe<Scalars['String']>;
  sender_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_gt?: InputMaybe<Scalars['String']>;
  sender_gte?: InputMaybe<Scalars['String']>;
  sender_in?: InputMaybe<Array<Scalars['String']>>;
  sender_lt?: InputMaybe<Scalars['String']>;
  sender_lte?: InputMaybe<Scalars['String']>;
  sender_not?: InputMaybe<Scalars['String']>;
  sender_not_contains?: InputMaybe<Scalars['String']>;
  sender_not_contains_nocase?: InputMaybe<Scalars['String']>;
  sender_not_ends_with?: InputMaybe<Scalars['String']>;
  sender_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  sender_not_in?: InputMaybe<Array<Scalars['String']>>;
  sender_not_starts_with?: InputMaybe<Scalars['String']>;
  sender_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  sender_starts_with?: InputMaybe<Scalars['String']>;
  sender_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['BigInt']>;
  weight_gt?: InputMaybe<Scalars['BigInt']>;
  weight_gte?: InputMaybe<Scalars['BigInt']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']>;
  weight_lte?: InputMaybe<Scalars['BigInt']>;
  weight_not?: InputMaybe<Scalars['BigInt']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SplitsEntry_OrderBy {
  Id = 'id',
  Sender = 'sender',
  SenderId = 'sender__id',
  SenderLastUpdatedBlockTimestamp = 'sender__lastUpdatedBlockTimestamp',
  SenderSplitsReceiversHash = 'sender__splitsReceiversHash',
  UserId = 'userId',
  Weight = 'weight'
}

export type SplitsReceiverSeenEvent = {
  __typename?: 'SplitsReceiverSeenEvent';
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  receiverUserId: Scalars['String'];
  receiversHash: Scalars['Bytes'];
  senderUserId: Scalars['String'];
  splitsSetEvent: SplitsSetEvent;
  weight: Scalars['BigInt'];
};

export type SplitsReceiverSeenEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitsReceiverSeenEvent_Filter>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SplitsReceiverSeenEvent_Filter>>>;
  receiverUserId?: InputMaybe<Scalars['String']>;
  receiverUserId_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_gt?: InputMaybe<Scalars['String']>;
  receiverUserId_gte?: InputMaybe<Scalars['String']>;
  receiverUserId_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_lt?: InputMaybe<Scalars['String']>;
  receiverUserId_lte?: InputMaybe<Scalars['String']>;
  receiverUserId_not?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains?: InputMaybe<Scalars['String']>;
  receiverUserId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_not_in?: InputMaybe<Array<Scalars['String']>>;
  receiverUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with?: InputMaybe<Scalars['String']>;
  receiverUserId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  receiversHash?: InputMaybe<Scalars['Bytes']>;
  receiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  senderUserId?: InputMaybe<Scalars['String']>;
  senderUserId_contains?: InputMaybe<Scalars['String']>;
  senderUserId_contains_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_ends_with?: InputMaybe<Scalars['String']>;
  senderUserId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_gt?: InputMaybe<Scalars['String']>;
  senderUserId_gte?: InputMaybe<Scalars['String']>;
  senderUserId_in?: InputMaybe<Array<Scalars['String']>>;
  senderUserId_lt?: InputMaybe<Scalars['String']>;
  senderUserId_lte?: InputMaybe<Scalars['String']>;
  senderUserId_not?: InputMaybe<Scalars['String']>;
  senderUserId_not_contains?: InputMaybe<Scalars['String']>;
  senderUserId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_not_ends_with?: InputMaybe<Scalars['String']>;
  senderUserId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_not_in?: InputMaybe<Array<Scalars['String']>>;
  senderUserId_not_starts_with?: InputMaybe<Scalars['String']>;
  senderUserId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderUserId_starts_with?: InputMaybe<Scalars['String']>;
  senderUserId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent?: InputMaybe<Scalars['String']>;
  splitsSetEvent_?: InputMaybe<SplitsSetEvent_Filter>;
  splitsSetEvent_contains?: InputMaybe<Scalars['String']>;
  splitsSetEvent_contains_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent_ends_with?: InputMaybe<Scalars['String']>;
  splitsSetEvent_ends_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent_gt?: InputMaybe<Scalars['String']>;
  splitsSetEvent_gte?: InputMaybe<Scalars['String']>;
  splitsSetEvent_in?: InputMaybe<Array<Scalars['String']>>;
  splitsSetEvent_lt?: InputMaybe<Scalars['String']>;
  splitsSetEvent_lte?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_contains?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_contains_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_ends_with?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_in?: InputMaybe<Array<Scalars['String']>>;
  splitsSetEvent_not_starts_with?: InputMaybe<Scalars['String']>;
  splitsSetEvent_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  splitsSetEvent_starts_with?: InputMaybe<Scalars['String']>;
  splitsSetEvent_starts_with_nocase?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['BigInt']>;
  weight_gt?: InputMaybe<Scalars['BigInt']>;
  weight_gte?: InputMaybe<Scalars['BigInt']>;
  weight_in?: InputMaybe<Array<Scalars['BigInt']>>;
  weight_lt?: InputMaybe<Scalars['BigInt']>;
  weight_lte?: InputMaybe<Scalars['BigInt']>;
  weight_not?: InputMaybe<Scalars['BigInt']>;
  weight_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum SplitsReceiverSeenEvent_OrderBy {
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReceiverUserId = 'receiverUserId',
  ReceiversHash = 'receiversHash',
  SenderUserId = 'senderUserId',
  SplitsSetEvent = 'splitsSetEvent',
  SplitsSetEventBlockTimestamp = 'splitsSetEvent__blockTimestamp',
  SplitsSetEventId = 'splitsSetEvent__id',
  SplitsSetEventReceiversHash = 'splitsSetEvent__receiversHash',
  SplitsSetEventUserId = 'splitsSetEvent__userId',
  Weight = 'weight'
}

export type SplitsSetEvent = {
  __typename?: 'SplitsSetEvent';
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  receiversHash: Scalars['Bytes'];
  splitsReceiverSeenEvents: Array<SplitsReceiverSeenEvent>;
  userId: Scalars['String'];
};


export type SplitsSetEventSplitsReceiverSeenEventsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SplitsReceiverSeenEvent_Filter>;
};

export type SplitsSetEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<SplitsSetEvent_Filter>>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SplitsSetEvent_Filter>>>;
  receiversHash?: InputMaybe<Scalars['Bytes']>;
  receiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  receiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  receiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  splitsReceiverSeenEvents_?: InputMaybe<SplitsReceiverSeenEvent_Filter>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SplitsSetEvent_OrderBy {
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  ReceiversHash = 'receiversHash',
  SplitsReceiverSeenEvents = 'splitsReceiverSeenEvents',
  UserId = 'userId'
}

export type SqueezedBeamsEvent = {
  __typename?: 'SqueezedBeamsEvent';
  amt: Scalars['BigInt'];
  assetId: Scalars['BigInt'];
  beamsHistoryHashes: Array<Scalars['Bytes']>;
  blockTimestamp: Scalars['BigInt'];
  id: Scalars['ID'];
  senderId: Scalars['String'];
  userId: Scalars['String'];
};

export type SqueezedBeamsEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amt?: InputMaybe<Scalars['BigInt']>;
  amt_gt?: InputMaybe<Scalars['BigInt']>;
  amt_gte?: InputMaybe<Scalars['BigInt']>;
  amt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amt_lt?: InputMaybe<Scalars['BigInt']>;
  amt_lte?: InputMaybe<Scalars['BigInt']>;
  amt_not?: InputMaybe<Scalars['BigInt']>;
  amt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<SqueezedBeamsEvent_Filter>>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beamsHistoryHashes?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHashes_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHashes_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHashes_not?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHashes_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
  beamsHistoryHashes_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  or?: InputMaybe<Array<InputMaybe<SqueezedBeamsEvent_Filter>>>;
  senderId?: InputMaybe<Scalars['String']>;
  senderId_contains?: InputMaybe<Scalars['String']>;
  senderId_contains_nocase?: InputMaybe<Scalars['String']>;
  senderId_ends_with?: InputMaybe<Scalars['String']>;
  senderId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderId_gt?: InputMaybe<Scalars['String']>;
  senderId_gte?: InputMaybe<Scalars['String']>;
  senderId_in?: InputMaybe<Array<Scalars['String']>>;
  senderId_lt?: InputMaybe<Scalars['String']>;
  senderId_lte?: InputMaybe<Scalars['String']>;
  senderId_not?: InputMaybe<Scalars['String']>;
  senderId_not_contains?: InputMaybe<Scalars['String']>;
  senderId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  senderId_not_ends_with?: InputMaybe<Scalars['String']>;
  senderId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  senderId_not_in?: InputMaybe<Array<Scalars['String']>>;
  senderId_not_starts_with?: InputMaybe<Scalars['String']>;
  senderId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  senderId_starts_with?: InputMaybe<Scalars['String']>;
  senderId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum SqueezedBeamsEvent_OrderBy {
  Amt = 'amt',
  AssetId = 'assetId',
  BeamsHistoryHashes = 'beamsHistoryHashes',
  BlockTimestamp = 'blockTimestamp',
  Id = 'id',
  SenderId = 'senderId',
  UserId = 'userId'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  app?: Maybe<App>;
  apps: Array<App>;
  beamsEntries: Array<BeamsEntry>;
  beamsEntry?: Maybe<BeamsEntry>;
  beamsReceiverSeenEvent?: Maybe<BeamsReceiverSeenEvent>;
  beamsReceiverSeenEvents: Array<BeamsReceiverSeenEvent>;
  beamsSetEvent?: Maybe<BeamsSetEvent>;
  beamsSetEvents: Array<BeamsSetEvent>;
  collectableEvent?: Maybe<CollectableEvent>;
  collectableEvents: Array<CollectableEvent>;
  collectedEvent?: Maybe<CollectedEvent>;
  collectedEvents: Array<CollectedEvent>;
  givenEvent?: Maybe<GivenEvent>;
  givenEvents: Array<GivenEvent>;
  immutableSplitsCreated?: Maybe<ImmutableSplitsCreated>;
  immutableSplitsCreateds: Array<ImmutableSplitsCreated>;
  lastSetBeamsUserMapping?: Maybe<LastSetBeamsUserMapping>;
  lastSetBeamsUserMappings: Array<LastSetBeamsUserMapping>;
  lastSetSplitsUserMapping?: Maybe<LastSetSplitsUserMapping>;
  lastSetSplitsUserMappings: Array<LastSetSplitsUserMapping>;
  nftsubAccount?: Maybe<NftSubAccount>;
  nftsubAccounts: Array<NftSubAccount>;
  receivedBeamsEvent?: Maybe<ReceivedBeamsEvent>;
  receivedBeamsEvents: Array<ReceivedBeamsEvent>;
  splitEvent?: Maybe<SplitEvent>;
  splitEvents: Array<SplitEvent>;
  splitsEntries: Array<SplitsEntry>;
  splitsEntry?: Maybe<SplitsEntry>;
  splitsReceiverSeenEvent?: Maybe<SplitsReceiverSeenEvent>;
  splitsReceiverSeenEvents: Array<SplitsReceiverSeenEvent>;
  splitsSetEvent?: Maybe<SplitsSetEvent>;
  splitsSetEvents: Array<SplitsSetEvent>;
  squeezedBeamsEvent?: Maybe<SqueezedBeamsEvent>;
  squeezedBeamsEvents: Array<SqueezedBeamsEvent>;
  user?: Maybe<User>;
  userAssetConfig?: Maybe<UserAssetConfig>;
  userAssetConfigs: Array<UserAssetConfig>;
  userMetadataByKey?: Maybe<UserMetadataByKey>;
  userMetadataByKeys: Array<UserMetadataByKey>;
  userMetadataEvent?: Maybe<UserMetadataEvent>;
  userMetadataEvents: Array<UserMetadataEvent>;
  users: Array<User>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};


export type SubscriptionBeamsEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsEntry_Filter>;
};


export type SubscriptionBeamsEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeamsReceiverSeenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeamsReceiverSeenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsReceiverSeenEvent_Filter>;
};


export type SubscriptionBeamsSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBeamsSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BeamsSetEvent_Filter>;
};


export type SubscriptionCollectableEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectableEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectableEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectableEvent_Filter>;
};


export type SubscriptionCollectedEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectedEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CollectedEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CollectedEvent_Filter>;
};


export type SubscriptionGivenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGivenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivenEvent_Filter>;
};


export type SubscriptionImmutableSplitsCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionImmutableSplitsCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ImmutableSplitsCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ImmutableSplitsCreated_Filter>;
};


export type SubscriptionLastSetBeamsUserMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLastSetBeamsUserMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSetBeamsUserMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastSetBeamsUserMapping_Filter>;
};


export type SubscriptionLastSetSplitsUserMappingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLastSetSplitsUserMappingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LastSetSplitsUserMapping_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LastSetSplitsUserMapping_Filter>;
};


export type SubscriptionNftsubAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionNftsubAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<NftSubAccount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<NftSubAccount_Filter>;
};


export type SubscriptionReceivedBeamsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReceivedBeamsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivedBeamsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivedBeamsEvent_Filter>;
};


export type SubscriptionSplitEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSplitEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitEvent_Filter>;
};


export type SubscriptionSplitsEntriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsEntry_Filter>;
};


export type SubscriptionSplitsEntryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSplitsReceiverSeenEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSplitsReceiverSeenEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsReceiverSeenEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsReceiverSeenEvent_Filter>;
};


export type SubscriptionSplitsSetEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSplitsSetEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsSetEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SplitsSetEvent_Filter>;
};


export type SubscriptionSqueezedBeamsEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSqueezedBeamsEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SqueezedBeamsEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SqueezedBeamsEvent_Filter>;
};


export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserAssetConfigArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserAssetConfigsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserAssetConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserAssetConfig_Filter>;
};


export type SubscriptionUserMetadataByKeyArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserMetadataByKeysArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMetadataByKey_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserMetadataByKey_Filter>;
};


export type SubscriptionUserMetadataEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionUserMetadataEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserMetadataEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<UserMetadataEvent_Filter>;
};


export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type User = {
  __typename?: 'User';
  assetConfigs: Array<UserAssetConfig>;
  id: Scalars['ID'];
  lastUpdatedBlockTimestamp: Scalars['BigInt'];
  splitsEntries: Array<SplitsEntry>;
  splitsEntryIds: Array<Scalars['String']>;
  splitsReceiversHash: Scalars['Bytes'];
};


export type UserAssetConfigsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<UserAssetConfig_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserAssetConfig_Filter>;
};


export type UserSplitsEntriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<SplitsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SplitsEntry_Filter>;
};

export type UserAssetConfig = {
  __typename?: 'UserAssetConfig';
  amountCollected: Scalars['BigInt'];
  amountPostSplitCollectable: Scalars['BigInt'];
  amountSplittable: Scalars['BigInt'];
  assetConfigHash: Scalars['Bytes'];
  assetId: Scalars['BigInt'];
  balance: Scalars['BigInt'];
  beamsEntries: Array<BeamsEntry>;
  beamsEntryIds: Array<Scalars['String']>;
  id: Scalars['ID'];
  lastUpdatedBlockTimestamp: Scalars['BigInt'];
  user: User;
};


export type UserAssetConfigBeamsEntriesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BeamsEntry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BeamsEntry_Filter>;
};

export type UserAssetConfig_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountCollected?: InputMaybe<Scalars['BigInt']>;
  amountCollected_gt?: InputMaybe<Scalars['BigInt']>;
  amountCollected_gte?: InputMaybe<Scalars['BigInt']>;
  amountCollected_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountCollected_lt?: InputMaybe<Scalars['BigInt']>;
  amountCollected_lte?: InputMaybe<Scalars['BigInt']>;
  amountCollected_not?: InputMaybe<Scalars['BigInt']>;
  amountCollected_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPostSplitCollectable?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_gt?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_gte?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountPostSplitCollectable_lt?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_lte?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_not?: InputMaybe<Scalars['BigInt']>;
  amountPostSplitCollectable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountSplittable?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_gt?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_gte?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amountSplittable_lt?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_lte?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_not?: InputMaybe<Scalars['BigInt']>;
  amountSplittable_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  and?: InputMaybe<Array<InputMaybe<UserAssetConfig_Filter>>>;
  assetConfigHash?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_contains?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_gt?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_gte?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assetConfigHash_lt?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_lte?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_not?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  assetConfigHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  assetId?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  beamsEntries_?: InputMaybe<BeamsEntry_Filter>;
  beamsEntryIds?: InputMaybe<Array<Scalars['String']>>;
  beamsEntryIds_contains?: InputMaybe<Array<Scalars['String']>>;
  beamsEntryIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  beamsEntryIds_not?: InputMaybe<Array<Scalars['String']>>;
  beamsEntryIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  beamsEntryIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<UserAssetConfig_Filter>>>;
  user?: InputMaybe<Scalars['String']>;
  user_?: InputMaybe<User_Filter>;
  user_contains?: InputMaybe<Scalars['String']>;
  user_contains_nocase?: InputMaybe<Scalars['String']>;
  user_ends_with?: InputMaybe<Scalars['String']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_gt?: InputMaybe<Scalars['String']>;
  user_gte?: InputMaybe<Scalars['String']>;
  user_in?: InputMaybe<Array<Scalars['String']>>;
  user_lt?: InputMaybe<Scalars['String']>;
  user_lte?: InputMaybe<Scalars['String']>;
  user_not?: InputMaybe<Scalars['String']>;
  user_not_contains?: InputMaybe<Scalars['String']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']>;
  user_not_ends_with?: InputMaybe<Scalars['String']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  user_not_in?: InputMaybe<Array<Scalars['String']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  user_starts_with?: InputMaybe<Scalars['String']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum UserAssetConfig_OrderBy {
  AmountCollected = 'amountCollected',
  AmountPostSplitCollectable = 'amountPostSplitCollectable',
  AmountSplittable = 'amountSplittable',
  AssetConfigHash = 'assetConfigHash',
  AssetId = 'assetId',
  Balance = 'balance',
  BeamsEntries = 'beamsEntries',
  BeamsEntryIds = 'beamsEntryIds',
  Id = 'id',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  User = 'user',
  UserId = 'user__id',
  UserLastUpdatedBlockTimestamp = 'user__lastUpdatedBlockTimestamp',
  UserSplitsReceiversHash = 'user__splitsReceiversHash'
}

export type UserMetadataByKey = {
  __typename?: 'UserMetadataByKey';
  id: Scalars['ID'];
  key: Scalars['Bytes'];
  lastUpdatedBlockTimestamp: Scalars['BigInt'];
  userId: Scalars['String'];
  value: Scalars['Bytes'];
};

export type UserMetadataByKey_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserMetadataByKey_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_gt?: InputMaybe<Scalars['Bytes']>;
  key_gte?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_lt?: InputMaybe<Scalars['Bytes']>;
  key_lte?: InputMaybe<Scalars['Bytes']>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<UserMetadataByKey_Filter>>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Bytes']>;
  value_contains?: InputMaybe<Scalars['Bytes']>;
  value_gt?: InputMaybe<Scalars['Bytes']>;
  value_gte?: InputMaybe<Scalars['Bytes']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value_lt?: InputMaybe<Scalars['Bytes']>;
  value_lte?: InputMaybe<Scalars['Bytes']>;
  value_not?: InputMaybe<Scalars['Bytes']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UserMetadataByKey_OrderBy {
  Id = 'id',
  Key = 'key',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  UserId = 'userId',
  Value = 'value'
}

export type UserMetadataEvent = {
  __typename?: 'UserMetadataEvent';
  id: Scalars['ID'];
  key: Scalars['Bytes'];
  lastUpdatedBlockTimestamp: Scalars['BigInt'];
  userId: Scalars['String'];
  value: Scalars['Bytes'];
};

export type UserMetadataEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<UserMetadataEvent_Filter>>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['Bytes']>;
  key_contains?: InputMaybe<Scalars['Bytes']>;
  key_gt?: InputMaybe<Scalars['Bytes']>;
  key_gte?: InputMaybe<Scalars['Bytes']>;
  key_in?: InputMaybe<Array<Scalars['Bytes']>>;
  key_lt?: InputMaybe<Scalars['Bytes']>;
  key_lte?: InputMaybe<Scalars['Bytes']>;
  key_not?: InputMaybe<Scalars['Bytes']>;
  key_not_contains?: InputMaybe<Scalars['Bytes']>;
  key_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<UserMetadataEvent_Filter>>>;
  userId?: InputMaybe<Scalars['String']>;
  userId_contains?: InputMaybe<Scalars['String']>;
  userId_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_ends_with?: InputMaybe<Scalars['String']>;
  userId_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_gt?: InputMaybe<Scalars['String']>;
  userId_gte?: InputMaybe<Scalars['String']>;
  userId_in?: InputMaybe<Array<Scalars['String']>>;
  userId_lt?: InputMaybe<Scalars['String']>;
  userId_lte?: InputMaybe<Scalars['String']>;
  userId_not?: InputMaybe<Scalars['String']>;
  userId_not_contains?: InputMaybe<Scalars['String']>;
  userId_not_contains_nocase?: InputMaybe<Scalars['String']>;
  userId_not_ends_with?: InputMaybe<Scalars['String']>;
  userId_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']>>;
  userId_not_starts_with?: InputMaybe<Scalars['String']>;
  userId_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  userId_starts_with?: InputMaybe<Scalars['String']>;
  userId_starts_with_nocase?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Bytes']>;
  value_contains?: InputMaybe<Scalars['Bytes']>;
  value_gt?: InputMaybe<Scalars['Bytes']>;
  value_gte?: InputMaybe<Scalars['Bytes']>;
  value_in?: InputMaybe<Array<Scalars['Bytes']>>;
  value_lt?: InputMaybe<Scalars['Bytes']>;
  value_lte?: InputMaybe<Scalars['Bytes']>;
  value_not?: InputMaybe<Scalars['Bytes']>;
  value_not_contains?: InputMaybe<Scalars['Bytes']>;
  value_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum UserMetadataEvent_OrderBy {
  Id = 'id',
  Key = 'key',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  UserId = 'userId',
  Value = 'value'
}

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  assetConfigs_?: InputMaybe<UserAssetConfig_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  splitsEntries_?: InputMaybe<SplitsEntry_Filter>;
  splitsEntryIds?: InputMaybe<Array<Scalars['String']>>;
  splitsEntryIds_contains?: InputMaybe<Array<Scalars['String']>>;
  splitsEntryIds_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  splitsEntryIds_not?: InputMaybe<Array<Scalars['String']>>;
  splitsEntryIds_not_contains?: InputMaybe<Array<Scalars['String']>>;
  splitsEntryIds_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  splitsReceiversHash?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_contains?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_gt?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_gte?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  splitsReceiversHash_lt?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_lte?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_not?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  splitsReceiversHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum User_OrderBy {
  AssetConfigs = 'assetConfigs',
  Id = 'id',
  LastUpdatedBlockTimestamp = 'lastUpdatedBlockTimestamp',
  SplitsEntries = 'splitsEntries',
  SplitsEntryIds = 'splitsEntryIds',
  SplitsReceiversHash = 'splitsReceiversHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
