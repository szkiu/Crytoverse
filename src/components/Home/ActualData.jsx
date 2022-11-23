import React from "react";

function ActualData({ actualData }) {
  return (
    <>
      {actualData.map((el, ind) => {
        if (el.coinName === undefined) {
          return (
            <div key={ind} className="home_info-card">
              <h4>{el.name.replaceAll("_", " ")}</h4>
              <p>{el.num}</p>
            </div>
          );
        }else{
          return (
            <div key={ind} className="home_info-card">
              <h4>{el.name.replaceAll("_", " ")}</h4>
              <p>{`${el.coinName}, ${el.coinSym}`}</p>
            </div>
          );
        }
      })}
    </>
  );
}

export default ActualData;
