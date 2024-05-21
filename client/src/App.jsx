import "./App.css";
import ClaimReward from "./components/ClaimReward/ClaimReward";
import DisplayPannel from "./components/DisplayPannel/DisplayPannel";
import Navigation from "./components/Navigation/Navigation";
import StakeAmount from "./components/StakeToken/StakeAmount";
import TokenApproval from "./components/StakeToken/TokenApproval";
import Wallet from "./components/Wallet/Wallet";
import WithdrawStakeAmount from "./components/Withdraw/Withdraw";
import { StakingProvider } from "./context/StakingContext";

function App() {
  return (
    <>
      <Wallet>
        <Navigation />
        <StakingProvider>
          <DisplayPannel />
          <StakeAmount />
          <WithdrawStakeAmount />
        </StakingProvider>
        <TokenApproval />

        <ClaimReward />
      </Wallet>
    </>
  );
}

export default App;
