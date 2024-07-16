import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { t, locale } from "../i18n";
import { useStore } from "@nanostores/react";

export default function Navigation() {
  const $locale = useStore(locale);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-5rem";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <>
      <nav
        id="navbar"
        className="bg-black h-20 w-full sticky text-white flex justify-between items-center px-8 py-2 font-bold shadow-lg transition-all duration-300"
      >
        <div className="flex flex-row gap-8 justify-start items-center">
          <div
            className="flex flex-row items-center gap-4 cursor-pointer"
            onClick={() => {
              window.location.href = "/projet2/";
            }}
          >
            <img src={logo} alt="logo" className="w-10 h-10" />
            <span className="font-bold">Cup Quest</span>
          </div>
          <button
            className="flex w-16 items-center justify-center border-2 rounded-xl p-4 cursor-pointer font-bold transition-all duration-200 hover:bg-neutral-800"
            type="submit"
            onClick={() => {
              locale.set($locale === "en" ? "fr" : "en");
            }}
          >
            {`${$locale === "en" ? "fr" : "en"}`.toUpperCase()}
          </button>
        </div>
        <div>
          <ul className="flex flex-row gap-8">
            <li>
              <Link to="/statistiques">{t("navbar.stats")}</Link>
            </li>
            <li>
              <Link to="/predictions">{t("navbar.predictions")}</Link>
            </li>
            <li>
              <Link to="/chat">{t("navbar.chat")}</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
