import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navigation() {
  return (
    <>
      <nav className="bg-black w-full text-white flex justify-between items-center px-8 py-8 font-bold shadow-lg">
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
          <ul className="flex flex-row gap-8">
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
      </nav>
      <Outlet />
    </>
  );
}
