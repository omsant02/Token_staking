import React, { useState } from "react";
import connectWallet from "../../utils/connectWallet";
import Web3Context from "../../context/Web3Context";
import Button from "../Button/Button";

const Wallet = ({ children }) => {
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
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      {isLoading && <p>Loading...</p>}
      <Button onClick={handleWallet} type="button" label="Connect Wallet" />
    </div>
  );
};

export default Wallet;
