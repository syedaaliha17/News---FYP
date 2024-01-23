import React from "react";
import "./NewsCard.css";
import { useTranslation } from "react-i18next";
import {WhatsappIcon} from 'react-share';

const NewsCard = (props) => {
  let { onClick, title, description,url,imageUrl, channel } = props;
  const { t } = useTranslation();
  return (
    <>
      <div className="brief-card" onClick={onClick}>
        <section className="cards">
          <article className="card card--1 w-100">
            <div className="card__info-hover">
              <div className="card__clock-info"></div>
            </div>
            <div
              style={{
                backgroundImage: ` url(${imageUrl})`,
              }}
              className="card__img"
            ></div>
            <div
              style={{
                backgroundImage: ` url(${imageUrl})`,
              }}
              className="card__img--hover"
            ></div>
            <div className="card__info">
              <h5 className="card__title">{title} </h5>
              <h5 className="url">{url} </h5>
              <div className="card-body">
                <p className="card-text">{description}...</p>
                <button className="btn"  style={{background:"white", border:"1px solid black"}}>{channel}</button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default NewsCard;
