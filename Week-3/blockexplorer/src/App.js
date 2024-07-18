import React, { useState,useEffect } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

// Using default settings - pass in a settings object to specify your API key and network

import './App.css';
import Header from './Assets/components/Header';
import Block from './Assets/components/Block';
import Transaction from './Assets/components/Transaction';
import NFTs from './Assets/components/NFTs';
// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {

  return (
<div>
<Header/>
  <div> 
  <h1 class=" text-center border-t-4 border-l-4 border-r-4" >Block Box</h1> 
    <Block/>
  </div>
 
  <div className=' flex items-center justify-evenly row-span-1 border-4 '>
    <div  class="border-r-4">
    <h1 class=" text-center" >Transaction Box</h1>
    <Transaction />
    </div>
    <div class="border-l-4">
    <h1 class=" text-center ">NFTs Box</h1>
    <NFTs/>
    </div>
  </div>

    </div>);
}

export default App;
