import React from "react";
import JsonData from "../../data/languages/en.json";
import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row">
          <div className=" section-title">
            <h2>{t("feature")}</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-6 col-sm-3">
          <a href="#"> <i className={t("iconn")}></i></a>
            <h3>{t("titlen")}</h3>
            <p>{t("textn")}</p>
          </div>
          <div className="col-xs-6 col-sm-3">
          <a href="#"> <i className={t("iconb")}></i></a>
            <h3>{t("titleb")}</h3>
            <p>{t("textb")}</p>
          </div>
          <div className="col-xs-6 col-sm-3">
            <a href="#"><i className={t("iconl")}></i></a>
            <h3>{t("titlel")}</h3>
            <p>{t("textl")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
