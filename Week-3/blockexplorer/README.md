This is a simple block explorer web page built with React and Tailwind CSS. It's a single page focused primarily on interacting with the Ethereum blockchain using the Alchemy SDK. This page is composed of three main components:
  + The block box, which displays newly created blocks in real-time, updating every 10 seconds. This can be adjusted to meet Ethereum's block creation time of 12-15 seconds.
  + The transaction box, which extracts the last 10 transactions from the latest block.
  + The NFTs box, which displays the last 10 exchanges or transfers of NFTs.
To run this app, you should first install the necessary packages with:
  + npm install
Next, create an API key from Alchemy. You can follow this tutorial to do so https://www.youtube.com/watch?v=BH-K_3B5dQA . Add this key to your .env file like this:
  + REACT_APP_ALCHEMY_API_KEY="your-API-key"
Finally, run the application with:
  + npm start
  
Note : You should re-run your project after adding your API key to ensure that the application correctly 