// src/pages/AboutUs.jsx
import 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[20vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/pool.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl md:text-6xl font-bold text-white">About Us</h1>
        </div>
      </section>

      {/* Our Story & Vision Section */}
      <section className="bg-cyan-900 py-10 px-4 container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
          <p className="mb-6 text-lg leading-relaxed">
            We are passionate about connecting chess enthusiasts and pool lovers by creating a platform where players can compete, learn, and grow together. Our journey began with a simple idea to bring the strategic depth of chess together with the vibrant energy of pool tournaments.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-center">Our Vision</h2>
          <p className="mb-6 text-lg leading-relaxed">
            Our vision is to revolutionize the way tournaments are experienced. We want to create a community where every match is more than just a game. It is an opportunity to connect, challenge, and celebrate the spirit of competition.
          </p>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-10 bg-teal-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="w-64 text-center">
              <img
                src="/images/team/D4.jpg"
                alt="Team member 1"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="mt-4 font-bold">John Doe</h3>
              <p className="text-sm text-gray-800">Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="w-64 text-center">
              <img
                src="/images/team/D5.jpg"
                alt="Team member 2"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="mt-4 font-bold">Jane Smith</h3>
              <p className="text-sm text-gray-800">Chief Operations Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="w-64 text-center">
              <img
                src="/images/team/D6.jpg"
                alt="Team member 3"
                className="rounded-full w-32 h-32 mx-auto shadow-md"
              />
              <h3 className="mt-4 font-bold">Alice Johnson</h3>
              <p className="text-sm text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className=" text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="mb-4">
            Be a part of our growing community of chess and pool enthusiasts.
          </p>
          <Link
            to="/signup"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-bold transition duration-300 hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
