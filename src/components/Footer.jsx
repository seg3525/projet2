import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";

export default function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 border-t bg-black w-full text-white flex flex-wrap gap-4 justify-between items-center px-16 py-12 md:justify-center">
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => {
            window.location.href = "/projet2/";
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold">Cup Quest</span>
        </div>
        <div>
          <ul className="flex flex-row gap-4 items-center">
            <li>
              <img src={facebook} alt="Icon" />
            </li>
            <li>
              <img src={linkedin} alt="Icon" />
            </li>
            <li>
              <img src={youtube} alt="Icon" />
            </li>
            <li>
              <img src={instagram} alt="Icon" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-4 font-bold">
            <li>
              <Link to="/statistiques">Statistiques</Link>
            </li>
            <li>
              <Link to="/predictions">Prédictions</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
