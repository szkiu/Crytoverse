import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Exchange.css";
import Nav from "../Generics/Nav";
import { getExchange } from "../../services/getExchanges";
import ErrorModal from "../Generics/ErrorModal";
import Footer from "../Generics/Footer";

function Exchanges() {
  const mql = matchMedia("(min-width: 1280px)");
  const [realMql, setRealMql] = useState();
  const [exchanges, setExchanges] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mql.matches ? setRealMql(true) : setRealMql(false);
    window.addEventListener("resize", () => {
      mql.matches ? setRealMql(true) : setRealMql(false);
    });
  }, [mql.matches]);

  useEffect(() => {
    setIsLoading(true);
    getExchange().then((res) => {
      setExchanges(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {exchanges?.statusStext === undefined ? (
        <div className="home">
          <Helmet>
            <title>Exchanges</title>
          </Helmet>
          <Nav></Nav>

          <div>
          <main className="home_main">
            <div className="exchange_titles">
              {realMql ? (
                <>
                  <h4 className="exchange_titles-1">Exchange</h4>
                  <h4 className="exchange_titles-2">24Hrs Trade</h4>
                  <h4 className="exchange_titles-3">Trust Rank</h4>
                  <h4 className="exchange_titles-4">Born</h4>
                </>
              ) : (
                <h4 className="exchange_titles-alone" >Exchanges</h4>
              )}
            </div>

            <div className="container-exchange_container-exchanges">
              {exchanges !== undefined && !isLoading ? (
                exchanges.map((el, ind) => {
                  return (
                    <a
                      key={ind}
                      className="exchange_container-exchanges"
                      href={el.url}
                      rel="noreferrer"
                      target="_blank"
                      title="Go To Exchange Page"
                    >
                      <h4 className="exchange_container-exchanges-1">
                        {`${ind + 1}. `}
                        <img src={el.img} alt="" />
                        {`${el.name}`}
                      </h4>

                      <h4 className="exchange_container-exchanges-2">
                        {Math.trunc(el.trade24h) > 999
                          ? `$${Math.trunc(el.trade24h)
                              .toString()
                              .substring(0, 2)}.${Math.trunc(el.trade24h)
                              .toString()
                              .substring(2, 3)}K`
                          : `$${Math.trunc(el.trade24h)}`}
                      </h4>

                      <h4 className="exchange_container-exchanges-3">
                        {el.trustRank}
                      </h4>

                      <h4 className="exchange_container-exchanges-4">
                        {el.born ? el.born : "Unknown"}
                      </h4>
                    </a>
                  );
                })
              ) : (
                <b>Loading...</b>
              )}
            </div>
          </main>

          {exchanges !== undefined && !isLoading ? <Footer /> : null}
          </div>
        </div>
      ) : (
        <ErrorModal error={exchanges} />
      )}
    </>
  );
}

export default Exchanges;
