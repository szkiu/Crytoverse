import axios from "axios";

export default async function getNews() {
  try {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "Description",
        count: "50",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "f8bd9615e2msha491048fcacc91bp1e62dfjsnf28c73978dc5",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    const result = await axios.request(options);
    const realNew = [];
    const news = result.data.value;

    news.forEach(el => {
      realNew.push({
        nameProvider: el.provider[0].name,
        imgProvider: el.provider[0].image?.thumbnail.contentUrl,
        name: el.name,
        datePublished: el.datePublished,
        description: el.description,
        img: el.image?.thumbnail.contentUrl,
        url: el.url
      })
    });

    return realNew;

  } catch (e) {
    return {
      message: e.message,
      name: e.name,
    };
  }
}
