import { ethers, Contract } from "ethers";
import stakingAbi from "../ABI/stakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";

const connectWallet = async () => {
  try {
    let [signer, provider, stakingContract, stakeTokenContract, chainId] = [
      null,
      null,
      null,
      null,
      null,
    ];
    if (window.ethereum === null) {
      throw new Error("Metamsk is not installed");
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    let chainIdHex = await window.ethereum.request({
      method: "eth_chainId",
    });
    chainId = parseInt(chainIdHex, 16);

    let selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error("No ethereum accounts available");
    }

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const stakingContractAddress = "0x3aDF25Ba808D7027230bE7A95Cd20204eD81dd2d";
    const stakeTokenContractAddress =
      "0x1f4da858bc3ed56aa1397bab0c6d72d543b11337";

    stakingContract = new Contract(stakingContractAddress, stakingAbi, signer);
    stakeTokenContract = new Contract(
      stakeTokenContractAddress,
      stakeTokenAbi,
      signer
    );

    return {
      provider,
      selectedAccount,
      stakeTokenContract,
      stakingContract,
      chainId,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectWallet;
