// src/components/TournamentList.jsx
import 'react';
import { Link } from 'react-router-dom';

const tournaments = [
  { id: 1, name: 'Summer Chess Open', date: '2025-06-15' },
  { id: 2, name: 'Pool Championship 2025', date: '2025-07-20' },
  { id: 3, name: 'Autumn Battle Royale', date: '2025-09-05' },
];

const TournamentList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {tournaments.map((tournament) => (
        <div key={tournament.id} className="bg-cyan-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h4 className="text-xl font-bold mb-2">{tournament.name}</h4>
          <p className="mb-4">{new Date(tournament.date).toLocaleDateString()}</p>
          <Link 
            to={`/tournament/${tournament.id}`} 
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TournamentList;
