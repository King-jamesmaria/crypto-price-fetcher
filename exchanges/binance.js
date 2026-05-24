const axios = require('axios');
const { formatPrice } = require('../utils/formatter');

// Using Kraken - works globally
async function fetchFromBinance(pair = 'XBTUSD') {
  try {
    const response = await axios.get(
      `https://api.kraken.com/0/public/Ticker?pair=${pair}`
    );
    const price = response.data.result.XXBTZUSD.c[0];
    return formatPrice('Kraken', pair, price);
  } catch (error) {
    console.error('Kraken error:', error.message);
    return null;
  }
}

module.exports = { fetchFromBinance };
