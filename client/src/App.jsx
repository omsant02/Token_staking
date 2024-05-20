import "./App.css";
import DisplayPannel from "./components/DisplayPannel/DisplayPannel";
import Navigation from "./components/Navigation/Navigation";
import Wallet from "./components/Wallet/Wallet";

function App() {
  return (
    <>
      <Wallet>
        <Navigation />
        <DisplayPannel />
      </Wallet>
    </>
  );
}

export default App;
