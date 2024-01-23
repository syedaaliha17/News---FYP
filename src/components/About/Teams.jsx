import React from "react";
import { useTranslation } from "react-i18next";
import profile from "../assets/img/profile.jpg"
function Team() {
  const { t } = useTranslation();
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{t("mteam")}</h2>
          <p> {t("teamparagraph")}</p>
        </div>
        <div id="row">
          <div className="col-md-6 team">
            <div className="thumbnail">
              <img
                src={profile}
                alt="..."
                className="team-img"
            
              />
              <div className="caption">
                <h4>{t("name1")}</h4>
                <p>{t("job1")}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 team">
            <div className="thumbnail">
              <img
                src={profile}
                alt="..."
                className="team-img"
              />
              <div className="caption">
                <h4>{t("name2")}</h4>
                <p>{t("job2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
