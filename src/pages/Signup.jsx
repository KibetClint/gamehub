// src/pages/Signup.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  // Basic validation
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'You must accept the terms and conditions';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Perform your signup API call here
    console.log('Signing up user:', formData);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-24 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/signup-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold">Sign Up</h1>
          <p className="mt-2 text-xl">Create your account and join our community</p>
        </div>
      </section>

      {/* Signup Form */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold">
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
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">
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
              {errors.email && (
                <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Phone Field (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-semibold">
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
              <label htmlFor="password" className="block text-gray-700 font-semibold">
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
              {errors.password && (
                <p className="mt-1 text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">
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

            {/* Terms & Conditions */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`mr-2 ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'}`}
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

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
