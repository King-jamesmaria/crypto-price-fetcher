# crypto-price-fetcher

A Node.js script that fetches live Bitcoin prices from multiple cryptocurrency exchanges using REST APIs.

## What it does
- Fetches real-time BTC price from CoinGecko, Kraken, and Bitfinex simultaneously
- Uses `Promise.allSettled()` to run all requests in parallel
- Handles API failures gracefully — if one exchange is down, others still return data
- Formats output with exchange name, price, and timestamp

## Tech Stack
- Node.js
- axios (HTTP requests)
- REST APIs: CoinGecko, Kraken, Bitfinex

## How to run
git clone https://github.com/King-jamesmaria/crypto-price-fetcher.git
cd crypto-price-fetcher
npm install
node index.js

## Sample Output
{
  exchange: 'CoinGecko',
  coin: 'BITCOIN',
  price: '$76,701.00',
  timestamp: '2026-05-24T08:06:29.515Z'
}
