import React from "react";

function ActualData({ actualData }) {
  return (
    <>
      {actualData.map((el, ind) => {
        return (
          <div key={ind} className="home_info-card">
            <h4>{el.name.replaceAll("_", " ")}</h4>
            <p>{el.num}</p>
          </div>
        );
      })}
    </>
  );
}

export default ActualData;
