import axios from "axios";
import { URL_INDIVIDUAL_COIN } from "../settings/getOneCoinSettings";

export const getOneCoin = async (keyword) => {
  try {
    const result = await axios.get(`${URL_INDIVIDUAL_COIN}${keyword}`);

    return {
      marketCapRank: result.data.market_cap_rank,
      name: result.data.name,
      img: result.data.image.large,
      lastUpdate: result.data.last_updated,
      description: result.data.description.en,
      genesisDate: result.data.genesis_date,
      developerData: result.data.developer_data,
      developerScore: result.data.developer_score,
      blockchainSite: result.data.links.blockchain_site[0],
      facebookUsername: result.data.links.facebook_username,
      homePage: result.data.links.homepage[0],
      github: result.data.links.repos_url.github[0],
      reddit: result.data.links.subreddit_url,
      twitter: result.data.links.twitter_screen_name,
      liquidScore: result.data.liquidity_score,
      sentiment_votes_down_percentage: result.data.sentiment_votes_down_percentage,
      sentiment_votes_up_percentage: result.data.sentiment_votes_up_percentage,
    };
  } catch (e) {
    return {
      message: e.message,
      name: e.name,
      status: e.response.status,
      statusText: e.response.statusText,
    };
  }
};
