const axios = require('axios');

// copy-paste your URL provided in your Alchemy.com dashboard
const ALCHEMY_URL = "https://eth-sepolia.g.alchemy.com/v2/YagkmchKTOdWHK_XXrPcbIHTm42--kuq";

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getTransactionCount",
  params: [
    "0x1eed769c1926fB31c64613807687E16D3C7a57bb", // block 46147
    "latest"  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});