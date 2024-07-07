import { useState } from "react";
import oilers from "../assets/oilers.png";
import mcdavid from "../assets/mcdavid.png";
import blackhawks from "../assets/blackhawks.png";
import bedard from "../assets/bedard.png";

export default function Stats() {
  const playerData = [
    {
      name: "Connor McDavid",
      team: "Edmonton Oilers",
      position: "Centre",
      points: 105,
      goals: 33,
      assists: 72,
      gamesPlayed: 56,
      plusMinus: 21,
    },
    {
      name: "Leon Draisaitl",
      team: "Edmonton Oilers",
      position: "Centre",
      points: 84,
      goals: 31,
      assists: 53,
      gamesPlayed: 56,
      plusMinus: 28,
    },
    {
      name: "Mitch Marner",
      team: "Toronto Maple Leafs",
      position: "Ailier Droit",
      points: 67,
      goals: 20,
      assists: 47,
      gamesPlayed: 56,
      plusMinus: 22,
    },
    {
      name: "Auston Matthews",
      team: "Toronto Maple Leafs",
      position: "Centre",
      points: 66,
      goals: 41,
      assists: 25,
      gamesPlayed: 52,
      plusMinus: 21,
    },
    {
      name: "Brad Marchand",
      team: "Boston Bruins",
      position: "Ailier Gauche",
      points: 69,
      goals: 29,
      assists: 40,
      gamesPlayed: 53,
      plusMinus: 23,
    },

    {
      name: "David Pastrnak",
      team: "Boston Bruins",
      position: "Ailier Droit",
      points: 48,
      goals: 20,
      assists: 28,
      gamesPlayed: 48,
      plusMinus: 9,
    },
    {
      name: "Mark Stone",
      team: "Vegas Golden Knights",
      position: "Ailier Droit",
      points: 61,
      goals: 21,
      assists: 40,
      gamesPlayed: 55,
      plusMinus: 26,
    },
    {
      name: "Max Pacioretty",
      team: "Vegas Golden Knights",
      position: "Ailier Gauche",
      points: 51,
      goals: 24,
      assists: 27,
      gamesPlayed: 48,
      plusMinus: 5,
    },
    {
      name: "Nathan MacKinnon",
      team: "Colorado Avalanche",
      position: "Centre",
      points: 65,
      goals: 20,
      assists: 45,
      gamesPlayed: 48,
      plusMinus: 17,
    },
    {
      name: "Mikko Rantanen",
      team: "Colorado Avalanche",
      position: "Ailier Droit",
      points: 66,
      goals: 30,
      assists: 36,
      gamesPlayed: 52,
      plusMinus: 25,
    },
    {
      name: "Patrick Kane",
      team: "Chicago Blackhawks",
      position: "Ailier Droit",
      points: 66,
      goals: 15,
      assists: 51,
      gamesPlayed: 56,
      plusMinus: -2,
    },
    {
      name: "Alex DeBrincat",
      team: "Chicago Blackhawks",
      position: "Ailier Gauche",
      points: 54,
      goals: 32,
      assists: 22,
      gamesPlayed: 52,
      plusMinus: 3,
    },
    {
      name: "Kirill Kaprizov",
      team: "Minnesota Wild",
      position: "Ailier Gauche",
      points: 51,
      goals: 27,
      assists: 24,
      gamesPlayed: 55,
      plusMinus: 10,
    },
    {
      name: "Kevin Fiala",
      team: "Minnesota Wild",
      position: "Ailier Droit",
      points: 40,
      goals: 20,
      assists: 20,
      gamesPlayed: 50,
      plusMinus: 8,
    },
    {
      name: "Anze Kopitar",
      team: "Los Angeles Kings",
      position: "Centre",
      points: 62,
      goals: 14,
      assists: 48,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Dustin Brown",
      team: "Los Angeles Kings",
      position: "Ailier Droit",
      points: 51,
      goals: 17,
      assists: 34,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Johnny Gaudreau",
      team: "Calgary Flames",
      position: "Ailier Gauche",
      points: 49,
      goals: 19,
      assists: 30,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Matthew Tkachuk",
      team: "Calgary Flames",
      position: "Ailier Gauche",
      points: 43,
      goals: 8,
      assists: 35,
      gamesPlayed: 56,
      plusMinus: -3,
    },
  ];

  const [sortBy, setSortBy] = useState("points");

  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-200 py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-10">Statistiques</h1>

      <div className="flex flex-col items-center justify-center w-10/12 border">
        <select
          className="w-1/4 bg-button text-white font-bold p-4 rounded-xl mb-4"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="points">Points</option>
          <option value="goals">Buts</option>
          <option value="assists">Passes</option>
          <option value="gamesPlayed">Matchs Joués</option>
          <option value="plusMinus">Plus/Moins</option>
          <option value="team">Équipe</option>
        </select>
        <table className="border border-black bg-slate-100 rounded-xl">
          <thead>
            <tr className="border border-black">
              <th className="p-4 text-center">Joueur</th>
              <th className="p-4 text-center">Équipe</th>
              <th className="p-4 text-center">Position</th>
              <th className="p-4 text-center">Points</th>
              <th className="p-4 text-center">Buts</th>
              <th className="p-4 text-center">Passes</th>
              <th className="p-4 text-center">Matchs Joués</th>
              <th className="p-4 text-center">Plus/Moins</th>
            </tr>
          </thead>
          <tbody>
            {playerData
              .sort((a, b) => b[sortBy] - a[sortBy])
              .map((player, i) => (
                <tr
                  key={player.name}
                  className={`border border-black ${
                    i % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  }`}
                >
                  <td className="p-4 text-center">{player.name}</td>
                  <td className="p-4 text-center">{player.team}</td>
                  <td className="p-4 text-center">{player.position}</td>
                  <td className="p-4 text-center">{player.points}</td>
                  <td className="p-4 text-center">{player.goals}</td>
                  <td className="p-4 text-center">{player.assists}</td>
                  <td className="p-4 text-center">{player.gamesPlayed}</td>
                  <td className="p-4 text-center">{player.plusMinus}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-center p-4 my-10">
          Que pensent les pros?
        </h2>
        <div className="flex  flex-col items-center justify-center w-10/12 border gap-4">
          <div className="flex md:flex-col flex-row items-center justify-left bg-slate-300 rounded-xl p-8 w-full">
            <img src={oilers} alt="Oilers" className="w-16 h-16" />
            <img src={mcdavid} alt="McDavid" className="w-16 h-16" />
            <p className="p-4 text-center">
              "Connor McDavid est le meilleur joueur de la ligue, il est
              incroyable!"
            </p>
            <p className="p-4 text-center font-bold">
              {" "}
              - John Doe, Analyste ESPN
            </p>
          </div>
          <div className="flex md:flex-col flex-row items-center justify-left bg-slate-300 rounded-xl p-8 w-full">
            <img src={blackhawks} alt="Oilers" className="w-16 h-16" />
            <img src={bedard} alt="McDavid" className="w-16 h-16" />
            <p className="p-4 text-center">
              "Connor Bedard est le future du hockey, son potentiel est
              exceptionnel!"
            </p>
            <p className="p-4 text-center font-bold">
              {" "}
              - Marc Doe, Analyste Sportsnet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
