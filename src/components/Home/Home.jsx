import React, { useState, useEffect } from "react";
import "./Home.css";
import Nav from "../Generics/Nav";
import ErrorModal from "../Generics/ErrorModal";
import { getUrlGlobalMetrics } from "../../services/getGlobalMetrics";
import Coins from "./Coins";
import ActualData from "./ActualData";
import { useURLCoins } from "../../customhooks/useURLCoins";
import { Helmet } from "react-helmet";

function Home() {
  const [actualData, setActualData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { coins, isLoading: isLoadingg } = useURLCoins();

  useEffect(() => {
    setIsLoading(true);
    const actualData = getUrlGlobalMetrics();
    actualData.then((res) => {
      setActualData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {coins?.statusText === undefined ? (
        <div className="home">

          <Helmet>
            <title>Home</title>
          </Helmet>

          <Nav />

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
          </main>
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
