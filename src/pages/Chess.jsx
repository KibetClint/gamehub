import "react";
import { Link } from "react-router-dom";
import { FaChessKnight } from "react-icons/fa";

export default function ChessTournamentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-800 to-black text-white">
      {/* Main Content */}
      <main className="max-w-4xl w-full mx-auto py-16 px-4 flex-1">
        {/* Hero-like Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <FaChessKnight className="text-6xl mb-4 text-yellow-400" />
          <h2 className="text-4xl font-extrabold mb-2">Master the Chessboard</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Experience the thrill of intense matchups, expert analysis, and rewarding prizes. 
            Whether you’re a seasoned grandmaster or a budding enthusiast, our tournaments 
            offer the perfect platform to test your strategic prowess.
          </p>
        </div>

        {/* Detailed Information */}
        <h3 className="text-2xl font-semibold mb-4">Why Join Our Chess Tournaments?</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-3">
          <li>
            <span className="font-bold">Multiple Formats:</span> Blitz, rapid, and classical formats 
            to cater to all playing styles.
          </li>
          <li>
            <span className="font-bold">Fair Pairings:</span> Automated bracket management ensures 
            balanced matchups.
          </li>
          <li>
            <span className="font-bold">Live Commentary:</span> Expert analysis from seasoned players 
            and coaches.
          </li>
          <li>
            <span className="font-bold">Community Support:</span> A friendly community ready to 
            welcome newcomers.
          </li>
          <li>
            <span className="font-bold">Global Competition:</span> Play against participants from 
            around the world.
          </li>
        </ul>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            to="/register"
            className="inline-block bg-yellow-400 text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-yellow-300 transition"
          >
            Register Now
          </Link>
        </div>
      </main>
    </div>
  );
}
