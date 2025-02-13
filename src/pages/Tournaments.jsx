// src/pages/Tournaments.jsx
import  { useState } from 'react';
import { Link } from 'react-router-dom';

// Sample tournament data (replace with your dynamic data or API call)
const sampleTournaments = [
  {
    id: 1,
    name: "Summer Chess Open",
    description: "Join the ultimate chess challenge this summer!",
    date: "2025-06-15",
  },
  {
    id: 2,
    name: "Pool Championship 2025",
    description: "Compete in the pool tournament of the year and show your skills.",
    date: "2025-07-20",
  },
  {
    id: 3,
    name: "Autumn Battle Royale",
    description: "Experience a thrilling competition in this fall's tournament.",
    date: "2025-09-05",
  },
  // Add more tournaments as needed...
];

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter tournaments based on search term
  const filteredTournaments = sampleTournaments.filter(tournament =>
    tournament.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-34 bg-cover bg-center"
        style={{ backgroundImage: 'url(/src/assets/images/pool.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold">Tournaments</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16 bg-teal-700">
        <div className="container mx-auto px-4">
          {/* Header with Title and Search */}
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Upcoming Tournaments</h2>
              <p className="text-gray-900">
                Join the best tournaments and prove your skill!
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Search tournaments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Tournament Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{tournament.name}</h3>
                <p className="text-gray-700 mb-4">{tournament.description}</p>
                <p className="text-gray-500 mb-4">
                  Date: {new Date(tournament.date).toLocaleDateString()}
                </p>
                <Link
                  to={`/tournament/${tournament.id}`}
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Register Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tournaments;
