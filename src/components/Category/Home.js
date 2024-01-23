import React, { useEffect, useState } from "react";
import "./Home.css";
import Science from './Science'
import Business from './Business'
import General from './General'
import { useTranslation } from "react-i18next";
import Spinner from "../Spinner/Spinner";

function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {!loading ?
        <div className="container py-3 my-4 align-items-center">
          <Spinner />
        </div> :
        <div>
          <General />
        </div>
      }
    </>
  );
}

export default Home;
