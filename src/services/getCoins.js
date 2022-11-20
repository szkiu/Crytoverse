import axios from "axios";
import { URL_COINS } from "../settings/getCoinsSettings";

export const getUrlCoins = async () => {
  try {
    const result = await axios.get(URL_COINS);
    const finalResult = [];

    result.data.forEach((el, ind) => {
      finalResult.push({
        id: el.id,
        name: el.name,
        img: el.image,
        price: el.current_price,
        price24h: el.price_change_percentage_24h,
        marketCap: el.market_cap,
      });
    });

    return finalResult;
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
};
