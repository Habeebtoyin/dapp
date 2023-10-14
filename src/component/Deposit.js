
import { useState } from 'react';
import {ethers} from 'ethers'

const DepositCard = ({provider, signer, account ,etherStore}) => {
    const [transactionStatus, setTransactionStatus] = useState('');
    const Deposit = async () => {
        try {
             await provider.getSigner(account)
            // signer;
           const tx = await etherStore.deposit({ value: ethers.utils.parseEther("0.02") });
            await tx.wait();
            console.log('Deposited', 'ETH');
            setTransactionStatus("Deposited successfully");
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

  return (
    <div align="center">
        <button onClick={Deposit}>Deposit</button>
          <p>{transactionStatus}</p>
      
    </div>
  )
}

export default DepositCard
