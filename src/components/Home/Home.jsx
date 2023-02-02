import React, { useState, useEffect } from "react";
import "./Home.css";
import Nav from "../Generics/Nav";
import ErrorModal from "../Generics/ErrorModal";
import Footer from "../Generics/Footer";
import Coins from "./Coins";
import ActualData from "./ActualData";
import News from "./News";
import { getUrlGlobalMetrics } from "../../services/getGlobalMetrics";
import getNews from "../../services/getNews";
import { useURLCoins } from "../../customhooks/useURLCoins";
import { Helmet } from "react-helmet";

function Home() {
  const [actualData, setActualData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [news, setNews] = useState();
  const [showAllNews, setShowAllNews] = useState(false);
  const { coins, isLoading: isLoadingg } = useURLCoins();

  useEffect(() => {
    setIsLoading(true);
    const actualData = getUrlGlobalMetrics();
    actualData.then((res) => {
      setActualData(res);
    });

    setIsLoading(false);
    const actualNews = getNews();
    actualNews.then((res) => {
      if (res?.name !== "AxiosError") setNews(res);
    });
  }, []);

  return (
    <>
      {coins?.statusText === undefined ||
      actualData.name !== "AxiosError" ||
      news?.name !== "AxiosError" ? (
        <div className="home">
          <Helmet>
            <title>Crytoverse</title>
          </Helmet>

          <Nav />

          <div>
            <main className="home_main">
              <h1>Global Crypto Stats</h1>

              <div className="home_info">
                {actualData !== undefined && !isLoading ? (
                  <ActualData actualData={actualData} />
                ) : (
                  <b>Loading...</b>
                )}
              </div>

              <div>
                {!isLoading && (
                  <div className="home_container-secondary-title">
                    <h2 className="home_title-secondary">
                      Top 10 Cryptocurrencies in the world
                    </h2>
                    <button onClick={() => setShowAll(!showAll)}>
                      {showAll ? "Show Less Coins" : "Show All Coins"}
                    </button>
                  </div>
                )}

                <div className="home_coins">
                  {coins !== undefined && !isLoadingg && !showAll ? (
                    <Coins coins={coins} showAll={showAll} />
                  ) : null}

                  {coins !== undefined && !isLoadingg && showAll ? (
                    <Coins coins={coins} showAll={showAll} />
                  ) : null}
                </div>
              </div>

              <div>
                {!isLoading && news && (
                  <div className="home_container-secondary-title">
                    <h2 className="home_title-secondary">
                      Top 10 Latest Crypto News
                    </h2>
                    <button onClick={() => setShowAllNews(!showAllNews)}>
                      {showAllNews ? "Show Less News" : "Show All News"}
                    </button>
                  </div>
                )}

                <div className="home_news">
                  {news !== undefined && !isLoadingg && !showAllNews ? (
                    <News news={news} showAll={showAllNews} />
                  ) : null}

                  {news !== undefined && !isLoadingg && showAllNews ? (
                    <News news={news} showAll={showAllNews} />
                  ) : null}
                </div>
              </div>
            </main>

            {actualData !== undefined && !isLoading ? (
              <Footer />
            ) : (
              <b>Loading...</b>
            )}
          </div>
        </div>
      ) : (
        <>
          <ErrorModal error={coins} />
        </>
      )}
    </>
  );
}

export default Home;
