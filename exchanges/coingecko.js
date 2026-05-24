const axios = require('axios');
const { formatPrice } = require('../utils/formatter');

async function fetchFromCoinGecko(coin = 'bitcoin') {
  try {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price',
      { params: { ids: coin, vs_currencies: 'usd' } }
    );
    const price = response.data[coin].usd;
    return formatPrice('CoinGecko', coin, price);
  } catch (error) {
    console.error('CoinGecko error:', error.message);
    return null;
  }
}

module.exports = { fetchFromCoinGecko };
