import { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Here you would typically call an API to send the reset link
    console.log('Sending password reset link to:', email);

    // Clear any previous errors
    setErrors({});
    // Show a success message
    setSuccessMessage(
      'A password reset link has been sent to your email address. Please check your inbox.'
    );
    // Optionally, clear the email field
    setEmail('');
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-gray-500"
      style={{
        backgroundImage: 'url(/src/assets/images/pool.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-cyan-700 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">Reset Password</h1>
          <p className="mt-2 text-xl">
            Enter your email below and we will send you a link to reset your password.
          </p>

          {successMessage && (
            <div className="mt-4 bg-green-100 text-green-700 p-3 rounded">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="text-start block text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((prev) => ({ ...prev, email: '' }));
                }}
                placeholder="you@example.com"
                className={`mt-1 w-full p-2 border rounded focus:outline-none focus:border-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center text-gray-600">
            <Link to="/login" className="text-blue-500 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
