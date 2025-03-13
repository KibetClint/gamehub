import 'react';
import { Link } from 'react-router-dom';
import TournamentList from '../components/TournamentList';
import Slider from '../components/Slider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HERO SECTION */}
      <section
        className="relative md:h-[80vh] h-auto flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/P2.webp')" }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-black/60 to-transparent" />

<<<<<<< HEAD
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Where Strategy Meets Excitement
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 font-light drop-shadow-md">
            Join our thrilling Pool & Chess tournaments and unleash your potential!
          </p>
          <Link to="/signup">
            <button className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
              Get Started
            </button>
          </Link>
        </div>
      </section>
=======
             {/* Insights & Slider Section  */}
            <section className=" py-4 bg-grey-500 text-white flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4" 
                style={{ backgroundImage: 'url(/src/assets/images/P2.webp)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' }}>
                {/* Pool Insights */}
                <div className="h-[60vh] bg-amber-200 flex-1 flex flex-col items-center justify-center text-center rounded-lg"
                    style={{ backgroundImage: 'url(/images/pool.webp)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' }}>
                    <h3 className="text-2xl font-bold mb-2">Pool Insights</h3>
                    <p className="text-base mb-4"> Discover techniques, strategies, and tips to excel in pool competitions.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                        Learn More
                    </button>
                </div>
>>>>>>> refs/remotes/origin/main

      {/* HIGHLIGHTS SECTION (Slider + Quick Info) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Slider with Reduced Rectangular Height */}
          <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] overflow-hidden shadow-lg">
            <Slider />
          </div>

          {/* Quick Info Text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Discover the Best Tournaments
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Explore a world of exciting tournaments designed for both amateurs and professionals. 
              Hone your skills, connect with fellow enthusiasts, and experience the thrill of 
              competitive play in a vibrant community.
            </p>
            <Link to="/signup" className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300 justify-items-center ">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* INSIGHTS SECTION (Pool & Chess) */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Pool Insights */}
          <div
            className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg flex items-end"
            style={{ 
              backgroundImage: "url('/src/assets/images/pool.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center' 
            }}
          >
            {/* Optional dark overlay for readability */}
            <div className="absolute inset-0 bg-opacity-30" />
            <div className="relative z-10 p-4 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Pool</h3>
              <p className="text-sm mb-4 max-w-sm">
                Learn expert strategies, tips, and techniques to dominate the table.
              </p>
              <Link to="/pooldtls">
                <button className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </Link>
=======
                {/* Chess Insights */}
                <div className="bg-red-200 h-[60vh] flex-1 flex flex-col items-center justify-center text-center rounded-lg"
                        style={{ backgroundImage: 'url(/images/chess.jpg)', 
                            backgroundSize: 'cover', 
                            backgroundPosition: 'center' }}>
                    
                        <h3 className="text-2xl font-bold mb-2">Chess Insights</h3>
                        <p className="text-base mb-4">
                            Discover techniques, strategies, and tips to excel in pool competitions.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                            Learn More
                        </button>
                    </div>
            </section>

            {/* Upcoming Tournaments Section */}
            <section className="py-16 bg-teal-700">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-8">Upcoming Tournaments</h3>
                <TournamentList />
>>>>>>> refs/remotes/origin/main
            </div>
          </div>

          {/* Chess Insights */}
          <div
            className="relative h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg flex items-end"
            style={{ 
              backgroundImage: "url('/src/assets/images/chess.jpg')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            <div className="absolute inset-0 bg-opacity-30" />
            <div className="relative z-10 p-4 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Chess</h3>
              <p className="text-sm mb-4 max-w-sm">
                Master tactical maneuvers, openings, and endgames with ease.
              </p>
              <Link to="/chessdtls">
                <button className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold py-2 px-4 rounded transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-600">
                Global Community
              </h3>
              <p className="text-gray-600">
                Connect with players worldwide, expand your network, and forge
                lasting friendships.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-600">
                Exciting Prizes
              </h3>
              <p className="text-gray-600">
                Compete for cash rewards, trophies, and exclusive merchandise.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-600">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Our dedicated team is here to help you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING TOURNAMENTS SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            Upcoming Tournaments
          </h3>
          <TournamentList />
        </div>
      </section>
    </div>
  );
}
