import React from "react";
import "./News.css";

function News({ showAll, news }) {
  return (
    <>
      {news !== undefined
        ? news?.map((el, ind) => {
            const date = new Date(el.datePublished);
            if (showAll) {
              if (ind < 24) {
                return (
                  <a
                    href={el.url}
                    target="_blank"
                    rel="noreferrer"
                    key={ind}
                    className="news-container"
                  >
                    <div className="news-first">
                      <h4>{el.name}</h4>
                      {el.img !== undefined ? (
                        <img src={el.img} alt={el.name} />
                      ) : null}
                    </div>
                    <div className="news-second">{el.description}</div>
                    <div className="news-third">
                      <div>
                        {el.imgProvider ? (
                          <img src={el.imgProvider} alt={el.nameProvider} />
                        ) : null}
                        <p>{el.nameProvider}</p>
                      </div>
                      <p>{`${date.getHours()} hours ago`}</p>
                    </div>
                  </a>
                );
              }
            } else {
              if (ind < 10) {
                return (
                  <a
                    href={el.url}
                    target="_blank"
                    rel="noreferrer"
                    key={ind}
                    className="news-container"
                  >
                    <div className="news-first">
                      <h4>{el.name}</h4>
                      {el.img !== undefined ? (
                        <img src={el.img} alt={el.name} />
                      ) : null}
                    </div>
                    <div className="news-second">{el.description}</div>
                    <div className="news-third">
                      <div>
                        {el.imgProvider ? (
                          <img src={el.imgProvider} alt={el.nameProvider} />
                        ) : null}
                        <p>{el.nameProvider}</p>
                      </div>
                      <p>{`${date.getHours()} hours ago`}</p>
                    </div>
                  </a>
                );
              }
            }
          })
        : null}
    </>
  );
}

export default News;
