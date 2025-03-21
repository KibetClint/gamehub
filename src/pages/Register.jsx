// src/pages/Register.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const sampleTournaments = [
  '',
  'Summer Chess Open',
  'Pool Championship 2025',
  'Autumn Battle Royale',
];

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    tournament: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  // Basic form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.tournament) newErrors.tournament = 'Please select a tournament';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    // Clear error when user starts typing or toggles checkbox
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    // Submit your data here (e.g., API call)
    console.log('Registering user:', formData);
    // On success, navigate or display a success message
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-teal-700">
      {/* Hero Section */}
      <section
        className="relative h-34 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/P4/jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold">Register for a Tournament</h1>
          <p className="mt-2 text-xl">Join our community of pool and chess enthusiasts</p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-green-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Join our Community</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="text-start block text-gray-700 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-start block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="text-start block text-gray-700 font-semibold">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="text-start block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="text-start block text-gray-700 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Tournament Dropdown */}
            <div>
              <label htmlFor="tournament" className="text-start block text-gray-700 font-semibold">
                Select Tournament
              </label>
              <select
                id="tournament"
                name="tournament"
                value={formData.tournament}
                onChange={handleChange}
                className={`mt-1 w-full bg-green-800 p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.tournament ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                {sampleTournaments.map((option, index) => (
                  <option key={index} value={option}>
                    {option === '' ? 'Choose a tournament' : option}
                  </option>
                ))}
              </select>
              {errors.tournament && (
                <p className="mt-1 text-red-500 text-sm">{errors.tournament}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`mr-2 ${
                  errors.termsAccepted ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <label htmlFor="termsAccepted" className="text-gray-700 font-semibold">
                I agree to the{' '}
                <a href="/terms" className="text-blue-500 hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            {errors.termsAccepted && (
              <p className="mt-1 text-red-500 text-sm">{errors.termsAccepted}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="mt-6 text-center text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
