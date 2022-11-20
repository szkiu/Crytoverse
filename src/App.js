import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Coin from "./components/Criptocurriencies/Coin/Coin";
import OneNFT from "./components/NFT/OneNFT.jsx/OneNFT";
import Cryptocurriencies from "./components/Criptocurriencies/Cryptocurriencies";
import Exchanges from "./components/Exchanges/Exchanges";
import FIAT from "./components/FIAT/FIAT";
import NFT from "./components/NFT/NFT";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cryptocurrencies/:id" element={<Coin/>} />

        <Route path="/cryptocurrencies" element={<Cryptocurriencies/>} />

        <Route path="/exchanges" element={<Exchanges/>} />

        <Route path="/FIAT"  element={<FIAT/>} />

        <Route path="/NFT" element={<NFT/>} />

        <Route path="/NFT/:id"  element={<OneNFT/>} />
      </Routes>
    </>
  );
}

export default App;
