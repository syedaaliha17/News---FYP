import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{t("aboutus")}</h2>
              <p>{t ? t("aboutparagraph") : "loading..."}</p>
              <h3>{t("choose")}</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>{t("Whya")}</li>
                    <li>{t("Whyb")}</li>
                    <li>{t("Whyc")}</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    <li>{t("Why2a")}</li>
                    <li>{t("Why2b")}</li>
                    <li>{t("Why2c")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
