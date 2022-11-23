import axios from "axios";

export async function getUrlGlobalMetrics() {
  try {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/stats',
      params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
      headers: {
        'X-RapidAPI-Key': 'f8bd9615e2msha491048fcacc91bp1e62dfjsnf28c73978dc5',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    const result = await axios.request(options);

    return [
      {
        name: "Total_Cryptocurrencies",
        num: result.data.data.totalCoins,
      },
      { 
        name: "Total_Exchanges",
        num: result.data.data.totalExchanges 
      },
      { 
        name: "Btc_Dominance",
        num: result.data.data.btcDominance 
      },
      {
        name: "Newest Coin",
        coinName: result.data.data.newestCoins[0].name,
        coinSym: result.data.data.newestCoins[0].symbol,
      },
      {
        name: "Best Coin",
        coinName: result.data.data.bestCoins[0].name,
        coinSym: result.data.data.bestCoins[0].symbol,
      },
      { 
        name: "Total_Market_Cap",
        num: result.data.data.totalMarketCap
      },
      { 
        name: "Total Markets",
        num: result.data.data.totalMarkets
      },
      { 
        name: "Total_Volume_24h",
        num: result.data.data.total24hVolume
      },
    ];
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
    };
  }
}
