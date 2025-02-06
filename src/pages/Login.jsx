/* eslint-disable react/no-unescaped-entities */
// src/pages/Login.jsx
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length !== 0) {
      setErrors(validationErrors);
      return;
    }
    // Perform login API call here
    console.log('Logging in user:', formData);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-24 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/login-hero.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl font-bold">Login</h1>
          <p className="mt-2 text-xl">Welcome back! Please log in to continue.</p>
        </div>
      </section>

      {/* Login Form */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
            <p className="mt-2 text-gray-600">
              <Link to="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
