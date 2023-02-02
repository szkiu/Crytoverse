import React, { useEffect, useState } from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineBars,
  AiOutlineCloseCircle,
  AiOutlineBulb
} from "react-icons/ai";
import { TfiStatsUp } from "react-icons/tfi";
import { BsCurrencyExchange } from "react-icons/bs";
import { SiSlickpic } from "react-icons/si";

function Nav() {
  const mql = matchMedia("(min-width: 1280px)");
  const [realMql, setRealMql] = useState();
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    mql.matches ? setRealMql(true) : setRealMql(false);
    window.addEventListener("resize", () => {
      mql.matches ? setRealMql(true) : setRealMql(false);
    });
  }, [mql.matches]);

  return (
    <header className={realMql ? "header" : "header-1280" }>
      {realMql ? (
        <nav className="nav">
          <Link to="/" className="navbar-logo">
            <img src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" alt="logo" />
            <span>Crytoverse</span>
          </Link>

          <ul className="navbar-links">
            <li className="navbar-link">
              <NavLink to="/" end>
                <AiOutlineHome /> Home
              </NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/cryptocurrencies" end>
                <TfiStatsUp /> Cryptocurrencies
              </NavLink>
            </li>
            <li className="navbar-link">
              <NavLink to="/exchanges">
                <BsCurrencyExchange /> Exchanges
              </NavLink>
            </li>
            {/* <li className="navbar-link">
              <NavLink to="/News">
                <AiOutlineBulb /> News
              </NavLink>
            </li> */}
            <li className="navbar-link">
              <NavLink to="/NFT" end>
                <SiSlickpic /> NFT
              </NavLink>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="nav-less-1280">
          <Link to="/" className="navbar-logo-1280">
            <img src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" alt="logo" />
            <span>Crytoverse</span>
          </Link>

          <div>
            <AiOutlineBars
              className="bars"
              onClick={() => {
                setShowLinks(!showLinks);
              }}
            />

            {showLinks && (
              <div className="container-navbar-links-1280" >
                <ul className="navbar-links-1280">
                  <li className="navbar-link-1280">
                    <NavLink to="/" end>
                      <AiOutlineHome /> Home
                    </NavLink>
                  </li>
                  <li className="navbar-link-1280">
                    <NavLink to="/cryptocurrencies" end>
                      <TfiStatsUp /> Cryptocurrencies
                    </NavLink>
                  </li>
                  <li className="navbar-link-1280">
                    <NavLink to="/exchanges">
                      <BsCurrencyExchange /> Exchanges
                    </NavLink>
                  </li>
                  {/* <li className="navbar-link-1280">
                    <NavLink to="/News">
                      <AiOutlineBulb /> News
                    </NavLink>
                  </li> */}
                  <li className="navbar-link-1280">
                    <NavLink to="/NFT" end>
                      <SiSlickpic /> NFT
                    </NavLink>
                  </li>
                </ul>

                <AiOutlineCloseCircle
                  className="close"
                  onClick={() => setShowLinks(false)}
                />
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Nav;
