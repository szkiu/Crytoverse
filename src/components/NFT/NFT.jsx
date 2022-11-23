import React, { useState, useEffect } from "react";
import "../Generics/GenericTable.css";
import "./NFT.css";
import Nav from "../Generics/Nav";
import { getUrlNFT } from "../../services/getNFT";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorModal from "../Generics/ErrorModal";
import Footer from "../Generics/Footer";

function NFT() {
  const mql = matchMedia("(min-width: 1280px)");
  const [realMql, setRealMql] = useState();
  const [NFT, setNFT] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mql.matches ? setRealMql(true) : setRealMql(false);
    window.addEventListener("resize", () => {
      mql.matches ? setRealMql(true) : setRealMql(false);
    });
  }, [mql.matches]);

  useEffect(() => {
    setIsLoading(true);
    const result = getUrlNFT();

    result.then((res) => {
      setNFT(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {NFT?.statusText === undefined ? (
        <div className="home">
          <Helmet>
            <title>NFT</title>
          </Helmet>

          <Nav />

          <div>
            <main className="home_main">
              <div className="fiat_titles">
                {realMql ? (
                  <>
                    <h4 className="fiat_titles-1">NFT</h4>
                    <h4 className="fiat_titles-2">Contact Addres</h4>
                    <h4 className="fiat_titles-3">Plataform</h4>
                  </>
                ) : (
                  <h4 className="fiat_titles-alone">NFTS</h4>
                )}
              </div>

              <div>
                {NFT !== undefined && !isLoading ? (
                  NFT.map((el, ind) => {
                    if (realMql) {
                      return (
                        <Link
                          to={el.id}
                          key={ind}
                          className="fiat_container-exchanges"
                        >
                          <h4 className="fiat_container-exchanges-1">
                            {`${ind + 1}. `}
                            <img src={el.img} alt="" />
                            {`${el.name}`}
                          </h4>

                          <h4 className="fiat_container-exchanges-2">
                            {el.contactAddres}
                          </h4>

                          <h4 className="fiat_container-exchanges-3">
                            {el.plataform}
                          </h4>
                        </Link>
                      );
                    } else {
                      return (
                        <Link
                          to={el.id}
                          key={ind}
                          className="fiat_container-exchanges"
                        >
                          <h4 className="fiat_container-exchanges-1">
                            {`${el.name}`}
                          </h4>

                          <h4 className="fiat_container-exchanges-2">
                            {el.contactAddres}
                          </h4>

                          <h4 className="fiat_container-exchanges-3">
                            {el.plataform}
                          </h4>
                        </Link>
                      );
                    }
                  })
                ) : (
                  <b>Loading...</b>
                )}
              </div>
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

export default NFT;
