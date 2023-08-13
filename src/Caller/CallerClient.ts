/* eslint-disable no-dupe-class-members */
import type { Provider } from '@ethersproject/providers';
import type { PopulatedTransaction, ContractTransaction, Signer } from 'ethers';
import type { Preset } from 'src/common/types';
import { BeamsErrors } from '../common/BeamsError';
import type { CallStruct, Caller } from '../../contracts/Caller';
import { validateClientProvider, validateClientSigner } from '../common/validators';
import Utils from '../utils';
import { Caller__factory } from '../../contracts/factories';

/**
 * A generic call executor that increases the flexibility of other contracts' APIs.
 * @see {@link https://github.com/malawadd/beaaam/blob/main/smart-contracts/src/Caller.sol Caller} contract.
 */
export default class CallerClient {
	#caller!: Caller;
	#callerAddress!: string;

	#provider!: Provider;
	/** Returns the client's `provider`. */
	public get provider(): Provider {
		return this.#provider;
	}

	#signer!: Signer;
	/**
	 * Returns the client's `signer`.
	 *
	 * The `signer` is the `provider`'s signer.
	 */
	public get signer(): Signer {
		return this.#signer;
	}

	/** Returns the `Caller` contract address to which the client is connected. */
	public get callerAddress(): string {
		return this.#callerAddress;
	}

	private constructor() {}

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
	public static async create(provider: Provider, signer: Signer, customCallerAddress?: string): Promise<CallerClient> {
		await validateClientProvider(provider, Utils.Network.SUPPORTED_CHAINS);

		if (!signer.provider) {
			// eslint-disable-next-line no-param-reassign
			signer = signer.connect(provider);
		}

		await validateClientSigner(signer, Utils.Network.SUPPORTED_CHAINS);

		const network = await provider.getNetwork();
		const callerAddress = customCallerAddress ?? Utils.Network.configs[network.chainId].CALLER;

		const client = new CallerClient();

		client.#signer = signer;
		client.#provider = provider;
		client.#callerAddress = callerAddress;
		client.#caller = Caller__factory.connect(callerAddress, signer);

		return client;
	}

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
	public async callBatched(calls: CallStruct[]): Promise<ContractTransaction>;
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
	public async callBatched(calls: Preset): Promise<ContractTransaction>;
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
	public async callBatched(calls: PopulatedTransaction[]): Promise<ContractTransaction>;
	public async callBatched(calls: CallStruct[] | Preset | PopulatedTransaction[]): Promise<ContractTransaction> {
		let transformedCalls: CallStruct[];

		if (Array.isArray(calls)) {
			const firstCall = calls[0];

			if (calls.length === 0) {
				throw BeamsErrors.argumentError('Empty input array is not allowed.');
			}

			if ('target' in firstCall) {
				transformedCalls = calls as CallStruct[];
			} else if ('to' in firstCall) {
				transformedCalls = (calls as PopulatedTransaction[]).map((populatedTransaction) => {
					if (!populatedTransaction.to || !populatedTransaction.data) {
						throw BeamsErrors.argumentError(
							'Invalid PopulatedTransaction object. "to", "data", and "value" properties are required.'
						);
					}

					return {
						target: populatedTransaction.to,
						data: populatedTransaction.data,
						value: populatedTransaction.value ?? 0
					};
				});
			} else {
				throw BeamsErrors.argumentError(
					'Invalid input type. Expected an array of CallStruct objects or PopulatedTransaction objects.'
				);
			}
		} else {
			throw BeamsErrors.argumentError(
				'Invalid input type. Expected an array containing CallStruct[], Preset, or PopulatedTransaction[].'
			);
		}

		transformedCalls = transformedCalls.map((call) => ({
			...call,
			value: call.value ?? 0
		}));
		return this.#caller.callBatched(transformedCalls);
	}
}
