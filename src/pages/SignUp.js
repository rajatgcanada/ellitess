// src/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import MainNav from '../navBar/mainNav';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Sign up successful!");
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <MainNav />
      <div className="flex justify-center items-center pt-10">
        <div className="bg-white shadow-md rounded-2xl w-full max-w-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create your Buy & Sell account</h2>
          {message && (
            <div className={`mb-4 p-3 rounded ${message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {message}
            </div>
          )}
          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
