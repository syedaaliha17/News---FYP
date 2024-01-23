import React, { useState, useEffect } from "react";
import "./Login.css";
import { auth, provider } from "./config";
import { GoogleButton } from "react-google-button";
import { useTranslation } from "react-i18next";
import Spinner from "../Spinner/Spinner";
import Home from "../Category/Home";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        const name = data.user.displayName;
        const email = data.user.email;
        const profilePic = data.user.photoURL;
        setValue(name, email, profilePic)
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        localStorage.setItem("authenticated", false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    
    setValue(localStorage.getItem('email,profilePic'))
    const timer = setTimeout(() => {
      setLoading(true)
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!loading ?
        <div className="container my-3">
          <Spinner />
        </div> :
        <div class="container my-3">
          <div class="row ">
            {!value ? (
              <div class="col-lg-6 mx-auto">
                <div className="cards">
                  <div className="card-heading texts-primary">{t("login")}</div>
                  <div className="card-body p-lg-5" style={{ padding: "5px" }}>
                    <h3 className="mb-4">{t("welcome")}</h3>
                    <div>
                      <GoogleButton
                        onClick={(e) => {
                          handleClick();
                        }}
                      >
                        {t("signin")}
                      </GoogleButton>
                    </div>
                  </div>
                </div>
              </div>
            ) :
              <Home />
            }
          </div>
        </div>
      }
    </>
  );
};

export default Login;
