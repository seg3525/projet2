import oilers from "../assets/oilers.png";
import panthers from "../assets/panthers.png";
import mcdavid from "../assets/mcdavid.png";
import barkov from "../assets/barkov.png";

export default function Predictions() {
  return (
    <section className="w-full h-full flex flex-col items-center bg-slate-200  py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-10">Prédictions</h1>
      <div className="flex flex-col items-center justify-center w-10/12">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Disponible Aujourd'hui</h2>
          <span className="text-lg">Score total: 14/45</span>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">
            Qui gagnera la prochaine partie?
          </h3>
          <div className="grid grid-cols-2 w-full gap-4">
            <div
              id="vote1green"
              className="flex flex-col items-center border-4 border-green-500 bg-slate-100 p-4 rounded-lg"
            >
              <img src={oilers} alt="Oilers" className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold mb-2">54%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  document.getElementById("vote1green").style.backgroundColor =
                    "#21c55d";
                  document.getElementById("vote1red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                Voter
              </button>
            </div>
            <div
              id="vote1red"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img src={panthers} alt="Panthers" className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold mb-2">46%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  document.getElementById("vote1green").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote1red").style.backgroundColor =
                    "#ef4444";
                }}
              >
                Voter
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">
            Qui marquera le premier but?
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div
              id="vote2green1"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img src={mcdavid} alt="McDavid" className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold mb-2">27%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#ef4444";
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                Voter
              </button>
            </div>
            <div
              id="vote2green2"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img src={barkov} alt="Barkov" className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold mb-2">16%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#ef4444";
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                Voter
              </button>
            </div>
            <div
              id="vote2red"
              className="flex flex-col items-center border-4 border-green-500 bg-slate-100 p-4 rounded-lg"
            >
              <span className="text-2xl font-bold mb-2">Autre</span>
              <span className="text-2xl font-bold mb-2">57%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => {
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#21c55d";
                }}
              >
                Voter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-10/12 mt-24">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Guide de Fantasy Hockey</h2>
          <span className="text-lg">55% Meilleure Chance de Gagner</span>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">1</span>
              <span className="text-lg">Choisir un bon gardien</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Connor Hellebuyck, Andrei Vasilevskiy)
              </span>
              <span>
                Un bon gardien peut faire la différence dans une ligue de
                Fantasy Hockey. Assurez-vous de choisir un gardien qui joue
                régulièrement et qui est capable de gagner des matchs. Les
                gardiens qui jouent pour des équipes gagnantes sont souvent les
                meilleurs choix.
              </span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">2</span>
              <span className="text-lg">Choisir des joueurs de qualité</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Connor McDavid, Leon Draisaitl)
              </span>
              <span>
                Les joueurs de qualité sont essentiels pour gagner une ligue de
                Fantasy Hockey. Assurez-vous de choisir des joueurs qui marquent
                beaucoup de points et qui jouent régulièrement. Les joueurs qui
                jouent sur les premiers trios et les premières unités spéciales
                sont souvent les meilleurs choix.
              </span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">3</span>
              <span className="text-lg">Faire des échanges stratégiques</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Échanger un gardien contre un attaquant)
              </span>
              <span>
                Les échanges sont une partie importante de la Fantasy Hockey.
                Assurez-vous de faire des échanges qui améliorent votre équipe
                et qui comblent vos besoins. Échanger un gardien contre un
                attaquant peut être une bonne stratégie si vous avez besoin de
                marquer plus de buts.
              </span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">4</span>
              <span className="text-lg">
                Suivre les blessures et les suspensions
              </span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Remplacer un joueur blessé par un joueur en santé)
              </span>
              <span>
                Les blessures et les suspensions sont des facteurs importants
                dans la Fantasy Hockey. Assurez-vous de suivre les nouvelles et
                de remplacer les joueurs blessés par des joueurs en santé. Les
                joueurs qui reviennent de blessure peuvent être de bons choix
                car ils sont souvent sous-évalués.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
