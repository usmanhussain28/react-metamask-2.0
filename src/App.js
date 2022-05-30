import './App.css';
import { Button } from "react-bootstrap";
import { useMetaMask} from "metamask-react";

function App() {
    const { status, addChain, switchChain, account, chainId, connect } = useMetaMask();

    const addChain1 = (mumbaiChainNetworkParams) => {
        addChain(mumbaiChainNetworkParams);
        connect();
    }

    const mumbaiChainNetworkParams = {
        chainId: "0x13881",
        chainName: "Mumbai Testnet",
        rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18,
        },
        blockExplorerUrls: ["https://polygonscan.com/"]
    };

  return (
    <div className="App">
      <header className="App-header">
          <div className="App">
              <header className="App-header">
                  <p><u>{status === 'initializing' ? `Synchronisation with MetaMask ongoing...` : '' }</u></p>
                  <p><u>{status === 'unavailable' ? `MetaMask not available :(` : '' }</u></p>
                  <p><u>{status === 'connecting' ? `Connecting...` : '' }</u></p>
                  {status === 'notConnected' && <Button variant="secondary" onClick={() => addChain1(mumbaiChainNetworkParams)}>
                      <img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Connect to MetaMask
                  </Button>}
                  {
                      <button onClick={() => switchChain("0x1")}>Switch to Ethereum Mainnet</button>
                  }
                  <div className="mt-2 mb-2">
                      {status === 'connected' ? `Connected account: ${account} on chain ID ${chainId}` : '' }
                  </div>
              </header>
          </div>
      </header>
    </div>
  );
}

export default App;
