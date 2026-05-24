const axios = require('axios');
const { formatPrice } = require('../utils/formatter');

// Using Bitfinex - works globally  
async function fetchFromCoinbase(pair = 'tBTCUSD') {
  try {
    const response = await axios.get(
      `https://api-pub.bitfinex.com/v2/ticker/${pair}`
    );
    // Bitfinex returns an array, index 6 is last price
    const price = response.data[6];
    return formatPrice('Bitfinex', pair, price);
  } catch (error) {
    console.error('Bitfinex error:', error.message);
    return null;
  }
}

module.exports = { fetchFromCoinbase };
