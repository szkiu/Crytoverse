import axios from "axios";

export const getOneNFT = async (keyword) => {
  try {
    const result = await axios.get(`https://api.coingecko.com/api/v3/nfts/${keyword}`);
    const data = result.data;

    return {
      name: data.name,
      contract_address: data.contract_address,
      description: data.description,
      floorPriceNativeCurrency: data.floor_price.native_currency,
      floorPriceUsd: data.floor_price.usd,
      floor_price_in_usd_24h_percentage_change: data.floor_price_in_usd_24h_percentage_change,
      img: data.image.small,
      marketCap: data.market_cap,
      nativeCurrency: data.native_currency,
      number_of_unique_addresses: data.number_of_unique_addresses,
      total_supply: data.total_supply,
    }

  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
};