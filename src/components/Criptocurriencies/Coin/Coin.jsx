import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Coin.css";
import { getOneCoin } from "../../../services/getOneCoin";
import { useLocation } from "react-router-dom";
import Nav from "../../Generics/Nav";
import Footer from "../../Generics/Footer";
import ErrorModal from "../../Generics/ErrorModal";

function Coin() {
  const [isLoading, setIsLoading] = useState(true);
  const [coin, setCoin] = useState();
  const location = useLocation();

  window.scroll(0, 0)

  useEffect(() => {
    setIsLoading(true);
    const result = getOneCoin(location.pathname.split("/")[2]);
    result.then((res) => {
      setCoin(res);
      setIsLoading(false);
    });
  }, [location.pathname]);

  function createMarkup() {
    return { __html: coin.description };
  }

  return (
    <>
      {coin?.statusText === undefined ? (
        <div className="coin">
          <Helmet>
            <title>
              {coin?.name !== undefined ? `Coin ${coin?.name}` : "Loading..."}
            </title>
          </Helmet>

          <Nav />

          <div>
            <main className="coin_main">
              {coin !== undefined && !isLoading ? (
                <>
                  <div className="oneNFT_title coin-title">
                    <img src={coin.img} alt={coin.name} />
                    <h1>{coin.name}</h1>
                  </div>

                  <div className="oneNFT_des">
                    <p
                      className="coin_des-title"
                      dangerouslySetInnerHTML={createMarkup()}
                    />
                    <p className="coin_des-title">
                      {coin.homePage ? `Visit our page ` : null}
                      {coin.homePage ? (
                        <a
                          href={coin.homePage}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {coin.homePage}
                        </a>
                      ) : null}
                      {coin.github
                        ? ` We have a active github, you can give a star, our github is `
                        : null}
                      {coin.github ? (
                        <a
                          href={coin.github}
                          rel="noreferrer"
                          target={"_blank"}
                        >
                          {coin.github}
                        </a>
                      ) : null}
                      {coin.developerData?.stars === undefined ||
                      coin.developerData?.stars !== 0
                        ? ` About github, we have ${coin.developerData.stars} stars, ${coin.developerData.subscribers} subscribers, ${coin.developerData.total_issues} total issues, ${coin.developerData.pull_request_contributors} pull request contributors,${coin.developerData.pull_requests_merged} pull reques merged and ${coin.developerData.forks} forks. Our developer score is ${coin.developerScore}. `
                        : null}
                      <br />
                      {coin.genesisDate
                        ? `We was founded ${coin.genesisDate}, a special day for us, you can follow us in our blockchain page `
                        : null}
                      {coin.blockchainSite ? (
                        <a
                          href={coin.blockchainSite}
                          rel="noreferrer"
                          target={"_blank"}
                        >
                          {coin.blockchainSite}
                        </a>
                      ) : null}
                      {coin.reddit ? ` And our reddit page is ` : null}
                      {coin.reddit ? (
                        <a
                          href={coin.reddit}
                          rel="noreferrer"
                          target={"_blank"}
                        >
                          {coin.reddit}
                        </a>
                      ) : null}
                      {`${
                        coin.marketCapRank
                          ? ` Out of this, we are in the ${coin.marketCapRank} place in market cap rank,`
                          : null
                      } ${
                        coin.liquidScore
                          ? ` our liquid score is ${coin.liquidScore} `
                          : null
                      }, ${
                        coin.sentiment_votes_down_percentage !== undefined &&
                        coin.sentiment_votes_up_percentage !== undefined
                          ? `and Sentiment Votes Down Percentage is ${coin.sentiment_votes_down_percentage}%, and Sentiment Votes Up Percentage is ${coin.sentiment_votes_up_percentage}%.`
                          : null
                      }`}
                    </p>
                  </div>
                </>
              ) : (
                "Loading..."
              )}
            </main>
            {coin !== undefined && !isLoading ? <Footer /> : null}
          </div>
        </div>
      ) : (
        <ErrorModal error={coin} />
      )}
    </>
  );
}

export default Coin;
