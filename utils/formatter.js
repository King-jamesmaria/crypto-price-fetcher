function formatPrice(exchange, coin, price) {
  return {
    exchange,
    coin: coin.toUpperCase(),
    price: `$${Number(price).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
    timestamp: new Date().toISOString()
  };
}

module.exports = { formatPrice };
