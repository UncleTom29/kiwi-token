const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { KIWI_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Address of the Kiwi NFT contract that you deployed in the previous module
  const kiwiNftsContract = KIWI_NFT_CONTRACT_ADDRESS;

  /*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so kiwiTokenContract here is a factory for instances of our KiwiToken contract.
    */
  const kiwiTokenContract = await ethers.getContractFactory(
    "KiwiToken"
  );

  // deploy the contract
  const deployedKiwiTokenContract = await kiwiTokenContract.deploy(
    kiwiNftsContract
  );

  // print the address of the deployed contract
  console.log(
    "Kiwi Token Contract Address:",
    deployedKiwiTokenContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });