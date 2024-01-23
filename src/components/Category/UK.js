import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import Spinner from "../Spinner/Spinner";
import { useTranslation } from "react-i18next";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

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

const UK = (props) => {
    const navigation = useNavigate();
    // const { t, i18n } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [generalNews, setGeneralNews] = useState([]);
    const apiURL =
        "https://gnews.io/api/v4/search?q=example&country=gb&apikey=716835ac41fef2d603b558f372a6b932";

    const getNews = async () => {
        await axios
            .get(apiURL)
            .then((response) => {
                setLoading(true);
                setGeneralNews(response.data.articles);
                console.log(response.data.articles);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getNews();
    }, []);

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
                            United Kingdom - News
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

                        {loading === true ? (
                            <Spinner />
                        ) : (
                            <div className="row">
                                {generalNews?.map((element) => {
                                    return (
                                        <div
                                            className="col-md-4"
                                            style={{ padding: "8px" }}
                                            key={element.url}
                                        >
                                            <NewsCard
                                                onClick={() => {
                                                    navigation("/articles", { state: element });
                                                }}
                                                title={element.title ? element.title.slice(0, 37) : " "}
                                                description={
                                                    element.description
                                                        ? element.description.slice(0, 37)
                                                        : "  "
                                                }
                                                imageUrl={element.image}
                                                channel={element.source.name}
                                                url={element.source.url}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UK;
