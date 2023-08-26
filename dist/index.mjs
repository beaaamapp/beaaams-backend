var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/AddressDriver/AddressDriverPresets.ts
import { BigNumber as BigNumber3 } from "ethers";

// src/common/internals.ts
import { BigNumber } from "ethers";

// src/common/BeamsError.ts
var BeamsErrorCode = /* @__PURE__ */ ((BeamsErrorCode2) => {
  BeamsErrorCode2["MISSING_SIGNER"] = "MISSING_SIGNER";
  BeamsErrorCode2["INVALID_ADDRESS"] = "INVALID_ADDRESS";
  BeamsErrorCode2["INVALID_ARGUMENT"] = "INVALID_ARGUMENT";
  BeamsErrorCode2["MISSING_ARGUMENT"] = "MISSING_ARGUMENT";
  BeamsErrorCode2["TX_EVENT_NOT_FOUND"] = "TX_EVENT_NOT_FOUND";
  BeamsErrorCode2["UNSUPPORTED_NETWORK"] = "UNSUPPORTED_NETWORK";
  BeamsErrorCode2["SUBGRAPH_QUERY_ERROR"] = "SUBGRAPH_QUERY_ERROR";
  BeamsErrorCode2["INVALID_BEAMS_RECEIVER"] = "INVALID_BEAMS_RECEIVER";
  BeamsErrorCode2["INITIALIZATION_FAILURE"] = "INITIALIZATION_FAILURE";
  BeamsErrorCode2["INVALID_SPLITS_RECEIVER"] = "INVALID_SPLITS_RECEIVER";
  BeamsErrorCode2["INVALID_BEAMS_RECEIVER_CONFIG"] = "INVALID_BEAMS_RECEIVER_CONFIG";
  return BeamsErrorCode2;
})(BeamsErrorCode || {});
var BeamsError = class extends Error {
  constructor(code, message, context) {
    super(message);
    this.code = code;
    this.context = context;
  }
};
var BeamsErrors = class {
};
BeamsErrors.initializationError = (message) => new BeamsError("INITIALIZATION_FAILURE" /* INITIALIZATION_FAILURE */, message);
BeamsErrors.addressError = (message, address) => new BeamsError("INVALID_ADDRESS" /* INVALID_ADDRESS */, message, {
  invalidAddress: address
});
BeamsErrors.txEventNotFound = (message, eventName, txReceipt) => new BeamsError("TX_EVENT_NOT_FOUND" /* TX_EVENT_NOT_FOUND */, message, {
  eventName,
  txReceipt
});
BeamsErrors.signerMissingError = (message = "Tried to perform an operation that requires a signer but a signer was not found.") => new BeamsError("MISSING_SIGNER" /* MISSING_SIGNER */, message);
BeamsErrors.argumentMissingError = (message, argName) => new BeamsError("MISSING_ARGUMENT" /* MISSING_ARGUMENT */, message, {
  missingArgumentName: argName
});
BeamsErrors.unsupportedNetworkError = (message, chainId) => new BeamsError("UNSUPPORTED_NETWORK" /* UNSUPPORTED_NETWORK */, message, {
  unsupportedChainId: chainId
});
BeamsErrors.argumentError = (message, argName, argValue) => new BeamsError(
  "INVALID_ARGUMENT" /* INVALID_ARGUMENT */,
  message,
  argName ? {
    invalidArgument: { name: argName, value: argValue }
  } : void 0
);
BeamsErrors.splitsReceiverError = (message, invalidPropertyName, invalidPropertyValue) => new BeamsError("INVALID_SPLITS_RECEIVER" /* INVALID_SPLITS_RECEIVER */, message, {
  invalidProperty: {
    name: invalidPropertyName,
    value: invalidPropertyValue
  }
});
BeamsErrors.beamsReceiverError = (message, invalidPropertyName, invalidPropertyValue) => new BeamsError("INVALID_BEAMS_RECEIVER" /* INVALID_BEAMS_RECEIVER */, message, {
  invalidProperty: {
    name: invalidPropertyName,
    value: invalidPropertyValue
  }
});
BeamsErrors.beamsReceiverConfigError = (message, invalidPropertyName, invalidPropertyValue) => new BeamsError("INVALID_BEAMS_RECEIVER_CONFIG" /* INVALID_BEAMS_RECEIVER_CONFIG */, message, {
  invalidProperty: {
    name: invalidPropertyName,
    value: invalidPropertyValue
  }
});
BeamsErrors.subgraphQueryError = (message) => new BeamsError("SUBGRAPH_QUERY_ERROR" /* SUBGRAPH_QUERY_ERROR */, message);

// src/common/internals.ts
var nameOf = (obj) => Object.keys(obj)[0];
var isNullOrUndefined = (obj) => obj == null;
var formatBeamsReceivers = (receivers) => {
  const uniqueReceivers = receivers.reduce((unique, o) => {
    if (!unique.some(
      (obj) => obj.userId === o.userId && BigNumber.from(obj.config).eq(BigNumber.from(o.config))
    )) {
      unique.push(o);
    }
    return unique;
  }, []);
  const sortedReceivers = uniqueReceivers.sort(
    (a, b) => BigNumber.from(a.userId).gt(BigNumber.from(b.userId)) ? 1 : BigNumber.from(a.userId).lt(BigNumber.from(b.userId)) ? -1 : BigNumber.from(a.config).gt(BigNumber.from(b.config)) ? 1 : BigNumber.from(a.config).lt(BigNumber.from(b.config)) ? -1 : 0
  );
  return sortedReceivers;
};
var formatSplitReceivers = (receivers) => {
  const uniqueReceivers = receivers.reduce((unique, o) => {
    if (!unique.some((obj) => obj.userId === o.userId && obj.weight === o.weight)) {
      unique.push(o);
    }
    return unique;
  }, []);
  const sortedReceivers = uniqueReceivers.sort(
    (a, b) => BigNumber.from(a.userId).gt(BigNumber.from(b.userId)) ? 1 : BigNumber.from(a.userId).lt(BigNumber.from(b.userId)) ? -1 : 0
  );
  return sortedReceivers;
};
function ensureSignerExists(signer) {
  if (isNullOrUndefined(signer)) {
    throw BeamsErrors.signerMissingError();
  }
}
var safeBeamsTx = (tx) => {
  if (isNullOrUndefined(tx.value)) {
    tx.value = BigNumber.from(0);
  }
  return tx;
};

// contracts/factories/AddressDriver__factory.ts
import { Contract, utils } from "ethers";
var _abi = [
  {
    inputs: [
      {
        internalType: "contract BeamsHub",
        name: "_beamsHub",
        type: "address"
      },
      {
        internalType: "address",
        name: "forwarder",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_driverId",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currentAdmin",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdminProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPausers",
    outputs: [
      {
        internalType: "address[]",
        name: "pausersList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddr",
        type: "address"
      }
    ],
    name: "calcUserId",
    outputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "address",
        name: "transferTo",
        type: "address"
      }
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "beamsHub",
    outputs: [
      {
        internalType: "contract BeamsHub",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "driverId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "emitUserMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "receiver",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "give",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "grantPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "isPauser",
    outputs: [
      {
        internalType: "bool",
        name: "isAddrPauser",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address"
      }
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "proposeNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proposedAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "revokePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      },
      {
        internalType: "int128",
        name: "balanceDelta",
        type: "int128"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "newReceivers",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "maxEndHint1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxEndHint2",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "transferTo",
        type: "address"
      }
    ],
    name: "setBeams",
    outputs: [
      {
        internalType: "int128",
        name: "realBalanceDelta",
        type: "int128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      }
    ],
    name: "setSplits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var AddressDriver__factory = class {
  static createInterface() {
    return new utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new Contract(address, _abi, signerOrProvider);
  }
};
AddressDriver__factory.abi = _abi;

// contracts/factories/BeamsHub__factory.ts
import { Contract as Contract2, utils as utils2 } from "ethers";
var _abi2 = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "cycleSecs_",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "Collectable",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "collected",
        type: "uint128"
      }
    ],
    name: "Collected",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "BeamsConfig",
        name: "config",
        type: "uint256"
      }
    ],
    name: "BeamsReceiverSeen",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "beamsHistoryHash",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "balance",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "maxEnd",
        type: "uint32"
      }
    ],
    name: "BeamsSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldDriverAddr",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newDriverAddr",
        type: "address"
      }
    ],
    name: "DriverAddressUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      },
      {
        indexed: true,
        internalType: "address",
        name: "driverAddr",
        type: "address"
      }
    ],
    name: "DriverRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "receiver",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "Given",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currentAdmin",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdminProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "receivableCycles",
        type: "uint32"
      }
    ],
    name: "ReceivedBeams",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "receiver",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "Split",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "weight",
        type: "uint32"
      }
    ],
    name: "SplitsReceiverSeen",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      }
    ],
    name: "SplitsSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "senderId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "beamsHistoryHashes",
        type: "bytes32[]"
      }
    ],
    name: "SqueezedBeams",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "value",
        type: "bytes"
      }
    ],
    name: "UserMetadataEmitted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "Withdrawn",
    type: "event"
  },
  {
    inputs: [],
    name: "AMT_PER_SEC_EXTRA_DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "AMT_PER_SEC_MULTIPLIER",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DRIVER_ID_OFFSET",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_BEAMS_RECEIVERS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_SPLITS_RECEIVERS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_TOTAL_BALANCE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "TOTAL_SPLITS_WEIGHT",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPausers",
    outputs: [
      {
        internalType: "address[]",
        name: "pausersList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "timestamp",
        type: "uint32"
      }
    ],
    name: "balanceAt",
    outputs: [
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "collectable",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "cycleSecs",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "beamsState",
    outputs: [
      {
        internalType: "bytes32",
        name: "beamsHash",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "beamsHistoryHash",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "updateTime",
        type: "uint32"
      },
      {
        internalType: "uint128",
        name: "balance",
        type: "uint128"
      },
      {
        internalType: "uint32",
        name: "maxEnd",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      }
    ],
    name: "driverAddress",
    outputs: [
      {
        internalType: "address",
        name: "driverAddr",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "emitUserMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "receiver",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "give",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "grantPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      }
    ],
    name: "hashBeams",
    outputs: [
      {
        internalType: "bytes32",
        name: "beamsHash",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "oldBeamsHistoryHash",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "beamsHash",
        type: "bytes32"
      },
      {
        internalType: "uint32",
        name: "updateTime",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxEnd",
        type: "uint32"
      }
    ],
    name: "hashBeamsHistory",
    outputs: [
      {
        internalType: "bytes32",
        name: "beamsHistoryHash",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      }
    ],
    name: "hashSplits",
    outputs: [
      {
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "isPauser",
    outputs: [
      {
        internalType: "bool",
        name: "isAddrPauser",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "minAmtPerSec",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextDriverId",
    outputs: [
      {
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "proposeNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proposedAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "receivableBeamsCycles",
    outputs: [
      {
        internalType: "uint32",
        name: "cycles",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "maxCycles",
        type: "uint32"
      }
    ],
    name: "receiveBeams",
    outputs: [
      {
        internalType: "uint128",
        name: "receivedAmt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "maxCycles",
        type: "uint32"
      }
    ],
    name: "receiveBeamsResult",
    outputs: [
      {
        internalType: "uint128",
        name: "receivableAmt",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "driverAddr",
        type: "address"
      }
    ],
    name: "registerDriver",
    outputs: [
      {
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "revokePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      },
      {
        internalType: "int128",
        name: "balanceDelta",
        type: "int128"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "newReceivers",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "maxEndHint1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxEndHint2",
        type: "uint32"
      }
    ],
    name: "setBeams",
    outputs: [
      {
        internalType: "int128",
        name: "realBalanceDelta",
        type: "int128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      }
    ],
    name: "setSplits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      }
    ],
    name: "split",
    outputs: [
      {
        internalType: "uint128",
        name: "collectableAmt",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "splitAmt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      },
      {
        internalType: "uint128",
        name: "amount",
        type: "uint128"
      }
    ],
    name: "splitResult",
    outputs: [
      {
        internalType: "uint128",
        name: "collectableAmt",
        type: "uint128"
      },
      {
        internalType: "uint128",
        name: "splitAmt",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      }
    ],
    name: "splitsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "currSplitsHash",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "splittable",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "senderId",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "historyHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "beamsHash",
            type: "bytes32"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "userId",
                type: "uint256"
              },
              {
                internalType: "BeamsConfig",
                name: "config",
                type: "uint256"
              }
            ],
            internalType: "struct BeamsReceiver[]",
            name: "receivers",
            type: "tuple[]"
          },
          {
            internalType: "uint32",
            name: "updateTime",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "maxEnd",
            type: "uint32"
          }
        ],
        internalType: "struct BeamsHistory[]",
        name: "beamsHistory",
        type: "tuple[]"
      }
    ],
    name: "squeezeBeams",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "senderId",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "historyHash",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "beamsHash",
            type: "bytes32"
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "userId",
                type: "uint256"
              },
              {
                internalType: "BeamsConfig",
                name: "config",
                type: "uint256"
              }
            ],
            internalType: "struct BeamsReceiver[]",
            name: "receivers",
            type: "tuple[]"
          },
          {
            internalType: "uint32",
            name: "updateTime",
            type: "uint32"
          },
          {
            internalType: "uint32",
            name: "maxEnd",
            type: "uint32"
          }
        ],
        internalType: "struct BeamsHistory[]",
        name: "beamsHistory",
        type: "tuple[]"
      }
    ],
    name: "squeezeBeamsResult",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      }
    ],
    name: "totalBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "driverId",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "newDriverAddr",
        type: "address"
      }
    ],
    name: "updateDriverAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var BeamsHub__factory = class {
  static createInterface() {
    return new utils2.Interface(_abi2);
  }
  static connect(address, signerOrProvider) {
    return new Contract2(address, _abi2, signerOrProvider);
  }
};
BeamsHub__factory.abi = _abi2;

// contracts/factories/Caller__factory.ts
import { Contract as Contract3, utils as utils3 } from "ethers";
var _abi3 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "authorized",
        type: "address"
      }
    ],
    name: "Authorized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "authorized",
        type: "address"
      }
    ],
    name: "CalledAs",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256"
      }
    ],
    name: "CalledSigned",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newNonce",
        type: "uint256"
      }
    ],
    name: "NonceSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "unauthorized",
        type: "address"
      }
    ],
    name: "Unauthorized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "UnauthorizedAll",
    type: "event"
  },
  {
    inputs: [],
    name: "MAX_NONCE_INCREASE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "allAuthorized",
    outputs: [
      {
        internalType: "address[]",
        name: "authorized",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "callAs",
    outputs: [
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        internalType: "struct Call[]",
        name: "calls",
        type: "tuple[]"
      }
    ],
    name: "callBatched",
    outputs: [
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "target",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "sv",
        type: "bytes32"
      }
    ],
    name: "callSigned",
    outputs: [
      {
        internalType: "bytes",
        name: "returnData",
        type: "bytes"
      }
    ],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "authorized",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address"
      }
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "nonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newNonce",
        type: "uint256"
      }
    ],
    name: "setNonce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "unauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unauthorizeAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var Caller__factory = class {
  static createInterface() {
    return new utils3.Interface(_abi3);
  }
  static connect(address, signerOrProvider) {
    return new Contract3(address, _abi3, signerOrProvider);
  }
};
Caller__factory.abi = _abi3;

// contracts/factories/IERC20__factory.ts
import { Contract as Contract4, utils as utils4 } from "ethers";
var _abi4 = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var IERC20__factory = class {
  static createInterface() {
    return new utils4.Interface(_abi4);
  }
  static connect(address, signerOrProvider) {
    return new Contract4(address, _abi4, signerOrProvider);
  }
};
IERC20__factory.abi = _abi4;

// contracts/factories/ImmutableSplitsDriver__factory.ts
import { Contract as Contract5, utils as utils5 } from "ethers";
var _abi5 = [
  {
    inputs: [
      {
        internalType: "contract BeamsHub",
        name: "_beamsHub",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_driverId",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "receiversHash",
        type: "bytes32"
      }
    ],
    name: "CreatedSplits",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currentAdmin",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdminProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPausers",
    outputs: [
      {
        internalType: "address[]",
        name: "pausersList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "createSplits",
    outputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "beamsHub",
    outputs: [
      {
        internalType: "contract BeamsHub",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "driverId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "grantPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "isPauser",
    outputs: [
      {
        internalType: "bool",
        name: "isAddrPauser",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "nextUserId",
    outputs: [
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "proposeNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proposedAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "revokePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSplitsWeight",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var ImmutableSplitsDriver__factory = class {
  static createInterface() {
    return new utils5.Interface(_abi5);
  }
  static connect(address, signerOrProvider) {
    return new Contract5(
      address,
      _abi5,
      signerOrProvider
    );
  }
};
ImmutableSplitsDriver__factory.abi = _abi5;

// contracts/factories/NFTDriver__factory.ts
import { Contract as Contract6, utils as utils6 } from "ethers";
var _abi6 = [
  {
    inputs: [
      {
        internalType: "contract BeamsHub",
        name: "_beamsHub",
        type: "address"
      },
      {
        internalType: "address",
        name: "forwarder",
        type: "address"
      },
      {
        internalType: "uint32",
        name: "_driverId",
        type: "uint32"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currentAdmin",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "NewAdminProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserGranted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "PauserRevoked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    inputs: [],
    name: "acceptAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "allPausers",
    outputs: [
      {
        internalType: "address[]",
        name: "pausersList",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "salt",
        type: "uint64"
      }
    ],
    name: "calcTokenIdWithSalt",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "address",
        name: "transferTo",
        type: "address"
      }
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "beamsHub",
    outputs: [
      {
        internalType: "contract BeamsHub",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "driverId",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "emitUserMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "receiver",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        internalType: "uint128",
        name: "amt",
        type: "uint128"
      }
    ],
    name: "give",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "grantPauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "isPauser",
    outputs: [
      {
        internalType: "bool",
        name: "isAddrPauser",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "salt",
        type: "uint64"
      }
    ],
    name: "isSaltUsed",
    outputs: [
      {
        internalType: "bool",
        name: "isUsed",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address"
      }
    ],
    name: "isTrustedForwarder",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "salt",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "mintWithSalt",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "nextTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "proposeNewAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "proposedAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pauser",
        type: "address"
      }
    ],
    name: "revokePauser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "safeMint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "salt",
        type: "uint64"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32"
          },
          {
            internalType: "bytes",
            name: "value",
            type: "bytes"
          }
        ],
        internalType: "struct UserMetadata[]",
        name: "userMetadata",
        type: "tuple[]"
      }
    ],
    name: "safeMintWithSalt",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "contract IERC20",
        name: "erc20",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "currReceivers",
        type: "tuple[]"
      },
      {
        internalType: "int128",
        name: "balanceDelta",
        type: "int128"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "BeamsConfig",
            name: "config",
            type: "uint256"
          }
        ],
        internalType: "struct BeamsReceiver[]",
        name: "newReceivers",
        type: "tuple[]"
      },
      {
        internalType: "uint32",
        name: "maxEndHint1",
        type: "uint32"
      },
      {
        internalType: "uint32",
        name: "maxEndHint2",
        type: "uint32"
      },
      {
        internalType: "address",
        name: "transferTo",
        type: "address"
      }
    ],
    name: "setBeams",
    outputs: [
      {
        internalType: "int128",
        name: "realBalanceDelta",
        type: "int128"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "weight",
            type: "uint32"
          }
        ],
        internalType: "struct SplitsReceiver[]",
        name: "receivers",
        type: "tuple[]"
      }
    ],
    name: "setSplits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      }
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
var NFTDriver__factory = class {
  static createInterface() {
    return new utils6.Interface(_abi6);
  }
  static connect(address, signerOrProvider) {
    return new Contract6(address, _abi6, signerOrProvider);
  }
};
NFTDriver__factory.abi = _abi6;

// src/common/validators.ts
import { ethers } from "ethers";
var MAX_BEAMS_RECEIVERS = 100;
var MAX_SPLITS_RECEIVERS = 200;
var validateAddress = (address) => {
  if (!ethers.utils.isAddress(address)) {
    throw BeamsErrors.addressError(`Address validation failed: address '${address}' is not valid.`, address);
  }
};
var validateBeamsReceiverConfig = (beamsReceiverConfig) => {
  if (!beamsReceiverConfig) {
    throw BeamsErrors.argumentMissingError(
      `Beams receiver config validation failed: '${nameOf({ beamsReceiverConfig })}' is missing.`,
      nameOf({ beamsReceiverConfig })
    );
  }
  const { beamId, start, duration, amountPerSec } = beamsReceiverConfig;
  if (isNullOrUndefined(beamId) || beamId < 0) {
    throw BeamsErrors.beamsReceiverConfigError(
      `Beams receiver config validation failed: '${nameOf({ beamId })}' must be greater than or equal to 0`,
      nameOf({ start }),
      start
    );
  }
  if (isNullOrUndefined(start) || start < 0) {
    throw BeamsErrors.beamsReceiverConfigError(
      `Beams receiver config validation failed: '${nameOf({ start })}' must be greater than or equal to 0`,
      nameOf({ start }),
      start
    );
  }
  if (isNullOrUndefined(duration) || duration < 0) {
    throw BeamsErrors.beamsReceiverConfigError(
      `Beams receiver config validation failed: '${nameOf({ duration })}' must be greater than or equal to 0`,
      nameOf({ duration }),
      duration
    );
  }
  if (isNullOrUndefined(amountPerSec) || amountPerSec <= 0) {
    throw BeamsErrors.beamsReceiverConfigError(
      `Beams receiver config validation failed: '${nameOf({ amountPerSec })}' must be greater than 0.`,
      nameOf({ amountPerSec }),
      amountPerSec
    );
  }
};
var validateBeamsReceivers = (receivers) => {
  if (!receivers) {
    throw BeamsErrors.argumentMissingError(
      `Beams receivers validation failed: '${nameOf({ receivers })}' is missing.`,
      nameOf({ receivers })
    );
  }
  if (receivers.length > MAX_BEAMS_RECEIVERS) {
    throw BeamsErrors.argumentError(
      `Beams receivers validation failed: max number of beams receivers exceeded. Max allowed ${MAX_BEAMS_RECEIVERS} but were ${receivers.length}.`,
      nameOf({ receivers }),
      receivers
    );
  }
  if (receivers.length) {
    receivers.forEach((receiver) => {
      const { userId, config } = receiver;
      if (isNullOrUndefined(userId)) {
        throw BeamsErrors.beamsReceiverError(
          `Beams receivers validation failed: '${nameOf({ userId })}' is missing.`,
          nameOf({ userId }),
          userId
        );
      }
      if (isNullOrUndefined(config)) {
        throw BeamsErrors.beamsReceiverError(
          `Beams receivers validation failed: '${nameOf({ config })}' is missing.`,
          nameOf({ config }),
          config
        );
      }
      validateBeamsReceiverConfig(config);
    });
  }
};
var validateSplitsReceivers = (receivers) => {
  if (!receivers) {
    throw BeamsErrors.argumentMissingError(
      `Splits receivers validation failed: '${nameOf({ receivers })}' is missing.`,
      nameOf({ receivers })
    );
  }
  if (receivers.length > MAX_SPLITS_RECEIVERS) {
    throw BeamsErrors.argumentError(
      `Splits receivers validation failed: max number of beams receivers exceeded. Max allowed ${MAX_SPLITS_RECEIVERS} but were ${receivers.length}.`,
      nameOf({ receivers }),
      receivers
    );
  }
  if (receivers.length) {
    receivers.forEach((receiver) => {
      const { userId, weight } = receiver;
      if (!userId) {
        throw BeamsErrors.splitsReceiverError(
          `Splits receivers validation failed: '${nameOf({ userId })}' is missing.`,
          nameOf({ userId }),
          userId
        );
      }
      if (isNullOrUndefined(weight)) {
        throw BeamsErrors.splitsReceiverError(
          `Splits receivers validation failed: '${nameOf({ weight })}' is missing.`,
          nameOf({ weight }),
          weight
        );
      }
      if (weight <= 0) {
        throw BeamsErrors.splitsReceiverError(
          `Splits receiver config validation failed: : '${nameOf({ weight })}' must be greater than 0.`,
          nameOf({ weight }),
          weight
        );
      }
    });
  }
};
var validateClientProvider = async (provider, supportedChains) => {
  if (!provider) {
    throw BeamsErrors.initializationError(`The provider is missing.`);
  }
  const network = await provider.getNetwork();
  if (!supportedChains.includes(network == null ? void 0 : network.chainId)) {
    throw BeamsErrors.initializationError(
      `The provider is connected to an unsupported network with chain ID '${network == null ? void 0 : network.chainId}' ('${network == null ? void 0 : network.name}'). Supported chain IDs are: ${supportedChains}.`
    );
  }
};
var validateClientSigner = async (signer, supportedChains) => {
  if (!signer) {
    throw BeamsErrors.initializationError(`The singer is missing.`);
  }
  const address = await signer.getAddress();
  if (!ethers.utils.isAddress(address)) {
    throw BeamsErrors.initializationError(`Signer's address ('${address}') is not valid.`);
  }
  const { provider } = signer;
  if (!provider) {
    throw BeamsErrors.initializationError(`The signer has no provider.`);
  }
  const network = await provider.getNetwork();
  if (!supportedChains.includes(network == null ? void 0 : network.chainId)) {
    throw BeamsErrors.initializationError(
      `The signer's provider is connected to an unsupported network with chain ID '${network == null ? void 0 : network.chainId}' ('${network == null ? void 0 : network.name}'). Supported chain IDs are: ${supportedChains}.`
    );
  }
};
var validateSetBeamsInput = (tokenAddress, currentReceivers, newReceivers, transferToAddress, balanceDelta) => {
  validateAddress(tokenAddress);
  validateAddress(transferToAddress);
  validateBeamsReceivers(newReceivers);
  validateBeamsReceivers(currentReceivers);
  if (isNullOrUndefined(balanceDelta)) {
    throw BeamsErrors.argumentMissingError(
      `Could not set beams: '${nameOf({ balanceDelta })}' is missing.`,
      nameOf({ balanceDelta })
    );
  }
};
var validateEmitUserMetadataInput = (metadata) => {
  if (!metadata) {
    throw BeamsErrors.argumentError(`Invalid user metadata: '${nameOf({ metadata })}' is missing.`);
  }
  metadata.forEach((meta) => {
    const { key, value } = meta;
    if (!key) {
      throw BeamsErrors.argumentError(`Invalid user metadata: '${nameOf({ key })}' is missing.`);
    }
    if (!value) {
      throw BeamsErrors.argumentError(`Invalid user metadata: '${nameOf({ value })}' is missing.`);
    }
  });
};
var validateReceiveBeamsInput = (userId, tokenAddress, maxCycles) => {
  validateAddress(tokenAddress);
  if (isNullOrUndefined(userId)) {
    throw BeamsErrors.argumentMissingError(
      `Could not receive beams: '${nameOf({ userId })}' is missing.`,
      nameOf({ userId })
    );
  }
  if (!maxCycles || maxCycles < 0) {
    throw BeamsErrors.argumentError(
      `Could not receive beams: '${nameOf({ maxCycles })}' must be greater than 0.`,
      nameOf({ maxCycles }),
      maxCycles
    );
  }
};
var validateSplitInput = (userId, tokenAddress, currentReceivers) => {
  validateAddress(tokenAddress);
  validateSplitsReceivers(currentReceivers);
  if (isNullOrUndefined(userId)) {
    throw BeamsErrors.argumentMissingError(`Could not split: '${nameOf({ userId })}' is missing.`, nameOf({ userId }));
  }
};
var validateCollectInput = (tokenAddress, transferToAddress) => {
  validateAddress(tokenAddress);
  validateAddress(transferToAddress);
};
var validateSqueezeBeamsInput = (userId, tokenAddress, senderId, historyHash, beamsHistory) => {
  validateAddress(tokenAddress);
  if (!userId) {
    throw BeamsErrors.argumentError(`Invalid input for squeezing: '${nameOf({ userId })}' is missing.`);
  }
  if (!senderId) {
    throw BeamsErrors.argumentError(`Invalid input for squeezing: '${nameOf({ senderId })}' is missing.`);
  }
  if (!historyHash) {
    throw BeamsErrors.argumentError(`Invalid input for squeezing: '${nameOf({ historyHash })}' is missing.`);
  }
  if (!beamsHistory) {
    throw BeamsErrors.argumentError(`Invalid input for squeezing: '${nameOf({ beamsHistory })}' is missing.`);
  }
};

// src/utils.ts
import { BigNumber as BigNumber2, ethers as ethers2 } from "ethers";
var Utils;
((Utils2) => {
  let Metadata;
  ((Metadata2) => {
    Metadata2.keyFromString = (key) => ethers2.utils.formatBytes32String(key);
    Metadata2.valueFromString = (value) => ethers2.utils.hexlify(ethers2.utils.toUtf8Bytes(value));
    Metadata2.createFromStrings = (key, value) => ({
      key: Metadata2.keyFromString(key),
      value: Metadata2.valueFromString(value)
    });
    Metadata2.convertMetadataBytesToString = (userMetadata) => {
      if (!ethers2.utils.isBytesLike(userMetadata == null ? void 0 : userMetadata.key) || !ethers2.utils.isBytesLike(userMetadata == null ? void 0 : userMetadata.value)) {
        throw BeamsErrors.argumentError(
          `Invalid key-value user metadata pair: key or value is not a valid BytesLike object.`
        );
      }
      return {
        key: ethers2.utils.parseBytes32String(userMetadata.key),
        value: ethers2.utils.toUtf8String(userMetadata.value)
      };
    };
  })(Metadata = Utils2.Metadata || (Utils2.Metadata = {}));
  let Network;
  ((Network2) => {
    Network2.configs = {
      84531: {
        CHAIN: "base-goerli",
        DEPLOYMENT_TIME: "2023-08-05T17:25:38+00:00",
        COMMIT_HASH: "d6711ef9c9eee8fd9c6e6c19ba7609e64f204663",
        WALLET: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        WALLET_NONCE: "4",
        DEPLOYER: "0x16de95d9199Fceb3546565909eB52a4726B14311",
        BEAMS_HUB: "0x13A44B35554AbD701158c9877510Eee38870f85E",
        BEAMS_HUB_CYCLE_SECONDS: "604800",
        BEAMS_HUB_LOGIC: "0x3BbF4dA7457253cB05D517340cC436f0aAfED9Db",
        BEAMS_HUB_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        CALLER: "0x091fb6A649ee93812458cFD269e7Bf6DE995039b",
        ADDRESS_DRIVER: "0xeC93173931E6545b017Cda824Deca8445045f53e",
        ADDRESS_DRIVER_LOGIC: "0x7dC2e157E123a1a3dEf9c354b3a4B4dE2d7b5755",
        ADDRESS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        ADDRESS_DRIVER_ID: "0",
        NFT_DRIVER: "0x5AE787F9C326E05cBe7E0f652eEDa79182928675",
        NFT_DRIVER_LOGIC: "0x2BA2C0f36aF75e614D5733A8106143C441bDa9ea",
        NFT_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        NFT_DRIVER_ID: "1",
        IMMUTABLE_SPLITS_DRIVER: "0x69aa68Bb2B1144B27327B8Eb6fBAd47E272c0FBF",
        IMMUTABLE_SPLITS_DRIVER_LOGIC: "0x12a9a3cA1B696f3BEcEf0E77bCd527557af24EA3",
        IMMUTABLE_SPLITS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        IMMUTABLE_SPLITS_DRIVER_ID: "2",
        SUBGRAPH_URL: "https://api.studio.thegraph.com/query/50446/beam/v0.0.6"
      },
      420: {
        CHAIN: "optimism-goerli",
        DEPLOYMENT_TIME: "2023-08-11T18:59:59+00:00",
        COMMIT_HASH: "04a422c4970cc132f8084635743b9d39861e4c3d",
        WALLET: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        WALLET_NONCE: "7",
        DEPLOYER: "0xa09861C51676CF0fB34b22F8e0199A507D8a26EA",
        BEAMS_HUB: "0x00FA9D90FF061EF57214524FDf1744B5670dC214",
        BEAMS_HUB_CYCLE_SECONDS: "604800",
        BEAMS_HUB_LOGIC: "0x0656c5FDc1f5DdDc9e136F2727467B2d396AFf26",
        BEAMS_HUB_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        CALLER: "0x8628E24C4011d585DD2534CFBE97103a460dFec3",
        ADDRESS_DRIVER: "0xB9C9e6A54848A278a1601428Ae66ec693c6f4F29",
        ADDRESS_DRIVER_LOGIC: "0x996f34972231111313Aa93785C57D9a82A9C150B",
        ADDRESS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        ADDRESS_DRIVER_ID: "0",
        NFT_DRIVER: "0xb0BAF324630e79CD7351ADc81B40b60Ca70792b7",
        NFT_DRIVER_LOGIC: "0x57f33756637f9BCc67794fd6d913971Ce69a451d",
        NFT_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        NFT_DRIVER_ID: "1",
        IMMUTABLE_SPLITS_DRIVER: "0xC3688797ebBe9f39E82Ee4A17CDec96d068A7b57",
        IMMUTABLE_SPLITS_DRIVER_LOGIC: "0x0E81BC2B65FA49920a607925E8bdC52E4275bcB8",
        IMMUTABLE_SPLITS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        IMMUTABLE_SPLITS_DRIVER_ID: "2",
        SUBGRAPH_URL: "https://api.studio.thegraph.com/query/50446/beam-optest/v0.0.6"
      },
      999: {
        CHAIN: "zora",
        DEPLOYMENT_TIME: "2023-08-11T18:40:43+00:00",
        COMMIT_HASH: "04a422c4970cc132f8084635743b9d39861e4c3d",
        WALLET: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        WALLET_NONCE: "3",
        DEPLOYER: "0x804BCb3B87F93Ec42B672cda3f88A1978d6e884F",
        BEAMS_HUB: "0x09d380C508b22647A37Bc47f87721D3cA2448653",
        BEAMS_HUB_CYCLE_SECONDS: "604800",
        BEAMS_HUB_LOGIC: "0x7E806888a251CEcfb99c7c44ecfAa434C1E71672",
        BEAMS_HUB_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        CALLER: "0x25b8560d6d9BA0826969EC84721cEd7C391b67dA",
        ADDRESS_DRIVER: "0x1672984Cc98dcb60dc2352A259D29463Dc0043EF",
        ADDRESS_DRIVER_LOGIC: "0x59844bA02DaF13d4856b434EEA64b2ACC5d644b9",
        ADDRESS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        ADDRESS_DRIVER_ID: "0",
        NFT_DRIVER: "0x0779267e5aF92C45e2ecd3BD7dA3652690497170",
        NFT_DRIVER_LOGIC: "0xE03d6b0683B02998136e5971c9b8B1e3F1297959",
        NFT_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        NFT_DRIVER_ID: "1",
        IMMUTABLE_SPLITS_DRIVER: "0x0001de2940E1220be871cf9B1044016A83838Af7",
        IMMUTABLE_SPLITS_DRIVER_LOGIC: "0x08f0C62A7829327DD54Af5dA8Aa1daCBc767A02A",
        IMMUTABLE_SPLITS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        IMMUTABLE_SPLITS_DRIVER_ID: "2",
        SUBGRAPH_URL: "https://api.studio.thegraph.com/query/50446/beam/v0.0.6"
      },
      919: {
        CHAIN: "mode",
        DEPLOYMENT_TIME: "2023-08-11T18:32:02+00:00",
        COMMIT_HASH: "04a422c4970cc132f8084635743b9d39861e4c3d",
        WALLET: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        WALLET_NONCE: "3",
        DEPLOYER: "0x804BCb3B87F93Ec42B672cda3f88A1978d6e884F",
        BEAMS_HUB: "0x09d380C508b22647A37Bc47f87721D3cA2448653",
        BEAMS_HUB_CYCLE_SECONDS: "604800",
        BEAMS_HUB_LOGIC: "0x7E806888a251CEcfb99c7c44ecfAa434C1E71672",
        BEAMS_HUB_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        CALLER: "0x25b8560d6d9BA0826969EC84721cEd7C391b67dA",
        ADDRESS_DRIVER: "0x1672984Cc98dcb60dc2352A259D29463Dc0043EF",
        ADDRESS_DRIVER_LOGIC: "0x59844bA02DaF13d4856b434EEA64b2ACC5d644b9",
        ADDRESS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        ADDRESS_DRIVER_ID: "0",
        NFT_DRIVER: "0x0779267e5aF92C45e2ecd3BD7dA3652690497170",
        NFT_DRIVER_LOGIC: "0xE03d6b0683B02998136e5971c9b8B1e3F1297959",
        NFT_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        NFT_DRIVER_ID: "1",
        IMMUTABLE_SPLITS_DRIVER: "0x0001de2940E1220be871cf9B1044016A83838Af7",
        IMMUTABLE_SPLITS_DRIVER_LOGIC: "0x08f0C62A7829327DD54Af5dA8Aa1daCBc767A02A",
        IMMUTABLE_SPLITS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        IMMUTABLE_SPLITS_DRIVER_ID: "2",
        SUBGRAPH_URL: "https://api.studio.thegraph.com/query/50446/beam/v0.0.6"
      },
      80001: {
        CHAIN: "mumbai",
        DEPLOYMENT_TIME: "22023-08-23T13:52:02+00:00",
        COMMIT_HASH: "04a422c4970cc132f8084635743b9d39861e4c3d",
        WALLET: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        WALLET_NONCE: "182",
        DEPLOYER: "0x180F7463dBD2Cce1Cfb87E7f4b07a39bBD80903e",
        BEAMS_HUB: "0x6234eF8D245AE73E19E5ef0a5A15bF5d61B64ce9",
        BEAMS_HUB_CYCLE_SECONDS: "604800",
        BEAMS_HUB_LOGIC: "0xf26E945F1E3372007F8DF9ddC0f3beE2e01ef7a8",
        BEAMS_HUB_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        CALLER: "0xee2395aB0256dDbDD7222917E1c02e6D9F0ed859",
        ADDRESS_DRIVER: "0x306A51d1d08D118986241CC15B4BA22b2a8EF921",
        ADDRESS_DRIVER_LOGIC: "0xd987192aE22cCad96a8c4bf225f169A3c3159930",
        ADDRESS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        ADDRESS_DRIVER_ID: "0",
        NFT_DRIVER: "0x33afAA9483c8BB6903c152050cf32DeF6C5eCaFe",
        NFT_DRIVER_LOGIC: "0x28c6120825CAd2766670c3048D5E3944c0fdBcF1",
        NFT_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        NFT_DRIVER_ID: "1",
        IMMUTABLE_SPLITS_DRIVER: "0x4F54b5F75732b82e3551Ade8A8471e7e6c64565b",
        IMMUTABLE_SPLITS_DRIVER_LOGIC: "0xF82c902F791445901598788e934E3B8189B5FC10",
        IMMUTABLE_SPLITS_DRIVER_ADMIN: "0x840C1b6ce85bBFEbcFAd737514c0097B078a7E7E",
        IMMUTABLE_SPLITS_DRIVER_ID: "2",
        SUBGRAPH_URL: "https://api.studio.thegraph.com/query/50446/beaaam-mumbai/v0.0.6"
      }
    };
    Network2.SUPPORTED_CHAINS = Object.freeze(
      Object.keys(Network2.configs).map((chainId) => parseInt(chainId, 10))
    );
    Network2.isSupportedChain = (chainId) => {
      if (Network2.SUPPORTED_CHAINS.includes(chainId)) {
        return true;
      }
      return false;
    };
  })(Network = Utils2.Network || (Utils2.Network = {}));
  let Cycle;
  ((Cycle2) => {
    const getUnixTime = (date) => date.getTime() / 1e3;
    Cycle2.getInfo = (chainId) => {
      if (!Network.isSupportedChain(chainId)) {
        throw BeamsErrors.unsupportedNetworkError(
          `Could not get cycle info: chain ID '${chainId}' is not supported. Supported chain IDs are: ${Network.SUPPORTED_CHAINS.toString()}.`,
          chainId
        );
      }
      const cycleDurationSecs = BigInt(Network.configs[chainId].BEAMS_HUB_CYCLE_SECONDS);
      const currentCycleSecs = BigInt(Math.floor(getUnixTime(new Date()))) % cycleDurationSecs;
      const currentCycleStartDate = new Date(new Date().getTime() - Number(currentCycleSecs) * 1e3);
      const nextCycleStartDate = new Date(currentCycleStartDate.getTime() + Number(cycleDurationSecs * BigInt(1e3)));
      return {
        cycleDurationSecs,
        currentCycleSecs,
        currentCycleStartDate,
        nextCycleStartDate
      };
    };
  })(Cycle = Utils2.Cycle || (Utils2.Cycle = {}));
  let Asset;
  ((Asset2) => {
    Asset2.getAddressFromId = (assetId) => ethers2.utils.getAddress(BigNumber2.from(assetId).toHexString());
    Asset2.getIdFromAddress = (tokenAddress) => {
      validateAddress(tokenAddress);
      return BigNumber2.from(ethers2.utils.getAddress(tokenAddress)).toBigInt();
    };
  })(Asset = Utils2.Asset || (Utils2.Asset = {}));
  let BeamsReceiverConfiguration;
  ((BeamsReceiverConfiguration2) => {
    BeamsReceiverConfiguration2.toUint256 = (beamsReceiverConfig) => {
      validateBeamsReceiverConfig(beamsReceiverConfig);
      const { beamId, start, duration, amountPerSec } = beamsReceiverConfig;
      let config = BigNumber2.from(beamId);
      config = config.shl(160);
      config = config.or(amountPerSec);
      config = config.shl(32);
      config = config.or(start);
      config = config.shl(32);
      config = config.or(duration);
      return config.toBigInt();
    };
    BeamsReceiverConfiguration2.fromUint256 = (beamsReceiverConfig) => {
      const configAsBn = BigNumber2.from(beamsReceiverConfig);
      const beamId = configAsBn.shr(160 + 32 + 32);
      const amountPerSec = configAsBn.shr(32 + 32).and(BigNumber2.from(1).shl(160).sub(1));
      const start = configAsBn.shr(32).and(BigNumber2.from(1).shl(32).sub(1));
      const duration = configAsBn.and(BigNumber2.from(1).shl(32).sub(1));
      const config = {
        beamId: beamId.toBigInt(),
        amountPerSec: amountPerSec.toBigInt(),
        duration: duration.toBigInt(),
        start: start.toBigInt()
      };
      validateBeamsReceiverConfig(config);
      return config;
    };
  })(BeamsReceiverConfiguration = Utils2.BeamsReceiverConfiguration || (Utils2.BeamsReceiverConfiguration = {}));
})(Utils || (Utils = {}));
var utils_default = Utils;

// src/BeamsHub/BeamsHubTxFactory.ts
var _driver, _driverAddress;
var _BeamsHubTxFactory = class {
  constructor() {
    __privateAdd(this, _driver, void 0);
    __privateAdd(this, _driverAddress, void 0);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress);
  }
  static async create(provider, customDriverAddress) {
    await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
    const network = await provider.getNetwork();
    const driverAddress = customDriverAddress != null ? customDriverAddress : utils_default.Network.configs[network.chainId].ADDRESS_DRIVER;
    const client = new _BeamsHubTxFactory();
    __privateSet(client, _driverAddress, driverAddress);
    __privateSet(client, _driver, BeamsHub__factory.connect(driverAddress, provider));
    return client;
  }
  async receiveBeams(userId, erc20, maxCycles) {
    return safeBeamsTx(await __privateGet(this, _driver).populateTransaction.receiveBeams(userId, erc20, maxCycles));
  }
  async squeezeBeams(userId, erc20, senderId, historyHash, beamsHistory) {
    return safeBeamsTx(
      await __privateGet(this, _driver).populateTransaction.squeezeBeams(userId, erc20, senderId, historyHash, beamsHistory)
    );
  }
  async split(userId, erc20, currReceivers) {
    return safeBeamsTx(await __privateGet(this, _driver).populateTransaction.split(userId, erc20, currReceivers));
  }
};
var BeamsHubTxFactory = _BeamsHubTxFactory;
_driver = new WeakMap();
_driverAddress = new WeakMap();

// src/AddressDriver/AddressDriverTxFactory.ts
var _signer, _driver2, _driverAddress2;
var _AddressDriverTxFactory = class {
  constructor() {
    __privateAdd(this, _signer, void 0);
    __privateAdd(this, _driver2, void 0);
    __privateAdd(this, _driverAddress2, void 0);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress2);
  }
  get signer() {
    return __privateGet(this, _signer);
  }
  static async create(signer, customDriverAddress) {
    await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
    const { chainId } = await signer.provider.getNetwork();
    const driverAddress = customDriverAddress || utils_default.Network.configs[chainId].ADDRESS_DRIVER;
    const client = new _AddressDriverTxFactory();
    __privateSet(client, _signer, signer);
    __privateSet(client, _driverAddress2, driverAddress);
    __privateSet(client, _driver2, AddressDriver__factory.connect(driverAddress, signer));
    return client;
  }
  async collect(erc20, transferTo, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver2).populateTransaction.collect(erc20, transferTo, overrides));
  }
  async give(receiver, erc20, amt, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver2).populateTransaction.give(receiver, erc20, amt, overrides));
  }
  async setSplits(receivers, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver2).populateTransaction.setSplits(formatSplitReceivers(receivers), overrides));
  }
  async setBeams(erc20, currReceivers, balanceDelta, newReceivers, maxEndHint1, maxEndHint2, transferTo, overrides = {}) {
    if (!overrides.gasLimit) {
      const gasEstimation = await __privateGet(this, _driver2).estimateGas.setBeams(
        erc20,
        formatBeamsReceivers(currReceivers),
        balanceDelta,
        formatBeamsReceivers(newReceivers),
        maxEndHint1,
        maxEndHint2,
        transferTo,
        overrides
      );
      const gasLimit = Math.ceil(gasEstimation.toNumber() * 1.2);
      overrides = { ...overrides, gasLimit };
    }
    return safeBeamsTx(
      await __privateGet(this, _driver2).populateTransaction.setBeams(
        erc20,
        formatBeamsReceivers(currReceivers),
        balanceDelta,
        formatBeamsReceivers(newReceivers),
        maxEndHint1,
        maxEndHint2,
        transferTo,
        overrides
      )
    );
  }
  async emitUserMetadata(userMetadata, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver2).populateTransaction.emitUserMetadata(userMetadata, overrides));
  }
};
var AddressDriverTxFactory = _AddressDriverTxFactory;
_signer = new WeakMap();
_driver2 = new WeakMap();
_driverAddress2 = new WeakMap();

// src/AddressDriver/AddressDriverPresets.ts
var AddressDriverPresets;
((AddressDriverPresets2) => {
  class Presets {
    static async createNewStreamFlow(payload) {
      if (isNullOrUndefined(payload)) {
        throw BeamsErrors.argumentMissingError(
          `Could not create stream flow: '${nameOf({ payload })}' is missing.`,
          nameOf({ payload })
        );
      }
      const {
        signer,
        userMetadata,
        tokenAddress,
        driverAddress,
        newReceivers,
        balanceDelta,
        currentReceivers,
        transferToAddress
      } = payload;
      if (!(signer == null ? void 0 : signer.provider)) {
        throw BeamsErrors.argumentError(`Could not create collect flow: signer is not connected to a provider.`);
      }
      validateSetBeamsInput(
        tokenAddress,
        currentReceivers == null ? void 0 : currentReceivers.map((r) => ({
          userId: r.userId.toString(),
          config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber3.from(r.config).toBigInt())
        })),
        newReceivers == null ? void 0 : newReceivers.map((r) => ({
          userId: r.userId.toString(),
          config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber3.from(r.config).toBigInt())
        })),
        transferToAddress,
        balanceDelta
      );
      validateEmitUserMetadataInput(userMetadata);
      const addressDriverTxFactory = await AddressDriverTxFactory.create(signer, driverAddress);
      const setBeamsTx = await addressDriverTxFactory.setBeams(
        tokenAddress,
        currentReceivers,
        balanceDelta,
        newReceivers,
        0,
        0,
        transferToAddress
      );
      const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
      const emitUserMetadataTx = await addressDriverTxFactory.emitUserMetadata(userMetadataAsBytes);
      return [setBeamsTx, emitUserMetadataTx];
    }
    static async createCollectFlow(payload, skipReceive = false, skipSplit = false) {
      if (isNullOrUndefined(payload)) {
        throw BeamsErrors.argumentMissingError(
          `Could not create collect flow: '${nameOf({ payload })}' is missing.`,
          nameOf({ payload })
        );
      }
      const {
        signer,
        driverAddress,
        beamsHubAddress,
        userId,
        tokenAddress,
        maxCycles,
        currentReceivers,
        transferToAddress,
        squeezeArgs
      } = payload;
      if (!(signer == null ? void 0 : signer.provider)) {
        throw BeamsErrors.argumentError(`Could not create collect flow: signer is not connected to a provider.`);
      }
      const flow = [];
      const beamsHubTxFactory = await BeamsHubTxFactory.create(signer.provider, beamsHubAddress);
      squeezeArgs == null ? void 0 : squeezeArgs.forEach(async (args) => {
        validateSqueezeBeamsInput(args.userId, args.tokenAddress, args.senderId, args.historyHash, args.beamsHistory);
        const squeezeTx = await beamsHubTxFactory.squeezeBeams(
          userId,
          tokenAddress,
          args.senderId,
          args.historyHash,
          args.beamsHistory
        );
        flow.push(squeezeTx);
      });
      if (!skipReceive) {
        validateReceiveBeamsInput(userId, tokenAddress, maxCycles);
        const receiveTx = await beamsHubTxFactory.receiveBeams(userId, tokenAddress, maxCycles);
        flow.push(receiveTx);
      }
      if (!skipSplit) {
        validateSplitInput(userId, tokenAddress, currentReceivers);
        const splitTx = await beamsHubTxFactory.split(userId, tokenAddress, currentReceivers);
        flow.push(splitTx);
      }
      validateCollectInput(tokenAddress, transferToAddress);
      const addressDriverTxFactory = await AddressDriverTxFactory.create(signer, driverAddress);
      const collectTx = await addressDriverTxFactory.collect(tokenAddress, transferToAddress);
      flow.push(collectTx);
      return flow;
    }
  }
  AddressDriverPresets2.Presets = Presets;
})(AddressDriverPresets || (AddressDriverPresets = {}));

// src/NFTDriver/NFTDriverPresets.ts
import { BigNumber as BigNumber4 } from "ethers";

// src/NFTDriver/NFTDriverTxFactory.ts
var _signer2, _driver3, _driverAddress3;
var _NFTDriverTxFactory = class {
  constructor() {
    __privateAdd(this, _signer2, void 0);
    __privateAdd(this, _driver3, void 0);
    __privateAdd(this, _driverAddress3, void 0);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress3);
  }
  get signer() {
    return __privateGet(this, _signer2);
  }
  static async create(signer, customDriverAddress) {
    await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
    const { chainId } = await signer.provider.getNetwork();
    const driverAddress = customDriverAddress || utils_default.Network.configs[chainId].NFT_DRIVER;
    const client = new _NFTDriverTxFactory();
    __privateSet(client, _signer2, signer);
    __privateSet(client, _driverAddress3, driverAddress);
    __privateSet(client, _driver3, NFTDriver__factory.connect(driverAddress, signer));
    return client;
  }
  async mint(to, userMetadata, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.mint(to, userMetadata, overrides));
  }
  async safeMint(to, userMetadata, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.safeMint(to, userMetadata, overrides));
  }
  async safeMintWithSalt(salt, to, userMetadata, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.safeMintWithSalt(salt, to, userMetadata, overrides));
  }
  async collect(tokenId, erc20, transferTo, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.collect(tokenId, erc20, transferTo, overrides));
  }
  async give(tokenId, receiver, erc20, amt, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.give(tokenId, receiver, erc20, amt, overrides));
  }
  async setSplits(tokenId, receivers, overrides = {}) {
    return safeBeamsTx(
      await __privateGet(this, _driver3).populateTransaction.setSplits(tokenId, formatSplitReceivers(receivers), overrides)
    );
  }
  async setBeams(tokenId, erc20, currReceivers, balanceDelta, newReceivers, maxEndHint1, maxEndHint2, transferTo, overrides = {}) {
    if (!overrides.gasLimit) {
      const gasEstimation = await __privateGet(this, _driver3).estimateGas.setBeams(
        tokenId,
        erc20,
        formatBeamsReceivers(currReceivers),
        balanceDelta,
        formatBeamsReceivers(newReceivers),
        maxEndHint1,
        maxEndHint2,
        transferTo,
        overrides
      );
      const gasLimit = Math.ceil(gasEstimation.toNumber() * 1.2);
      overrides = { ...overrides, gasLimit };
    }
    return safeBeamsTx(
      await __privateGet(this, _driver3).populateTransaction.setBeams(
        tokenId,
        erc20,
        formatBeamsReceivers(currReceivers),
        balanceDelta,
        formatBeamsReceivers(newReceivers),
        maxEndHint1,
        maxEndHint2,
        transferTo,
        overrides
      )
    );
  }
  async emitUserMetadata(tokenId, userMetadata, overrides = {}) {
    return safeBeamsTx(await __privateGet(this, _driver3).populateTransaction.emitUserMetadata(tokenId, userMetadata, overrides));
  }
};
var NFTDriverTxFactory = _NFTDriverTxFactory;
_signer2 = new WeakMap();
_driver3 = new WeakMap();
_driverAddress3 = new WeakMap();

// src/NFTDriver/NFTDriverPresets.ts
var NFTDriverPresets;
((NFTDriverPresets2) => {
  class Presets {
    static async createNewStreamFlow(payload) {
      if (isNullOrUndefined(payload)) {
        throw BeamsErrors.argumentMissingError(
          `Could not create stream flow: '${nameOf({ payload })}' is missing.`,
          nameOf({ payload })
        );
      }
      const {
        signer,
        tokenId,
        userMetadata,
        tokenAddress,
        driverAddress,
        newReceivers,
        balanceDelta,
        currentReceivers,
        transferToAddress
      } = payload;
      if (isNullOrUndefined(tokenId)) {
        throw BeamsErrors.argumentError(
          `Could not create stream flow: '${nameOf({ tokenId })}' is missing.`,
          nameOf({ tokenId }),
          tokenId
        );
      }
      if (!(signer == null ? void 0 : signer.provider)) {
        throw BeamsErrors.argumentError(`Could not create collect flow: signer is not connected to a provider.`);
      }
      validateSetBeamsInput(
        tokenAddress,
        currentReceivers == null ? void 0 : currentReceivers.map((r) => ({
          userId: r.userId.toString(),
          config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber4.from(r.config).toBigInt())
        })),
        newReceivers == null ? void 0 : newReceivers.map((r) => ({
          userId: r.userId.toString(),
          config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber4.from(r.config).toBigInt())
        })),
        transferToAddress,
        balanceDelta
      );
      validateEmitUserMetadataInput(userMetadata);
      const nftDriverTxFactory = await NFTDriverTxFactory.create(signer, driverAddress);
      const setBeamsTx = await nftDriverTxFactory.setBeams(
        tokenId,
        tokenAddress,
        currentReceivers,
        balanceDelta,
        newReceivers,
        0,
        0,
        transferToAddress
      );
      const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
      const emitUserMetadataTx = await nftDriverTxFactory.emitUserMetadata(tokenId, userMetadataAsBytes);
      return [setBeamsTx, emitUserMetadataTx];
    }
    static async createCollectFlow(payload, skipReceive = false, skipSplit = false) {
      if (isNullOrUndefined(payload)) {
        throw BeamsErrors.argumentMissingError(
          `Could not create collect flow: '${nameOf({ payload })}' is missing.`,
          nameOf({ payload })
        );
      }
      const {
        tokenId,
        signer,
        driverAddress,
        beamsHubAddress,
        userId,
        tokenAddress,
        maxCycles,
        currentReceivers,
        transferToAddress,
        squeezeArgs
      } = payload;
      if (isNullOrUndefined(tokenId)) {
        throw BeamsErrors.argumentError(
          `Could not create stream flow: '${nameOf({ tokenId })}' is missing.`,
          nameOf({ tokenId }),
          tokenId
        );
      }
      if (!(signer == null ? void 0 : signer.provider)) {
        throw BeamsErrors.argumentError(`Could not create collect flow: signer is not connected to a provider.`);
      }
      const flow = [];
      const beamsHubTxFactory = await BeamsHubTxFactory.create(signer.provider, beamsHubAddress);
      squeezeArgs == null ? void 0 : squeezeArgs.forEach(async (args) => {
        validateSqueezeBeamsInput(args.userId, args.tokenAddress, args.senderId, args.historyHash, args.beamsHistory);
        const squeezeTx = await beamsHubTxFactory.squeezeBeams(
          userId,
          tokenAddress,
          args.senderId,
          args.historyHash,
          args.beamsHistory
        );
        flow.push(squeezeTx);
      });
      if (!skipReceive) {
        validateReceiveBeamsInput(userId, tokenAddress, maxCycles);
        const receiveTx = await beamsHubTxFactory.receiveBeams(userId, tokenAddress, maxCycles);
        flow.push(receiveTx);
      }
      if (!skipSplit) {
        validateSplitInput(userId, tokenAddress, currentReceivers);
        const splitTx = await beamsHubTxFactory.split(userId, tokenAddress, currentReceivers);
        flow.push(splitTx);
      }
      validateCollectInput(tokenAddress, transferToAddress);
      const nftDriverTxFactory = await NFTDriverTxFactory.create(signer, driverAddress);
      const collectTx = await nftDriverTxFactory.collect(tokenId, tokenAddress, transferToAddress);
      flow.push(collectTx);
      return flow;
    }
  }
  NFTDriverPresets2.Presets = Presets;
})(NFTDriverPresets || (NFTDriverPresets = {}));

// src/ERC20/ERC20TxFactory.ts
var _erc20, _tokenAddress;
var _ERC20TxFactory = class {
  constructor() {
    __privateAdd(this, _erc20, void 0);
    __privateAdd(this, _tokenAddress, void 0);
  }
  get tokenAddress() {
    return __privateGet(this, _tokenAddress);
  }
  static async create(singer, tokenAddress) {
    await validateClientSigner(singer, utils_default.Network.SUPPORTED_CHAINS);
    const client = new _ERC20TxFactory();
    __privateSet(client, _tokenAddress, tokenAddress);
    __privateSet(client, _erc20, IERC20__factory.connect(tokenAddress, singer));
    return client;
  }
  async approve(spender, amount) {
    return safeBeamsTx(await __privateGet(this, _erc20).populateTransaction.approve(spender, amount));
  }
};
var ERC20TxFactory = _ERC20TxFactory;
_erc20 = new WeakMap();
_tokenAddress = new WeakMap();

// src/AddressDriver/AddressDriverClient.ts
import { ethers as ethers3, BigNumber as BigNumber5, constants } from "ethers";
var _provider, _driver4, _driverAddress4, _signer3, _txFactory;
var _AddressDriverClient = class {
  constructor() {
    __privateAdd(this, _provider, void 0);
    __privateAdd(this, _driver4, void 0);
    __privateAdd(this, _driverAddress4, void 0);
    __privateAdd(this, _signer3, void 0);
    __privateAdd(this, _txFactory, void 0);
  }
  get provider() {
    return __privateGet(this, _provider);
  }
  get signer() {
    return __privateGet(this, _signer3);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress4);
  }
  static async create(provider, signer, customDriverAddress, txFactory) {
    await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
    if (signer) {
      if (!signer.provider) {
        signer = signer.connect(provider);
      }
      await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
    }
    const network = await provider.getNetwork();
    const driverAddress = customDriverAddress != null ? customDriverAddress : utils_default.Network.configs[network.chainId].ADDRESS_DRIVER;
    const client = new _AddressDriverClient();
    __privateSet(client, _signer3, signer);
    __privateSet(client, _provider, provider);
    __privateSet(client, _driverAddress4, driverAddress);
    __privateSet(client, _driver4, AddressDriver__factory.connect(driverAddress, signer != null ? signer : provider));
    if (signer) {
      __privateSet(client, _txFactory, txFactory || await AddressDriverTxFactory.create(signer, customDriverAddress));
    }
    return client;
  }
  async getAllowance(tokenAddress) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateAddress(tokenAddress);
    const signerAsErc20Contract = IERC20__factory.connect(tokenAddress, __privateGet(this, _signer3));
    const signerAddress = await __privateGet(this, _signer3).getAddress();
    const allowance = await signerAsErc20Contract.allowance(signerAddress, __privateGet(this, _driverAddress4));
    return allowance.toBigInt();
  }
  approve(tokenAddress) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateAddress(tokenAddress);
    const signerAsErc20Contract = IERC20__factory.connect(tokenAddress, __privateGet(this, _signer3));
    return signerAsErc20Contract.approve(__privateGet(this, _driverAddress4), constants.MaxUint256);
  }
  async getUserId() {
    ensureSignerExists(__privateGet(this, _signer3));
    const signerAddress = await __privateGet(this, _signer3).getAddress();
    const userId = await __privateGet(this, _driver4).calcUserId(signerAddress);
    return userId.toString();
  }
  async getUserIdByAddress(userAddress) {
    validateAddress(userAddress);
    const userId = await __privateGet(this, _driver4).calcUserId(userAddress);
    return userId.toString();
  }
  async collect(tokenAddress, transferToAddress) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateCollectInput(tokenAddress, transferToAddress);
    const tx = await __privateGet(this, _txFactory).collect(tokenAddress, transferToAddress);
    return __privateGet(this, _signer3).sendTransaction(tx);
  }
  async give(receiverUserId, tokenAddress, amount) {
    ensureSignerExists(__privateGet(this, _signer3));
    if (isNullOrUndefined(receiverUserId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not give: '${nameOf({ receiverUserId })}' is missing.`,
        nameOf({ receiverUserId })
      );
    }
    validateAddress(tokenAddress);
    if (!amount || BigNumber5.from(amount).lte(0)) {
      throw BeamsErrors.argumentError(
        `Could not give: '${nameOf({ amount })}' must be greater than 0.`,
        nameOf({ amount }),
        amount
      );
    }
    const tx = await __privateGet(this, _txFactory).give(receiverUserId, tokenAddress, amount);
    return __privateGet(this, _signer3).sendTransaction(tx);
  }
  async setSplits(receivers) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateSplitsReceivers(receivers);
    const tx = await __privateGet(this, _txFactory).setSplits(receivers);
    return __privateGet(this, _signer3).sendTransaction(tx);
  }
  async setBeams(tokenAddress, currentReceivers, newReceivers, transferToAddress, balanceDelta = 0) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateSetBeamsInput(
      tokenAddress,
      currentReceivers == null ? void 0 : currentReceivers.map((r) => ({
        userId: r.userId.toString(),
        config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber5.from(r.config).toBigInt())
      })),
      newReceivers == null ? void 0 : newReceivers.map((r) => ({
        userId: r.userId.toString(),
        config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber5.from(r.config).toBigInt())
      })),
      transferToAddress,
      balanceDelta
    );
    const tx = await __privateGet(this, _txFactory).setBeams(
      tokenAddress,
      currentReceivers,
      balanceDelta,
      newReceivers,
      0,
      0,
      transferToAddress
    );
    return __privateGet(this, _signer3).sendTransaction(tx);
  }
  async emitUserMetadata(userMetadata) {
    ensureSignerExists(__privateGet(this, _signer3));
    validateEmitUserMetadataInput(userMetadata);
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const tx = await __privateGet(this, _txFactory).emitUserMetadata(userMetadataAsBytes);
    return __privateGet(this, _signer3).sendTransaction(tx);
  }
};
var AddressDriverClient = _AddressDriverClient;
_provider = new WeakMap();
_driver4 = new WeakMap();
_driverAddress4 = new WeakMap();
_signer3 = new WeakMap();
_txFactory = new WeakMap();
AddressDriverClient.getUserAddress = (userId) => {
  if (!userId || typeof userId !== "string") {
    throw BeamsErrors.argumentError(`Could not get user address: : ${userId} is not a valid string.`);
  }
  const userIdAsBn = ethers3.BigNumber.from(userId);
  if (userIdAsBn.lt(0) || userIdAsBn.gt(ethers3.constants.MaxUint256)) {
    throw BeamsErrors.argumentError(
      `Could not get user address: ${userId} is not a valid positive number within the range of a uint256.`
    );
  }
  const mid64BitsMask = ethers3.BigNumber.from(2).pow(64).sub(1).shl(160);
  if (!userIdAsBn.and(mid64BitsMask).isZero()) {
    throw BeamsErrors.argumentError("Could not get user address: first 64 (after first 32) bits must be 0");
  }
  const mask = ethers3.BigNumber.from(2).pow(160).sub(1);
  const address = userIdAsBn.and(mask).toHexString();
  const paddedAddress = ethers3.utils.hexZeroPad(address, 20);
  return ethers3.utils.getAddress(paddedAddress);
};

// src/Caller/CallerClient.ts
var _caller, _callerAddress, _provider2, _signer4;
var _CallerClient = class {
  constructor() {
    __privateAdd(this, _caller, void 0);
    __privateAdd(this, _callerAddress, void 0);
    __privateAdd(this, _provider2, void 0);
    __privateAdd(this, _signer4, void 0);
  }
  get provider() {
    return __privateGet(this, _provider2);
  }
  get signer() {
    return __privateGet(this, _signer4);
  }
  get callerAddress() {
    return __privateGet(this, _callerAddress);
  }
  static async create(provider, signer, customCallerAddress) {
    await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
    if (!signer.provider) {
      signer = signer.connect(provider);
    }
    await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
    const network = await provider.getNetwork();
    const callerAddress = customCallerAddress != null ? customCallerAddress : utils_default.Network.configs[network.chainId].CALLER;
    const client = new _CallerClient();
    __privateSet(client, _signer4, signer);
    __privateSet(client, _provider2, provider);
    __privateSet(client, _callerAddress, callerAddress);
    __privateSet(client, _caller, Caller__factory.connect(callerAddress, signer));
    return client;
  }
  async callBatched(calls) {
    let transformedCalls;
    if (Array.isArray(calls)) {
      const firstCall = calls[0];
      if (calls.length === 0) {
        throw BeamsErrors.argumentError("Empty input array is not allowed.");
      }
      if ("target" in firstCall) {
        transformedCalls = calls;
      } else if ("to" in firstCall) {
        transformedCalls = calls.map((populatedTransaction) => {
          var _a;
          if (!populatedTransaction.to || !populatedTransaction.data) {
            throw BeamsErrors.argumentError(
              'Invalid PopulatedTransaction object. "to", "data", and "value" properties are required.'
            );
          }
          return {
            target: populatedTransaction.to,
            data: populatedTransaction.data,
            value: (_a = populatedTransaction.value) != null ? _a : 0
          };
        });
      } else {
        throw BeamsErrors.argumentError(
          "Invalid input type. Expected an array of CallStruct objects or PopulatedTransaction objects."
        );
      }
    } else {
      throw BeamsErrors.argumentError(
        "Invalid input type. Expected an array containing CallStruct[], Preset, or PopulatedTransaction[]."
      );
    }
    transformedCalls = transformedCalls.map((call) => {
      var _a;
      return {
        ...call,
        value: (_a = call.value) != null ? _a : 0
      };
    });
    return __privateGet(this, _caller).callBatched(transformedCalls);
  }
};
var CallerClient = _CallerClient;
_caller = new WeakMap();
_callerAddress = new WeakMap();
_provider2 = new WeakMap();
_signer4 = new WeakMap();

// src/BeamsHub/BeamsHubClient.ts
import { BigNumber as BigNumber6 } from "ethers";
var _driver5, _contractAddress, _provider3, _signer5;
var _BeamsHubClient = class {
  constructor() {
    __privateAdd(this, _driver5, void 0);
    __privateAdd(this, _contractAddress, void 0);
    __privateAdd(this, _provider3, void 0);
    __privateAdd(this, _signer5, void 0);
  }
  get provider() {
    return __privateGet(this, _provider3);
  }
  get signer() {
    return __privateGet(this, _signer5);
  }
  get contractAddress() {
    return __privateGet(this, _contractAddress);
  }
  static async create(provider, signer, customDriverAddress) {
    try {
      await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
      if (signer) {
        if (!signer.provider) {
          signer = signer.connect(provider);
        }
        await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
      }
      const network = await provider.getNetwork();
      const contractAddress = customDriverAddress != null ? customDriverAddress : utils_default.Network.configs[network.chainId].BEAMS_HUB;
      const client = new _BeamsHubClient();
      __privateSet(client, _signer5, signer);
      __privateSet(client, _provider3, provider);
      __privateSet(client, _contractAddress, contractAddress);
      __privateSet(client, _driver5, BeamsHub__factory.connect(contractAddress, signer != null ? signer : provider));
      return client;
    } catch (error) {
      throw BeamsErrors.initializationError(`Could not create 'BeamsHubClient': ${error.message}`);
    }
  }
  cycleSecs() {
    return __privateGet(this, _driver5).cycleSecs();
  }
  async getTokenBalance(tokenAddress) {
    validateAddress(tokenAddress);
    const totalBalance = await __privateGet(this, _driver5).totalBalance(tokenAddress);
    return totalBalance.toBigInt();
  }
  receivableCyclesCount(userId, tokenAddress) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get receivable cycles count: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    return __privateGet(this, _driver5).receivableBeamsCycles(userId, tokenAddress);
  }
  async getReceivableBalanceForUser(userId, tokenAddress, maxCycles) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get receivable balance: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    if (!maxCycles || maxCycles < 0) {
      throw BeamsErrors.argumentError(
        `Could not get receivable balance: '${nameOf({ maxCycles })}' is missing.`,
        nameOf({ maxCycles }),
        maxCycles
      );
    }
    const receivableBalance = await __privateGet(this, _driver5).receiveBeamsResult(userId, tokenAddress, maxCycles);
    return {
      tokenAddress,
      receivableAmount: receivableBalance.toBigInt()
    };
  }
  receiveBeams(userId, tokenAddress, maxCycles) {
    ensureSignerExists(__privateGet(this, _signer5));
    validateReceiveBeamsInput(userId, tokenAddress, maxCycles);
    return __privateGet(this, _driver5).receiveBeams(userId, tokenAddress, maxCycles);
  }
  squeezeBeams(userId, tokenAddress, senderId, historyHash, beamsHistory) {
    validateSqueezeBeamsInput(userId, tokenAddress, senderId, historyHash, beamsHistory);
    return __privateGet(this, _driver5).squeezeBeams(userId, tokenAddress, senderId, historyHash, beamsHistory);
  }
  async getSqueezableBalance(userId, tokenAddress, senderId, historyHash, beamsHistory) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get squeezable balance: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    if (isNullOrUndefined(senderId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get squeezable balance: '${nameOf({ senderId })}' is missing.`,
        nameOf({ senderId })
      );
    }
    if (isNullOrUndefined(historyHash)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get squeezable balance: '${nameOf({ historyHash })}' is missing.`,
        nameOf({ historyHash })
      );
    }
    if (isNullOrUndefined(beamsHistory)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get squeezable balance: '${nameOf({ beamsHistory })}' is missing.`,
        nameOf({ beamsHistory })
      );
    }
    const squeezableBalance = await __privateGet(this, _driver5).squeezeBeamsResult(
      userId,
      tokenAddress,
      senderId,
      historyHash,
      beamsHistory
    );
    return squeezableBalance.toBigInt();
  }
  async getSplittableBalanceForUser(userId, tokenAddress) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get splittable balance: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    const splittableBalance = await __privateGet(this, _driver5).splittable(userId, tokenAddress);
    return {
      tokenAddress,
      splittableAmount: splittableBalance.toBigInt()
    };
  }
  async getSplitResult(userId, currentReceivers, amount) {
    validateSplitsReceivers(currentReceivers);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get split result: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    if (!amount || amount < 0) {
      throw BeamsErrors.argumentError(
        `Could not get split result: '${nameOf({ amount })}' must be greater than 0.`,
        nameOf({ amount }),
        amount
      );
    }
    const { collectableAmt, splitAmt } = await __privateGet(this, _driver5).splitResult(userId, currentReceivers, amount);
    return {
      collectableAmount: collectableAmt.toBigInt(),
      splitAmount: splitAmt.toBigInt()
    };
  }
  async split(userId, tokenAddress, currentReceivers) {
    ensureSignerExists(__privateGet(this, _signer5));
    validateSplitInput(userId, tokenAddress, currentReceivers);
    return __privateGet(this, _driver5).split(userId, tokenAddress, formatSplitReceivers(currentReceivers));
  }
  async getCollectableBalanceForUser(userId, tokenAddress) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get collectable balance: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    const collectableBalance = await __privateGet(this, _driver5).collectable(userId, tokenAddress);
    return {
      tokenAddress,
      collectableAmount: collectableBalance.toBigInt()
    };
  }
  async beamsState(userId, tokenAddress) {
    validateAddress(tokenAddress);
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get beams state: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    const { beamsHash, beamsHistoryHash, updateTime, balance, maxEnd } = await __privateGet(this, _driver5).beamsState(
      userId,
      tokenAddress
    );
    return {
      beamsHash,
      beamsHistoryHash,
      updateTime,
      balance: balance == null ? void 0 : balance.toBigInt(),
      maxEnd
    };
  }
  async getBeamsBalanceAt(userId, tokenAddress, receivers, timestamp) {
    validateAddress(tokenAddress);
    validateBeamsReceivers(
      receivers.map((r) => ({
        userId: r.userId.toString(),
        config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber6.from(r.config).toBigInt())
      }))
    );
    if (isNullOrUndefined(userId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get balance: '${nameOf({ userId })}' is missing.`,
        nameOf({ userId })
      );
    }
    if (isNullOrUndefined(timestamp)) {
      throw BeamsErrors.argumentMissingError(
        `Could not get balance: '${nameOf({ timestamp })}' is missing.`,
        nameOf({ timestamp })
      );
    }
    const beamsBalance = await __privateGet(this, _driver5).balanceAt(userId, tokenAddress, receivers, timestamp);
    return beamsBalance.toBigInt();
  }
};
var BeamsHubClient = _BeamsHubClient;
_driver5 = new WeakMap();
_contractAddress = new WeakMap();
_provider3 = new WeakMap();
_signer5 = new WeakMap();

// src/BeamsSubgraph/BeamsSubgraphClient.ts
import { ethers as ethers5 } from "ethers";

// src/constants.ts
import { ethers as ethers4 } from "ethers";
var ASSOCIATED_APP_KEY = "associatedApp";
var constants2 = {
  TOTAL_SPLITS_WEIGHT: 1e6,
  MAX_BEAMS_RECEIVERS: 100,
  MAX_SPLITS_RECEIVERS: 200,
  AMT_PER_SEC_MULTIPLIER: 1e9,
  AMT_PER_SEC_EXTRA_DECIMALS: 9,
  ASSOCIATED_APP_KEY,
  ASSOCIATED_APP_KEY_BYTES: ethers4.utils.formatBytes32String(ASSOCIATED_APP_KEY)
};
var constants_default = constants2;

// src/BeamsSubgraph/gql.ts
var getUserAssetConfigById = `#graphql
query getUserAssetConfigById($configId: ID!) {
	userAssetConfig(id: $configId) {
		id
		assetId
		beamsEntries {
			id
			userId
			config
		}
		balance
		amountCollected
		lastUpdatedBlockTimestamp
	}
}
`;
var getAllUserAssetConfigsByUserId = `#graphql
query getAllUserAssetConfigsByUserId($userId: ID!, $skip: Int, $first: Int) {
  user(id: $userId) {
    assetConfigs(skip: $skip, first: $first) {
      id
			assetId
			beamsEntries {
				id
				userId
				config
			}
			balance
			amountCollected
			lastUpdatedBlockTimestamp
    }
  }
}
`;
var getSplitsConfigByUserId = `#graphql
query getSplitsConfigByUserId($userId: ID!, $skip: Int, $first: Int) {
  user(id: $userId) {
		splitsEntries(skip: $skip, first: $first) {
			id
    	sender {
      	id
    	}
    	userId
    	weight
		}
  }
}
`;
var getSplitEntriesByReceiverUserId = `#graphql
query getSplitEntriesByReceiverUserId($receiverUserId: String!, $skip: Int, $first: Int) {
  splitsEntries(where: {userId: $receiverUserId}, skip: $skip, first: $first) {
    id
    sender {
      id
    }
    userId
    weight
  }
}
`;
var getBeamsSetEventsByUserId = `#graphql
query getBeamsSetEventsByUserId($userId: String!, $skip: Int, $first: Int) {
  beamsSetEvents(where: {userId: $userId}, skip: $skip, first: $first) {
		id
    userId
    assetId
		receiversHash
    beamsReceiverSeenEvents {
			id
      receiverUserId
			config
    }
    beamsHistoryHash
		balance
    blockTimestamp
		maxEnd
  }
}
`;
var getBeamsReceiverSeenEventsByReceiverId = `#graphql
query getBeamsReceiverSeenEventsByReceiverId($receiverUserId: String!, $skip: Int, $first: Int) {
  beamsReceiverSeenEvents(where: {receiverUserId: $receiverUserId}, skip: $skip, first: $first) {
		id
    config
		receiverUserId
		senderUserId
		beamsSetEvent {
			id
			userId
			assetId
			receiversHash
		}
    blockTimestamp
  }
}
`;
var getMetadataHistoryByUser = `#graphql
query getMetadataHistoryByUser($userId: String!,$skip: Int, $first: Int) {
  userMetadataEvents(where: {userId: $userId}, skip: $skip, first: $first) {
		id
    key
    value
    userId
    lastUpdatedBlockTimestamp
  }
}
`;
var getMetadataHistoryByUserAndKey = `#graphql
query getMetadataHistoryByUserAndKey($userId: String!, $key: Bytes!, $skip: Int, $first: Int) {
  userMetadataEvents(where: {userId: $userId, key: $key}, skip: $skip, first: $first) {
		id
    key
    value
    userId
    lastUpdatedBlockTimestamp
  }
}
`;
var getMetadataHistoryByKeyAndValue = `#graphql
query getMetadataHistoryByKeyAndValue($key: Bytes!, $value: Bytes!, $skip: Int, $first: Int) {
  userMetadataEvents(where: {key: $key, value: $value}, skip: $skip, first: $first) {
		id
    key
    value
    userId
    lastUpdatedBlockTimestamp
  }
}
`;
var getNftSubAccountsByOwner = `#graphql
query getNftSubAccountsByOwner($ownerAddress: Bytes!, $skip: Int, $first: Int) {
	nftsubAccounts(where: {ownerAddress: $ownerAddress}, skip: $skip, first: $first) {
		id
		ownerAddress
	}
}
`;
var getNftSubAccountOwnerByTokenId = `#graphql
query getNftSubAccountOwnerByTokenId($tokenId: ID!) {
	nftsubAccount(id: $tokenId) {
		id
		ownerAddress
	}
}
`;
var getCollectedEventsByUserId = `#graphql
query getCollectedEventsByUserId($userId: String!, $skip: Int, $first: Int) {
  collectedEvents(where: {user: $userId}, skip: $skip, first: $first) {
		id
		user {
			id
		}
		assetId
		collected
		blockTimestamp
	}
}
`;
var getSplitEventsByUserId = `#graphql
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
var getSplitEventsByReceiverUserId = `#graphql
query getSplitEventsByReceiverUserId($receiverUserId: String!, $skip: Int, $first: Int) {
  splitEvents(where: {receiverId: $receiverUserId}, skip: $skip, first: $first) {
		id
		userId
		receiverId
		assetId
		amt
		blockTimestamp
	}
}
`;
var getReceivedBeamsEventsByUserId = `#graphql
query getReceivedBeamsEventsByUserId($userId: String!, $skip: Int, $first: Int) {
  receivedBeamsEvents(where: {userId: $userId}, skip: $skip, first: $first) {
		id
		userId
		receivableCycles
		assetId
		amt
		blockTimestamp
	}
}
`;
var getGivenEventsByUserId = `#graphql
query getGivenEventsByUserId($userId: String!, $skip: Int, $first: Int) {
  givenEvents(where: {userId: $userId}, skip: $skip, first: $first) {
		id
		userId
		receiverUserId
		assetId
		amt
		blockTimestamp
	}
}
`;
var getGivenEventsByReceiverUserId = `#graphql
query getGivenEventsByReceiverUserId($receiverUserId: String!, $skip: Int, $first: Int) {
  givenEvents(where: {receiverUserId: $receiverUserId}, skip: $skip, first: $first) {
		id
		userId
		receiverUserId
		assetId
		amt
		blockTimestamp
	}
}
`;
var getLatestUserMetadata = `#graphql
query getLatestUserMetadata($id: ID!) {
  userMetadataByKey(id: $id) {
		id
    key
    value
    userId
		lastUpdatedBlockTimestamp
  }
}
`;
var getSqueezedBeamsEventsByUserId = `#graphql
query getSqueezedBeamsEventsByUserId($userId: String!, $skip: Int, $first: Int) {
  squeezedBeamsEvents(where: {userId: $userId}, skip: $skip, first: $first) {
		id
    userId
    assetId
    senderId
    amt
    blockTimestamp
		beamsHistoryHashes
	}
}
`;

// src/BeamsSubgraph/mappers.ts
var mapUserAssetConfigToDto = (userAssetConfig) => {
  var _a;
  return {
    id: userAssetConfig.id,
    assetId: BigInt(userAssetConfig.assetId),
    beamsEntries: (_a = userAssetConfig.beamsEntries) == null ? void 0 : _a.map((d) => ({
      id: d.id,
      userId: d.userId,
      config: BigInt(d.config)
    })),
    balance: BigInt(userAssetConfig.balance),
    amountCollected: BigInt(userAssetConfig.amountCollected),
    lastUpdatedBlockTimestamp: BigInt(userAssetConfig.lastUpdatedBlockTimestamp)
  };
};
var mapSplitEntryToDto = (splitEntry) => ({
  id: splitEntry.id,
  userId: splitEntry.userId,
  senderId: splitEntry.sender.id,
  weight: BigInt(splitEntry.weight)
});
var mapBeamsSetEventToDto = (beamsSetEvent) => {
  var _a;
  return {
    id: beamsSetEvent.id,
    userId: beamsSetEvent.userId,
    assetId: BigInt(beamsSetEvent.assetId),
    beamsReceiverSeenEvents: (_a = beamsSetEvent.beamsReceiverSeenEvents) == null ? void 0 : _a.map((r) => ({
      id: r.id,
      receiverUserId: r.receiverUserId,
      config: BigInt(r.config)
    })),
    beamsHistoryHash: beamsSetEvent.beamsHistoryHash,
    balance: BigInt(beamsSetEvent.balance),
    blockTimestamp: BigInt(beamsSetEvent.blockTimestamp),
    maxEnd: BigInt(beamsSetEvent.maxEnd),
    receiversHash: beamsSetEvent.receiversHash
  };
};
var mapSplitEventToDto = (splitEvent) => ({
  id: splitEvent.id,
  amount: BigInt(splitEvent.amt),
  assetId: BigInt(splitEvent.assetId),
  blockTimestamp: BigInt(splitEvent.blockTimestamp),
  receiverId: splitEvent.receiverId,
  userId: splitEvent.userId
});
var mapReceivedBeamsEventToDto = (receivedBeamsEvent) => ({
  id: receivedBeamsEvent.id,
  amount: BigInt(receivedBeamsEvent.amt),
  assetId: BigInt(receivedBeamsEvent.assetId),
  blockTimestamp: BigInt(receivedBeamsEvent.blockTimestamp),
  receivableCycles: BigInt(receivedBeamsEvent.receivableCycles),
  userId: receivedBeamsEvent.userId
});
var mapCollectedEventToDto = (collectedEvent) => ({
  id: collectedEvent.id,
  collected: BigInt(collectedEvent.collected),
  assetId: BigInt(collectedEvent.assetId),
  blockTimestamp: BigInt(collectedEvent.blockTimestamp),
  userId: collectedEvent.user.id
});
var mapSqueezedBeamsToDto = (squeezedBeamsEvent) => ({
  amount: BigInt(squeezedBeamsEvent.amt),
  assetId: BigInt(squeezedBeamsEvent.assetId),
  blockTimestamp: BigInt(squeezedBeamsEvent.blockTimestamp),
  id: squeezedBeamsEvent.id,
  senderId: squeezedBeamsEvent.senderId,
  userId: squeezedBeamsEvent.userId,
  beamsHistoryHashes: squeezedBeamsEvent.beamsHistoryHashes
});
var mapGivenEventToDto = (givenEvent) => ({
  id: givenEvent.id,
  amount: BigInt(givenEvent.amt),
  assetId: BigInt(givenEvent.assetId),
  blockTimestamp: BigInt(givenEvent.blockTimestamp),
  receiverUserId: givenEvent.receiverUserId,
  userId: givenEvent.userId
});
var mapBeamsReceiverSeenEventToDto = (beamsReceiverSeenEvent) => ({
  id: beamsReceiverSeenEvent.id,
  config: BigInt(beamsReceiverSeenEvent.config),
  senderUserId: BigInt(beamsReceiverSeenEvent.senderUserId),
  receiverUserId: BigInt(beamsReceiverSeenEvent.receiverUserId),
  beamsSetEvent: {
    id: beamsReceiverSeenEvent.beamsSetEvent.id,
    assetId: BigInt(beamsReceiverSeenEvent.beamsSetEvent.assetId),
    receiversHash: beamsReceiverSeenEvent.beamsSetEvent.receiversHash
  },
  blockTimestamp: BigInt(beamsReceiverSeenEvent.blockTimestamp)
});
var mapUserMetadataEventToDto = (userMetadata) => {
  const { key, value } = utils_default.Metadata.convertMetadataBytesToString(userMetadata);
  return {
    key,
    value,
    id: userMetadata.id,
    userId: userMetadata.userId,
    lastUpdatedBlockTimestamp: BigInt(userMetadata.lastUpdatedBlockTimestamp)
  };
};

// src/BeamsSubgraph/utils.ts
var sortBeamsSetEvents = (beamsSetEvents) => beamsSetEvents.sort((a, b) => Number(a.blockTimestamp) - Number(b.blockTimestamp));
var deduplicateArray = (array, key) => [
  ...new Map(array.map((item) => [item[key], item])).values()
];
var reconcileBeamsSetReceivers = (beamsSetEvents) => {
  const sortedBeamsSetEvents = sortBeamsSetEvents(beamsSetEvents);
  const receiversHashes = sortedBeamsSetEvents.reduce((acc, beamsSetEvent) => {
    const { receiversHash } = beamsSetEvent;
    return !acc.includes(receiversHash) ? [...acc, receiversHash] : acc;
  }, []);
  const beamsReceiverSeenEventsByReceiversHash = receiversHashes.reduce((acc, receiversHash) => {
    const receivers = deduplicateArray(
      sortedBeamsSetEvents.filter((event) => event.receiversHash === receiversHash).reduce((accc, event) => [...accc, ...event.beamsReceiverSeenEvents], []),
      "config"
    );
    return {
      ...acc,
      [receiversHash]: receivers
    };
  }, {});
  return sortedBeamsSetEvents.reduce(
    (acc, beamsSetEvent) => {
      var _a;
      return [
        ...acc,
        {
          ...beamsSetEvent,
          currentReceivers: (_a = beamsReceiverSeenEventsByReceiversHash[beamsSetEvent.receiversHash]) != null ? _a : []
        }
      ];
    },
    []
  );
};

// src/BeamsSubgraph/BeamsSubgraphClient.ts
var _chainId, _apiUrl;
var _BeamsSubgraphClient = class {
  constructor() {
    __privateAdd(this, _chainId, void 0);
    __privateAdd(this, _apiUrl, void 0);
  }
  get chainId() {
    return __privateGet(this, _chainId);
  }
  get apiUrl() {
    return __privateGet(this, _apiUrl);
  }
  static create(chainId, customApiUrl) {
    if (!chainId) {
      throw BeamsErrors.argumentMissingError(
        `Could not create a new 'BeamsSubgraphClient': ${nameOf({ chainId })} is missing.`,
        nameOf({ chainId })
      );
    }
    if (!utils_default.Network.isSupportedChain(chainId)) {
      throw BeamsErrors.unsupportedNetworkError(
        `Could not create a new 'BeamsSubgraphClient': chain ID '${chainId}' is not supported.`,
        chainId
      );
    }
    const subgraphClient = new _BeamsSubgraphClient();
    __privateSet(subgraphClient, _chainId, chainId);
    __privateSet(subgraphClient, _apiUrl, customApiUrl != null ? customApiUrl : utils_default.Network.configs[__privateGet(subgraphClient, _chainId)].SUBGRAPH_URL);
    return subgraphClient;
  }
  async getUserAssetConfigById(userId, assetId) {
    var _a;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get user asset config: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    if (!assetId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get user asset config: ${nameOf({ assetId })} is missing.`,
        nameOf({ assetId })
      );
    }
    const response = await this.query(getUserAssetConfigById, {
      configId: `${userId}-${assetId}`
    });
    const userAssetConfig = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.userAssetConfig;
    return userAssetConfig ? mapUserAssetConfigToDto(userAssetConfig) : null;
  }
  async getAllUserAssetConfigsByUserId(userId, skip = 0, first = 100) {
    var _a, _b, _c;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get user asset configs: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getAllUserAssetConfigsByUserId, { userId, skip, first });
    return ((_c = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.user) == null ? void 0 : _b.assetConfigs) == null ? void 0 : _c.map(mapUserAssetConfigToDto)) || [];
  }
  async getSplitsConfigByUserId(userId, skip = 0, first = 100) {
    var _a, _b, _c;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get splits config: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getSplitsConfigByUserId, { userId, skip, first });
    return ((_c = (_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.user) == null ? void 0 : _b.splitsEntries) == null ? void 0 : _c.map(mapSplitEntryToDto)) || [];
  }
  async getSplitEntriesByReceiverUserId(receiverUserId, skip = 0, first = 100) {
    var _a, _b;
    if (!receiverUserId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'split' events: ${nameOf({ receiverUserId })} is missing.`,
        nameOf({ receiverUserId })
      );
    }
    const response = await this.query(getSplitEntriesByReceiverUserId, {
      receiverUserId,
      skip,
      first
    });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.splitsEntries) == null ? void 0 : _b.map(mapSplitEntryToDto)) || [];
  }
  async getBeamsSetEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'beam set' events: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getBeamsSetEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.beamsSetEvents) == null ? void 0 : _b.map(mapBeamsSetEventToDto)) || [];
  }
  async getBeamsReceiverSeenEventsByReceiverId(receiverUserId, skip = 0, first = 100) {
    var _a;
    if (!receiverUserId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get streaming users: ${nameOf({ receiverUserId })} is missing.`,
        nameOf({ receiverUserId })
      );
    }
    const response = await this.query(getBeamsReceiverSeenEventsByReceiverId, {
      receiverUserId,
      skip,
      first
    });
    const beamsReceiverSeenEvents = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.beamsReceiverSeenEvents;
    if (!(beamsReceiverSeenEvents == null ? void 0 : beamsReceiverSeenEvents.length)) {
      return [];
    }
    return beamsReceiverSeenEvents.map(mapBeamsReceiverSeenEventToDto);
  }
  async getUsersStreamingToUser(receiverUserId, skip = 0, first = 100) {
    if (!receiverUserId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get streaming users: ${nameOf({ receiverUserId })} is missing.`,
        nameOf({ receiverUserId })
      );
    }
    const beamReceiverSeenEvents = await this.getBeamsReceiverSeenEventsByReceiverId(receiverUserId, skip, first);
    const uniqueSenders = beamReceiverSeenEvents.reduce((unique, o) => {
      if (!unique.some((id) => id === o.senderUserId)) {
        unique.push(o.senderUserId);
      }
      return unique;
    }, []);
    return uniqueSenders;
  }
  async getMetadataHistory(userId, key, skip = 0, first = 100) {
    var _a;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get user metadata: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    let response;
    if (key) {
      response = await this.query(getMetadataHistoryByUserAndKey, {
        userId,
        key: `${utils_default.Metadata.keyFromString(key)}`,
        skip,
        first
      });
    } else {
      response = await this.query(getMetadataHistoryByUser, { userId, skip, first });
    }
    const userMetadataEvents = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.userMetadataEvents;
    return userMetadataEvents ? userMetadataEvents.map(mapUserMetadataEventToDto) : [];
  }
  async getLatestUserMetadata(userId, key) {
    var _a;
    if (!userId) {
      throw BeamsErrors.argumentError(`Could not get user metadata: '${nameOf({ key })}' is missing.`);
    }
    if (!key) {
      throw BeamsErrors.argumentError(`Could not get user metadata: '${nameOf({ key })}' is missing.`);
    }
    const response = await this.query(getLatestUserMetadata, {
      id: `${userId}-${key}`
    });
    const userMetadataEvent = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.userMetadataByKey;
    return userMetadataEvent ? mapUserMetadataEventToDto(userMetadataEvent) : null;
  }
  async getNftSubAccountsByOwner(ownerAddress, skip = 0, first = 100) {
    var _a;
    validateAddress(ownerAddress);
    const response = await this.query(getNftSubAccountsByOwner, {
      ownerAddress: ethers5.utils.getAddress(ownerAddress),
      skip,
      first
    });
    const nftSubAccounts = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.nftsubAccounts;
    return nftSubAccounts ? nftSubAccounts.map((s) => ({
      tokenId: s.id,
      ownerAddress: ethers5.utils.getAddress(s.ownerAddress)
    })) : [];
  }
  async getNftSubAccountOwnerByTokenId(tokenId) {
    var _a;
    if (!tokenId) {
      throw BeamsErrors.argumentError(`Could not get NFT sub account: tokenId is missing.`);
    }
    const response = await this.query(getNftSubAccountOwnerByTokenId, { tokenId });
    const nftSubAccount = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.nftsubAccount;
    return nftSubAccount ? { tokenId: nftSubAccount.id, ownerAddress: ethers5.utils.getAddress(nftSubAccount.ownerAddress) } : null;
  }
  async getNftSubAccountIdsByApp(associatedApp, skip = 0, first = 100) {
    var _a;
    if (!associatedApp) {
      throw BeamsErrors.argumentError(`Could not get user metadata: ${nameOf({ associatedApp })} is missing.`);
    }
    const response = await this.query(getMetadataHistoryByKeyAndValue, {
      key: constants_default.ASSOCIATED_APP_KEY_BYTES,
      value: utils_default.Metadata.valueFromString(associatedApp),
      skip,
      first
    });
    const userMetadataEvents = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.userMetadataEvents;
    const uniqueUserIds = userMetadataEvents == null ? void 0 : userMetadataEvents.reduce((unique, o) => {
      if (!unique.some((id) => id === o.userId)) {
        unique.push(o.userId);
      }
      return unique;
    }, []);
    return uniqueUserIds || [];
  }
  async getCollectedEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'split' events: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getCollectedEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.collectedEvents) == null ? void 0 : _b.map(mapCollectedEventToDto)) || [];
  }
  async getSqueezedBeamsEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentError(`Could not get 'squeezed Beams' events: ${nameOf({ userId })} is missing.`);
    }
    const response = await this.query(getSqueezedBeamsEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.squeezedBeamsEvents) == null ? void 0 : _b.map(mapSqueezedBeamsToDto)) || [];
  }
  async getSplitEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'split' events: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getSplitEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.splitEvents) == null ? void 0 : _b.map(mapSplitEventToDto)) || [];
  }
  async getSplitEventsByReceiverUserId(receiverUserId, skip = 0, first = 100) {
    var _a, _b;
    if (!receiverUserId) {
      throw BeamsErrors.argumentError(`Could not get 'split' events: ${nameOf({ receiverUserId })} is missing.`);
    }
    const response = await this.query(getSplitEventsByReceiverUserId, {
      receiverUserId,
      skip,
      first
    });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.splitEvents) == null ? void 0 : _b.map(mapSplitEventToDto)) || [];
  }
  async getReceivedBeamsEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'received beams' events: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getReceivedBeamsEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.receivedBeamsEvents) == null ? void 0 : _b.map(mapReceivedBeamsEventToDto)) || [];
  }
  async getGivenEventsByUserId(userId, skip = 0, first = 100) {
    var _a, _b;
    if (!userId) {
      throw BeamsErrors.argumentMissingError(
        `Could not get 'given' events: ${nameOf({ userId })} is missing.`,
        nameOf({ userId })
      );
    }
    const response = await this.query(getGivenEventsByUserId, { userId, skip, first });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.givenEvents) == null ? void 0 : _b.map(mapGivenEventToDto)) || [];
  }
  async getGivenEventsByReceiverUserId(receiverUserId, skip = 0, first = 100) {
    var _a, _b;
    if (!receiverUserId) {
      throw BeamsErrors.argumentError(`Could not get 'given' events: ${nameOf({ receiverUserId })} is missing.`);
    }
    const response = await this.query(getGivenEventsByReceiverUserId, {
      receiverUserId,
      skip,
      first
    });
    return ((_b = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.givenEvents) == null ? void 0 : _b.map(mapGivenEventToDto)) || [];
  }
  async getArgsForSqueezingAllBeams(userId, senderId, tokenAddress) {
    var _a;
    const allBeamsSetEvents = [];
    let skip = 0;
    const first = 500;
    while (true) {
      const iterationEvents = await this.getBeamsSetEventsByUserId(senderId, skip, first);
      allBeamsSetEvents.push(...iterationEvents);
      if (!(iterationEvents == null ? void 0 : iterationEvents.length) || iterationEvents.length < first) {
        break;
      }
      skip += first;
    }
    const filtered = allBeamsSetEvents.reduce((unique, o) => {
      if (!unique.some((ev) => ev.id === o.id)) {
        unique.push(o);
      }
      return unique;
    }, []).filter((e) => e.assetId === utils_default.Asset.getIdFromAddress(ethers5.utils.getAddress(tokenAddress)));
    const squeezableBeamsSetEvents = reconcileBeamsSetReceivers(filtered).sort((a, b) => Number(b.blockTimestamp) - Number(a.blockTimestamp));
    const beamsSetEventsToSqueeze = [];
    if (squeezableBeamsSetEvents == null ? void 0 : squeezableBeamsSetEvents.length) {
      for (let i = 0; i < squeezableBeamsSetEvents.length; i++) {
        const beamsConfiguration = squeezableBeamsSetEvents[i];
        const { currentCycleStartDate } = utils_default.Cycle.getInfo(__privateGet(this, _chainId));
        const eventTimestamp = new Date(Number(beamsConfiguration.blockTimestamp * BigInt(1e3)));
        if (eventTimestamp >= currentCycleStartDate) {
          beamsSetEventsToSqueeze.push(beamsConfiguration);
        } else {
          beamsSetEventsToSqueeze.push(beamsConfiguration);
          break;
        }
      }
    }
    const historyHash = ((_a = beamsSetEventsToSqueeze[beamsSetEventsToSqueeze.length - 1]) == null ? void 0 : _a.beamsHistoryHash) || ethers5.constants.HashZero;
    const beamsHistory = beamsSetEventsToSqueeze == null ? void 0 : beamsSetEventsToSqueeze.map((beamsSetEvent) => {
      let shouldSqueeze = false;
      for (let i = 0; i < beamsSetEvent.currentReceivers.length; i++) {
        const receiver = beamsSetEvent.currentReceivers[i];
        if (receiver.receiverUserId === userId) {
          shouldSqueeze = true;
          break;
        }
      }
      const historyItem = {
        beamsHash: shouldSqueeze ? ethers5.constants.HashZero : beamsSetEvent.receiversHash,
        receivers: shouldSqueeze ? beamsSetEvent.currentReceivers.map((r) => ({
          userId: r.receiverUserId,
          config: r.config
        })) : [],
        updateTime: beamsSetEvent.blockTimestamp,
        maxEnd: beamsSetEvent.maxEnd
      };
      return historyItem;
    }).reverse();
    return { userId, tokenAddress, senderId, historyHash, beamsHistory };
  }
  async filterSqueezableSenders(receiverId) {
    var _a;
    const beamsReceiverSeenEvents = [];
    let skip = 0;
    const first = 500;
    while (true) {
      const response = await this.query(getBeamsReceiverSeenEventsByReceiverId, {
        receiverId,
        skip,
        first
      });
      const iterationEvents = (_a = response == null ? void 0 : response.data) == null ? void 0 : _a.beamsReceiverSeenEvents;
      beamsReceiverSeenEvents.push(...iterationEvents);
      if (!(iterationEvents == null ? void 0 : iterationEvents.length) || iterationEvents.length < first) {
        break;
      }
      skip += first;
    }
    if (!(beamsReceiverSeenEvents == null ? void 0 : beamsReceiverSeenEvents.length)) {
      return {};
    }
    const uniqueEvents = beamsReceiverSeenEvents.reduce(
      (unique, o) => {
        if (!unique.some((ev) => ev.id === o.id)) {
          unique.push(o);
        }
        return unique;
      },
      []
    );
    const squeezableSenders = {};
    for (let i = 0; i < uniqueEvents.length; i++) {
      const { senderUserId, beamsSetEvent } = uniqueEvents[i];
      if (!squeezableSenders[senderUserId.toString()]) {
        squeezableSenders[senderUserId.toString()] = [];
      }
      if (!squeezableSenders[senderUserId.toString()].includes(beamsSetEvent.assetId.toString())) {
        squeezableSenders[senderUserId.toString()].push(beamsSetEvent.assetId.toString());
      }
    }
    return squeezableSenders;
  }
  async getCurrentBeamsReceivers(userId, tokenAddress) {
    let beamsSetEvents = [];
    let skip = 0;
    const first = 500;
    while (true) {
      const iterationBeamsSetEvents = await this.getBeamsSetEventsByUserId(userId, skip, first);
      const tokenBeamsSetEvents = iterationBeamsSetEvents.filter(
        (e) => e.assetId === utils_default.Asset.getIdFromAddress(tokenAddress)
      );
      beamsSetEvents.push(...tokenBeamsSetEvents);
      if (!(iterationBeamsSetEvents == null ? void 0 : iterationBeamsSetEvents.length) || iterationBeamsSetEvents.length < first) {
        break;
      }
      skip += first;
    }
    if (!(beamsSetEvents == null ? void 0 : beamsSetEvents.length)) {
      return [];
    }
    beamsSetEvents = beamsSetEvents.sort((a, b) => Number(b.blockTimestamp) - Number(a.blockTimestamp));
    return formatBeamsReceivers(
      beamsSetEvents[0].beamsReceiverSeenEvents.map((d) => ({
        config: d.config,
        userId: d.receiverUserId
      }))
    );
  }
  async query(query, variables) {
    var _a;
    const resp = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query, variables }, (_, value) => typeof value === "bigint" ? value.toString() : value)
    });
    if (resp.status >= 200 && resp.status <= 299) {
      const responseContent = await resp.json();
      if (((_a = responseContent == null ? void 0 : responseContent.errors) == null ? void 0 : _a.length) && responseContent.errors.length > 0) {
        throw BeamsErrors.subgraphQueryError(`Subgraph query failed: ${JSON.stringify(responseContent.errors[0])}`);
      }
      return responseContent;
    }
    throw BeamsErrors.subgraphQueryError(`Subgraph query failed: ${resp.statusText}`);
  }
};
var BeamsSubgraphClient = _BeamsSubgraphClient;
_chainId = new WeakMap();
_apiUrl = new WeakMap();

// src/ImmutableSplits/ImmutableSplitsDriverClient.ts
var _driverAddress5, _driver6, _provider4, _signer6;
var _ImmutableSplitsDriverClient = class {
  constructor() {
    __privateAdd(this, _driverAddress5, void 0);
    __privateAdd(this, _driver6, void 0);
    __privateAdd(this, _provider4, void 0);
    __privateAdd(this, _signer6, void 0);
  }
  get provider() {
    return __privateGet(this, _provider4);
  }
  get signer() {
    return __privateGet(this, _signer6);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress5);
  }
  static async create(provider, signer, customDriverAddress) {
    try {
      await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
      if (!signer.provider) {
        signer = signer.connect(provider);
      }
      await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
      const network = await provider.getNetwork();
      const driverAddress = customDriverAddress != null ? customDriverAddress : utils_default.Network.configs[network.chainId].IMMUTABLE_SPLITS_DRIVER;
      const client = new _ImmutableSplitsDriverClient();
      __privateSet(client, _signer6, signer);
      __privateSet(client, _provider4, provider);
      __privateSet(client, _driverAddress5, driverAddress);
      __privateSet(client, _driver6, ImmutableSplitsDriver__factory.connect(driverAddress, signer));
      return client;
    } catch (error) {
      throw BeamsErrors.initializationError(`Could not create 'ImmutableSplitsDriverClient': ${error.message}`);
    }
  }
  async createSplits(receivers, userMetadata) {
    var _a;
    validateSplitsReceivers(receivers);
    validateEmitUserMetadataInput(userMetadata);
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const txResponse = await __privateGet(this, _driver6).createSplits(receivers, userMetadataAsBytes);
    const txReceipt = await txResponse.wait();
    const createdSplitsEventName = "createdsplits";
    const createdSplitsEvent = (_a = txReceipt.events) == null ? void 0 : _a.filter((e) => {
      var _a2;
      return ((_a2 = e.event) == null ? void 0 : _a2.toLowerCase()) === createdSplitsEventName;
    })[0];
    if (!createdSplitsEvent) {
      throw BeamsErrors.txEventNotFound(
        `Could not retrieve the user ID while creating a new immutable splits configuration: '${createdSplitsEventName}' event was not found in the transaction receipt.txReceipt: ${JSON.stringify(txReceipt)}`,
        createdSplitsEventName,
        txReceipt
      );
    }
    const { userId } = createdSplitsEvent.args;
    return BigInt(userId).toString();
  }
};
var ImmutableSplitsDriverClient = _ImmutableSplitsDriverClient;
_driverAddress5 = new WeakMap();
_driver6 = new WeakMap();
_provider4 = new WeakMap();
_signer6 = new WeakMap();

// src/NFTDriver/NFTDriverClient.ts
import { constants as constants3, BigNumber as BigNumber7 } from "ethers";
var _signer7, _driver7, _provider5, _driverAddress6, _txFactory2, _getTokenIdFromTxResponse, getTokenIdFromTxResponse_fn;
var _NFTDriverClient = class {
  constructor() {
    __privateAdd(this, _getTokenIdFromTxResponse);
    __privateAdd(this, _signer7, void 0);
    __privateAdd(this, _driver7, void 0);
    __privateAdd(this, _provider5, void 0);
    __privateAdd(this, _driverAddress6, void 0);
    __privateAdd(this, _txFactory2, void 0);
  }
  get provider() {
    return __privateGet(this, _provider5);
  }
  get signer() {
    return __privateGet(this, _signer7);
  }
  get driverAddress() {
    return __privateGet(this, _driverAddress6);
  }
  static async create(provider, signer, customDriverAddress, txFactory) {
    await validateClientProvider(provider, utils_default.Network.SUPPORTED_CHAINS);
    if (!signer.provider) {
      signer = signer.connect(provider);
    }
    await validateClientSigner(signer, utils_default.Network.SUPPORTED_CHAINS);
    const network = await provider.getNetwork();
    const driverAddress = customDriverAddress != null ? customDriverAddress : utils_default.Network.configs[network.chainId].NFT_DRIVER;
    const client = new _NFTDriverClient();
    __privateSet(client, _signer7, signer);
    __privateSet(client, _provider5, provider);
    __privateSet(client, _driverAddress6, driverAddress);
    __privateSet(client, _driver7, NFTDriver__factory.connect(driverAddress, signer));
    __privateSet(client, _txFactory2, txFactory || await NFTDriverTxFactory.create(signer, customDriverAddress));
    return client;
  }
  async getAllowance(tokenAddress) {
    validateAddress(tokenAddress);
    const signerAsErc20Contract = IERC20__factory.connect(tokenAddress, __privateGet(this, _signer7));
    const signerAddress = await __privateGet(this, _signer7).getAddress();
    const allowance = await signerAsErc20Contract.allowance(signerAddress, __privateGet(this, _driverAddress6));
    return allowance.toBigInt();
  }
  approve(tokenAddress) {
    validateAddress(tokenAddress);
    const signerAsErc20Contract = IERC20__factory.connect(tokenAddress, __privateGet(this, _signer7));
    return signerAsErc20Contract.approve(__privateGet(this, _driverAddress6), constants3.MaxUint256);
  }
  async createAccount(transferToAddress, associatedApp, userMetadata = []) {
    validateAddress(transferToAddress);
    validateEmitUserMetadataInput(userMetadata);
    if (associatedApp) {
      userMetadata.push({ key: constants_default.ASSOCIATED_APP_KEY, value: associatedApp });
    }
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const txResponse = await __privateGet(this, _driver7).mint(transferToAddress, userMetadataAsBytes);
    return __privateMethod(this, _getTokenIdFromTxResponse, getTokenIdFromTxResponse_fn).call(this, txResponse);
  }
  async safeCreateAccount(transferToAddress, associatedApp, userMetadata = []) {
    validateAddress(transferToAddress);
    validateEmitUserMetadataInput(userMetadata);
    if (associatedApp) {
      userMetadata.push({ key: constants_default.ASSOCIATED_APP_KEY, value: associatedApp });
    }
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const txResponse = await __privateGet(this, _driver7).safeMint(transferToAddress, userMetadataAsBytes);
    return __privateMethod(this, _getTokenIdFromTxResponse, getTokenIdFromTxResponse_fn).call(this, txResponse);
  }
  async safeCreateAccountWithSalt(salt, transferToAddress, associatedApp, userMetadata = []) {
    validateAddress(transferToAddress);
    validateEmitUserMetadataInput(userMetadata);
    if (associatedApp) {
      userMetadata.push({ key: constants_default.ASSOCIATED_APP_KEY, value: associatedApp });
    }
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const txResponse = await __privateGet(this, _driver7).safeMintWithSalt(salt, transferToAddress, userMetadataAsBytes);
    return __privateMethod(this, _getTokenIdFromTxResponse, getTokenIdFromTxResponse_fn).call(this, txResponse);
  }
  async collect(tokenId, tokenAddress, transferToAddress) {
    if (isNullOrUndefined(tokenId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not collect '${nameOf({ tokenId })}' is missing.`,
        nameOf({ tokenId })
      );
    }
    validateAddress(tokenAddress);
    validateAddress(transferToAddress);
    const tx = await __privateGet(this, _txFactory2).collect(tokenId, tokenAddress, transferToAddress);
    return __privateGet(this, _signer7).sendTransaction(tx);
  }
  async give(tokenId, receiverUserId, tokenAddress, amount) {
    if (isNullOrUndefined(tokenId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not give: '${nameOf({ tokenId })}' is missing.`,
        nameOf({ tokenId })
      );
    }
    if (isNullOrUndefined(receiverUserId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not give: '${nameOf({ receiverUserId })}' is missing.`,
        nameOf({ receiverUserId })
      );
    }
    if (!amount || BigNumber7.from(amount).lte(0)) {
      throw BeamsErrors.argumentError(
        `Could not give: '${nameOf({ amount })}' must be greater than 0.`,
        nameOf({ amount }),
        amount
      );
    }
    validateAddress(tokenAddress);
    const tx = await __privateGet(this, _txFactory2).give(tokenId, receiverUserId, tokenAddress, amount);
    return __privateGet(this, _signer7).sendTransaction(tx);
  }
  async setBeams(tokenId, tokenAddress, currentReceivers, newReceivers, transferToAddress, balanceDelta = 0) {
    if (isNullOrUndefined(tokenId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not set beams: '${nameOf({ tokenId })}' is missing.`,
        nameOf({ tokenId })
      );
    }
    validateSetBeamsInput(
      tokenAddress,
      currentReceivers == null ? void 0 : currentReceivers.map((r) => ({
        userId: r.userId.toString(),
        config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber7.from(r.config).toBigInt())
      })),
      newReceivers == null ? void 0 : newReceivers.map((r) => ({
        userId: r.userId.toString(),
        config: utils_default.BeamsReceiverConfiguration.fromUint256(BigNumber7.from(r.config).toBigInt())
      })),
      transferToAddress,
      balanceDelta
    );
    const tx = await __privateGet(this, _txFactory2).setBeams(
      tokenId,
      tokenAddress,
      currentReceivers,
      balanceDelta,
      newReceivers,
      0,
      0,
      transferToAddress
    );
    return __privateGet(this, _signer7).sendTransaction(tx);
  }
  async setSplits(tokenId, receivers) {
    if (isNullOrUndefined(tokenId)) {
      throw BeamsErrors.argumentMissingError(
        `Could not set splits: '${nameOf({ tokenId })}' is missing.`,
        nameOf({ tokenId })
      );
    }
    validateSplitsReceivers(receivers);
    const tx = await __privateGet(this, _txFactory2).setSplits(tokenId, receivers);
    return __privateGet(this, _signer7).sendTransaction(tx);
  }
  async emitUserMetadata(tokenId, userMetadata) {
    if (!tokenId) {
      throw BeamsErrors.argumentError(`Could not emit user metadata: '${nameOf({ tokenId })}' is missing.`);
    }
    validateEmitUserMetadataInput(userMetadata);
    const userMetadataAsBytes = userMetadata.map((m) => utils_default.Metadata.createFromStrings(m.key, m.value));
    const tx = await __privateGet(this, _txFactory2).emitUserMetadata(tokenId, userMetadataAsBytes);
    return __privateGet(this, _signer7).sendTransaction(tx);
  }
};
var NFTDriverClient = _NFTDriverClient;
_signer7 = new WeakMap();
_driver7 = new WeakMap();
_provider5 = new WeakMap();
_driverAddress6 = new WeakMap();
_txFactory2 = new WeakMap();
_getTokenIdFromTxResponse = new WeakSet();
getTokenIdFromTxResponse_fn = async function(txResponse) {
  var _a;
  const txReceipt = await txResponse.wait();
  const transferEventName = "transfer";
  const transferEvent = (_a = txReceipt.events) == null ? void 0 : _a.filter((e) => {
    var _a2;
    return ((_a2 = e.event) == null ? void 0 : _a2.toLowerCase()) === transferEventName;
  })[0];
  if (!transferEvent) {
    throw BeamsErrors.txEventNotFound(
      `Could not retrieve the minted token ID while creating a new account: '${transferEventName}' event was not found in the transaction receipt.
Note that the account might be created through. To debug, inspect the owner's accounts to see if there's a new token ID included.
txReceipt: ${JSON.stringify(txReceipt)}`,
      transferEventName,
      txReceipt
    );
  }
  const { tokenId } = transferEvent.args;
  return BigInt(tokenId).toString();
};
export {
  AddressDriverClient,
  AddressDriverPresets,
  AddressDriverTxFactory,
  BeamsError,
  BeamsErrorCode,
  BeamsHubClient,
  BeamsHubTxFactory,
  BeamsSubgraphClient,
  CallerClient,
  ERC20TxFactory,
  ImmutableSplitsDriverClient,
  NFTDriverClient,
  NFTDriverPresets,
  NFTDriverTxFactory,
  utils_default as Utils,
  constants_default as constants
};
