import React, { useState } from "react";
import { useTranslation } from "react-i18next";


function Header(props) {
  const { t } = useTranslation();
 
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container justify-content-center">
            <div className=" intro-text">
              <h1>
                {t ? t("headertitle") : "Loading"}
                <span></span>
              </h1>
              <p>{t ? t("headerparagraph") : "Loading"}</p>
              <a
                href="#features"
                className="btn btn-custom btn-lg page-scroll"
                style={{ width: "150px" }}
              >
                {t ? t("headerbutton") : "loading"}
              </a>{" "}
            
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
