import React, { useEffect, useState } from "react";
import Features from "../About/Features";
import About from "../About/About";
import Services from "../About/Services";
import Teams from "../About/Teams";
import Contact from "../About/Contact";
import Header from "../About/Header";
import SmoothScroll from "smooth-scroll";
import Spinner from "../Spinner/Spinner";

function Information() {
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
        <div className="container py-3" style={{alignItems:"center"}}><Spinner />
        </div> :
        <div style={{scrollBehavior:"smooth"}}>
          <Header />
          <Features />
          <About />
          <Services />
          <Teams />
          <Contact />
        </div>
      }
    </>
  );
}

export default Information;
