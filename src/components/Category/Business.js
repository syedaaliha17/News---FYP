import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Spinner from "../Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { Urls, ACNetwork, config } from "../config";
import { useNavigate } from "react-router-dom";
import lang from "../../data/languages/lang";

const HeaderButton = ({ link, name }) => {
  return (
    <a href={link}>
      <button
        className="btn btn-lg"
        style={{
          padding: "5px",
          margin: "5px",
          background: "white",
          border: "1px solid black",
          fontSize: "16px",
        }}
      >
        {name}
      </button>
    </a>
  );
};

const Business = (props) => {

  const navigation = useNavigate();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [businessNews, setBusinessNews] = useState([]);
  const [search, setSearch] = useState("");


  const getNews = async () => {
    setLoading(true);
    const response = await ACNetwork.get(
      Urls.getBusinessNews(i18n.language),
      (
        await config()
      ).headers
    );
    setLoading(false);
    if (!response.ok) {
      return alert(t(lang.businessError));
    }
    setBusinessNews(response.data.news);
  };
  useEffect(() => {
    getNews();
  }, [i18n.language]);

  return (
    <>

      <div
        className="container my-3"
        style={{ alignContent: "justify-content-center" }}
      >
        <div className="row ">
          <div className="col-md-12">
            <h1
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                margin: "10px",
              }}
            >
            Business - Top Headlines
            </h1>

            <div
              className="button"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <HeaderButton link="/" name="General" />
              <HeaderButton link="/business" name="Business" />
              <HeaderButton link="/science" name="Science" />
              <HeaderButton link="/technology" name="Technology" />
              <HeaderButton link="/entertainment" name="Entertainment" />
              <HeaderButton link="/health" name="Health" />
              <HeaderButton link="/sports" name="Sports" />
              <HeaderButton link="/nation" name="Nation" />
              <HeaderButton link="/world" name="World" />
              <HeaderButton link="/pakistan-news" name="Pakistan News" />
              <HeaderButton link="/us-news" name="US News" />
              <HeaderButton link="/india-news" name="India News" />
              <HeaderButton link="/uk-news" name="UK News" />
            </div>
            {loading && <Spinner />}
            <div className="row">
              {businessNews.map((element) => {
                return (
                  <div className="col-md-4" style={{ padding: "8px" }} key={element.url}>
                    <NewsCard
                      onClick={() => {
                        navigation("/article", { state: element });
                      }}
                      title={element.title ? element.title.slice(0, 37) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 55)
                          : "  "
                      }
                      imageUrl={element.imageUrl}
                      channel={element.channel}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Business;