require("dotenv").config();
require('hardhat-contract-sizer');
require("@nomiclabs/hardhat-waffle");
require(`@nomiclabs/hardhat-etherscan`);
require("solidity-coverage");
require('hardhat-gas-reporter');
require('hardhat-deploy');
require('hardhat-deploy-ethers');
require('@openzeppelin/hardhat-upgrades');
require('./tasks');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

function getMnemonic(networkName) {
  if (networkName) {
    const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()]
    if (mnemonic && mnemonic !== '') {
      return mnemonic
    }
  }

  const mnemonic = process.env.MNEMONIC
  if (!mnemonic || mnemonic === '') {
    return 'test test test test test test test test test test test junk'
  }

  return mnemonic
}

function accounts(chainKey) {
  return { mnemonic: getMnemonic(chainKey) }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]


  },
  etherscan: {
    apiKey: {
      optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      "base-goerli": "PLACEHOLDER_STRING",
        
       
    },
    customChains: [
      {
        network: "base-goerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: 	"https://goerli.basescan.org",
        },
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org/",
        },
        network: "linea",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build",
        },
        network: "arbitrum-nova",
        chainId: 42170,
        urls: {
          apiURL: "https://api-nova.arbiscan.io/api",
          browserURL: "https://nova.arbiscan.io/",
        },
        network: "zkevm",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://zkevm.polygonscan.com",
        },
      }
    ]
  },

  // solidity: "0.8.4",
  contractSizer: {
    alphaSort: false,
    runOnCompile: true,
    disambiguatePaths: false,
  },

  namedAccounts: {
    deployer: {
      default: 0,    // wallet address 0, of the mnemonic in .env
    },
    proxyOwner: {
      default: 1,
    },
  },

  mocha: {
    timeout: 100000000
  },

  networks: {
    ethereum: {
      url: "https://mainnet.infura.io/v3", // public infura endpoint
      chainId: 1,
      accounts: accounts(),
    },
    bsc: {
      url: "https://bsc-dataseed1.binance.org",
      chainId: 56,
      accounts: accounts(),
    },
    nova: {
      url: "https://arbitrum-nova.public.blastapi.io",
      chainId: 42170,
      accounts: accounts(),
    },
    avalanche: {
      url: "https://avalanche-mainnet.infura.io/v3",
      chainId: 43114,
      accounts: accounts(),
    },
    polygon: {
      url: "https://polygon-mainnet.infura.io/v3",
      chainId: 137,
      accounts: accounts(),
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3`,
      chainId: 42161,
      accounts: accounts(),
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3`,
      chainId: 10,
      accounts: accounts(),
    },
    fantom: {
      url: `https://rpcapi.fantom.network`,
      chainId: 250,
      accounts: accounts(),
    },
    linea: {
      url: `https://linea-mainnet.infura.io/v3`,
      chainId: 59144,
      accounts: accounts(),
    },
    base: { 
      url: `https://developer-access-mainnet.base.org`,
      chainId: 8453,
      accounts: accounts(),
    },
    zkEVM: {
      url: `https://zkevm-rpc.com`,
      chainId: 1101,
      accounts: accounts(),
    },
    scroll: {
      url: `https://1rpc.io/scroll`,
      chainId: 534352,
      accounts: accounts(),
    },
      coredao: {
      url: `https://rpc.coredao.org`,
      chainId: 1116,
      accounts: accounts(),
      },
      'coredao-testnet': {
      url: 'https://rpc.test.btcs.network/',
      chainId: 1115,
      accounts: accounts(),
    },
    goerli: {
      url: "https://goerli.infura.io/v3", // public infura endpoint
      chainId: 5,
      accounts: accounts(),
    },
    'bsc-testnet': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      chainId: 97,
      accounts: accounts(),
    },
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      chainId: 43113,
      accounts: accounts(),
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com/",
      chainId: 80001,
      accounts: accounts(),
    },
    'arbitrum-goerli': {
      url: `https://goerli-rollup.arbitrum.io/rpc/`,
      chainId: 421613,
      accounts: accounts(),
    },
    'optimism-goerli': {
      url: `https://goerli.optimism.io/`,
      chainId: 420,
      accounts: accounts(),
    },
    'fantom-testnet': {
      url: `https://rpc.ankr.com/fantom_testnet`,
      chainId: 4002,
      accounts: accounts(),
    },
    'base-gorli': { 
        url: `https://goerli.base.org`,
        chainId: 84531,
        accounts: accounts(),
    },
    'mantle': { 
    url: `https://rpc.ankr.com/mantle`,
    chainId: 5000,
    accounts: accounts(),
   },
   'mantle-testnet': { 
    url: `https://rpc.ankr.com/mantle_testnet`,
    chainId: 5001,
    accounts: accounts(),
  },
  }
};
