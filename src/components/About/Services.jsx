import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{t("service")}</h2>
          <p>{t("serviceparagraph")}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <a href="#"> <i className={t("icon1s")}></i></a>
            <div className="service-desc">
              <h3>{t("name1s")}</h3>
              <p>{t("text1s")}</p>
            </div>
          </div>
          {/* <div className="col-md-4">
            <a href="#"> <i className={t("icon2s")}></i></a>
            <div className="service-desc">
              <h3>{t("name2s")}</h3>
              <p>{t("text2s")}</p>
            </div>
          </div> */}
          <div className="col-md-4">
            <a href="#"> <i className={t("icon3s")}></i></a>
            <div className="service-desc">
              <h3>{t("name3s")}</h3>
              <p>{t("text3s")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
