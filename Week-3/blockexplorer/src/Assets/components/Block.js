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
  
function Block() {
        const [blockNumber, setBlockNumber] = useState(null);
        const [blocks, setBlocks] = useState([]);
    
        useEffect(() => {
            const interval = setInterval(() => {
                async function fetchData() {
                    try {
                        const currentBlockNumber = await alchemy.core.getBlockNumber();
                        setBlockNumber(currentBlockNumber);
                        
                        const fetchedBlocks = [];
                        for (let i = 0; i < 5; i++) {
                            const block = await alchemy.core.getBlock(currentBlockNumber - i);
                            fetchedBlocks.push(block);
                        }
                        setBlocks(fetchedBlocks);
                    } catch (error) {
                        console.error("Error fetching block data: ", error);
                    }
                }
    
                fetchData();
            }, 24000);
    
            return () => clearInterval(interval);
        }, []);
    
        return (
            <div class="border-4 mt-4">
            <div className="grid grid-cols-3 mb-2 border-collapse border border-slate-400">
                    <div className=" p-4  flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Block Number: </span>
                    </div>
                    <div className="p-4 flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Miner:</span>
                    </div>
                    <div className=" p-4  flex items-center justify-between row-span-1 truncate">
                        <span className="font-bold text-gray-900">Gas Used: </span>
                    </div>
                </div>
                {blocks.map((block, index) => (
                    <div key={index} className="grid grid-cols-3 mb-2">
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900">{block.number}</span>
                        </div>
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900">{block.miner}</span>
                        </div>
                        <div className="flex items-center justify-between row-span-1 truncate border-spacing-2 border border-slate-300 m-2">
                            <span className="font-bold text-gray-900"> {parseInt(block.gasUsed)}</span>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

export default Block;