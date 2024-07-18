

import React from "react";
const items=[
  {
      id: 1,
      value: "Binance",
      link: "https://www.binance.com/",
  },
  {
      id: 2,
      value: "Coinbase",
      link: "https://www.coinbase.com/",
  },
  {
      id: 3,
      value: "Crypto.com",
      link: "https://crypto.com/",
  },
  {
      id: 4,
      value: "Uniswap",
      link: "https://uniswap.org/",
  },
  {
      id: 5,
      value: "Osmosis",
      link: "https://osmosis.zone/",
  },
]
function DropdownMenu (){
    
   
    
  return (
    
<div id="dropdown" class="z-10 absolute top-12 right-65 items-center bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        {
        items.map((item)=>(
            <li>
            <a href={item.link} class="block px-4 py-2 m-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" key={item.id}>{item.value}</a>
          </li>
        ))        }


    </ul>
</div>
  );
};

export default DropdownMenu;