import "./App.css";
import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Information from "./components/About/Information";
import Login from "./components/Login/Login";
import Article from "./components/Articles/Article";
import Articles from "./components/Articles/Articles";
import Home from "./components/Category/Home";
import Detector from './components/Detector/Detector'
import General from "./components/Category/General";
import World from "./components/Category/World";
import Science from "./components/Category/Science";
import Business from "./components/Category/Business";
import Sports from "./components/Category/Sports";
import Entertainment from "./components/Category/Entertainment";
import Tech from "./components/Category/Technology";
import Pakistan from "./components/Category/Pakistan";
import LocaleContext from "./LocaleContext";
import i18n from "./i18n";
import India from "./components/Category/India";
import UK from './components/Category/UK'
import US from "./components/Category/US";
import Nation from "./components/Category/Nation";
import Health from "./components/Category/Health";

function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  const LanguageKey = "NewsReadToken";
  useEffect(() => {
    const language = localStorage.getItem(LanguageKey);

    i18n.changeLanguage(language);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detect" element={<Detector />} />
        <Route path="/about" element={<Information />} />
        <Route path="/article" element={<Article />} />
        <Route path="/articles" element={<Articles />} />

        <Route exact path="/" element={<General />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/entertainment" element={<Entertainment />} />
        <Route exact path="/sports" element={<Sports />} />
        <Route exact path="/science" element={<Science />} />
        <Route exact path="/technology" element={<Tech />} />
        <Route exact path="/nation" element={<Nation />} />
        <Route exact path="/health" element={<Health />} />
        <Route exact path="/pakistan-news" element={<Pakistan />} />
        <Route exact path="/india-news" element={<India />} />
        <Route exact path="/uk-news" element={<UK />} />
        <Route exact path="/us-news" element={<US />} />
      </Routes>
    </LocaleContext.Provider>
  );
}

export default App;
