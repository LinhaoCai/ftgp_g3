import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-abi-exporter";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/41d94a855ec74e948af451b181de0039",
      accounts: ["9a434833f0d7bfdafcff7a310e86e54032ed399f5542ec55264e4a813ad5f3ca", "2158d91399fe235db1747ed10cbc48accae37ccef64a525ffb8c20a02f28524e"]
    }
  },
  abiExporter: {
    flat: true,
  },
};

export default config;
