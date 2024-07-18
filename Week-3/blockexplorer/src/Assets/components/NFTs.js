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

function NFT() {
        const [nftSales, setNftSales] = useState([]);
    
        useEffect(() => {
            const interval = setInterval(() => {
                async function fetchNftSales() {
                    try {
                        const response = await alchemy.nft.getNftSales();
                        setNftSales(response.nftSales.slice(0, 10));
                    } catch (error) {
                        console.error("Error fetching NFT sales data: ", error);
                    }
                }
    
                fetchNftSales();
            }, 10000);
    
            return () => clearInterval(interval);
        }, []);
    
        return (
            <div class=" border-l-4">
                <div className="grid grid-cols-4 mb-2 border-collapse border border-slate-400">
                    <div className="flex items-center justify-between row-span-1 truncate p-4">
                        <span className="font-bold text-gray-900">Seller Address: </span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Contract Address: </span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Buyer Address: </span>
                    </div>
                    <div className="flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Token ID: </span>
                    </div>
                </div>
                {nftSales.map((sale, index) => (
                    <div key={index} className="grid grid-cols-4 mb-2 border-collapse border border-slate-400 border-spacing-2">
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900"> {sale.sellerAddress}</span>
                        </div>
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900">{sale.contractAddress}</span>
                        </div>
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900">{sale.buyerAddress}</span>
                        </div>
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900">{sale.tokenId}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

export default NFT;