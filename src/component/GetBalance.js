import React, { useEffect } from 'react'
import { useState } from 'react';
import { ethers} from 'ethers'

const GetBalanceCard = ({provider, account, etherStore}) => {
    const [balanceStatus, setBalanceStatus] = useState('');

    const getBalance = async () => {
      try {
        await provider.getSigner(account);
        const balance = await etherStore.getBalance();
         setBalanceStatus(`Balance: ${ethers.utils.formatEther(balance)} ETH`)     
        
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <>
    <span align = "center">
    
    <button onClick={getBalance}>Balance</button>
    <p style={{fontWeight: "bold"}}>{balanceStatus}</p>
      
    </span>
   
    </>
  

  )
}

export default GetBalanceCard
