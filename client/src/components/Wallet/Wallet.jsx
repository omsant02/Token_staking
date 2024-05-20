import React, { useState } from "react";
import connectWallet from "../../utils/connectWallet";

const Wallet = () => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chianId: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await connectWallet();
      console.log(
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId
      );
      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });
    } catch (error) {
      toast.error("Error connecting wallet");
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <button onClick={handleWallet}>Connect Wallet</button>
    </div>
  );
};

export default Wallet;
