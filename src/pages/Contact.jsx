// src/pages/Contact.jsx
import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your submission logic here (e.g., API call or email service)
    console.log(formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-34 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/logo.webp)' }}
      >
        <div className="absolute inset-0 bg-teal-500 opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-xl">We’d love to hear from you!</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 px-4 bg-gray-100 flex-1"  style={{ backgroundImage: 'url(/images/P2.jpeg)', 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' }}>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-teal-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-gray-700">
              Whether you have a question, want to discuss a project, or just want to say hello,
              we’d love to hear from you!
            </p>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-blue-500 mr-4" size={24} />
              <span className="text-gray-700">123 Neema Avenue, Nairobi, Kenya</span>
            </div>
            <div className="mb-4 flex items-center">
              <FaPhoneAlt className="text-blue-500 mr-4" size={24} />
              <span className="text-gray-700">+254 707 632 591</span>
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-blue-500 mr-4" size={24} />
              <span className="text-gray-700">gamehub@gmail.com</span>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700" aria-label="Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-red-400 hover:text-blue-700" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700" aria-label="LinkedIn">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-teal-700 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl text-gray-700 font-bold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-gray-700 font-semibold text-left"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=''
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-gray-700 font-semibold text-left"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-gray-700 font-semibold text-left"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-gray-700 font-semibold text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 container mx-auto">
          <h2 className="text-3xl font-bold text-center text-teal-500 mb-4">Our Location</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.085348735027!2d-122.41941568468184!3d37.77492927975981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c55e8b7a7%3A0x1b4f89a0b6d56df!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1597285432354!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
