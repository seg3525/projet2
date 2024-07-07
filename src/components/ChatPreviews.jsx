import { Link } from "react-router-dom";
import oilers from "../assets/oilers.png";
import panthers from "../assets/panthers.png";
import user from "../assets/user.png";

export default function Chat() {
  return (
    <section className="w-full h-auto bg-slate-100 flex flex-col items-center gap-0 justify-center py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-12 text-black">
        Salles de Chat
      </h1>
      <div className="w-7/12 grid grid-cols-2 gap-32 md:grid-cols-1">
        <div className="bg-white flex flex-col items-center justify-center rounded-xl">
          <div className="bg-oilers flex flex-row gap-2 items-center justify-center w-full rounded-t-xl py-4">
            <img src={oilers} alt="Oilers" className="w-16 h-16" />
            <h2 className="font-bold text-white">Salon des Oilers</h2>
          </div>
          <div className="border w-full">
            <div>
              <h2 className="font-bold bg-green-500 py-1 text-center text-white">
                3 Membres Actifs
              </h2>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">John Doe</span>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">Jane Doe</span>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">Jeremiah Doe</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center bg-slate-500 rounded-b-xl py-2">
            <Link to="/chat">
              <button className="bg-button text-white font-bold p-4 rounded-xl">
                Rejoindre
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center rounded-xl">
          <div className="bg-panthers flex flex-row gap-2 items-center justify-center w-full rounded-t-xl py-4">
            <img src={panthers} alt="Oilers" className="w-16 h-16" />
            <h2 className="font-bold text-white">Salon des Panthers</h2>
          </div>
          <div className="border w-full">
            <div>
              <h2 className="font-bold bg-green-500 py-1 text-center text-white">
                3 Membres Actifs
              </h2>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">Mark Doe</span>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">Gerald Doe</span>
            </div>
            <div className="flex flex-row items-center gap-2 p-4">
              <img src={user} alt="User" className="w-8 h-8" />
              <span className="font-bold">Mary Doe</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center bg-slate-500 rounded-b-xl py-2">
            <Link to="/chat">
              <button className="bg-button text-white font-bold p-4 rounded-xl">
                Rejoindre
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
