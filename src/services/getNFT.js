import axios from "axios";

export const getUrlNFT = async () => {
  try {
    const result = await axios.get(
      "https://api.coingecko.com/api/v3/nfts/list"
    );
    let lastResult = [];

    result.data.forEach((el, ind) => {
      lastResult.push({
        name: el.name,
        id: el.id,
        plataform: el.asset_platform_id,
        contactAddres: el.contract_address,
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
