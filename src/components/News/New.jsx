import React, { useState, useEffect } from "react";
import "../Home/News.css";
import { Helmet } from "react-helmet";
import getNews from "../../services/getNews";
import Nav from "../Generics/Nav";
import ErrorModal from "../Generics/ErrorModal";
import Footer from "../Generics/Footer";

function New() {
  const [news, setNews] = useState();

  useEffect(() => {
    const actualNews = getNews();
    actualNews.then((res) => {
      setNews(res);
    });
  }, []);

  return (
    <>
      {news?.name !== "AxiosError" ? (
        <div className="home">
          <Helmet>
            <title>News</title>
          </Helmet>

          <Nav />

          <div>
            <main className="home_main">
              <h1>News</h1>
              <div className="home_news">
                {news !== undefined ? (
                  news?.map((el, ind) => {
                    const date = new Date(el.datePublished);
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
                  })
                ) : (
                  <b>Loading...</b>
                )}
              </div>
            </main>

            {news !== undefined ? (
                <Footer/>
              ) : (
                null
              )}
          </div>
        </div>
      ) : <ErrorModal error={news} />}
    </>
  );
}

export default New;
