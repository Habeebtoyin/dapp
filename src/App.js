
import {useEffect, useState} from 'react'
import { ethers } from 'ethers'
import './App.css';
import Navigation from './component/Navbar';
import DepositCard from './component/Deposit';
import WithdrawCard from './component/Withdraw';
import GetBalanceCard from './component/GetBalance';
import ABI from './abis/abi.json';
// import config  from './config.json';
// import Launchpad from './abis/launchapd.json'
// import config from './config';


function App() {
  const [provider, setProvider] = useState(null)
  const [account, setAccount] = useState(null)
  const [etherStore, setEtherStore] = useState(null)
  const [signer, setSigner] = useState(null)

  const loadBlockchainData = async () => {
    const provider = await new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)
    const signer = await provider.getSigner();
    setSigner(signer)

    // const network = await provider.getNetwork()
    const contractAddress = "0xAB49169C6606D3DD2e3a640F1876E725eC0393A6";
    // const etherStore = await new ethers.Contract(config[network.chainId].EthStore.address, ABI, signer)
    const etherStore = await new ethers.Contract(contractAddress, ABI, signer)
    setEtherStore(etherStore)

    window.ethereum.on('accountsChanged', async () => {
      window.location.reload()
    })
  }
  useEffect(() => {
    loadBlockchainData()
  }, [])
  return (
    <div className="App">
      <div align = "center">
      <Navigation account={account} setAccount={setAccount} />
        </div> 
      
      {account? (
              <div className='component-container'style={{ display: 'flex',  justifyContent: 'space-around',  margin: '25px' }}>
      <DepositCard
      account={account}
      provider={provider}
      etherStore={etherStore}

      />
      < WithdrawCard
      account={account}
      provider={provider}
      etherStore={etherStore}

      />
      <GetBalanceCard
      account={account}
      provider={provider}
      etherStore={etherStore}

      />
      </div>
    ): (
      <p>Connect your wallet.</p>

)}    
      
    </div>
  );
}

export default App;

