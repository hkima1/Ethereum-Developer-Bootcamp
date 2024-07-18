import React, { useState,useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

// Using default settings - pass in a settings object to specify your API key and network

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
  
  // In this week's lessons we used ethers.js. Here we are using the
  // Alchemy SDK is an umbrella library with several different packages.
  //
  // You can read more about the packages here:
  //   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);  
function Transaction() {
     const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const interval = setInterval(() => {
            async function fetchTransactions() {
                try {
                    const latestBlockNumber = await alchemy.core.getBlockNumber();
                    const latestBlock = await alchemy.core.getBlockWithTransactions(latestBlockNumber);
                    const latestTransactions = latestBlock.transactions.slice(0, 10);
                    setTransactions(latestTransactions);
                } catch (error) {
                    console.error("Error fetching transactions: ", error);
                }
            }

            fetchTransactions();
        }, 24000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div class="border-r-4 ">
            <div className="grid grid-cols-4 mb-2 border-collapse border border-slate-400">
                    <div className="flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Transaction Hash:</span>
                    </div>
                    <div className="flex items-center justify-between row-span-1">
                        <span className="font-bold text-gray-900">From: </span>
                    </div>
                    <div className="flex items-center justify-between row-span-1">
                        <span className="font-bold text-gray-900">To: </span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 shrink w-64 h-14 ">
                        <span className="font-bold text-gray-900">Value: </span>
                    </div>
                </div>
            {transactions.map((tx, index) => (
                <div key={index} className="grid grid-cols-4 mb-2 border-collapse border border-slate-400 border-spacing-2 ">
                    <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                        <span className="font-bold text-gray-900">{tx.hash}</span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                        <span className="font-bold text-gray-900">{tx.from}</span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                        <span className="font-bold text-gray-900">{tx.to}</span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                        <span className="font-bold text-gray-900">{tx.value.toString()}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Transaction;