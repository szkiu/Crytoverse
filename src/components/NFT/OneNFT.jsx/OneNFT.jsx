import React, { useState, useEffect } from "react";
import "./OneNFT.css";
import { getOneNFT } from "../../../services/getOneNFT";
import { useLocation } from "react-router-dom";
import Nav from "../../Generics/Nav";
import ErrorModal from "../../Generics/ErrorModal";
import Footer from "../../Generics/Footer";
import { Helmet } from "react-helmet";

function OneNFT() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [isLoading, setIsLoading] = useState(true);
  const [NFT, setNFT] = useState();
  const mql = matchMedia("(min-width: 768px)");
  const [realMql, setRealMql] = useState();

  useEffect(() => {
    mql.matches ? setRealMql(true) : setRealMql(false);
    window.addEventListener("resize", () => {
      mql.matches ? setRealMql(true) : setRealMql(false);
    });
  }, [mql.matches]);

  useEffect(() => {
    setIsLoading(true);
    const result = getOneNFT(id);
    result.then((res) => {
      setNFT(res);
      setIsLoading(false);
    });
  }, [id]);

  function createMarkup() {
    return { __html: NFT.description };
  }

  return (
    <>
      {NFT?.statusText === undefined ? (
        <div className="home">
          <Helmet>
            <title>
              {NFT?.name !== undefined ? `NFT ${NFT?.name}` : "Loading..."}
            </title>
          </Helmet>

          <Nav />

          <div>
            <main
              className={
                realMql
                  ? " home_main home_oneNFT"
                  : " home_main home_oneNFT-1280"
              }
            >
              {NFT !== undefined && !isLoading ? (
                <>
                  <div className={"oneNFT_title"}>
                    <img src={NFT.img} alt={NFT.name} />
                    <h1>{NFT.name}</h1>
                  </div>

                  <div className="oneNFT_des">
                    <p dangerouslySetInnerHTML={createMarkup()} />
                    <div>
                      <div className="oneNFT_titles">
                        <h4 className="oneNFT_titles-title">
                          {`Unique Addresse: ${
                            NFT?.number_of_unique_addresses
                              ? NFT?.number_of_unique_addresses
                              : "Unknown"
                          }`}
                        </h4>
                        <h4 className="oneNFT_titles-title">
                          {`Floor Native Currency: ${
                            NFT?.floorPriceNativeCurrency
                              ? NFT?.floorPriceNativeCurrency?.toFixed(2)
                              : "Unknown"
                          }`}
                        </h4>
                        <h4 className="oneNFT_titles-title">
                          {`Floor Usd: $${
                            NFT?.floorPriceUsd
                              ? NFT?.floorPriceUsd?.toFixed(1)
                              : "Unknown"
                          }`}
                        </h4>
                        <h4 className="oneNFT_titles-title">
                          {`Floor Usd 24h Percentage : ${
                            NFT?.floor_price_in_usd_24h_percentage_change
                              ? NFT?.floor_price_in_usd_24h_percentage_change?.toFixed(
                                  1
                                )
                              : "Unknown"
                          }%`}
                        </h4>
                        <h4 className="oneNFT_titles-title">
                          {`Total Supply: ${
                            NFT.total_supply ? NFT.total_supply : "Unknown"
                          }`}
                        </h4>
                        <h4 className="oneNFT_titles-title">
                          {`Marketcap USD: ${
                            NFT?.marketCap.usd
                              ? `$${NFT?.marketCap.usd}`
                              : "Unknown"
                          }`}
                        </h4>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                "Loading..."
              )}
            </main>

            {NFT !== undefined && !isLoading ? <Footer /> : null}
          </div>
        </div>
      ) : (
        <ErrorModal error={NFT} />
      )}
    </>
  );
}

export default OneNFT;
