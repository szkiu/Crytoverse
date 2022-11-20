import axios from "axios";
import { URL_GLOBALMETRICS } from "../settings/getGlobalMetricsSettings";

export async function getUrlGlobalMetrics() {
  try {
    const result = await axios.get(URL_GLOBALMETRICS);
    return [
      {
        name: "Total_Cryptocurrencies",
        num: result.data.data.total_cryptocurrencies,
      },
      { 
        name: "Total_Exchanges",
        num: result.data.data.total_exchanges 
      },
      { 
        name: "Active_Cryptocurrencies",
        num: result.data.data.active_cryptocurrencies 
      },
      { 
        name: "Active_Exchanges",
        num: result.data.data.active_exchanges },
      { 
        name: "Btc_Dominance",
        num: result.data.data.btc_dominance 
      },
      {
        name: "Btc_Dominance_24h_Percentage_Change",
        num: result.data.data.btc_dominance_24h_percentage_change,
      },
      { 
        name: "Total_Market_Cap",
        num: result.data.data.quote.USD.total_market_cap 
      },
      { 
        name: "Stablecoin_Market_Cap",
        num: result.data.data.stablecoin_market_cap 
      },
      { 
        name: "Stablecoin_Volume_24h",
        num: result.data.data.stablecoin_volume_24h 
      },
    ];
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
}
