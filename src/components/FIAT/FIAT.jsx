import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "../Generics/GenericTable.css";
import Nav from "../Generics/Nav";
import ErrorModal from "../Generics/ErrorModal";
import { getUrlFIAT } from "../../services/getFIAT";

function FIAT() {
  const mql = matchMedia("(min-width: 1280px)");
  const [realMql, setRealMql] = useState();
  const [FIAT, setFIAT] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mql.matches ? setRealMql(true) : setRealMql(false);
    window.addEventListener("resize", () => {
      mql.matches ? setRealMql(true) : setRealMql(false);
    });
  }, [mql.matches]);

  useEffect(() => {
    setIsLoading(true);
    getUrlFIAT().then((res) => {
      setFIAT(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {FIAT?.statusText === undefined ? (
        <div className="home">
          <Helmet>
            <title>FIAT</title>
          </Helmet>

          <Nav></Nav>

          <main className="home_main">
            <div className="fiat_titles">
              {realMql ? (
                <>
                  <h4 className="fiat_titles-1">Name</h4>
                  <h4 className="fiat_titles-2">Sign</h4>
                  <h4 className="fiat_titles-3">Symbol</h4>
                </>
              ) : <h4 className="fiat_titles-alone" >FIATS</h4>
              }
            </div>

            <div>
              {FIAT !== undefined && !isLoading ? (
                FIAT.map((el, ind) => {
                  if(realMql){
                    return (
                      <div key={ind} className="fiat_container-exchanges">
                        <h4 className="fiat_container-exchanges-1">
                          {`${ind + 1}. `}
                          {`${el.name}`}
                        </h4>
  
                        <h4 className="fiat_container-exchanges-2">{el.sign}</h4>
  
                        <h4 className="fiat_container-exchanges-3">
                          {el.symbol}
                        </h4>
                      </div>
                    );
                  }else{
                    return (
                      <div key={ind} className="fiat_container-exchanges">
                        <h4 className="fiat_container-exchanges-1">
                          {`${el.name}`}
                        </h4>
  
                        <h4 className="fiat_container-exchanges-2">{el.sign}</h4>
  
                        <h4 className="fiat_container-exchanges-3">
                          {el.symbol}
                        </h4>
                      </div>
                    );
                  }
                })
              ) : (
                <b>Loading...</b>
              )}
            </div>
          </main>
        </div>
      ) : (
        <ErrorModal error={FIAT} />
      )}
    </>
  );
}

export default FIAT;
