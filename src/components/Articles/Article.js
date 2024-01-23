import React, { useState, useEffect } from "react";
import "./Article.css";
import { useLocation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import YouTube from "react-youtube";
import TextToSpeech from "../Speech/TextToSpeech";
import { useTranslation } from "react-i18next";
import { WhatsappIcon, WhatsappShareButton } from "react-share";

const Article = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  console.log(state, "here");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading ? (
        <div className="container py-3 ">
          <Spinner />
        </div>
      ) : (
        <div>
          <h1
            style={{
              fontSize: "40px",
              color: "gray",
              fontWeight: "bold",
              borderBottom: "1px solid black",
            }}
          >
            {state?.author}
          </h1>
          <article className="news-article ">
            <header>
              <h1 style={{ fontWeight: "bold" }}>{state?.title}</h1>
            </header>
            <main style={{ dislay: "inline", borderBottom: "2px solid black" }}>
              <div className="row">
                <div className="col-md-5">
                  <div
                    className="image"
                    style={{
                      height: 600,
                      marginBottom: "10px",
                      padding: "10px",
                      borderRadius: "10%",
                      backgroundImage: `url(${state?.urlToImage})`,
                    }}
                  ></div>
                </div>
                <div className="col-md-7">
                  <div
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      margin: "20px",
                    }}
                  >
                    <TextToSpeech text={state?.description} />
                  </div>

                  <p
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      margin: "20px",
                    }}
                  >
                    {state?.description}
                  </p>
                </div>
              </div>
            </main>

            <footer>
              <h1
                style={{
                  justifyContent: "center",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                {" "}
                {t("watch")}
              </h1>
              <YouTube
                videoId={
                  state.videoLink
                    ? state?.videoLink.split("https://youtu.be/")[1]
                    : ""
                }
              />
            </footer>
          </article>
        </div>
      )}
    </>
  );
};

export default Article;
