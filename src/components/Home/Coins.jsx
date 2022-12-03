import React from "react";
import { Link } from "react-router-dom";

function Coins({ coins, showAll, cryptocurrencies }) {
  return (
    <>
      {coins !== undefined
        ? coins?.map((el, ind) => {
            if (showAll) {
              if (ind < 32) {
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
                        el.price > 10000
                          ? `${el.price.toString().slice(0, 2)}.${el.price
                              .toString()
                              .slice(2, 3)}K`
                          : el.price > 1000
                          ? `${el.price.toString().slice(0, 1)}.${el.price
                              .toString()
                              .slice(1, 3)}K`
                          : Number.parseInt(
                              el.price.toString().split(".")[0]
                            ) >= 1
                          ? el.price.toFixed(2)
                          : el.price.toString().split(".")[1].startsWith("000")
                          ? 0.001
                          : el.price.toFixed(2)
                      }`}</p>
                      <p>{`Market Cap: ${
                        el.marketCap > 100000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 3)}.${el.marketCap
                              .toString()
                              .slice(3, 4)}B`
                          : el.marketCap > 10000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 2)}.${el.marketCap
                              .toString()
                              .slice(2, 4)}B`
                          : el.marketCap > 1000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 1)}.${el.marketCap
                              .toString()
                              .slice(1, 4)}B`
                          : el.marketCap > 100000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 3)}.${el.marketCap
                              .toString()
                              .slice(3, 4)}K`
                          : `${el.marketCap
                              .toString()
                              .slice(0, 2)}.${el.marketCap
                              .toString()
                              .slice(2, 4)}K`
                      }`}</p>
                      <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(
                        2
                      )}%`}</p>
                    </div>
                  </Link>
                );
              }
            } else if (cryptocurrencies) {
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
                      el.price > 10000
                        ? `${el.price.toString().slice(0, 2)}.${el.price
                            .toString()
                            .slice(2, 3)}K`
                        : el.price > 1000
                        ? `${el.price.toString().slice(0, 1)}.${el.price
                            .toString()
                            .slice(1, 3)}K`
                        : Number.parseInt(el.price.toString().split(".")[0]) >=
                          1
                        ? el.price.toFixed(2)
                        : el.price.toString().split(".")[1].startsWith("000")
                        ? 0.001
                        : el.price.toFixed(2)
                    }`}</p>
                    <p>{`Market Cap: ${
                      el.marketCap > 100000000000
                        ? `${el.marketCap.toString().slice(0, 3)}.${el.marketCap
                            .toString()
                            .slice(3, 4)}B`
                        : el.marketCap > 10000000000
                        ? `${el.marketCap.toString().slice(0, 2)}.${el.marketCap
                            .toString()
                            .slice(2, 4)}B`
                        : el.marketCap > 1000000000
                        ? `${el.marketCap.toString().slice(0, 1)}.${el.marketCap
                            .toString()
                            .slice(1, 4)}B`
                        : el.marketCap > 100000000
                        ? `${el.marketCap.toString().slice(0, 3)}.${el.marketCap
                            .toString()
                            .slice(3, 4)}K`
                        : `${el.marketCap.toString().slice(0, 2)}.${el.marketCap
                            .toString()
                            .slice(2, 4)}K`
                    }`}</p>
                    <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(
                      2
                    )}%`}</p>
                  </div>
                </Link>
              );
            } else {
              if (ind < 10) {
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
                        el.price > 10000
                          ? `${el.price.toString().slice(0, 2)}.${el.price
                              .toString()
                              .slice(2, 3)}K`
                          : el.price > 1000
                          ? `${el.price.toString().slice(0, 1)}.${el.price
                              .toString()
                              .slice(1, 3)}K`
                          : Number.parseInt(
                              el.price.toString().split(".")[0]
                            ) >= 1
                          ? el.price.toFixed(2)
                          : el.price.toString().split(".")[1].startsWith("000")
                          ? 0.001
                          : el.price.toFixed(2)
                      }`}</p>
                      <p>{`Market Cap: ${
                        el.marketCap > 100000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 3)}.${el.marketCap
                              .toString()
                              .slice(3, 4)}B`
                          : el.marketCap > 10000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 2)}.${el.marketCap
                              .toString()
                              .slice(2, 4)}B`
                          : el.marketCap > 1000000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 1)}.${el.marketCap
                              .toString()
                              .slice(1, 4)}B`
                          : el.marketCap > 100000000
                          ? `${el.marketCap
                              .toString()
                              .slice(0, 3)}.${el.marketCap
                              .toString()
                              .slice(3, 4)}K`
                          : `${el.marketCap
                              .toString()
                              .slice(0, 2)}.${el.marketCap
                              .toString()
                              .slice(2, 4)}K`
                      }`}</p>
                      <p>{`Daily Change: ${Math.abs(el.price24h).toFixed(
                        2
                      )}%`}</p>
                    </div>
                  </Link>
                );
              }
            }
          })
        : null}
    </>
  );
}

export default Coins;
