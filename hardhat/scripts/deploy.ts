import { ethers } from "hardhat";

async function main() {
  const accounts = await ethers.getSigners();

  const AAA = await ethers.getContractFactory("TokenA");
  const aaa = await AAA.deploy("AAA", "AAAA");
  await aaa.deployed();

  console.log("TokenA deployed to:", aaa.address);

  const BBB = await ethers.getContractFactory("TokenB");
  const bbb = await BBB.deploy("BBB", "BBBB");
  await bbb.deployed();

  console.log("TokenB deployed to:", bbb.address);

  const CCC = await ethers.getContractFactory("TokenC");
  const ccc = await CCC.deploy("CCC", "CCCC");
  await ccc.deployed();

  console.log("TokenC deployed to:", ccc.address);

  const WETH = await ethers.getContractFactory("WETH");
  const weth = await WETH.deploy();
  await weth.deployed();

  console.log("WETH deployed to:", weth.address);

  const Factory = await ethers.getContractFactory("MyFactory");
  const factory = await Factory.deploy(accounts[0].address);
  await factory.deployed();

  console.log("Factory deployed to:", factory.address);

  await factory.setFeeTo(accounts[1].address, accounts[1].address, accounts[1].address);

  const Router = await ethers.getContractFactory("MyRouter");
  const router = await Router.deploy(factory.address, weth.address);
  await router.deployed();

  console.log("Router deployed to:", router.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
