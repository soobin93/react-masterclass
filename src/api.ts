const BASE_URL = 'https://api.coinpaprika.com/v1';

export async function fetchCoins () {
  return await (await fetch(`${BASE_URL}/coins`)).json();
}

export async function fetchCoinInfo (coinId: string) {
  return await (await fetch(`${BASE_URL}/coins/${coinId}`)).json();
}

export async function fetchCoinTickers (coinId: string) {
  return await (await fetch(`${BASE_URL}/tickers/${coinId}`)).json();
}

export async function fetchCoinHistory (coinId: string) {
  const endTime = Math.floor(Date.now() / 1000);
  const startTime = endTime - 60 * 60 * 24 * 7 * 2;

  return await (await fetch(`${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startTime}&end=${endTime}`)).json();
}
