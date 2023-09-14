const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

module.exports = {
  contracts_directory: "./ethereum/",
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(process.env.mainnet, "https://ethereum.publicnode.com"),
      network_id: "1",
      networkCheckTimeout: 10000,
      gasPrice: 20e9
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.polygon, `https://matic-mainnet.chainstacklabs.com`),
      network_id: 137,
      timeoutBlocks: 10500,
      pollingInterval: 60000,
      gasPrice: 40e9,
      networkCheckTimeout: 1000000,
      confirmations: 2,
      timeout: 100000,
      skipDryRun: false
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.goerli, "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 5,
      gas: 6700000,
      gasPrice: 40e9,
      timeoutBlocks: 600,
      networkCheckTimeout: 1000000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 15000
        }
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: '16X7NBNHE9FF11P6K11HIIBBMF8KPVXW5J',
    etherscan: 'SKID1ZVK755GXRUJEIPCT4BVNS5JUH12PJ'
  }
}
