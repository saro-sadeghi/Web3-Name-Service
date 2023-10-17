// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
//import
import {Domain} from 'dotenv';

const hre = require("hardhat");
const { ethers,run,network } = require("hardhat")

//main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("Domains")
  console.log("Deploying contract ...")
  
  const SimpleStorage = await SimpleStorageFactory.deploy(Domain)
  await SimpleStorage.getDeployedCode()
  const add = await SimpleStorage.getAddress()
  //log the address of contract
  console.log(`deployed contract to ${add}`)

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
