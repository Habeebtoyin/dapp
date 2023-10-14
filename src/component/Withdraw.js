import React, { useEffect } from 'react'
import { useState } from 'react';
import { ethers} from 'ethers'

const WithdrawCard = ({provider, account, etherStore}) => {
    const [transactionStatus, setTransactionStatus] = useState('');
   
    
    const Withdraw = async () => {
        try {
             await provider.getSigner(account);
           
                // if (balance.gt(0)) {
                  const tx = await etherStore.withdraw();
                  await tx.wait();
                  // console.log('Withdrawn', ethers.utils.formatEther(balance), 'ETH');
                  setTransactionStatus("Withdrawn successfully");
                // } else {
                //   console.log('No balance to withdraw');
                // }

            
        } catch (error) {
            
        }

    }

    // const getBalance = async () => {
    //   try {
    //     await provider.getSigner();
    //     const balance = await etherStore.getBalance();
    //      setBalanceStatus('Balance:', ethers.utils.formatEther(balance), 'ETH')     
        
    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // }
  return (
    <>
    <span align ="center">
      <div>
        <button onClick={Withdraw}>Withdraw</button>
        <p>{transactionStatus}</p>
        </div>
        {/* <div>
    <button onClick={getBalance}>getBalance</button>
    <p>{balanceStatus}</p> */}
    
    {/* </div> */}
      
    </span>
   
    </>
  

  )
}

export default WithdrawCard
