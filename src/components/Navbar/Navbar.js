import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import i18n from "../../i18n";

const Navbar = (props) => {
  const [openCount, setOpenCount] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  console.log(language);

  const logout = () => {
    localStorage.clear();
  };

  const LanguageKey = "NewsReadToken";

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem(LanguageKey, lang);
  };
  const handleMenuOpenCount = () => {
    setOpenCount((prev) => !prev)
  }
  const handleMenuOpenProfile = () => {
    setOpenProfile((prev) => !prev)
  }
  const handleMenuCloseCount = () => {
    setOpenCount(false)
  }
  const handleMenuCloseProfile = () => {
    setOpenProfile(false)
  }


  return (
    <>
      <label htmlFor="check" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>
      <nav className="main-nav" >
        <input type="checkbox" id="check" />

        <a href="/about" className="logo" style={{ color: "#111439" }}>
          NewsRead
        </a>
        <ul className="navlinks">
          <li>
          <a href="/detect">Detect News</a>
          </li>
          <li>
            <a href="/">{t("Navbarhomen")}</a>
          </li>
          <li>
            <a href="/about">{t("Navbarhomea")}</a>
          </li>


          {/* <li className="nav-item dropdown" onMouseEnter={handleMenuOpenCount} onMouseLeave={handleMenuCloseCount} >
            <a href="">
              <button
                class="btn"
                style={{
                  borderRadius: "50%",
                  border: "#5ca9fb",
                }} >
               Google Translate
              </button>
              {openCount &&
                <div class="dropDownProfile">
                    <button id="google_translate_element"></button>
                </div>}
            </a>
          </li> */}

          {/* <li className="nav-item dropdown" onMouseEnter={handleMenuOpenCount} onMouseLeave={handleMenuCloseCount} >
            <a >
              <button
                class="btn"
                style={{
                  borderRadius: "50%",
                  border: "#5ca9fb",
                }}
              >
                {t("selectCountry")}
              </button>
              {openCount && (
                <div class="dropDownProfile">
                  {selectLanguages.map((item) => {
                    return (
                      <a>
                        <button
                          class="dropdown-item"
                          onClick={(e) => {
                            changeLanguage(item.value);
                            handleLanguageChange(item.value);
                          }}
                        >
                          {item.label}
                        </button>
                      </a>
                    );
                  })}
                </div>
              )}
            </a>
          </li> */}
          <li className="nav-item dropdown" onMouseEnter={handleMenuOpenProfile} onMouseLeave={handleMenuCloseProfile} >
            <a >
              <button
                class="btn"
                style={{
                  borderRadius: "50%",
                  border: "#5ca9fb",
                }}

              >
                {localStorage.getItem("email") ?
                  <img style={{ width: "40px", height: "40px", borderRadius: "50%" }} src={localStorage.getItem("profilePic")} /> :
                  <div> {t("profile")} < i class="fa fa-circle-user"></i></div>
                }
              </button>
            </a>
            {openProfile && (
              <div class="dropDownProfile">
                <a href="">
                  {localStorage.getItem("name")}
                </a>
                <div class="dropdown-divider"></div>
                {localStorage.getItem("email") ?
                  <a href="/" onClick={logout}>
                    {t("logout")}
                  </a> :
                  <a href="/login">
                    {t("login")}
                  </a>
                }
              </div>
            )}
          </li>
        </ul>
      </nav >
    </>
  );
};

export default Navbar;
