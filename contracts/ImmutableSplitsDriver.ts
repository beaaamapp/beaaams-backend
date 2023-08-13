/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type SplitsReceiverStruct = {
  userId: PromiseOrValue<BigNumberish>;
  weight: PromiseOrValue<BigNumberish>;
};

export type SplitsReceiverStructOutput = [BigNumber, number] & {
  userId: BigNumber;
  weight: number;
};

export type UserMetadataStruct = {
  key: PromiseOrValue<BytesLike>;
  value: PromiseOrValue<BytesLike>;
};

export type UserMetadataStructOutput = [string, string] & {
  key: string;
  value: string;
};

export interface ImmutableSplitsDriverInterface extends utils.Interface {
  functions: {
    "acceptAdmin()": FunctionFragment;
    "admin()": FunctionFragment;
    "allPausers()": FunctionFragment;
    "createSplits((uint256,uint32)[],(bytes32,bytes)[])": FunctionFragment;
    "beamsHub()": FunctionFragment;
    "driverId()": FunctionFragment;
    "grantPauser(address)": FunctionFragment;
    "implementation()": FunctionFragment;
    "isPaused()": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "nextUserId()": FunctionFragment;
    "pause()": FunctionFragment;
    "proposeNewAdmin(address)": FunctionFragment;
    "proposedAdmin()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceAdmin()": FunctionFragment;
    "revokePauser(address)": FunctionFragment;
    "totalSplitsWeight()": FunctionFragment;
    "unpause()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptAdmin"
      | "admin"
      | "allPausers"
      | "createSplits"
      | "beamsHub"
      | "driverId"
      | "grantPauser"
      | "implementation"
      | "isPaused"
      | "isPauser"
      | "nextUserId"
      | "pause"
      | "proposeNewAdmin"
      | "proposedAdmin"
      | "proxiableUUID"
      | "renounceAdmin"
      | "revokePauser"
      | "totalSplitsWeight"
      | "unpause"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allPausers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createSplits",
    values: [SplitsReceiverStruct[], UserMetadataStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "beamsHub", values?: undefined): string;
  encodeFunctionData(functionFragment: "driverId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "grantPauser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isPauser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "nextUserId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposeNewAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proposedAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revokePauser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSplitsWeight",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allPausers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createSplits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beamsHub", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "driverId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "grantPauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextUserId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposedAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSplitsWeight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "CreatedSplits(uint256,bytes32)": EventFragment;
    "NewAdminProposed(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "PauserGranted(address,address)": EventFragment;
    "PauserRevoked(address,address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatedSplits"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewAdminProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRevoked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface CreatedSplitsEventObject {
  userId: BigNumber;
  receiversHash: string;
}
export type CreatedSplitsEvent = TypedEvent<
  [BigNumber, string],
  CreatedSplitsEventObject
>;

export type CreatedSplitsEventFilter = TypedEventFilter<CreatedSplitsEvent>;

export interface NewAdminProposedEventObject {
  currentAdmin: string;
  newAdmin: string;
}
export type NewAdminProposedEvent = TypedEvent<
  [string, string],
  NewAdminProposedEventObject
>;

export type NewAdminProposedEventFilter =
  TypedEventFilter<NewAdminProposedEvent>;

export interface PausedEventObject {
  pauser: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PauserGrantedEventObject {
  pauser: string;
  admin: string;
}
export type PauserGrantedEvent = TypedEvent<
  [string, string],
  PauserGrantedEventObject
>;

export type PauserGrantedEventFilter = TypedEventFilter<PauserGrantedEvent>;

export interface PauserRevokedEventObject {
  pauser: string;
  admin: string;
}
export type PauserRevokedEvent = TypedEvent<
  [string, string],
  PauserRevokedEventObject
>;

export type PauserRevokedEventFilter = TypedEventFilter<PauserRevokedEvent>;

export interface UnpausedEventObject {
  pauser: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ImmutableSplitsDriver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ImmutableSplitsDriverInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    allPausers(
      overrides?: CallOverrides
    ): Promise<[string[]] & { pausersList: string[] }>;

    createSplits(
      receivers: SplitsReceiverStruct[],
      userMetadata: UserMetadataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    beamsHub(overrides?: CallOverrides): Promise<[string]>;

    driverId(overrides?: CallOverrides): Promise<[number]>;

    grantPauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    isPaused(overrides?: CallOverrides): Promise<[boolean]>;

    isPauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isAddrPauser: boolean }>;

    nextUserId(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { userId: BigNumber }>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposedAdmin(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revokePauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSplitsWeight(overrides?: CallOverrides): Promise<[number]>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptAdmin(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  allPausers(overrides?: CallOverrides): Promise<string[]>;

  createSplits(
    receivers: SplitsReceiverStruct[],
    userMetadata: UserMetadataStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  beamsHub(overrides?: CallOverrides): Promise<string>;

  driverId(overrides?: CallOverrides): Promise<number>;

  grantPauser(
    pauser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  implementation(overrides?: CallOverrides): Promise<string>;

  isPaused(overrides?: CallOverrides): Promise<boolean>;

  isPauser(
    pauser: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  nextUserId(overrides?: CallOverrides): Promise<BigNumber>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewAdmin(
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposedAdmin(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceAdmin(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revokePauser(
    pauser: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSplitsWeight(overrides?: CallOverrides): Promise<number>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptAdmin(overrides?: CallOverrides): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    allPausers(overrides?: CallOverrides): Promise<string[]>;

    createSplits(
      receivers: SplitsReceiverStruct[],
      userMetadata: UserMetadataStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    beamsHub(overrides?: CallOverrides): Promise<string>;

    driverId(overrides?: CallOverrides): Promise<number>;

    grantPauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    implementation(overrides?: CallOverrides): Promise<string>;

    isPaused(overrides?: CallOverrides): Promise<boolean>;

    isPauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    nextUserId(overrides?: CallOverrides): Promise<BigNumber>;

    pause(overrides?: CallOverrides): Promise<void>;

    proposeNewAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposedAdmin(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceAdmin(overrides?: CallOverrides): Promise<void>;

    revokePauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    totalSplitsWeight(overrides?: CallOverrides): Promise<number>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "CreatedSplits(uint256,bytes32)"(
      userId?: PromiseOrValue<BigNumberish> | null,
      receiversHash?: PromiseOrValue<BytesLike> | null
    ): CreatedSplitsEventFilter;
    CreatedSplits(
      userId?: PromiseOrValue<BigNumberish> | null,
      receiversHash?: PromiseOrValue<BytesLike> | null
    ): CreatedSplitsEventFilter;

    "NewAdminProposed(address,address)"(
      currentAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): NewAdminProposedEventFilter;
    NewAdminProposed(
      currentAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): NewAdminProposedEventFilter;

    "Paused(address)"(
      pauser?: PromiseOrValue<string> | null
    ): PausedEventFilter;
    Paused(pauser?: PromiseOrValue<string> | null): PausedEventFilter;

    "PauserGranted(address,address)"(
      pauser?: PromiseOrValue<string> | null,
      admin?: PromiseOrValue<string> | null
    ): PauserGrantedEventFilter;
    PauserGranted(
      pauser?: PromiseOrValue<string> | null,
      admin?: PromiseOrValue<string> | null
    ): PauserGrantedEventFilter;

    "PauserRevoked(address,address)"(
      pauser?: PromiseOrValue<string> | null,
      admin?: PromiseOrValue<string> | null
    ): PauserRevokedEventFilter;
    PauserRevoked(
      pauser?: PromiseOrValue<string> | null,
      admin?: PromiseOrValue<string> | null
    ): PauserRevokedEventFilter;

    "Unpaused(address)"(
      pauser?: PromiseOrValue<string> | null
    ): UnpausedEventFilter;
    Unpaused(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    acceptAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    allPausers(overrides?: CallOverrides): Promise<BigNumber>;

    createSplits(
      receivers: SplitsReceiverStruct[],
      userMetadata: UserMetadataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    beamsHub(overrides?: CallOverrides): Promise<BigNumber>;

    driverId(overrides?: CallOverrides): Promise<BigNumber>;

    grantPauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    isPaused(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nextUserId(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposedAdmin(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revokePauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSplitsWeight(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allPausers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createSplits(
      receivers: SplitsReceiverStruct[],
      userMetadata: UserMetadataStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    beamsHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    driverId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantPauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPauser(
      pauser: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextUserId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposedAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceAdmin(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revokePauser(
      pauser: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSplitsWeight(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
