import { Event, EventFilter, BigNumberish, BytesLike, utils, BaseContract, Signer, CallOverrides, BigNumber, Overrides, ContractTransaction, PayableOverrides, PopulatedTransaction } from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';

interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
    args: TArgsArray & TArgsObject;
}
interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {
}
interface TypedListener<TEvent extends TypedEvent> {
    (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}
type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;
interface OnEvent<TRes> {
    <TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>, listener: TypedListener<TEvent>): TRes;
    (eventName: string, listener: Listener): TRes;
}
type PromiseOrValue<T> = T | Promise<T>;

type BeamsReceiverStruct$2 = {
    userId: PromiseOrValue<BigNumberish>;
    config: PromiseOrValue<BigNumberish>;
};
type UserMetadataStruct$3 = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
};
type SplitsReceiverStruct$3 = {
    userId: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
};
type BeamsHistoryStruct = {
    beamsHash: PromiseOrValue<BytesLike>;
    receivers: BeamsReceiverStruct$2[];
    updateTime: PromiseOrValue<BigNumberish>;
    maxEnd: PromiseOrValue<BigNumberish>;
};
interface BeamsHubInterface extends utils.Interface {
    functions: {
        "AMT_PER_SEC_EXTRA_DECIMALS()": FunctionFragment;
        "AMT_PER_SEC_MULTIPLIER()": FunctionFragment;
        "DRIVER_ID_OFFSET()": FunctionFragment;
        "MAX_BEAMS_RECEIVERS()": FunctionFragment;
        "MAX_SPLITS_RECEIVERS()": FunctionFragment;
        "MAX_TOTAL_BALANCE()": FunctionFragment;
        "TOTAL_SPLITS_WEIGHT()": FunctionFragment;
        "acceptAdmin()": FunctionFragment;
        "admin()": FunctionFragment;
        "allPausers()": FunctionFragment;
        "balanceAt(uint256,address,(uint256,uint256)[],uint32)": FunctionFragment;
        "collect(uint256,address)": FunctionFragment;
        "collectable(uint256,address)": FunctionFragment;
        "cycleSecs()": FunctionFragment;
        "beamsState(uint256,address)": FunctionFragment;
        "driverAddress(uint32)": FunctionFragment;
        "emitUserMetadata(uint256,(bytes32,bytes)[])": FunctionFragment;
        "give(uint256,uint256,address,uint128)": FunctionFragment;
        "grantPauser(address)": FunctionFragment;
        "hashBeams((uint256,uint256)[])": FunctionFragment;
        "hashBeamsHistory(bytes32,bytes32,uint32,uint32)": FunctionFragment;
        "hashSplits((uint256,uint32)[])": FunctionFragment;
        "implementation()": FunctionFragment;
        "isPaused()": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "minAmtPerSec()": FunctionFragment;
        "nextDriverId()": FunctionFragment;
        "pause()": FunctionFragment;
        "proposeNewAdmin(address)": FunctionFragment;
        "proposedAdmin()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "receivableBeamsCycles(uint256,address)": FunctionFragment;
        "receiveBeams(uint256,address,uint32)": FunctionFragment;
        "receiveBeamsResult(uint256,address,uint32)": FunctionFragment;
        "registerDriver(address)": FunctionFragment;
        "renounceAdmin()": FunctionFragment;
        "revokePauser(address)": FunctionFragment;
        "setBeams(uint256,address,(uint256,uint256)[],int128,(uint256,uint256)[],uint32,uint32)": FunctionFragment;
        "setSplits(uint256,(uint256,uint32)[])": FunctionFragment;
        "split(uint256,address,(uint256,uint32)[])": FunctionFragment;
        "splitResult(uint256,(uint256,uint32)[],uint128)": FunctionFragment;
        "splitsHash(uint256)": FunctionFragment;
        "splittable(uint256,address)": FunctionFragment;
        "squeezeBeams(uint256,address,uint256,bytes32,(bytes32,(uint256,uint256)[],uint32,uint32)[])": FunctionFragment;
        "squeezeBeamsResult(uint256,address,uint256,bytes32,(bytes32,(uint256,uint256)[],uint32,uint32)[])": FunctionFragment;
        "totalBalance(address)": FunctionFragment;
        "unpause()": FunctionFragment;
        "updateDriverAddress(uint32,address)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "withdraw(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "AMT_PER_SEC_EXTRA_DECIMALS" | "AMT_PER_SEC_MULTIPLIER" | "DRIVER_ID_OFFSET" | "MAX_BEAMS_RECEIVERS" | "MAX_SPLITS_RECEIVERS" | "MAX_TOTAL_BALANCE" | "TOTAL_SPLITS_WEIGHT" | "acceptAdmin" | "admin" | "allPausers" | "balanceAt" | "collect" | "collectable" | "cycleSecs" | "beamsState" | "driverAddress" | "emitUserMetadata" | "give" | "grantPauser" | "hashBeams" | "hashBeamsHistory" | "hashSplits" | "implementation" | "isPaused" | "isPauser" | "minAmtPerSec" | "nextDriverId" | "pause" | "proposeNewAdmin" | "proposedAdmin" | "proxiableUUID" | "receivableBeamsCycles" | "receiveBeams" | "receiveBeamsResult" | "registerDriver" | "renounceAdmin" | "revokePauser" | "setBeams" | "setSplits" | "split" | "splitResult" | "splitsHash" | "splittable" | "squeezeBeams" | "squeezeBeamsResult" | "totalBalance" | "unpause" | "updateDriverAddress" | "upgradeTo" | "upgradeToAndCall" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "AMT_PER_SEC_EXTRA_DECIMALS", values?: undefined): string;
    encodeFunctionData(functionFragment: "AMT_PER_SEC_MULTIPLIER", values?: undefined): string;
    encodeFunctionData(functionFragment: "DRIVER_ID_OFFSET", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BEAMS_RECEIVERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_SPLITS_RECEIVERS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_TOTAL_BALANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "TOTAL_SPLITS_WEIGHT", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allPausers", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceAt", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        BeamsReceiverStruct$2[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "collect", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "collectable", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "cycleSecs", values?: undefined): string;
    encodeFunctionData(functionFragment: "beamsState", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "driverAddress", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "emitUserMetadata", values: [PromiseOrValue<BigNumberish>, UserMetadataStruct$3[]]): string;
    encodeFunctionData(functionFragment: "give", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "grantPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "hashBeams", values: [BeamsReceiverStruct$2[]]): string;
    encodeFunctionData(functionFragment: "hashBeamsHistory", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "hashSplits", values: [SplitsReceiverStruct$3[]]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "minAmtPerSec", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextDriverId", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proposedAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "receivableBeamsCycles", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "receiveBeams", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "receiveBeamsResult", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "registerDriver", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokePauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setBeams", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        BeamsReceiverStruct$2[],
        PromiseOrValue<BigNumberish>,
        BeamsReceiverStruct$2[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setSplits", values: [PromiseOrValue<BigNumberish>, SplitsReceiverStruct$3[]]): string;
    encodeFunctionData(functionFragment: "split", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        SplitsReceiverStruct$3[]
    ]): string;
    encodeFunctionData(functionFragment: "splitResult", values: [
        PromiseOrValue<BigNumberish>,
        SplitsReceiverStruct$3[],
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "splitsHash", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "splittable", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "squeezeBeams", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        BeamsHistoryStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "squeezeBeamsResult", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        BeamsHistoryStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "totalBalance", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDriverAddress", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "AMT_PER_SEC_EXTRA_DECIMALS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "AMT_PER_SEC_MULTIPLIER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DRIVER_ID_OFFSET", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BEAMS_RECEIVERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_SPLITS_RECEIVERS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_TOTAL_BALANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "TOTAL_SPLITS_WEIGHT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPausers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collectable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cycleSecs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beamsState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "driverAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitUserMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashBeamsHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minAmtPerSec", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextDriverId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receivableBeamsCycles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveBeamsResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerDriver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "split", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splitsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "splittable", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "squeezeBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "squeezeBeamsResult", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDriverAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Collectable(uint256,uint256,uint128)": EventFragment;
        "Collected(uint256,uint256,uint128)": EventFragment;
        "BeamsReceiverSeen(bytes32,uint256,uint256)": EventFragment;
        "BeamsSet(uint256,uint256,bytes32,bytes32,uint128,uint32)": EventFragment;
        "DriverAddressUpdated(uint32,address,address)": EventFragment;
        "DriverRegistered(uint32,address)": EventFragment;
        "Given(uint256,uint256,uint256,uint128)": EventFragment;
        "NewAdminProposed(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "PauserGranted(address,address)": EventFragment;
        "PauserRevoked(address,address)": EventFragment;
        "ReceivedBeams(uint256,uint256,uint128,uint32)": EventFragment;
        "Split(uint256,uint256,uint256,uint128)": EventFragment;
        "SplitsReceiverSeen(bytes32,uint256,uint32)": EventFragment;
        "SplitsSet(uint256,bytes32)": EventFragment;
        "SqueezedBeams(uint256,uint256,uint256,uint128,bytes32[])": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "UserMetadataEmitted(uint256,bytes32,bytes)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Collectable"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Collected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeamsReceiverSeen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeamsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DriverAddressUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DriverRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Given"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdminProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ReceivedBeams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Split"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SplitsReceiverSeen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SplitsSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SqueezedBeams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UserMetadataEmitted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
interface AdminChangedEventObject$2 {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent$2 = TypedEvent<[
    string,
    string
], AdminChangedEventObject$2>;
type AdminChangedEventFilter$2 = TypedEventFilter<AdminChangedEvent$2>;
interface BeaconUpgradedEventObject$2 {
    beacon: string;
}
type BeaconUpgradedEvent$2 = TypedEvent<[
    string
], BeaconUpgradedEventObject$2>;
type BeaconUpgradedEventFilter$2 = TypedEventFilter<BeaconUpgradedEvent$2>;
interface CollectableEventObject {
    userId: BigNumber;
    assetId: BigNumber;
    amt: BigNumber;
}
type CollectableEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], CollectableEventObject>;
type CollectableEventFilter = TypedEventFilter<CollectableEvent>;
interface CollectedEventObject {
    userId: BigNumber;
    assetId: BigNumber;
    collected: BigNumber;
}
type CollectedEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], CollectedEventObject>;
type CollectedEventFilter = TypedEventFilter<CollectedEvent$1>;
interface BeamsReceiverSeenEventObject {
    receiversHash: string;
    userId: BigNumber;
    config: BigNumber;
}
type BeamsReceiverSeenEvent$1 = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], BeamsReceiverSeenEventObject>;
type BeamsReceiverSeenEventFilter = TypedEventFilter<BeamsReceiverSeenEvent$1>;
interface BeamsSetEventObject {
    userId: BigNumber;
    assetId: BigNumber;
    receiversHash: string;
    beamsHistoryHash: string;
    balance: BigNumber;
    maxEnd: number;
}
type BeamsSetEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string,
    BigNumber,
    number
], BeamsSetEventObject>;
type BeamsSetEventFilter = TypedEventFilter<BeamsSetEvent$1>;
interface DriverAddressUpdatedEventObject {
    driverId: number;
    oldDriverAddr: string;
    newDriverAddr: string;
}
type DriverAddressUpdatedEvent = TypedEvent<[
    number,
    string,
    string
], DriverAddressUpdatedEventObject>;
type DriverAddressUpdatedEventFilter = TypedEventFilter<DriverAddressUpdatedEvent>;
interface DriverRegisteredEventObject {
    driverId: number;
    driverAddr: string;
}
type DriverRegisteredEvent = TypedEvent<[
    number,
    string
], DriverRegisteredEventObject>;
type DriverRegisteredEventFilter = TypedEventFilter<DriverRegisteredEvent>;
interface GivenEventObject {
    userId: BigNumber;
    receiver: BigNumber;
    assetId: BigNumber;
    amt: BigNumber;
}
type GivenEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], GivenEventObject>;
type GivenEventFilter = TypedEventFilter<GivenEvent$1>;
interface NewAdminProposedEventObject$2 {
    currentAdmin: string;
    newAdmin: string;
}
type NewAdminProposedEvent$2 = TypedEvent<[
    string,
    string
], NewAdminProposedEventObject$2>;
type NewAdminProposedEventFilter$2 = TypedEventFilter<NewAdminProposedEvent$2>;
interface PausedEventObject$2 {
    pauser: string;
}
type PausedEvent$2 = TypedEvent<[string], PausedEventObject$2>;
type PausedEventFilter$2 = TypedEventFilter<PausedEvent$2>;
interface PauserGrantedEventObject$2 {
    pauser: string;
    admin: string;
}
type PauserGrantedEvent$2 = TypedEvent<[
    string,
    string
], PauserGrantedEventObject$2>;
type PauserGrantedEventFilter$2 = TypedEventFilter<PauserGrantedEvent$2>;
interface PauserRevokedEventObject$2 {
    pauser: string;
    admin: string;
}
type PauserRevokedEvent$2 = TypedEvent<[
    string,
    string
], PauserRevokedEventObject$2>;
type PauserRevokedEventFilter$2 = TypedEventFilter<PauserRevokedEvent$2>;
interface ReceivedBeamsEventObject {
    userId: BigNumber;
    assetId: BigNumber;
    amt: BigNumber;
    receivableCycles: number;
}
type ReceivedBeamsEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    number
], ReceivedBeamsEventObject>;
type ReceivedBeamsEventFilter = TypedEventFilter<ReceivedBeamsEvent$1>;
interface SplitEventObject {
    userId: BigNumber;
    receiver: BigNumber;
    assetId: BigNumber;
    amt: BigNumber;
}
type SplitEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], SplitEventObject>;
type SplitEventFilter = TypedEventFilter<SplitEvent$1>;
interface SplitsReceiverSeenEventObject {
    receiversHash: string;
    userId: BigNumber;
    weight: number;
}
type SplitsReceiverSeenEvent = TypedEvent<[
    string,
    BigNumber,
    number
], SplitsReceiverSeenEventObject>;
type SplitsReceiverSeenEventFilter = TypedEventFilter<SplitsReceiverSeenEvent>;
interface SplitsSetEventObject {
    userId: BigNumber;
    receiversHash: string;
}
type SplitsSetEvent = TypedEvent<[
    BigNumber,
    string
], SplitsSetEventObject>;
type SplitsSetEventFilter = TypedEventFilter<SplitsSetEvent>;
interface SqueezedBeamsEventObject {
    userId: BigNumber;
    assetId: BigNumber;
    senderId: BigNumber;
    amt: BigNumber;
    beamsHistoryHashes: string[];
}
type SqueezedBeamsEvent$1 = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string[]
], SqueezedBeamsEventObject>;
type SqueezedBeamsEventFilter = TypedEventFilter<SqueezedBeamsEvent$1>;
interface UnpausedEventObject$2 {
    pauser: string;
}
type UnpausedEvent$2 = TypedEvent<[string], UnpausedEventObject$2>;
type UnpausedEventFilter$2 = TypedEventFilter<UnpausedEvent$2>;
interface UpgradedEventObject$2 {
    implementation: string;
}
type UpgradedEvent$2 = TypedEvent<[string], UpgradedEventObject$2>;
type UpgradedEventFilter$2 = TypedEventFilter<UpgradedEvent$2>;
interface UserMetadataEmittedEventObject {
    userId: BigNumber;
    key: string;
    value: string;
}
type UserMetadataEmittedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], UserMetadataEmittedEventObject>;
type UserMetadataEmittedEventFilter = TypedEventFilter<UserMetadataEmittedEvent>;
interface WithdrawnEventObject {
    erc20: string;
    receiver: string;
    amt: BigNumber;
}
type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
interface BeamsHub extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BeamsHubInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        AMT_PER_SEC_EXTRA_DECIMALS(overrides?: CallOverrides): Promise<[number]>;
        AMT_PER_SEC_MULTIPLIER(overrides?: CallOverrides): Promise<[BigNumber]>;
        DRIVER_ID_OFFSET(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_BEAMS_RECEIVERS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_SPLITS_RECEIVERS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_TOTAL_BALANCE(overrides?: CallOverrides): Promise<[BigNumber]>;
        TOTAL_SPLITS_WEIGHT(overrides?: CallOverrides): Promise<[number]>;
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        allPausers(overrides?: CallOverrides): Promise<[string[]] & {
            pausersList: string[];
        }>;
        balanceAt(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        collect(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        collectable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amt: BigNumber;
        }>;
        cycleSecs(overrides?: CallOverrides): Promise<[number]>;
        beamsState(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber,
            number
        ] & {
            beamsHash: string;
            beamsHistoryHash: string;
            updateTime: number;
            balance: BigNumber;
            maxEnd: number;
        }>;
        driverAddress(driverId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            driverAddr: string;
        }>;
        emitUserMetadata(userId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        give(userId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        hashBeams(receivers: BeamsReceiverStruct$2[], overrides?: CallOverrides): Promise<[string] & {
            beamsHash: string;
        }>;
        hashBeamsHistory(oldBeamsHistoryHash: PromiseOrValue<BytesLike>, beamsHash: PromiseOrValue<BytesLike>, updateTime: PromiseOrValue<BigNumberish>, maxEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            beamsHistoryHash: string;
        }>;
        hashSplits(receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<[string] & {
            receiversHash: string;
        }>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isAddrPauser: boolean;
        }>;
        minAmtPerSec(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextDriverId(overrides?: CallOverrides): Promise<[number] & {
            driverId: number;
        }>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        receivableBeamsCycles(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number] & {
            cycles: number;
        }>;
        receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        receiveBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            receivableAmt: BigNumber;
        }>;
        registerDriver(driverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$2[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSplits(userId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        splitResult(userId: PromiseOrValue<BigNumberish>, currReceivers: SplitsReceiverStruct$3[], amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            collectableAmt: BigNumber;
            splitAmt: BigNumber;
        }>;
        splitsHash(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string] & {
            currSplitsHash: string;
        }>;
        splittable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            amt: BigNumber;
        }>;
        squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        squeezeBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<[BigNumber] & {
            amt: BigNumber;
        }>;
        totalBalance(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            balance: BigNumber;
        }>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateDriverAddress(driverId: PromiseOrValue<BigNumberish>, newDriverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        withdraw(erc20: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    AMT_PER_SEC_EXTRA_DECIMALS(overrides?: CallOverrides): Promise<number>;
    AMT_PER_SEC_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
    DRIVER_ID_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_BEAMS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_SPLITS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_TOTAL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;
    TOTAL_SPLITS_WEIGHT(overrides?: CallOverrides): Promise<number>;
    acceptAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    allPausers(overrides?: CallOverrides): Promise<string[]>;
    balanceAt(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    collect(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    collectable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    cycleSecs(overrides?: CallOverrides): Promise<number>;
    beamsState(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        string,
        string,
        number,
        BigNumber,
        number
    ] & {
        beamsHash: string;
        beamsHistoryHash: string;
        updateTime: number;
        balance: BigNumber;
        maxEnd: number;
    }>;
    driverAddress(driverId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    emitUserMetadata(userId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$3[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    give(userId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    hashBeams(receivers: BeamsReceiverStruct$2[], overrides?: CallOverrides): Promise<string>;
    hashBeamsHistory(oldBeamsHistoryHash: PromiseOrValue<BytesLike>, beamsHash: PromiseOrValue<BytesLike>, updateTime: PromiseOrValue<BigNumberish>, maxEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    hashSplits(receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    minAmtPerSec(overrides?: CallOverrides): Promise<BigNumber>;
    nextDriverId(overrides?: CallOverrides): Promise<number>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposedAdmin(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    receivableBeamsCycles(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    receiveBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    registerDriver(driverAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$2[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSplits(userId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    splitResult(userId: PromiseOrValue<BigNumberish>, currReceivers: SplitsReceiverStruct$3[], amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        collectableAmt: BigNumber;
        splitAmt: BigNumber;
    }>;
    splitsHash(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    splittable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    squeezeBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<BigNumber>;
    totalBalance(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateDriverAddress(driverId: PromiseOrValue<BigNumberish>, newDriverAddr: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    withdraw(erc20: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        AMT_PER_SEC_EXTRA_DECIMALS(overrides?: CallOverrides): Promise<number>;
        AMT_PER_SEC_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        DRIVER_ID_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BEAMS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SPLITS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_TOTAL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_SPLITS_WEIGHT(overrides?: CallOverrides): Promise<number>;
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        allPausers(overrides?: CallOverrides): Promise<string[]>;
        balanceAt(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        collectable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cycleSecs(overrides?: CallOverrides): Promise<number>;
        beamsState(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            string,
            string,
            number,
            BigNumber,
            number
        ] & {
            beamsHash: string;
            beamsHistoryHash: string;
            updateTime: number;
            balance: BigNumber;
            maxEnd: number;
        }>;
        driverAddress(driverId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        emitUserMetadata(userId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$3[], overrides?: CallOverrides): Promise<void>;
        give(userId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        hashBeams(receivers: BeamsReceiverStruct$2[], overrides?: CallOverrides): Promise<string>;
        hashBeamsHistory(oldBeamsHistoryHash: PromiseOrValue<BytesLike>, beamsHash: PromiseOrValue<BytesLike>, updateTime: PromiseOrValue<BigNumberish>, maxEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        hashSplits(receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        minAmtPerSec(overrides?: CallOverrides): Promise<BigNumber>;
        nextDriverId(overrides?: CallOverrides): Promise<number>;
        pause(overrides?: CallOverrides): Promise<void>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        proposedAdmin(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        receivableBeamsCycles(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerDriver(driverAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        renounceAdmin(overrides?: CallOverrides): Promise<void>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$2[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        setSplits(userId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<void>;
        split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            collectableAmt: BigNumber;
            splitAmt: BigNumber;
        }>;
        splitResult(userId: PromiseOrValue<BigNumberish>, currReceivers: SplitsReceiverStruct$3[], amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            collectableAmt: BigNumber;
            splitAmt: BigNumber;
        }>;
        splitsHash(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        splittable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        squeezeBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        totalBalance(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: CallOverrides): Promise<void>;
        updateDriverAddress(driverId: PromiseOrValue<BigNumberish>, newDriverAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        withdraw(erc20: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$2;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$2;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$2;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$2;
        "Collectable(uint256,uint256,uint128)"(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): CollectableEventFilter;
        Collectable(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): CollectableEventFilter;
        "Collected(uint256,uint256,uint128)"(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, collected?: null): CollectedEventFilter;
        Collected(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, collected?: null): CollectedEventFilter;
        "BeamsReceiverSeen(bytes32,uint256,uint256)"(receiversHash?: PromiseOrValue<BytesLike> | null, userId?: PromiseOrValue<BigNumberish> | null, config?: null): BeamsReceiverSeenEventFilter;
        BeamsReceiverSeen(receiversHash?: PromiseOrValue<BytesLike> | null, userId?: PromiseOrValue<BigNumberish> | null, config?: null): BeamsReceiverSeenEventFilter;
        "BeamsSet(uint256,uint256,bytes32,bytes32,uint128,uint32)"(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, receiversHash?: PromiseOrValue<BytesLike> | null, beamsHistoryHash?: null, balance?: null, maxEnd?: null): BeamsSetEventFilter;
        BeamsSet(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, receiversHash?: PromiseOrValue<BytesLike> | null, beamsHistoryHash?: null, balance?: null, maxEnd?: null): BeamsSetEventFilter;
        "DriverAddressUpdated(uint32,address,address)"(driverId?: PromiseOrValue<BigNumberish> | null, oldDriverAddr?: PromiseOrValue<string> | null, newDriverAddr?: PromiseOrValue<string> | null): DriverAddressUpdatedEventFilter;
        DriverAddressUpdated(driverId?: PromiseOrValue<BigNumberish> | null, oldDriverAddr?: PromiseOrValue<string> | null, newDriverAddr?: PromiseOrValue<string> | null): DriverAddressUpdatedEventFilter;
        "DriverRegistered(uint32,address)"(driverId?: PromiseOrValue<BigNumberish> | null, driverAddr?: PromiseOrValue<string> | null): DriverRegisteredEventFilter;
        DriverRegistered(driverId?: PromiseOrValue<BigNumberish> | null, driverAddr?: PromiseOrValue<string> | null): DriverRegisteredEventFilter;
        "Given(uint256,uint256,uint256,uint128)"(userId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): GivenEventFilter;
        Given(userId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): GivenEventFilter;
        "NewAdminProposed(address,address)"(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter$2;
        NewAdminProposed(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter$2;
        "Paused(address)"(pauser?: PromiseOrValue<string> | null): PausedEventFilter$2;
        Paused(pauser?: PromiseOrValue<string> | null): PausedEventFilter$2;
        "PauserGranted(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter$2;
        PauserGranted(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter$2;
        "PauserRevoked(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter$2;
        PauserRevoked(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter$2;
        "ReceivedBeams(uint256,uint256,uint128,uint32)"(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null, receivableCycles?: null): ReceivedBeamsEventFilter;
        ReceivedBeams(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null, receivableCycles?: null): ReceivedBeamsEventFilter;
        "Split(uint256,uint256,uint256,uint128)"(userId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): SplitEventFilter;
        Split(userId?: PromiseOrValue<BigNumberish> | null, receiver?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, amt?: null): SplitEventFilter;
        "SplitsReceiverSeen(bytes32,uint256,uint32)"(receiversHash?: PromiseOrValue<BytesLike> | null, userId?: PromiseOrValue<BigNumberish> | null, weight?: null): SplitsReceiverSeenEventFilter;
        SplitsReceiverSeen(receiversHash?: PromiseOrValue<BytesLike> | null, userId?: PromiseOrValue<BigNumberish> | null, weight?: null): SplitsReceiverSeenEventFilter;
        "SplitsSet(uint256,bytes32)"(userId?: PromiseOrValue<BigNumberish> | null, receiversHash?: PromiseOrValue<BytesLike> | null): SplitsSetEventFilter;
        SplitsSet(userId?: PromiseOrValue<BigNumberish> | null, receiversHash?: PromiseOrValue<BytesLike> | null): SplitsSetEventFilter;
        "SqueezedBeams(uint256,uint256,uint256,uint128,bytes32[])"(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, senderId?: PromiseOrValue<BigNumberish> | null, amt?: null, beamsHistoryHashes?: null): SqueezedBeamsEventFilter;
        SqueezedBeams(userId?: PromiseOrValue<BigNumberish> | null, assetId?: PromiseOrValue<BigNumberish> | null, senderId?: PromiseOrValue<BigNumberish> | null, amt?: null, beamsHistoryHashes?: null): SqueezedBeamsEventFilter;
        "Unpaused(address)"(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter$2;
        Unpaused(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter$2;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$2;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$2;
        "UserMetadataEmitted(uint256,bytes32,bytes)"(userId?: PromiseOrValue<BigNumberish> | null, key?: PromiseOrValue<BytesLike> | null, value?: null): UserMetadataEmittedEventFilter;
        UserMetadataEmitted(userId?: PromiseOrValue<BigNumberish> | null, key?: PromiseOrValue<BytesLike> | null, value?: null): UserMetadataEmittedEventFilter;
        "Withdrawn(address,address,uint256)"(erc20?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amt?: null): WithdrawnEventFilter;
        Withdrawn(erc20?: PromiseOrValue<string> | null, receiver?: PromiseOrValue<string> | null, amt?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        AMT_PER_SEC_EXTRA_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;
        AMT_PER_SEC_MULTIPLIER(overrides?: CallOverrides): Promise<BigNumber>;
        DRIVER_ID_OFFSET(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BEAMS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_SPLITS_RECEIVERS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_TOTAL_BALANCE(overrides?: CallOverrides): Promise<BigNumber>;
        TOTAL_SPLITS_WEIGHT(overrides?: CallOverrides): Promise<BigNumber>;
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allPausers(overrides?: CallOverrides): Promise<BigNumber>;
        balanceAt(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        collectable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        cycleSecs(overrides?: CallOverrides): Promise<BigNumber>;
        beamsState(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        driverAddress(driverId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        emitUserMetadata(userId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        give(userId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        hashBeams(receivers: BeamsReceiverStruct$2[], overrides?: CallOverrides): Promise<BigNumber>;
        hashBeamsHistory(oldBeamsHistoryHash: PromiseOrValue<BytesLike>, beamsHash: PromiseOrValue<BytesLike>, updateTime: PromiseOrValue<BigNumberish>, maxEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        hashSplits(receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        minAmtPerSec(overrides?: CallOverrides): Promise<BigNumber>;
        nextDriverId(overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposedAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        receivableBeamsCycles(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        receiveBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        registerDriver(driverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$2[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSplits(userId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        splitResult(userId: PromiseOrValue<BigNumberish>, currReceivers: SplitsReceiverStruct$3[], amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        splitsHash(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        splittable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        squeezeBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        totalBalance(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateDriverAddress(driverId: PromiseOrValue<BigNumberish>, newDriverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        withdraw(erc20: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        AMT_PER_SEC_EXTRA_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        AMT_PER_SEC_MULTIPLIER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DRIVER_ID_OFFSET(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BEAMS_RECEIVERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_SPLITS_RECEIVERS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_TOTAL_BALANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        TOTAL_SPLITS_WEIGHT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPausers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceAt(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], timestamp: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collect(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        collectable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cycleSecs(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beamsState(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        driverAddress(driverId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitUserMetadata(userId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        give(userId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        hashBeams(receivers: BeamsReceiverStruct$2[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashBeamsHistory(oldBeamsHistoryHash: PromiseOrValue<BytesLike>, beamsHash: PromiseOrValue<BytesLike>, updateTime: PromiseOrValue<BigNumberish>, maxEnd: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hashSplits(receivers: SplitsReceiverStruct$3[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minAmtPerSec(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextDriverId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receivableBeamsCycles(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        receiveBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registerDriver(driverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$2[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$2[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSplits(userId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        splitResult(userId: PromiseOrValue<BigNumberish>, currReceivers: SplitsReceiverStruct$3[], amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        splitsHash(userId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        splittable(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        squeezeBeamsResult(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalBalance(erc20: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateDriverAddress(driverId: PromiseOrValue<BigNumberish>, newDriverAddr: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(erc20: PromiseOrValue<string>, receiver: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type UserMetadataStruct$2 = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
};
type BeamsReceiverStruct$1 = {
    userId: PromiseOrValue<BigNumberish>;
    config: PromiseOrValue<BigNumberish>;
};
type SplitsReceiverStruct$2 = {
    userId: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
};
interface NFTDriverInterface extends utils.Interface {
    functions: {
        "acceptAdmin()": FunctionFragment;
        "admin()": FunctionFragment;
        "allPausers()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "calcTokenIdWithSalt(address,uint64)": FunctionFragment;
        "collect(uint256,address,address)": FunctionFragment;
        "beamsHub()": FunctionFragment;
        "driverId()": FunctionFragment;
        "emitUserMetadata(uint256,(bytes32,bytes)[])": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "give(uint256,uint256,address,uint128)": FunctionFragment;
        "grantPauser(address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isPaused()": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "isSaltUsed(address,uint64)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "mint(address,(bytes32,bytes)[])": FunctionFragment;
        "mintWithSalt(uint64,address,(bytes32,bytes)[])": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenId()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "pause()": FunctionFragment;
        "proposeNewAdmin(address)": FunctionFragment;
        "proposedAdmin()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceAdmin()": FunctionFragment;
        "revokePauser(address)": FunctionFragment;
        "safeMint(address,(bytes32,bytes)[])": FunctionFragment;
        "safeMintWithSalt(uint64,address,(bytes32,bytes)[])": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBeams(uint256,address,(uint256,uint256)[],int128,(uint256,uint256)[],uint32,uint32,address)": FunctionFragment;
        "setSplits(uint256,(uint256,uint32)[])": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "unpause()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptAdmin" | "admin" | "allPausers" | "approve" | "balanceOf" | "burn" | "calcTokenIdWithSalt" | "collect" | "beamsHub" | "driverId" | "emitUserMetadata" | "getApproved" | "give" | "grantPauser" | "implementation" | "isApprovedForAll" | "isPaused" | "isPauser" | "isSaltUsed" | "isTrustedForwarder" | "mint" | "mintWithSalt" | "name" | "nextTokenId" | "ownerOf" | "pause" | "proposeNewAdmin" | "proposedAdmin" | "proxiableUUID" | "renounceAdmin" | "revokePauser" | "safeMint" | "safeMintWithSalt" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setBeams" | "setSplits" | "supportsInterface" | "symbol" | "tokenURI" | "transferFrom" | "unpause" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allPausers", values?: undefined): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "burn", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "calcTokenIdWithSalt", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "collect", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "beamsHub", values?: undefined): string;
    encodeFunctionData(functionFragment: "driverId", values?: undefined): string;
    encodeFunctionData(functionFragment: "emitUserMetadata", values: [PromiseOrValue<BigNumberish>, UserMetadataStruct$2[]]): string;
    encodeFunctionData(functionFragment: "getApproved", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "give", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "grantPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isSaltUsed", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "mint", values: [PromiseOrValue<string>, UserMetadataStruct$2[]]): string;
    encodeFunctionData(functionFragment: "mintWithSalt", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        UserMetadataStruct$2[]
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenId", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proposedAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokePauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "safeMint", values: [PromiseOrValue<string>, UserMetadataStruct$2[]]): string;
    encodeFunctionData(functionFragment: "safeMintWithSalt", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        UserMetadataStruct$2[]
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setBeams", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        BeamsReceiverStruct$1[],
        PromiseOrValue<BigNumberish>,
        BeamsReceiverStruct$1[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setSplits", values: [PromiseOrValue<BigNumberish>, SplitsReceiverStruct$2[]]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPausers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcTokenIdWithSalt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beamsHub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "driverId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitUserMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSaltUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintWithSalt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeMintWithSalt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "NewAdminProposed(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "PauserGranted(address,address)": EventFragment;
        "PauserRevoked(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdminProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
interface AdminChangedEventObject$1 {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent$1 = TypedEvent<[
    string,
    string
], AdminChangedEventObject$1>;
type AdminChangedEventFilter$1 = TypedEventFilter<AdminChangedEvent$1>;
interface ApprovalEventObject$1 {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
type ApprovalEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject$1>;
type ApprovalEventFilter$1 = TypedEventFilter<ApprovalEvent$1>;
interface ApprovalForAllEventObject {
    owner: string;
    operator: string;
    approved: boolean;
}
type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
interface BeaconUpgradedEventObject$1 {
    beacon: string;
}
type BeaconUpgradedEvent$1 = TypedEvent<[
    string
], BeaconUpgradedEventObject$1>;
type BeaconUpgradedEventFilter$1 = TypedEventFilter<BeaconUpgradedEvent$1>;
interface NewAdminProposedEventObject$1 {
    currentAdmin: string;
    newAdmin: string;
}
type NewAdminProposedEvent$1 = TypedEvent<[
    string,
    string
], NewAdminProposedEventObject$1>;
type NewAdminProposedEventFilter$1 = TypedEventFilter<NewAdminProposedEvent$1>;
interface PausedEventObject$1 {
    pauser: string;
}
type PausedEvent$1 = TypedEvent<[string], PausedEventObject$1>;
type PausedEventFilter$1 = TypedEventFilter<PausedEvent$1>;
interface PauserGrantedEventObject$1 {
    pauser: string;
    admin: string;
}
type PauserGrantedEvent$1 = TypedEvent<[
    string,
    string
], PauserGrantedEventObject$1>;
type PauserGrantedEventFilter$1 = TypedEventFilter<PauserGrantedEvent$1>;
interface PauserRevokedEventObject$1 {
    pauser: string;
    admin: string;
}
type PauserRevokedEvent$1 = TypedEvent<[
    string,
    string
], PauserRevokedEventObject$1>;
type PauserRevokedEventFilter$1 = TypedEventFilter<PauserRevokedEvent$1>;
interface TransferEventObject$1 {
    from: string;
    to: string;
    tokenId: BigNumber;
}
type TransferEvent$1 = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject$1>;
type TransferEventFilter$1 = TypedEventFilter<TransferEvent$1>;
interface UnpausedEventObject$1 {
    pauser: string;
}
type UnpausedEvent$1 = TypedEvent<[string], UnpausedEventObject$1>;
type UnpausedEventFilter$1 = TypedEventFilter<UnpausedEvent$1>;
interface UpgradedEventObject$1 {
    implementation: string;
}
type UpgradedEvent$1 = TypedEvent<[string], UpgradedEventObject$1>;
type UpgradedEventFilter$1 = TypedEventFilter<UpgradedEvent$1>;
interface NFTDriver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NFTDriverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        allPausers(overrides?: CallOverrides): Promise<[string[]] & {
            pausersList: string[];
        }>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calcTokenIdWithSalt(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber] & {
            tokenId: BigNumber;
        }>;
        collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beamsHub(overrides?: CallOverrides): Promise<[string]>;
        driverId(overrides?: CallOverrides): Promise<[number]>;
        emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isAddrPauser: boolean;
        }>;
        isSaltUsed(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[boolean] & {
            isUsed: boolean;
        }>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        mintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenId(overrides?: CallOverrides): Promise<[BigNumber] & {
            tokenId: BigNumber;
        }>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[string]>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    allPausers(overrides?: CallOverrides): Promise<string[]>;
    approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calcTokenIdWithSalt(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beamsHub(overrides?: CallOverrides): Promise<string>;
    driverId(overrides?: CallOverrides): Promise<number>;
    emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<string>;
    isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isSaltUsed(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    mintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;
    ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposedAdmin(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        allPausers(overrides?: CallOverrides): Promise<string[]>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        calcTokenIdWithSalt(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        beamsHub(overrides?: CallOverrides): Promise<string>;
        driverId(overrides?: CallOverrides): Promise<number>;
        emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: CallOverrides): Promise<void>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isSaltUsed(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: CallOverrides): Promise<BigNumber>;
        mintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        pause(overrides?: CallOverrides): Promise<void>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        proposedAdmin(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceAdmin(overrides?: CallOverrides): Promise<void>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: CallOverrides): Promise<BigNumber>;
        safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<string>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$1;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter$1;
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter$1;
        Approval(owner?: PromiseOrValue<string> | null, approved?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): ApprovalEventFilter$1;
        "ApprovalForAll(address,address,bool)"(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: PromiseOrValue<string> | null, operator?: PromiseOrValue<string> | null, approved?: null): ApprovalForAllEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$1;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter$1;
        "NewAdminProposed(address,address)"(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter$1;
        NewAdminProposed(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter$1;
        "Paused(address)"(pauser?: PromiseOrValue<string> | null): PausedEventFilter$1;
        Paused(pauser?: PromiseOrValue<string> | null): PausedEventFilter$1;
        "PauserGranted(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter$1;
        PauserGranted(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter$1;
        "PauserRevoked(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter$1;
        PauserRevoked(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter$1;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter$1;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, tokenId?: PromiseOrValue<BigNumberish> | null): TransferEventFilter$1;
        "Unpaused(address)"(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter$1;
        Unpaused(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter$1;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$1;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter$1;
    };
    estimateGas: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allPausers(overrides?: CallOverrides): Promise<BigNumber>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calcTokenIdWithSalt(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beamsHub(overrides?: CallOverrides): Promise<BigNumber>;
        driverId(overrides?: CallOverrides): Promise<BigNumber>;
        emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isSaltUsed(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        mintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenId(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposedAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPausers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calcTokenIdWithSalt(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beamsHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        driverId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getApproved(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: PromiseOrValue<string>, operator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isSaltUsed(minter: PromiseOrValue<string>, salt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        mintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, data: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: PromiseOrValue<string>, approved: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(tokenId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type CallStruct = {
    target: PromiseOrValue<string>;
    data: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BigNumberish>;
};
interface CallerInterface extends utils.Interface {
    functions: {
        "MAX_NONCE_INCREASE()": FunctionFragment;
        "allAuthorized(address)": FunctionFragment;
        "authorize(address)": FunctionFragment;
        "callAs(address,address,bytes)": FunctionFragment;
        "callBatched((address,bytes,uint256)[])": FunctionFragment;
        "callSigned(address,address,bytes,uint256,bytes32,bytes32)": FunctionFragment;
        "isAuthorized(address,address)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "nonce(address)": FunctionFragment;
        "setNonce(uint256)": FunctionFragment;
        "unauthorize(address)": FunctionFragment;
        "unauthorizeAll()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MAX_NONCE_INCREASE" | "allAuthorized" | "authorize" | "callAs" | "callBatched" | "callSigned" | "isAuthorized" | "isTrustedForwarder" | "nonce" | "setNonce" | "unauthorize" | "unauthorizeAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "MAX_NONCE_INCREASE", values?: undefined): string;
    encodeFunctionData(functionFragment: "allAuthorized", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "authorize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "callAs", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "callBatched", values: [CallStruct[]]): string;
    encodeFunctionData(functionFragment: "callSigned", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "isAuthorized", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setNonce", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "unauthorize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "unauthorizeAll", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MAX_NONCE_INCREASE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callAs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callBatched", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callSigned", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAuthorized", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unauthorize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unauthorizeAll", data: BytesLike): Result;
    events: {
        "Authorized(address,address)": EventFragment;
        "CalledAs(address,address)": EventFragment;
        "CalledSigned(address,uint256)": EventFragment;
        "NonceSet(address,uint256)": EventFragment;
        "Unauthorized(address,address)": EventFragment;
        "UnauthorizedAll(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Authorized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CalledAs"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CalledSigned"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NonceSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unauthorized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UnauthorizedAll"): EventFragment;
}

type UserMetadataStruct$1 = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
};
type BeamsReceiverStruct = {
    userId: PromiseOrValue<BigNumberish>;
    config: PromiseOrValue<BigNumberish>;
};
type SplitsReceiverStruct$1 = {
    userId: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
};
interface AddressDriverInterface extends utils.Interface {
    functions: {
        "acceptAdmin()": FunctionFragment;
        "admin()": FunctionFragment;
        "allPausers()": FunctionFragment;
        "calcUserId(address)": FunctionFragment;
        "collect(address,address)": FunctionFragment;
        "beamsHub()": FunctionFragment;
        "driverId()": FunctionFragment;
        "emitUserMetadata((bytes32,bytes)[])": FunctionFragment;
        "give(uint256,address,uint128)": FunctionFragment;
        "grantPauser(address)": FunctionFragment;
        "implementation()": FunctionFragment;
        "isPaused()": FunctionFragment;
        "isPauser(address)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "pause()": FunctionFragment;
        "proposeNewAdmin(address)": FunctionFragment;
        "proposedAdmin()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "renounceAdmin()": FunctionFragment;
        "revokePauser(address)": FunctionFragment;
        "setBeams(address,(uint256,uint256)[],int128,(uint256,uint256)[],uint32,uint32,address)": FunctionFragment;
        "setSplits((uint256,uint32)[])": FunctionFragment;
        "unpause()": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "acceptAdmin" | "admin" | "allPausers" | "calcUserId" | "collect" | "beamsHub" | "driverId" | "emitUserMetadata" | "give" | "grantPauser" | "implementation" | "isPaused" | "isPauser" | "isTrustedForwarder" | "pause" | "proposeNewAdmin" | "proposedAdmin" | "proxiableUUID" | "renounceAdmin" | "revokePauser" | "setBeams" | "setSplits" | "unpause" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allPausers", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcUserId", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "collect", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "beamsHub", values?: undefined): string;
    encodeFunctionData(functionFragment: "driverId", values?: undefined): string;
    encodeFunctionData(functionFragment: "emitUserMetadata", values: [UserMetadataStruct$1[]]): string;
    encodeFunctionData(functionFragment: "give", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "grantPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proposedAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokePauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setBeams", values: [
        PromiseOrValue<string>,
        BeamsReceiverStruct[],
        PromiseOrValue<BigNumberish>,
        BeamsReceiverStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setSplits", values: [SplitsReceiverStruct$1[]]): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPausers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcUserId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beamsHub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "driverId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "emitUserMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "give", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBeams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "NewAdminProposed(address,address)": EventFragment;
        "Paused(address)": EventFragment;
        "PauserGranted(address,address)": EventFragment;
        "PauserRevoked(address,address)": EventFragment;
        "Unpaused(address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewAdminProposed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
interface BeaconUpgradedEventObject {
    beacon: string;
}
type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
interface NewAdminProposedEventObject {
    currentAdmin: string;
    newAdmin: string;
}
type NewAdminProposedEvent = TypedEvent<[
    string,
    string
], NewAdminProposedEventObject>;
type NewAdminProposedEventFilter = TypedEventFilter<NewAdminProposedEvent>;
interface PausedEventObject {
    pauser: string;
}
type PausedEvent = TypedEvent<[string], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface PauserGrantedEventObject {
    pauser: string;
    admin: string;
}
type PauserGrantedEvent = TypedEvent<[
    string,
    string
], PauserGrantedEventObject>;
type PauserGrantedEventFilter = TypedEventFilter<PauserGrantedEvent>;
interface PauserRevokedEventObject {
    pauser: string;
    admin: string;
}
type PauserRevokedEvent = TypedEvent<[
    string,
    string
], PauserRevokedEventObject>;
type PauserRevokedEventFilter = TypedEventFilter<PauserRevokedEvent>;
interface UnpausedEventObject {
    pauser: string;
}
type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;
type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
interface UpgradedEventObject {
    implementation: string;
}
type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
interface AddressDriver extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressDriverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        allPausers(overrides?: CallOverrides): Promise<[string[]] & {
            pausersList: string[];
        }>;
        calcUserId(userAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            userId: BigNumber;
        }>;
        collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        beamsHub(overrides?: CallOverrides): Promise<[string]>;
        driverId(overrides?: CallOverrides): Promise<[number]>;
        emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        isPaused(overrides?: CallOverrides): Promise<[boolean]>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean] & {
            isAddrPauser: boolean;
        }>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setSplits(receivers: SplitsReceiverStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    acceptAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    allPausers(overrides?: CallOverrides): Promise<string[]>;
    calcUserId(userAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    beamsHub(overrides?: CallOverrides): Promise<string>;
    driverId(overrides?: CallOverrides): Promise<number>;
    emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    implementation(overrides?: CallOverrides): Promise<string>;
    isPaused(overrides?: CallOverrides): Promise<boolean>;
    isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    pause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    proposedAdmin(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    renounceAdmin(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setSplits(receivers: SplitsReceiverStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    unpause(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        acceptAdmin(overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        allPausers(overrides?: CallOverrides): Promise<string[]>;
        calcUserId(userAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        beamsHub(overrides?: CallOverrides): Promise<string>;
        driverId(overrides?: CallOverrides): Promise<number>;
        emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: CallOverrides): Promise<void>;
        give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        implementation(overrides?: CallOverrides): Promise<string>;
        isPaused(overrides?: CallOverrides): Promise<boolean>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        pause(overrides?: CallOverrides): Promise<void>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        proposedAdmin(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        renounceAdmin(overrides?: CallOverrides): Promise<void>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        setSplits(receivers: SplitsReceiverStruct$1[], overrides?: CallOverrides): Promise<void>;
        unpause(overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: PromiseOrValue<string> | null): BeaconUpgradedEventFilter;
        "NewAdminProposed(address,address)"(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter;
        NewAdminProposed(currentAdmin?: PromiseOrValue<string> | null, newAdmin?: PromiseOrValue<string> | null): NewAdminProposedEventFilter;
        "Paused(address)"(pauser?: PromiseOrValue<string> | null): PausedEventFilter;
        Paused(pauser?: PromiseOrValue<string> | null): PausedEventFilter;
        "PauserGranted(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter;
        PauserGranted(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserGrantedEventFilter;
        "PauserRevoked(address,address)"(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter;
        PauserRevoked(pauser?: PromiseOrValue<string> | null, admin?: PromiseOrValue<string> | null): PauserRevokedEventFilter;
        "Unpaused(address)"(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter;
        Unpaused(pauser?: PromiseOrValue<string> | null): UnpausedEventFilter;
        "Upgraded(address)"(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        allPausers(overrides?: CallOverrides): Promise<BigNumber>;
        calcUserId(userAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        beamsHub(overrides?: CallOverrides): Promise<BigNumber>;
        driverId(overrides?: CallOverrides): Promise<BigNumber>;
        emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        isPaused(overrides?: CallOverrides): Promise<BigNumber>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        proposedAdmin(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setSplits(receivers: SplitsReceiverStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        acceptAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allPausers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcUserId(userAddr: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        beamsHub(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        driverId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        grantPauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isPauser(pauser: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposeNewAdmin(newAdmin: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        proposedAdmin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceAdmin(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        revokePauser(pauser: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setSplits(receivers: SplitsReceiverStruct$1[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        unpause(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: PromiseOrValue<string>, data: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

type SplitsReceiverStruct = {
    userId: PromiseOrValue<BigNumberish>;
    weight: PromiseOrValue<BigNumberish>;
};
type UserMetadataStruct = {
    key: PromiseOrValue<BytesLike>;
    value: PromiseOrValue<BytesLike>;
};
interface ImmutableSplitsDriverInterface extends utils.Interface {
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
    getFunction(nameOrSignatureOrTopic: "acceptAdmin" | "admin" | "allPausers" | "createSplits" | "beamsHub" | "driverId" | "grantPauser" | "implementation" | "isPaused" | "isPauser" | "nextUserId" | "pause" | "proposeNewAdmin" | "proposedAdmin" | "proxiableUUID" | "renounceAdmin" | "revokePauser" | "totalSplitsWeight" | "unpause" | "upgradeTo" | "upgradeToAndCall"): FunctionFragment;
    encodeFunctionData(functionFragment: "acceptAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "allPausers", values?: undefined): string;
    encodeFunctionData(functionFragment: "createSplits", values: [SplitsReceiverStruct[], UserMetadataStruct[]]): string;
    encodeFunctionData(functionFragment: "beamsHub", values?: undefined): string;
    encodeFunctionData(functionFragment: "driverId", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPaused", values?: undefined): string;
    encodeFunctionData(functionFragment: "isPauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "nextUserId", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposeNewAdmin", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "proposedAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceAdmin", values?: undefined): string;
    encodeFunctionData(functionFragment: "revokePauser", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalSplitsWeight", values?: undefined): string;
    encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "acceptAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allPausers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createSplits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beamsHub", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "driverId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPaused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextUserId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeNewAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposedAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokePauser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSplitsWeight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
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

type BeamsReceiverConfig = {
    /** An arbitrary number used to identify a beam. When setting a config, it must be greater than or equal to `0`. It's a part of the configuration but the protocol doesn't use it. */
    beamId: bigint;
    /** The UNIX timestamp (in seconds) when beamping should start. When setting a config, it must be greater than or equal to `0`. If set to `0`, the contract will use the timestamp when beams are configured. */
    start: bigint;
    /** The duration (in seconds) of beamping. When setting a config, it must be greater than or equal to `0`. If set to `0`, the contract will beam until the balance runs out. */
    duration: bigint;
    /** The amount per second being beamped. When setting a config, it must be in the smallest unit (e.g., Wei), greater than `0` **and be multiplied by `10 ^ 9`** (`constants.AMT_PER_SEC_MULTIPLIER`). */
    amountPerSec: bigint;
};
type NetworkConfig = {
    CHAIN: string;
    DEPLOYMENT_TIME: string;
    COMMIT_HASH: string;
    WALLET: string;
    WALLET_NONCE: string;
    DEPLOYER: string;
    BEAMS_HUB: string;
    BEAMS_HUB_CYCLE_SECONDS: string;
    BEAMS_HUB_LOGIC: string;
    BEAMS_HUB_ADMIN: string;
    CALLER: string;
    ADDRESS_DRIVER: string;
    ADDRESS_DRIVER_LOGIC: string;
    ADDRESS_DRIVER_ADMIN: string;
    ADDRESS_DRIVER_ID: string;
    NFT_DRIVER: string;
    NFT_DRIVER_LOGIC: string;
    NFT_DRIVER_ADMIN: string;
    NFT_DRIVER_ID: string;
    IMMUTABLE_SPLITS_DRIVER: string;
    IMMUTABLE_SPLITS_DRIVER_LOGIC: string;
    IMMUTABLE_SPLITS_DRIVER_ADMIN: string;
    IMMUTABLE_SPLITS_DRIVER_ID: string;
    SUBGRAPH_URL: string;
};
type CycleInfo = {
    cycleDurationSecs: bigint;
    currentCycleSecs: bigint;
    currentCycleStartDate: Date;
    nextCycleStartDate: Date;
};
type BeamsReceiver = {
    userId: string;
    config: BeamsReceiverConfig;
};
type Preset = PopulatedTransaction[];
type UserMetadata = {
    key: string;
    value: string;
};
type SqueezeArgs = {
    userId: string;
    tokenAddress: string;
    senderId: string;
    historyHash: string;
    beamsHistory: BeamsHistoryStruct[];
};

type BeamsState = {
    /** The current beams receivers list hash. */
    beamsHash: string;
    /** The current beams history hash. */
    beamsHistoryHash: string;
    /** The time when beams have been configured for the last time. */
    updateTime: number;
    /** The balance when beams have been configured for the last time. */
    balance: bigint;
    /** The current maximum end time of beams. */
    maxEnd: number;
};
type ReceivableBalance = {
    /** The token address. */
    tokenAddress: string;
    /** The amount which would be received. */
    receivableAmount: bigint;
};
type SplittableBalance = {
    /** The token address. */
    tokenAddress: string;
    /** The amount which would be splitted. */
    splittableAmount: bigint;
};
type CollectableBalance = {
    /** The token address. */
    tokenAddress: string;
    /** The amount which would be collected. */
    collectableAmount: bigint;
};
type SplitResult = {
    /** The amount made collectable for the user on top of what was collectable before. */
    collectableAmount: bigint;
    /** The amount split to the user's splits receivers. */
    splitAmount: bigint;
};

type UserAssetConfig = {
    id: string;
    assetId: bigint;
    beamsEntries: {
        id: string;
        userId: string;
        config: bigint;
    }[];
    balance: bigint;
    amountCollected: bigint;
    lastUpdatedBlockTimestamp: bigint;
};
type SplitsEntry = {
    id: string;
    userId: string;
    weight: bigint;
    senderId: string;
};
type BeamsSetEvent = {
    id: string;
    userId: string;
    assetId: bigint;
    beamsReceiverSeenEvents: {
        id: string;
        receiverUserId: string;
        config: bigint;
    }[];
    beamsHistoryHash: string;
    balance: bigint;
    blockTimestamp: bigint;
    maxEnd: bigint;
    receiversHash: string;
};
type CollectedEvent = {
    id: string;
    userId: string;
    assetId: bigint;
    collected: bigint;
    blockTimestamp: bigint;
};
type SqueezedBeamsEvent = {
    amount: bigint;
    assetId: bigint;
    blockTimestamp: bigint;
    id: string;
    senderId: string;
    userId: string;
    beamsHistoryHashes: string[];
};
type SplitEvent = {
    id: string;
    amount: bigint;
    assetId: bigint;
    blockTimestamp: bigint;
    receiverId: string;
    userId: string;
};
type ReceivedBeamsEvent = {
    id: string;
    amount: bigint;
    assetId: bigint;
    blockTimestamp: bigint;
    receivableCycles: bigint;
    userId: string;
};
type GivenEvent = {
    id: string;
    amount: bigint;
    assetId: bigint;
    blockTimestamp: bigint;
    receiverUserId: string;
    userId: string;
};
type BeamsReceiverSeenEvent = {
    id: string;
    config: bigint;
    senderUserId: bigint;
    receiverUserId: bigint;
    beamsSetEvent: {
        id: string;
        assetId: bigint;
        receiversHash: string;
    };
    blockTimestamp: bigint;
};
type UserMetadataEntry = {
    id: string;
    key: string;
    value: string;
    userId: string;
    lastUpdatedBlockTimestamp: bigint;
};
type NftSubAccount = {
    tokenId: string;
    ownerAddress: string;
};
type BeamsSetEventWithFullReceivers = {
    currentReceivers: {
        id: string;
        receiverUserId: string;
        config: bigint;
    }[];
} & BeamsSetEvent;

declare namespace AddressDriverPresets {
    type NewStreamFlowPayload = {
        signer: Signer;
        driverAddress: string;
        tokenAddress: string;
        currentReceivers: BeamsReceiverStruct$2[];
        newReceivers: BeamsReceiverStruct$2[];
        balanceDelta: BigNumberish;
        transferToAddress: string;
        userMetadata: UserMetadata[];
    };
    type CollectFlowPayload = {
        signer: Signer;
        driverAddress: string;
        beamsHubAddress: string;
        userId: string;
        tokenAddress: string;
        maxCycles: BigNumberish;
        currentReceivers: SplitsReceiverStruct$3[];
        transferToAddress: string;
        squeezeArgs?: SqueezeArgs[];
    };
    /**
 * Pre-configured sets of contract calls that can be used as input to `Caller.callBatched` method.
 * @see `CallerClient` for more.
 *
 *
 * @example <caption>Example usage of `collectFlow`.</caption>
 * // Create a new `Caller`.
 * const caller = await CallerClient.create(provider);
 *
 * // Populate the flow's payload.
    const flowPayload: AddressDriverPresets.CollectFlowPayload = {
        driverAddress,
        beamsHubAddress,
        userId,
        tokenAddress,
        maxCycles,
        currentReceivers,
        transferToAddress
    };

    // Create a new `collectFlow` preset.
    const collectFlow = AddressDriverPresets.Presets.collectFlow(flowPayload);

    // Pass the preset to the `Caller`.
    const tx = await caller.callBatched(collectFlow);
    await tx.wait();
    */
    class Presets {
        /**
         * Creates a new batch with the following sequence of calls:
         * 1. `setBeams`
         * 2. `emitUserMetadata`
         *
         * @see `AddressDriverClient`'s API for more details.
         * @param  {CreateStreamFlowPayload} payload the flow's payload.
         * @returns The preset.
         * @throws {@link BeamsErrors.addressError} if `payload.tokenAddress` or `payload.transferToAddress` is not valid.
         * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
         * @throws {@link BeamsErrors.argumentError} if `payload.currentReceivers`' or `payload.newReceivers`' count exceeds the max allowed beams receivers.
         * @throws {@link BeamsErrors.beamsReceiverError} if any of the `payload.currentReceivers` or the `payload.newReceivers` is not valid.
         * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
         */
        static createNewStreamFlow(payload: NewStreamFlowPayload): Promise<Preset>;
        /**
         * Creates a new batch with the following sequence of calls:
         * 1. `squeezeBeams` (optional) for each provided sender
         * 2. `receiveBeams` (optional)
         * 3. `split` (optional)
         * 4. `collect`
         *
         * @see `AddressDriverClient` and `BeamsHubClient`'s API for more details.
         * @param  {CollectFlowPayload} payload the flow's payload.
         * @param  {boolean} skipReceive skips the `receiveBeams` step.
         * @param  {boolean} skipSplit  skips the `split` step.
         * @returns The preset.
         * @throws {@link BeamsErrors.addressError} if `payload.tokenAddress` or the `payload.transferToAddress` address is not valid.
         * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
         * @throws {@link BeamsErrors.argumentError} if `payload.maxCycles` or `payload.currentReceivers` is not valid.
         * @throws {@link BeamsErrors.splitsReceiverError} if any of the `payload.currentReceivers` is not valid.
         */
        static createCollectFlow(payload: CollectFlowPayload, skipReceive?: boolean, skipSplit?: boolean): Promise<Preset>;
    }
}

declare namespace NFTDriverPresets {
    type NewStreamFlowPayload = {
        tokenId: string;
        signer: Signer;
        driverAddress: string;
        tokenAddress: string;
        currentReceivers: BeamsReceiverStruct$2[];
        newReceivers: BeamsReceiverStruct$2[];
        balanceDelta: BigNumberish;
        transferToAddress: string;
        userMetadata: UserMetadata[];
    };
    type CollectFlowPayload = {
        tokenId: string;
        signer: Signer;
        driverAddress: string;
        beamsHubAddress: string;
        userId: string;
        tokenAddress: string;
        maxCycles: BigNumberish;
        currentReceivers: SplitsReceiverStruct$3[];
        transferToAddress: string;
        squeezeArgs?: SqueezeArgs[];
    };
    /**
 * Pre-configured sets of contract calls that can be used as input to `Caller.callBatched` method.
 * @see `CallerClient` for more.
 *
 *
 * @example <caption>Example usage of `collectFlow`.</caption>
 * // Create a new `Caller`.
 * const caller = await CallerClient.create(provider);
 *
 * // Populate the flow's payload.
    const flowPayload: NFTDriverPresets.CollectFlowPayload = {
        driverAddress,
        beamsHubAddress,
        userId,
        tokenAddress,
        maxCycles,
        currentReceivers,
        transferToAddress
    };

    // Create a new `collectFlow` preset.
    const collectFlow = NFTDriverPresets.Presets.collectFlow(flowPayload);

    // Pass the preset to the `Caller`.
    const tx = await caller.callBatched(collectFlow);
    await tx.wait();
    */
    class Presets {
        /**
         * Creates a new batch with the following sequence of calls:
         * 1. `setBeams`
         * 2. `emitUserMetadata`
         *
         * @see `NFTDriverClient`'s API for more details.
         * @param  {CreateStreamFlowPayload} payload the flow's payload.
         * @returns The preset.
         * @throws {@link BeamsErrors.addressError} if `payload.tokenAddress` or `payload.transferToAddress` is not valid.
         * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
         * @throws {@link BeamsErrors.argumentError} if `payload.currentReceivers`' or `payload.newReceivers`' count exceeds the max allowed beams receivers.
         * @throws {@link BeamsErrors.beamsReceiverError} if any of the `payload.currentReceivers` or the `payload.newReceivers` is not valid.
         * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
         */
        static createNewStreamFlow(payload: NewStreamFlowPayload): Promise<Preset>;
        /**
         * Creates a new batch with the following sequence of calls:
         * 1. `squeezeBeams` (optional) for each provided sender
         * 2. `receiveBeams` (optional)
         * 3. `split` (optional)
         * 4. `collect`
         *
         * @see `NFTDriverClient` and `BeamsHubClient`'s API for more details.
         * @param  {CollectFlowPayload} payload the flow's payload.
         * @param  {boolean} skipReceive skips the `receiveBeams` step.
         * @param  {boolean} skipSplit  skips the `split` step.
         * @returns The preset.
         * @throws {@link BeamsErrors.addressError} if `payload.tokenAddress` or the `payload.transferToAddress` address is not valid.
         * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
         * @throws {@link BeamsErrors.argumentError} if `payload.maxCycles` or `payload.currentReceivers` is not valid.
         * @throws {@link BeamsErrors.splitsReceiverError} if any of the `payload.currentReceivers` is not valid.
         */
        static createCollectFlow(payload: CollectFlowPayload, skipReceive?: boolean, skipSplit?: boolean): Promise<Preset>;
    }
}

interface IERC20Interface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "allowance" | "approve" | "balanceOf" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    encodeFunctionData(functionFragment: "allowance", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "approve", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>
    ]): string;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
type TransferEventFilter = TypedEventFilter<TransferEvent>;
interface IERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC20Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        Approval(owner?: PromiseOrValue<string> | null, spender?: PromiseOrValue<string> | null, value?: null): ApprovalEventFilter;
        "Transfer(address,address,uint256)"(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
        Transfer(from?: PromiseOrValue<string> | null, to?: PromiseOrValue<string> | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowance(owner: PromiseOrValue<string>, spender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: PromiseOrValue<string>, to: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

interface IERC20TxFactory extends Pick<IERC20['populateTransaction'], 'approve'> {
}
/**
 * A factory for creating `IERC20` contract transactions.
 */
declare class ERC20TxFactory implements IERC20TxFactory {
    #private;
    get tokenAddress(): string;
    static create(singer: Signer, tokenAddress: string): Promise<ERC20TxFactory>;
    approve(spender: PromiseOrValue<string>, amount: PromiseOrValue<BigNumberish>): Promise<PopulatedTransaction>;
}

interface IBeamsHubTxFactory extends Pick<BeamsHub['populateTransaction'], 'receiveBeams' | 'squeezeBeams' | 'split'> {
}
declare class BeamsHubTxFactory implements IBeamsHubTxFactory {
    #private;
    get driverAddress(): string;
    static create(provider: Provider, customDriverAddress?: string): Promise<BeamsHubTxFactory>;
    receiveBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, maxCycles: PromiseOrValue<BigNumberish>): Promise<PopulatedTransaction>;
    squeezeBeams(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, senderId: PromiseOrValue<BigNumberish>, historyHash: PromiseOrValue<BytesLike>, beamsHistory: BeamsHistoryStruct[]): Promise<PopulatedTransaction>;
    split(userId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: SplitsReceiverStruct$3[]): Promise<PopulatedTransaction>;
}

interface INFTDriverTxFactory extends Pick<NFTDriver['populateTransaction'], 'mint' | 'safeMint' | 'collect' | 'give' | 'setSplits' | 'setBeams' | 'emitUserMetadata'> {
}
declare class NFTDriverTxFactory implements INFTDriverTxFactory {
    #private;
    get driverAddress(): string;
    get signer(): Signer;
    /**
     * Creates a new immutable `NFTDriverTxFactory` instance.
     *
     * @param signer The signer that will be used to sign the generated transactions.
     *
     * The `singer` must be connected to a provider.
     *
     * The supported networks are:
     * - 'base-goerli': chain ID `84531`
     * @param customDriverAddress Overrides the `NFTDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `signer.provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the initialization fails.
     */
    static create(signer: Signer, customDriverAddress?: string): Promise<NFTDriverTxFactory>;
    mint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    safeMint(to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    safeMintWithSalt(salt: PromiseOrValue<BigNumberish>, to: PromiseOrValue<string>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    collect(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    give(tokenId: PromiseOrValue<BigNumberish>, receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    setSplits(tokenId: PromiseOrValue<BigNumberish>, receivers: SplitsReceiverStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    setBeams(tokenId: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct$1[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct$1[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    emitUserMetadata(tokenId: PromiseOrValue<BigNumberish>, userMetadata: UserMetadataStruct$2[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
}

interface IAddressDriverTxFactory extends Pick<AddressDriver['populateTransaction'], 'collect' | 'give' | 'setSplits' | 'setBeams' | 'emitUserMetadata'> {
}
/**
 * A factory for creating `AddressDriver` contract transactions.
 */
declare class AddressDriverTxFactory implements IAddressDriverTxFactory {
    #private;
    get driverAddress(): string;
    get signer(): Signer | undefined;
    /**
     * Creates a new immutable `AddressDriverTxFactory` instance.
     *
     * @param signer The signer that will be used to sign the generated transactions.
     *
     * The `singer` must be connected to a provider.
     *
     * The supported networks are:
     * - 'mainnet': chain ID `1`
     * - 'goerli': chain ID `5`
     * - 'polygon-mumbai': chain ID `80001`
     * @param customDriverAddress Overrides the `AddressDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `signer.provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the initialization fails.
     */
    static create(signer: Signer, customDriverAddress?: string): Promise<AddressDriverTxFactory>;
    collect(erc20: PromiseOrValue<string>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    give(receiver: PromiseOrValue<BigNumberish>, erc20: PromiseOrValue<string>, amt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    setSplits(receivers: SplitsReceiverStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    setBeams(erc20: PromiseOrValue<string>, currReceivers: BeamsReceiverStruct[], balanceDelta: PromiseOrValue<BigNumberish>, newReceivers: BeamsReceiverStruct[], maxEndHint1: PromiseOrValue<BigNumberish>, maxEndHint2: PromiseOrValue<BigNumberish>, transferTo: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
    emitUserMetadata(userMetadata: UserMetadataStruct$1[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PopulatedTransaction>;
}

/**
 * A client for managing Beams accounts identified by Ethereum addresses.
 * @see {@link  https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/AddressDriver.sol AddressDriver} contract.
 */
declare class AddressDriverClient {
    #private;
    /** Returns the client's `provider`. */
    get provider(): Provider;
    /**
     * Returns the client's `signer`.
     *
     * Note that for read-only client instances created with the {@link createReadonly} method it returns `undefined`.
     */
    get signer(): Signer | undefined;
    /** Returns the `AddressDriver`'s address to which the `AddressDriverClient` is connected. */
    get driverAddress(): string;
    private constructor();
    /**
     * Creates a new immutable `AddressDriverClient` instance.
     * @param provider The network provider. It cannot be changed after creation.
     *
     * The `provider` must be connected to one of the following supported networks:
     * - 'base-goerli': chain ID `84531`
     *
     * @param signer The singer used to sign transactions. It cannot be changed after creation.
     *
     * **Important**: If the `signer` is _not_ connected to a provider it will try to connect to the `provider`, else it will use the `signer.provider`.
     * @param customDriverAddress Overrides the `AddressDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the client initialization fails.
     */
    static create(provider: Provider, signer?: Signer, customDriverAddress?: string): Promise<AddressDriverClient>;
    static create(provider: Provider, signer?: Signer, customDriverAddress?: string, txFactory?: IAddressDriverTxFactory): Promise<AddressDriverClient>;
    /**
     * Returns the remaining number of tokens the `AddressDriver` contract is allowed to spend on behalf of the user for the given ERC20 token.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the remaining number of tokens.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    getAllowance(tokenAddress: string): Promise<bigint>;
    /**
     * Sets the maximum allowance value for the `AddressDriver` contract over the user's tokens for the given ERC20 token.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    approve(tokenAddress: string): Promise<ContractTransaction>;
    /**
     * Returns the user user ID.
     *
     * This is the user ID to which the `AddressDriverClient` is linked and manages Beams.
     * @returns A `Promise` which resolves to the user ID.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    getUserId(): Promise<string>;
    /**
     * Returns the user ID for a given address.
     * @param userAddress The user address.
     * @returns A `Promise` which resolves to the user ID.
     * @throws {@link BeamsErrors.addressError} if the `userAddress` address is not valid.
     */
    getUserIdByAddress(userAddress: string): Promise<string>;
    /**
     * Collects the received and already split funds and transfers them from the `BeamsHub` contract to an address.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param transferToAddress The address to send collected funds to.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if `tokenAddress` or `transferToAddress` is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    collect(tokenAddress: string, transferToAddress: string): Promise<ContractTransaction>;
    /**
     * Gives funds to the receiver.
     * The receiver can collect them immediately.
     * Transfers funds from the user's wallet to the `BeamsHub` contract.
     * @param receiverUserId The receiver user ID.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param amount The amount to give (in the smallest unit, e.g., Wei). It must be greater than `0`.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverUserId` is missing.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.argumentError} if the `amount` is less than or equal to `0`.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    give(receiverUserId: string, tokenAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
    /**
     * Sets the Splits configuration.
     * @param receivers The splits receivers (max `200`).
     * Each splits receiver will be getting `weight / TOTAL_SPLITS_WEIGHT` share of the funds.
     * Duplicate receivers are not allowed and will only be processed once.
     * Pass an empty array if you want to clear all receivers.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if `receivers` are missing.
     * @throws {@link BeamsErrors.argumentError} if `receivers`' count exceeds the max allowed splits receivers.
     * @throws {@link BeamsErrors.splitsReceiverError} if any of the `receivers` is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    setSplits(receivers: SplitsReceiverStruct$3[]): Promise<ContractTransaction>;
    /**
     * Sets a Beams configuration.
     * Transfers funds from the user's wallet to the `BeamsHub` contract to fulfill the change of the beams balance.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param currentReceivers The beams receivers that were set in the last beams update.
     * Pass an empty array if this is the first update.
     *
     * **Tip**: you might want to use `BeamsSubgraphClient.getCurrentBeamsReceivers` to easily retrieve the list of current receivers.
     * @param newReceivers The new beams receivers (max `100`).
     * Duplicate receivers are not allowed and will only be processed once.
     * Pass an empty array if you want to clear all receivers.
     * @param transferToAddress The address to send funds to in case of decreasing balance.
     * @param balanceDelta The beams balance change to be applied:
     * - Positive to add funds to the beams balance.
     * - Negative to remove funds from the beams balance.
     * - `0` to leave beams balance as is (default value).
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if `tokenAddress` or `transferToAddress` is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.argumentError} if `currentReceivers`' or `newReceivers`' count exceeds the max allowed beams receivers.
     * @throws {@link BeamsErrors.beamsReceiverError} if any of the `currentReceivers` or the `newReceivers` is not valid.
     * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    setBeams(tokenAddress: string, currentReceivers: BeamsReceiverStruct$2[], newReceivers: BeamsReceiverStruct$2[], transferToAddress: string, balanceDelta?: BigNumberish): Promise<ContractTransaction>;
    /**
     * Emits the user's metadata.
     * The key and the value are _not_ standardized by the protocol, it's up to the user to establish and follow conventions to ensure compatibility with the consumers.
     * @param userMetadata The list of user metadata. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentError} if any of the metadata entries is not valid.
     * @throws {@link BeamsErrors.signerMissingError} if the provider's signer is missing.
     */
    emitUserMetadata(userMetadata: UserMetadata[]): Promise<ContractTransaction>;
    /**
     * Returns a user's address given a user ID.
     * @param userId The user ID.
     * @returns The user's address.
     */
    static getUserAddress: (userId: string) => string;
}

/**
 * A generic call executor that increases the flexibility of other contracts' APIs.
 * @see {@link https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/Caller.sol Caller} contract.
 */
declare class CallerClient {
    #private;
    /** Returns the client's `provider`. */
    get provider(): Provider;
    /**
     * Returns the client's `signer`.
     *
     * The `signer` is the `provider`'s signer.
     */
    get signer(): Signer;
    /** Returns the `Caller` contract address to which the client is connected. */
    get callerAddress(): string;
    private constructor();
    /**
     * Creates a new immutable `CallerClient` instance.
     * @param  {Provider} provider The network provider. It cannot be changed after creation.
     *
     * The `provider` must be connected to one of the following supported networks:
     * -'base-goerli': chain ID `84531`
     * @param  {Signer} signer The singer used to sign transactions. It cannot be changed after creation.
     *
     * **Important**: If the `signer` is _not_ connected to a provider it will try to connect to the `provider`, else it will use the `signer.provider`.
     * @param  {string|undefined} customCallerAddress Overrides the `NFTDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.argumentError.initializationError} if the client initialization fails.
     */
    static create(provider: Provider, signer: Signer, customCallerAddress?: string): Promise<CallerClient>;
    /**
     * Executes a batch of calls.
     *
     * Reverts if any of the calls reverts or any of the called addresses is not a contract.
     *
     * **Important**:
     * If the called contract is `Caller`-aware and trusts that instance of `Caller` (e.g., the official Beams Drivers contracts)
     * the `msg.sender` will be set to the address of the wallet which called the `Caller`.
     * If not, `msg.sender` will be set to the address of the `Caller`.
     * @param calls The calls to perform.
     * @returns A `Promise` which resolves to the contract transaction.
     */
    callBatched(calls: CallStruct[]): Promise<ContractTransaction>;
    /**
     * Executes a batch of calls.
     *
     * Reverts if any of the calls reverts or any of the called addresses is not a contract.
     *
     * **Important**:
     * If the called contract is `Caller`-aware and trusts that instance of `Caller` (e.g., the official Beams Drivers contracts)
     * the `msg.sender` will be set to the address of the wallet which called the `Caller`.
     * If not, `msg.sender` will be set to the address of the `Caller`.
     * @param calls The calls to perform.
     * @returns A `Promise` which resolves to the contract transaction.
     */
    callBatched(calls: Preset): Promise<ContractTransaction>;
    /**
     * Executes a batch of calls.
     *
     * Reverts if any of the calls reverts or any of the called addresses is not a contract.
     *
     * **Important**:
     * If the called contract is `Caller`-aware and trusts that instance of `Caller` (e.g., the official Beams Drivers contracts)
     * the `msg.sender` will be set to the address of the wallet which called the `Caller`.
     * If not, `msg.sender` will be set to the address of the `Caller`.
     * @param calls The calls to perform.
     * @returns A `Promise` which resolves to the contract transaction.
     */
    callBatched(calls: PopulatedTransaction[]): Promise<ContractTransaction>;
}

declare enum BeamsErrorCode {
    MISSING_SIGNER = "MISSING_SIGNER",
    INVALID_ADDRESS = "INVALID_ADDRESS",
    INVALID_ARGUMENT = "INVALID_ARGUMENT",
    MISSING_ARGUMENT = "MISSING_ARGUMENT",
    TX_EVENT_NOT_FOUND = "TX_EVENT_NOT_FOUND",
    UNSUPPORTED_NETWORK = "UNSUPPORTED_NETWORK",
    SUBGRAPH_QUERY_ERROR = "SUBGRAPH_QUERY_ERROR",
    INVALID_BEAMS_RECEIVER = "INVALID_BEAMS_RECEIVER",
    INITIALIZATION_FAILURE = "INITIALIZATION_FAILURE",
    INVALID_SPLITS_RECEIVER = "INVALID_SPLITS_RECEIVER",
    INVALID_BEAMS_RECEIVER_CONFIG = "INVALID_BEAMS_RECEIVER_CONFIG"
}
declare class BeamsError extends Error {
    readonly context?: unknown;
    readonly code: BeamsErrorCode;
    constructor(code: BeamsErrorCode, message: string, context?: unknown);
}

/**
 * A client for interacting with the {@link https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/BeamsHub.sol  BeamsHub}.
 */
declare class BeamsHubClient {
    #private;
    /** Returns the `BeamsHubClient`'s `provider`. */
    get provider(): Provider;
    /**
     * Returns the `BeamsHubClient`'s `signer`.
     *
     * This is the user to which the `BeamsHubClient` is linked and manages Beams.
     *
     * Note that for read-only client instances created with the {@link createReadonly} method it returns `undefined`.
     */
    get signer(): Signer | undefined;
    /** Returns the `BeamsHub`'s address to which the `BeamsHubClient` is connected. */
    get contractAddress(): string;
    private constructor();
    /**
     * Creates a new immutable `BeamsHubClient` instance.
     * @param  {Provider} provider The network provider. It cannot be changed after creation.
     *
     * The `provider` must be connected to one of the following supported networks:
     * - 'mainnet': chain ID `1`
     * - 'goerli': chain ID `5`
     * - 'polygon-mumbai': chain ID `80001`
     * @param  {Provider|undefined} signer The singer used to sign transactions. It cannot be changed after creation.
     *
     * **Important**: If the `signer` is _not_ connected to a provider it will try to connect to the `provider`, else it will use the `signer.provider`.
     * @param  {string|undefined} customDriverAddress Overrides the `NFTDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the client initialization fails.
     */
    static create(provider: Provider, signer?: Signer, customDriverAddress?: string): Promise<BeamsHubClient>;
    /**
     * Returns the cycle length in seconds.
     * @returns A `Promise` which resolves to the cycle seconds.
     */
    cycleSecs(): Promise<number>;
    /**
     * Returns the total amount currently stored in `BeamsHub` for the given token.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the balance of the token.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     */
    getTokenBalance(tokenAddress: string): Promise<bigint>;
    /**
     * Returns the count of cycles from which beams can be collected.
     * This method can be used to detect if there are too many cycles to analyze in a single transaction.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the number of receivable cycles.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     */
    receivableCyclesCount(userId: string, tokenAddress: string): Promise<number>;
    /**
     * Calculates the user's receivable balance for the given token.
     * Receivable balance contains the funds other users beam to and is updated once every cycle.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {BigNumberish} maxCycles The maximum number of received beams cycles. Must be greater than `0`.
     * If too low, receiving will be cheap, but may not cover many cycles.
     * If too high, receiving may become too expensive to fit in a single transaction.
     * @returns A `Promise` which resolves to the receivable balance.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.argumentError} if `maxCycles` is not valid.
     */
    getReceivableBalanceForUser(userId: string, tokenAddress: string, maxCycles: BigNumberish): Promise<ReceivableBalance>;
    /**
     * Receives user's beams.
     * Calling this function does not collect but makes the funds ready to split and collect.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {BigNumberish} maxCycles The maximum number of received beams cycles. Must be greater than `0`.
     * If too low, receiving will be cheap, but may not cover many cycles.
     * If too high, receiving may become too expensive to fit in a single transaction.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.argumentError} if `maxCycles` is not valid.
     */
    receiveBeams(userId: string, tokenAddress: string, maxCycles: BigNumberish): Promise<ContractTransaction>;
    /**
     * Receives beams from the currently running cycle from a single sender.
     * It doesn't receive beams from the previous, finished cycles, to do that use `receiveBeams`.
     * Squeezed funds won't be received in the next calls to `squeezeBeams` or `receiveBeams`.
     * Only funds beamped before `block.timestamp` can be squeezed.
     *
     * **Tip**: you might want to use `BeamsSubgraphClient.getArgsForSqueezingAllBeams` to easily populate the arguments for squeezing all Beams up to "now".
     * @param  {string} userId The ID of the user receiving beams to squeeze funds for.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {BigNumberish} senderId The ID of the user sending beams to squeeze funds from.
     * @param  {string} historyHash The sender's history hash which was valid right before they set up the sequence of configurations described by `beamsHistory`.
     * @param  {BigNumberish} beamsHistory The sequence of the sender's beams configurations.
     * It can start at an arbitrary past configuration, but must describe all the configurations
     * which have been used since then including the current one, in the chronological order.
     * Only beams described by `beamsHistory` will be squeezed.
     * If `beamsHistory` entries have no receivers, they won't be squeezed.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     */
    squeezeBeams(userId: string, tokenAddress: string, senderId: BigNumberish, historyHash: string, beamsHistory: BeamsHistoryStruct[]): Promise<ContractTransaction>;
    /**
     * Calculates the user's squeezable balance.
     * Squeezable balance contains the funds that can be received from the currently running cycle from a single sender.
     * @param  {string} userId The ID of the user receiving beams to squeeze funds for.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {string} senderId The ID of the user sending beams to squeeze funds from.
     * @param  {string} historyHash The sender's history hash which was valid right before
     * they set up the sequence of configurations described by `beamsHistory`.
     * @param  {BeamsHistoryStruct[]} beamsHistory The sequence of the sender's beams configurations.
     * @returns A `Promise` which resolves to the the squeezable balance.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     */
    getSqueezableBalance(userId: string, tokenAddress: string, senderId: string, historyHash: string, beamsHistory: BeamsHistoryStruct[]): Promise<bigint>;
    /**
     * Returns the user's splittable balance for the given token.
     * Splittable balance contains the user's received but not split yet funds.
     * @param  {string} userId user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the the splittable balance.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     */
    getSplittableBalanceForUser(userId: string, tokenAddress: string): Promise<SplittableBalance>;
    /**
     * Calculates the result of splitting an amount using the user's current splits configuration.
     * @param  {string} userId The user ID.
     * @param  {SplitsReceiverStruct[]} currentReceivers The current splits receivers.
     * @param  {BigNumberish[]} amount The amount being split. It must be greater than `0`.
     * @returns A `Promise` which resolves to the split result.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.argumentError} if `amount` or `currentReceivers`' is not valid.
     * @throws {@link BeamsErrors.splitsReceiverError} if any of the `currentReceivers` is not valid.
     */
    getSplitResult(userId: string, currentReceivers: SplitsReceiverStruct$3[], amount: BigNumberish): Promise<SplitResult>;
    /**
     * Splits user's received but not split yet funds among receivers.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {SplitsReceiverStruct[]} currentReceivers The current splits receivers.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if `currentReceivers` are missing.
     * @throws {@link BeamsErrors.argumentError} if `currentReceivers`' count exceeds the max allowed splits receivers.
     * @throws {@link BeamsErrors.splitsReceiverError} if any of the `currentReceivers` is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     */
    split(userId: BigNumberish, tokenAddress: string, currentReceivers: SplitsReceiverStruct$3[]): Promise<ContractTransaction>;
    /**
     * Returns the user's collectable balance.
     * Collectable balance contains the user's funds that are already split and ready to be collected.
     * @param  {string} userId user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the the collectable balance.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     */
    getCollectableBalanceForUser(userId: string, tokenAddress: string): Promise<CollectableBalance>;
    /**
     * Returns the user's beams state.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A Promise which resolves to the {@link BeamsState}.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     */
    beamsState(userId: string, tokenAddress: string): Promise<BeamsState>;
    /**
     * Returns the user's beams balance at a given timestamp.
     * Beams balance contains the funds the user can stream to other users.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param  {BeamsReceiverStruct[]} receivers The users's current beams receivers.
     * @param  {BigNumberish} timestamp The timestamp for which the balance should be calculated. It can't be lower than the timestamp of the last call to `setBeams`.
     * If it's bigger than `block.timestamp`, then it's a prediction assuming that `setBeams` won't be called before `timestamp`.
     * @returns A Promise which resolves to the user balance on `timestamp`.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.argumentError} if `receivers`' count exceeds the max allowed beams receivers.
     * @throws {@link BeamsErrors.beamsReceiverError} if any of the the `receivers` is not valid.
     * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
     *
     */
    getBeamsBalanceAt(userId: string, tokenAddress: string, receivers: BeamsReceiverStruct$2[], timestamp: BigNumberish): Promise<bigint>;
}

/**
 * A client for querying the Beams Subgraph.
 */
declare class BeamsSubgraphClient {
    #private;
    /** Returns the chain ID the `BeamsSubgraphClient` is connected to. */
    get chainId(): number;
    /** Returns the `BeamsSubgraphClient`'s API URL. */
    get apiUrl(): string;
    private constructor();
    /**
     * Creates a new immutable `BeamsSubgraphClient` instance.
     *
     * @param  {string} chainId The chain ID.
     * @param  {string|undefined} customApiUrl Overrides the subgraph's `apiUrl`.
     * If it's `undefined` (default value), the `apiUrl` will be automatically selected based on the `chainId`.
     * @throws {@link BeamsErrors.argumentMissingError} if the `chainId` is missing.
     * @throws {@link BeamsErrors.unsupportedNetworkError} if the `chainId` is not supported.
     * @returns The new `BeamsSubgraphClient` instance.
     */
    static create(chainId: number, customApiUrl?: string): BeamsSubgraphClient;
    /**
     * Returns the beams configuration for the given user and asset.
     * @param  {string} userId The user ID.
     * @param  {BigNumberish} assetId The asset ID.
     * @returns A `Promise` which resolves to the user's beams configuration, or `null` if the configuration is not found.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getUserAssetConfigById(userId: string, assetId: BigNumberish): Promise<UserAssetConfig | null>;
    /**
     * Returns a list of beams configurations for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's beams configurations.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getAllUserAssetConfigsByUserId(userId: string, skip?: number, first?: number): Promise<UserAssetConfig[]>;
    /**
     * Returns the splits configuration for the give user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's splits configuration.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getSplitsConfigByUserId(userId: string, skip?: number, first?: number): Promise<SplitsEntry[]>;
    /**
     * Returns a list of `Split` entries for the given user.
     * @param  {string} receiverUserId The receiver's user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the receivers's `Split` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverUserId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getSplitEntriesByReceiverUserId(receiverUserId: string, skip?: number, first?: number): Promise<SplitsEntry[]>;
    /**
     * Returns a list of `BeamsSet` events for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `BeamsSet` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getBeamsSetEventsByUserId(userId: string, skip?: number, first?: number): Promise<BeamsSetEvent[]>;
    /**
     * Returns a list of `BeamsReceiverSeen` events for the given receiver.
     * @param  {string} receiverUserId The receiver's user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the receivers's `BeamsReceiverSeen` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverUserId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getBeamsReceiverSeenEventsByReceiverId(receiverUserId: string, skip?: number, first?: number): Promise<BeamsReceiverSeenEvent[]>;
    /**
     * Returns the users that stream funds to the given receiver.
     * @param  {string} receiverUserId The receiver's user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the users that stream funds to the given receiver.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverUserId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getUsersStreamingToUser(receiverUserId: string, skip?: number, first?: number): Promise<bigint[]>;
    /**
     * Returns the history of user metadata updates for the given user.
     * @param  {string} userId The user ID.
     * @param  {string} key The metadata key.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's metadata.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getMetadataHistory(userId: string, key?: string, skip?: number, first?: number): Promise<UserMetadataEntry[]>;
    /**
     * Returns the latest metadata update for the given `userId`-`key` pair.
     * @param  {string} userId The user ID.
     * @param  {string} key The metadata key.
     * @returns A `Promise` which resolves to the user's metadata, or `null` if not found.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameter is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getLatestUserMetadata(userId: string, key: string): Promise<UserMetadataEntry | null>;
    /**
     * Returns a list of NFT sub accounts for the given owner.
     * @param  {string} ownerAddress The owner's address.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the owner's NFT sub accounts.
     * @throws {@link BeamsErrors.addressError} if the `ownerAddress` is not valid.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getNftSubAccountsByOwner(ownerAddress: string, skip?: number, first?: number): Promise<NftSubAccount[]>;
    /**
     * Returns the NFT sub account owner for the given token ID.
     * @param  {string} tokenId The token ID.
     * @returns A `Promise` which resolves to the NFT sub account owner, or `null` if not found.
     * @throws {@link BeamsErrors.argumentError} if the `tokenId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getNftSubAccountOwnerByTokenId(tokenId: string): Promise<NftSubAccount | null>;
    /**
     * Returns a list of token IDs that are associated with the given app.
     * @param  {string} associatedApp The name/ID of the app to retrieve accounts for.
     *
     * **Tip**: you might want to use `Utils.UserMetadata.valueFromString` to create your `associatedApp` argument from a `string`.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the account IDs.
     * @throws {@link BeamsErrors.argumentError} if the `associatedApp` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getNftSubAccountIdsByApp(associatedApp: string, skip?: number, first?: number): Promise<string[]>;
    /**
     * Returns a list of `Collected` events for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `Collected` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getCollectedEventsByUserId(userId: string, skip?: number, first?: number): Promise<CollectedEvent[]>;
    /**
     * Returns the user's `SqueezedBeams` events.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `SqueezedBeams` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getSqueezedBeamsEventsByUserId(userId: string, skip?: number, first?: number): Promise<SqueezedBeamsEvent[]>;
    /**
     * Returns a list of `Split` events for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `Split` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getSplitEventsByUserId(userId: string, skip?: number, first?: number): Promise<SplitEvent[]>;
    /**
     * Returns a list of `Split` events for the given receiver.
     * @param  {string} receiverUserId The receiver user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the receiver's `Split` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverUserId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getSplitEventsByReceiverUserId(receiverUserId: string, skip?: number, first?: number): Promise<SplitEvent[]>;
    /**
     * Returns a list of `ReceivedBeams` events for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `ReceivedBeams` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getReceivedBeamsEventsByUserId(userId: string, skip?: number, first?: number): Promise<ReceivedBeamsEvent[]>;
    /**
     * Returns a list of `Given` events for the given user.
     * @param  {string} userId The user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the user's `Given` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `userId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getGivenEventsByUserId(userId: string, skip?: number, first?: number): Promise<GivenEvent[]>;
    /**
     * Returns a list of `Given` events for the given receiver.
     * @param  {string} receiverUserId The receiver user ID.
     * @param  {number} skip The number of database entries to skip. Defaults to `0`.
     * @param  {number} first The number of database entries to take. Defaults to `100`.
     * @returns A `Promise` which resolves to the receiver's `Given` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receiverId` is missing.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getGivenEventsByReceiverUserId(receiverUserId: string, skip?: number, first?: number): Promise<GivenEvent[]>;
    /**
     * Calculates the arguments for squeezing all Beams up to "now" for the given sender and token.
     *
     * **Important**: This method might fail if two Beams updates were performed in a single block.
     * because the order of the Beams configurations returned by the Subgraph is not guaranteed for such cases.
     * The transaction will fail in the gas estimation phase, so no gas will be wasted.
     * @see `BeamsHubClient.squeezeBeams` method for more.
     * @param  {string} userId The ID of the user receiving beams to squeeze funds for.
     * @param  {BigNumberish} senderId The ID of the user sending beams to squeeze funds from.
     * @param  {string} tokenAddress The ERC20 token address.
     * @returns A `Promise` which resolves to the `BeamsHubClient.squeezeBeams` arguments.
     */
    getArgsForSqueezingAllBeams(userId: string, senderId: string, tokenAddress: string): Promise<SqueezeArgs>;
    /**
     * Returns a list of senders for which beams can _potentially_ be squeezed, for the given receiver.
     *
     * The returned senders have set up a configuration that beams to the given `receiver`
     * but **it's not guaranteed that the sender is still beamping to this sender**.
     * The sender might be out of funds, for example.
     * @param  {string} receiverId The receiver's user ID.
     * @returns A `Promise` which resolves to a `Record` with keys being the sender IDs and values the asset (ERC20 token) IDs.
     * @throws {BeamsErrors.subgraphQueryError} if the query fails.
     */
    filterSqueezableSenders(receiverId: string): Promise<Record<string, string[]>>;
    /**
     * Returns the current Beams receivers for the given configuration.
     * @param  {string} userId The user ID.
     * @param  {string} tokenAddress The ERC20 token address.
     * @returns A `Promise` which resolves to the user's `Collected` events.
     * @throws {@link BeamsErrors.argumentMissingError} if the current Beams receivers.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    getCurrentBeamsReceivers(userId: string, tokenAddress: string): Promise<BeamsReceiverStruct$2[]>;
    /**
     * Executes the given query against the Beams Subgraph.
     * @example <caption>Example usage for querying `Split` events.</caption>
        type SplitEvent = {
            id: string;
            amount: bigint;
            assetId: bigint;
            blockTimestamp: bigint;
            receiverId: string;
            userId: string;
        }

        type QueryResponse = {
            splitEvents: SplitEvent[];
        };

        export const getSplitEventsByUserId = `#graphql
            query getSplitEventsByUserId($userId: String!, $skip: Int, $first: Int) {
            splitEvents(where: {userId: $userId}, skip: $skip, first: $first) {
                    id
                    userId
                    receiverId
                    assetId
                    amt
                    blockTimestamp
                }
            }
        `;

        const userId = "1";
        const skip = 0;
        const first = 100;

        const response = await beamsSubgraphClient.query<QueryResponse>(getSplitEventsByUserId, { userId, skip, first });

        const events = response?.data?.splitEvents?.map(mapSplitEventToDto) || [];

     * @param  {string} query The GraphQL query.
     * @param  {unknown} variables The GraphQL query variables.
     * @returns A `Promise` which resolves to the expected data.
     * @throws {@link BeamsErrors.subgraphQueryError} if the query fails.
     */
    query<T = unknown>(query: string, variables: unknown): Promise<{
        data: T;
    }>;
}

/**
 * A client for creating immutable splits configurations.
 *
 * Anybody can create a new `userId` and configure its splits configuration,
 * but nobody can update its configuration afterwards, it's immutable.
 * @see {@link https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/ImmutableSplitsDriver.sol ImmutableSplitsDriver} contract.
 */
declare class ImmutableSplitsDriverClient {
    #private;
    /** Returns the client's `provider`. */
    get provider(): Provider;
    /**
     * Returns the client's `signer`.
     *
     * The `signer` is the `provider`'s signer.
     */
    get signer(): Signer;
    /** Returns the `ImmutableSplitsDriver` contract address to which the client is connected. */
    get driverAddress(): string;
    private constructor();
    /**
     * Creates a new immutable `ImmutableSplitsDriverClient` instance.
     * @param  {Provider} provider The network provider. It cannot be changed after creation.
     *
     * The `provider` must be connected to one of the following supported networks:
     * 'base-goerli': chain ID `84531`
     * @param  {Signer} signer The singer used to sign transactions. It cannot be changed after creation.
     *
     * **Important**: If the `signer` is _not_ connected to a provider it will try to connect to the `provider`, else it will use the `signer.provider`.
     * @param  {string|undefined} customDriverAddress Overrides the `NFTDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the client initialization fails.
     */
    static create(provider: Provider, signer: Signer, customDriverAddress?: string): Promise<ImmutableSplitsDriverClient>;
    /**
     * Creates a new user ID, configures its splits configuration and emits its metadata.
     * The configuration is immutable and nobody can control the user ID after its creation.
     * Calling this function is the only way and the only chance to emit metadata for that user.
     * @param  {SplitsReceiverStruct[]} receivers The splits receivers.
     * @param  {UserMetadata[]} userMetadata The list of user metadata to emit for the created user. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to the new user ID.
     * @throws {@link BeamsErrors.argumentMissingError} if the `receivers` are missing.
     * @throws {@link BeamsErrors.splitsReceiverError} if any of the `receivers` is not valid.
     * @throws {@link BeamsErrors.txEventNotFound} if the expected transaction event is not found.
     */
    createSplits(receivers: SplitsReceiverStruct$3[], userMetadata: UserMetadata[]): Promise<string>;
}

/**
 * A client for managing Beams accounts identified by NFTs.
 * @see {@link https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/NFTDriver.sol NFTDriver} contract.
 */
declare class NFTDriverClient {
    #private;
    /** Returns the client's `provider`. */
    get provider(): Provider;
    /**
     * Returns the client's `signer`.
     *
     * The `signer` is the `provider`'s signer.
     */
    get signer(): Signer;
    /** Returns the `NFTDriver` contract address to which the client is connected. */
    get driverAddress(): string;
    private constructor();
    /**
     * Creates a new immutable `NFTDriverClient` instance.
     * @param provider The network provider. It cannot be changed after creation.
     *
     * The `provider` must be connected to one of the following supported networks:
     * - 'base-goerli': chain ID `84531`
     * @param signer The singer used to sign transactions. It cannot be changed after creation.
     *
     * **Important**: If the `signer` is _not_ connected to a provider it will try to connect to the `provider`, else it will use the `signer.provider`.
     * @param customDriverAddress Overrides the `NFTDriver` contract address.
     * If it's `undefined` (default value), the address will be automatically selected based on the `provider`'s network.
     * @returns A `Promise` which resolves to the new client instance.
     * @throws {@link BeamsErrors.initializationError} if the client initialization fails.
     */
    static create(provider: Provider, signer: Signer, customDriverAddress?: string): Promise<NFTDriverClient>;
    static create(provider: Provider, signer: Signer, customDriverAddress?: string, txFactory?: INFTDriverTxFactory): Promise<NFTDriverClient>;
    /**
     * Returns the remaining number of tokens the `NFTDriver` contract is allowed to spend on behalf of the client's `signer` for the given ERC20 token.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the remaining number of tokens.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     */
    getAllowance(tokenAddress: string): Promise<bigint>;
    /**
     * Sets the maximum allowance value for the `NFTDriver` contract over the client's `signer` tokens for the given ERC20 token.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     */
    approve(tokenAddress: string): Promise<ContractTransaction>;
    /**
     *
     * **Usage of this method is discouraged**; use {@link safeCreateAccount} whenever possible.
     *
     * Creates a new Beams account.
     *
     * It will mint a new NFT controlling a new Beams account and transfer its ownership to an address.
     * It also emits user metadata for the new token.
     *
     * **Important**:
     * In Beams, an account "is" a **user ID** at the protocol level.
     * The minted NFT's ID (token ID) and the user ID controlled by it are always equal.
     *
     * This means that **anywhere in the SDK, a method expects a user ID parameter, and a token ID is a valid argument**.
     * @param transferToAddress The address to transfer the minted token to.
     * @param associatedApp
     * The name/ID of the app that is associated with the new account.
     * If provided, the following user metadata entry will be appended to the `userMetadata` list:
     * - key: "associatedApp"
     * - value: `associatedApp`.
     * @param userMetadata The list of user metadata. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to minted token ID. It's equal to the user ID controlled by it.
     * @throws {@link BeamsErrors.argumentMissingError} if the `transferToAddress` is missing.
     * @throws {@link BeamsErrors.addressError} if the `transferToAddress` is not valid.
     * @throws {@link BeamsErrors.txEventNotFound} if the expected transaction event is not found.
     */
    createAccount(transferToAddress: string, associatedApp?: string, userMetadata?: UserMetadata[]): Promise<string>;
    /**
     * Creates a new Beams account.
     *
     * It will _safely_ mint a new NFT controlling a new Beams account and transfer its ownership to an address.
     * It also emits user metadata for the new token.
     *
     * **Important**:
     * In Beams, an account "is" a **user ID** at the protocol level.
     * The minted NFT's ID (token ID) and the user ID controlled by it are always equal.
     *
     * This means that **anywhere in the SDK, a method expects a user ID parameter, and a token ID is a valid argument**.
     * @param transferToAddress The address to transfer the minted token to.
     * @param associatedApp
     * The name/ID of the app that is associated with the new account.
     * If provided, the following user metadata entry will be appended to the `userMetadata` list:
     * - key: "associatedApp"
     * - value: `associatedApp`.
     * @param userMetadata The list of user metadata. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to minted token ID. It's equal to the user ID controlled by it.
     * @throws {@link BeamsErrors.argumentMissingError} if the `transferToAddress` is missing.
     * @throws {@link BeamsErrors.txEventNotFound} if the expected transaction event is not found.
     * @throws {@link BeamsErrors.addressError} if the `transferToAddress` is not valid.
     */
    safeCreateAccount(transferToAddress: string, associatedApp?: string, userMetadata?: UserMetadata[]): Promise<string>;
    /**
     * Creates a new Beams account.
     *
     * It will _safely_ mint a new NFT controlling a new Beams account and transfer its ownership to an address.
     * The token ID is deterministically derived from the caller's address and the salt.
     * Each caller can use each salt only once, to mint a single token.
     * It also emits user metadata for the new token.
     *
     * **Important**:
     * In Beams, an account "is" a **user ID** at the protocol level.
     * The minted NFT's ID (token ID) and the user ID controlled by it are always equal.
     *
     * This means that **anywhere in the SDK, a method expects a user ID parameter, and a token ID is a valid argument**.
     * @param salt The salt to use for the deterministic token ID derivation.
     * @param transferToAddress The address to transfer the minted token to.
     * @param associatedApp
     * The name/ID of the app that is associated with the new account.
     * If provided, the following user metadata entry will be appended to the `userMetadata` list:
     * - key: "associatedApp"
     * - value: `associatedApp`.
     * @param userMetadata The list of user metadata. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to minted token ID. It's equal to the user ID controlled by it.
     * @throws {@link BeamsErrors.argumentMissingError} if the `transferToAddress` is missing.
     * @throws {@link BeamsErrors.txEventNotFound} if the expected transaction event is not found.
     * @throws {@link BeamsErrors.addressError} if the `transferToAddress` is not valid.
     */
    safeCreateAccountWithSalt(salt: number, transferToAddress: string, associatedApp?: string, userMetadata?: UserMetadata[]): Promise<string>;
    /**
     * Collects the received and already split funds and transfers them from the `BeamsHub` contract to an address.
     *
     * The caller (client's `signer`) must be the owner of the `tokenId` or be approved to use it.
     * @param tokenId The ID of the token representing the collecting account.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param transferToAddress The address to send collected funds to.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if the `tokenId` is missing.
     * @throws {@link BeamsErrors.addressError} if `tokenAddress` or `transferToAddress` is not valid.
     */
    collect(tokenId: string, tokenAddress: string, transferToAddress: string): Promise<ContractTransaction>;
    /**
     * Gives funds to the receiver.
     * The receiver can collect them immediately.
     *
     * The caller (client's `signer`) must be the owner of the `tokenId` or be approved to use it.
     * @param tokenId The ID of the token representing the giving account.
     * @param receiverUserId The receiver user ID.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param amount The amount to give (in the smallest unit, e.g., Wei). It must be greater than `0`.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.addressError} if the `tokenAddress` is not valid.
     * @throws {@link BeamsErrors.argumentError} if the `amount` is less than or equal to `0`.
     */
    give(tokenId: string, receiverUserId: string, tokenAddress: string, amount: BigNumberish): Promise<ContractTransaction>;
    /**
     * Sets a Beams configuration for the given account.
     *
     * It will transfer funds from the client's `signer` wallet to the `BeamsHub` contract to fulfill the change of the beams balance.
     *
     * The caller (client's `signer`) must be the owner of the `tokenId` or be approved to use it.
     * @param tokenId The ID of the token representing the configured account.
     * @param tokenAddress The ERC20 token address.
     *
     * It must preserve amounts, so if some amount of tokens is transferred to
     * an address, then later the same amount must be transferrable from that address.
     * Tokens which rebase the holders' balances, collect taxes on transfers,
     * or impose any restrictions on holding or transferring tokens are not supported.
     * If you use such tokens in the protocol, they can get stuck or lost.
     * @param currentReceivers The beams receivers that were set in the last beams update.
     * Pass an empty array if this is the first update.
     *
     * **Tip**: you might want to use `BeamsSubgraphClient.getCurrentBeamsReceivers` to easily retrieve the list of current receivers.
     * @param newReceivers The new beams receivers (max `100`).
     * Duplicate receivers are not allowed and will only be processed once.
     * Pass an empty array  if you want to clear all receivers.
     * @param transferToAddress The address to send funds to in case of decreasing balance.
     * @param balanceDelta The beams balance change to be applied:
     * - Positive to add funds to the beams balance.
     * - Negative to remove funds from the beams balance.
     * - `0` to leave beams balance as is (default value).
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if any of the required parameters is missing.
     * @throws {@link BeamsErrors.addressError} if `tokenAddress` or `transferToAddress` is not valid.
     * @throws {@link BeamsErrors.argumentError} if `currentReceivers`' or `newReceivers`' count exceeds the max allowed beams receivers.
     * @throws {@link BeamsErrors.beamsReceiverError} if any of the `currentReceivers` or the `newReceivers` is not valid.
     * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
     * @throws {@link BeamsErrors.beamsReceiverConfigError} if any of the receivers' configuration is not valid.
     */
    setBeams(tokenId: string, tokenAddress: string, currentReceivers: BeamsReceiverStruct$2[], newReceivers: BeamsReceiverStruct$2[], transferToAddress: string, balanceDelta?: BigNumberish): Promise<ContractTransaction>;
    /**
     * Sets the account's Splits configuration.
     *
     * The caller (client's `signer`) must be the owner of the `tokenId` or be approved to use it.
     * @param tokenId The ID of the token representing the configured account.
     * @param receivers The splits receivers (max `200`).
     * Each splits receiver will be getting `weight / TOTAL_SPLITS_WEIGHT` share of the funds.
     * Duplicate receivers are not allowed and will only be processed once.
     * Pass an empty array if you want to clear all receivers.
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentMissingError} if `receivers` are missing.
     * @throws {@link BeamsErrors.argumentError} if `receivers`' count exceeds the max allowed splits receivers.
     * @throws {@link BeamsErrors.splitsReceiverError} if any of the `receivers` is not valid.
     */
    setSplits(tokenId: string, receivers: SplitsReceiverStruct$3[]): Promise<ContractTransaction>;
    /**
     * Emits the account's metadata.
     * The key and the value are _not_ standardized by the protocol, it's up to the caller to establish and follow conventions to ensure compatibility with the consumers.
     *
     * The caller (client's `signer`) must be the owner of the `tokenId` or be approved to use it.
     * @param tokenId The ID of the token representing the emitting account.
     * @param userMetadata The list of user metadata. Note that a metadata `key` needs to be 32bytes.
     *
     * @returns A `Promise` which resolves to the contract transaction.
     * @throws {@link BeamsErrors.argumentError} if any of the metadata entries is not valid.
     */
    emitUserMetadata(tokenId: string, userMetadata: UserMetadata[]): Promise<ContractTransaction>;
}

declare const constants: {
    TOTAL_SPLITS_WEIGHT: number;
    MAX_BEAMS_RECEIVERS: number;
    MAX_SPLITS_RECEIVERS: number;
    AMT_PER_SEC_MULTIPLIER: number;
    AMT_PER_SEC_EXTRA_DECIMALS: number;
    ASSOCIATED_APP_KEY: string;
    ASSOCIATED_APP_KEY_BYTES: string;
};

declare namespace Utils {
    namespace Metadata {
        /**
         * Converts a `string` to a `BytesLike` representation.
         *
         * @param key - The `string` to be converted.
         * @returns The converted `BytesLike` representation of the `string`.
         */
        const keyFromString: (key: string) => BytesLike;
        /**
         * Converts a `string` to a hex-encoded `BytesLike` representation.
         *
         * @param value - The `string` to be converted.
         * @returns The hex-encoded `BytesLike` representation of the `string`.
         */
        const valueFromString: (value: string) => BytesLike;
        /**
         * Creates an object containing the `BytesLike` representations of the provided key and value `string`s.
         *
         * @param key - The `string` to be converted to a `BytesLike` key.
         * @param value - The `string` to be converted to a `BytesLike` value.
         * @returns An object containing the `BytesLike` representations of the key and value `string`s.
         */
        const createFromStrings: (key: string, value: string) => {
            key: BytesLike;
            value: BytesLike;
        };
        /**
         * Parses the `UserMetadataStruct` and converts the key and value from `BytesLike` to `string` format.
         *
         * @param userMetadata - The `UserMetadataStruct` containing the key and value in `BytesLike` format.
         * @returns An `object` containing the key and value as `string`s.
         */
        const convertMetadataBytesToString: (userMetadata: UserMetadataStruct$3) => {
            key: string;
            value: string;
        };
    }
    namespace Network {
        const configs: Record<number, NetworkConfig>;
        const SUPPORTED_CHAINS: readonly number[];
        const isSupportedChain: (chainId: number) => boolean;
    }
    namespace Cycle {
        const getInfo: (chainId: number) => CycleInfo;
    }
    namespace Asset {
        /**
         * Returns the ERC20 token address for the given asset.
         * @param  {BigNumberish} assetId The asset ID.
         * @returns The ERC20 token address.
         */
        const getAddressFromId: (assetId: BigNumberish) => string;
        /**
         * Returns the asset ID for the given ERC20 token.
         * @param  {string} tokenAddress The ERC20 token address.
         * @returns The asset ID.
         * @throws {@link BeamsErrors.addressError} if the `tokenAddress` address is not valid.
         */
        const getIdFromAddress: (tokenAddress: string) => bigint;
    }
    namespace BeamsReceiverConfiguration {
        /**
         * Converts a beams receiver configuration object to a `uint256`.
         * @param  {BeamsReceiverConfigDto} beamsReceiverConfig The beams receiver configuration object.
         * @returns The beams receiver configuration as a `uint256`.
         * @throws {@link BeamsErrors.argumentMissingError} if the `beamsReceiverConfig` is missing.
         * @throws {@link BeamsErrors.beamsReceiverConfigError} if the `beamsReceiverConfig` is not valid.
         */
        const toUint256: (beamsReceiverConfig: BeamsReceiverConfig) => bigint;
        /**
         * Converts a `uint256` that represent a beams receiver configuration to an object.
         * @param  {BigNumberish} beamsReceiverConfig The beams receiver configuration as`uint256`.
         * @returns The beams receiver configuration object.
         * @throws {@link BeamsErrors.argumentMissingError} if the `beamsReceiverConfig` is missing.
         * @throws {@link BeamsErrors.argumentError} if the `beamsReceiverConfig` is not valid.
         */
        const fromUint256: (beamsReceiverConfig: BigNumberish) => BeamsReceiverConfig;
    }
}

export { AddressDriverClient, AddressDriverInterface, AddressDriverPresets, AddressDriverTxFactory, BeamsError, BeamsErrorCode, BeamsHistoryStruct, BeamsHubClient, BeamsHubInterface, BeamsHubTxFactory, BeamsReceiver, BeamsReceiverConfig, BeamsReceiverSeenEvent, BeamsReceiverStruct$2 as BeamsReceiverStruct, BeamsSetEvent, BeamsSetEventWithFullReceivers, BeamsState, BeamsSubgraphClient, CallStruct, CallerClient, CallerInterface, CollectableBalance, CollectedEvent, CycleInfo, ERC20TxFactory, GivenEvent, ImmutableSplitsDriverClient, ImmutableSplitsDriverInterface, NFTDriverClient, NFTDriverInterface, NFTDriverPresets, NFTDriverTxFactory, NetworkConfig, NftSubAccount, Preset, ReceivableBalance, ReceivedBeamsEvent, SplitEvent, SplitResult, SplitsEntry, SplitsReceiverStruct$3 as SplitsReceiverStruct, SplittableBalance, SqueezeArgs, SqueezedBeamsEvent, UserAssetConfig, UserMetadata, UserMetadataEntry, UserMetadataStruct$3 as UserMetadataStruct, Utils, constants };
