require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter")


/** @type import('hardhat/config').HardhatUserConfig */
import {alchemyApiKey,RPC_URL,Eth_scan1,praiv_key} from "dotenv";
//
const alchemyApiKey = "yCge9b9Wcs57azeAdRZ5FHwx9SwZg5Rg"||alchemyApiKey;
const Eth_scan = 'FMJYZADS6RI2GU9TDPIT9IWNEQ8X66G3EI'||Eth_scan1;

module.exports = {
  solidity: "0.8.10",
  etherscan: {
    apiKey: 'WIEBDCVKKGDVC8X7YQGF7DBEBMT991A6AG',
  },
  networks: {
    mumbai: {
      url: "https://red-fragrant-dream.matic-testnet.discover.quiknode.pro/3a19c24354f38df1238410a384d2bd8da2e1c12a/"||RPC_URL,
      accounts: ["6ad5774c7eb42ca324da9f2db469518019fae08e0db7a3c0d856fd3b85f435ed"]||praiv_key,
    }
  }
};