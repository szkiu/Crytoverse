import React from "react";
import { Link } from "react-router-dom";

function Coins({ coins, showAll, cryptocurrencies }) {

  return (
    <>
      {coins !== undefined 
      ? coins?.map((el, ind) => {
        if(showAll){
          if( ind < 32 ){
            return (
              <Link
                key={ind}
                className="home_coin"
                to={`/cryptocurrencies/${el.id}`}
              >
                <div className="home_coin-first">
                  <h3>{`${ind + 1}. ${el.name}`}</h3>
                  <img src={el.img} alt={el.name} />
                </div>
    
                <div className="home_coin-second">
                  <p>{`Price: ${
                    el.price > 100
                      ? `${el.price.toString().slice(0, 2)}.${el.price
                          .toString()
                          .slice(2, 3)}K`
                      : Number.parseInt(el.price.toString().split(".")[0]) >= 1
                      ? Math.trunc(el.price)
                      : el.price.toString().split(".")[1].startsWith("000")
                      ? 0.001
                      : el.price.toFixed(2)
                  }`}</p>
                  <p>{`Market Cap: ${
                    el.marketCap > 1000000000
                      ? `${el.marketCap.toString().slice(0, 3)}.${el.marketCap
                          .toString()
                          .slice(3, 4)}K`
                      : el.marketCap
                  }`}</p>
                  <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(2)}%`}</p>
                </div>
              </Link>
            );
          }
        }
        else if (cryptocurrencies){
          return (
            <Link
              key={ind}
              className="home_coin"
              to={`/cryptocurrencies/${el.id}`}
            >
              <div className="home_coin-first">
                <h3>{`${ind + 1}. ${el.name}`}</h3>
                <img src={el.img} alt={el.name} />
              </div>
  
              <div className="home_coin-second">
                <p>{`Price: ${
                  el.price > 100
                    ? `${el.price.toString().slice(0, 2)}.${el.price
                        .toString()
                        .slice(2, 3)}K`
                    : Number.parseInt(el.price.toString().split(".")[0]) >= 1
                    ? Math.trunc(el.price)
                    : el.price.toString().split(".")[1].startsWith("000")
                    ? 0.001
                    : el.price.toFixed(2)
                }`}</p>
                <p>{`Market Cap: ${
                  el.marketCap > 1000000000
                    ? `${el.marketCap.toString().slice(0, 3)}.${el.marketCap
                        .toString()
                        .slice(3, 4)}K`
                    : el.marketCap
                }`}</p>
                <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(2)}%`}</p>
              </div>
            </Link>
          );
        }
        else{
          if(ind < 10){
            return (
              <Link
                key={ind}
                className="home_coin"
                to={`/cryptocurrencies/${el.id}`}
              >
                <div className="home_coin-first">
                  <h3>{`${ind + 1}. ${el.name}`}</h3>
                  <img src={el.img} alt={el.name} />
                </div>
    
                <div className="home_coin-second">
                  <p>{`Price: ${
                    el.price > 100
                      ? `${el.price.toString().slice(0, 2)}.${el.price
                          .toString()
                          .slice(2, 3)}K`
                      : Number.parseInt(el.price.toString().split(".")[0]) >= 1
                      ? Math.trunc(el.price)
                      : el.price.toString().split(".")[1].startsWith("000")
                      ? 0.001
                      : el.price.toFixed(2)
                  }`}</p>
                  <p>{`Market Cap: ${
                    el.marketCap > 1000000000
                      ? `${el.marketCap.toString().slice(0, 3)}.${el.marketCap
                          .toString()
                          .slice(3, 4)}K`
                      : el.marketCap
                  }`}</p>
                  <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(2)}%`}</p>
                </div>
              </Link>
            );
          }
        }
      })
      : null
      }
    </>
  );
}

export default Coins;
