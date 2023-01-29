// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
var ethers = require('ethers');
const hre = require("hardhat");

async function main() {
  // const [deployer, firstAcct, secondAcct] = await hre.ethers.getSigners();
  const [deployer, firstAcct, secondAcct] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const KalosToken = await hre.ethers.getContractFactory("KalosToken");
  const kalosToken = await KalosToken.deploy();

  await kalosToken.deployed();
  console.log("KalosToken Contract deployed to:", kalosToken.address);

  const Xkalos = await hre.ethers.getContractFactory("Xkalos");
  const xkalos = await Xkalos.deploy(kalosToken.address);

  await xkalos.deployed();
  console.log("Xkalos Contract deployed to:", xkalos.address);

  const MasterChef = await hre.ethers.getContractFactory("MasterChef");
  const xaloPerBlock = 30;
  const startBlock = 24175000;
  const masterChef = await MasterChef.deploy(kalosToken.address, xkalos.address, deployer.address, xaloPerBlock, startBlock);

  await masterChef.deployed();
  console.log(deployer.address, '--devaddr');
  console.log(xaloPerBlock, '--xaloPerBlock');
  console.log(startBlock, '--startBlock');
  console.log("MasterChef Contract deployed to:", masterChef.address);

  const KalosVault = await hre.ethers.getContractFactory("KalosVault");
  const kalosVault = await KalosVault.deploy(kalosToken.address, xkalos.address, masterChef.address, deployer.address, deployer.address);

  await kalosVault.deployed();
  console.log(deployer.address, '--admin');
  console.log(deployer.address, '--treasury');
  console.log("KalosVault Contract deployed to:", kalosVault.address);

  console.log(deployer.address, '--deployerAddress');
  console.log(kalosToken.address, '--KalosToken');
  console.log(xkalos.address, '--Xkalos');
  console.log(masterChef.address, '--MasterChef');
  console.log(kalosVault.address, '--KalosVault');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
