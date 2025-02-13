import "react";
import { Link } from "react-router-dom";
import { FaTrophy } from "react-icons/fa";

export default function PoolTournamentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-700 to-teal-800 text-white">
      {/* Main Content */}
      <main className="max-w-4xl w-full mx-auto py-16 px-4 flex-1">
        {/* Hero-like Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <FaTrophy className="text-6xl mb-4 text-yellow-300" />
          <h2 className="text-4xl font-extrabold mb-2">Dive into Pool Competitions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-100">
            Enjoy thrilling pool tournaments featuring competitive matchups, exciting prizes, 
            and a fun community. Whether you’re a seasoned pro or just getting started, our 
            events will put your skills to the test.
          </p>
        </div>

        {/* Detailed Information */}
        <h3 className="text-2xl font-semibold mb-4">About Our Pool Tournaments</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-3">
          <li>
            <span className="font-bold">Varied Formats:</span> 8-ball, 9-ball, and other popular 
            variants for all enthusiasts.
          </li>
          <li>
            <span className="font-bold">Ranked Matches:</span> Fair and transparent ranking system 
            to track your progress.
          </li>
          <li>
            <span className="font-bold">Live Updates:</span> Real-time scores, brackets, and leaderboards.
          </li>
          <li>
            <span className="font-bold">Friendly Community:</span> Connect with fellow pool players 
            and learn from each other.
          </li>
          <li>
            <span className="font-bold">Awesome Prizes:</span> Win trophies, gear, and exclusive 
            merchandise.
          </li>
        </ul>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="inline-block bg-yellow-300 text-green-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-200 transition"
          >
            Register Now
          </Link>
        </div>
      </main>
    </div>
  );
}
