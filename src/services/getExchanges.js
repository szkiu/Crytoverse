import axios from "axios";
import { URL_EXCHANGES } from "../settings/getExchangesSettings";

export const getExchange = async () => {
  try {
    const result = await axios.get(URL_EXCHANGES);
    const finalResult = [];

    result.data.forEach((el, ind) => {
      finalResult.push({
        id: el.id,
        name: el.name,
        img: el.image,
        url: el.url,
        trade24h: el.trade_volume_24h_btc_normalized,
        trustRank: el.trust_score_rank,
        born: el.year_established
      });
    });

    return finalResult
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
};
