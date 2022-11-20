import axios from "axios";
import { URL_FIAT } from "../settings/getFIATSettings";

export const getUrlFIAT = async () => {
  try {
    const result = await axios.get(URL_FIAT,  {
      headers: {
        "CMC_PRO_API_KEY": "ec152bca-3221-4e8c-b03c-8219b02b59de"
      }
    });
    if (result.data.status.error_message !== null) throw new Error("Error");
    let lastResult = [];

    result.data.data.forEach((el, ind) => {
      lastResult.push({
        name: el.name,
        sign: el.sign,
        symbol: el.symbol,
      });
    });

    return lastResult;
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
};
