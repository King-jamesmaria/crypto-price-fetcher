const { fetchFromCoinGecko } = require('./exchanges/coingecko');
const { fetchFromBinance } = require('./exchanges/binance');
const { fetchFromCoinbase } = require('./exchanges/coinbase');

async function fetchAllPrices() {
  console.log('\n🔄 Fetching crypto prices from multiple exchanges...\n');

  // Run all 3 fetches at the same time (faster!)
  const results = await Promise.allSettled([
    fetchFromCoinGecko('bitcoin'),
    fetchFromBinance('BTCUSDT'),
    fetchFromCoinbase('BTC-USD')
  ]);

  console.log('📊 Results:\n');
  results.forEach(result => {
    if (result.status === 'fulfilled' && result.value) {
      console.log(result.value);
    }
  });

  console.log('\n✅ Done!');
}

fetchAllPrices();
