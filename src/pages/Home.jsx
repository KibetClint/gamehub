import 'react';
import TournamentList from '../components/TournamentList';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
        <main className="flex-1">
            {/* Hero Section */}

             {/* Insights & Slider Section  */}
            <section className=" py-4 bg-grey-500 text-white flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4" 
                style={{ backgroundImage: 'url(/src/assets/images/P2.webp)', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' }}>
                {/* Pool Insights */}
                <div className="h-[60vh] bg-amber-200 flex-1 flex flex-col items-center justify-center text-center rounded-lg"
                    style={{ backgroundImage: 'url(/src/assets/images/pool.webp)', 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' }}>
                    <h3 className="text-2xl font-bold mb-2">Pool Insights</h3>
                    <p className="text-base mb-4"> Discover techniques, strategies, and tips to excel in pool competitions.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition duration-300">
                        Learn More
                    </button>
                </div>


                {/* Slider */}
                <div className="flex-1 h-[50vh] md:h-[60vh] w-full overflow-hidden rounded-lg">
                    <Slider />
                </div>

                {/* Chess Insights */}
                <div className="bg-red-200 h-[60vh] flex-1 flex flex-col items-center justify-center text-center rounded-lg"
                        style={{ backgroundImage: 'url(/src/assets/images/chess.jpg)', 
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
            </div>
            </section>
        </main>
    </div>
  );
};

export default Home;
