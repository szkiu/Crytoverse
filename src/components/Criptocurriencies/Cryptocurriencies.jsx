import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./Cryptocurrencies.css";
import { useURLCoins } from "../../customhooks/useURLCoins";
import Nav from "../Generics/Nav";
import Coins from "../Home/Coins";
import ErrorModal from "../Generics/ErrorModal";

function Cryptocurriencies() {
  const { coins, isLoading } = useURLCoins();
  const [search, setSearch] = useState("");
  const [newCoins, setNewCoins] = useState();

  useEffect(() => {
    const coin = coins?.filter((el) => {
      return el.name.includes(search);
    });

    setNewCoins(coin);
  }, [search, coins]);

  return (
    <>
      {coins?.statusText === undefined ? (
        <div className="home">
          <Helmet>
            <title>Cryptocurrencies</title>
          </Helmet>

          <Nav />

          <main className="cryptocurencies_main">
            <div className="cryptocurencies_search">
              <input
                placeholder="Search Cryptoccurencie"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {coins !== undefined && !isLoading ? (
              <div className="cryptocurencies_coins">
                <Coins
                  cryptocurrencies={true}
                  coins={newCoins ? newCoins : coins}
                />
              </div>
            ) : (
              <b>Loading...</b>
            )}
          </main>
        </div>
      ) : (
        <ErrorModal error={coins} />
      )}
    </>
  );
}

export default Cryptocurriencies;
