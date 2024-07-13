'use client'
import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-red-600">Sorry</h1>
        <p className="text-2xl mb-4">Sorry Something went wrong Please Try again Later</p>
        <p className="text-lg">
          Please upgrade to a premium account to access this feature.
        </p>
        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff8a05] text-white rounded-lg shadow-lg hover:from-[#ff8a05] hover:to-[#f9572a] transition duration-300">
          <Link href="/">
          Upgrade Now
          </Link>
          
        </button>
      </div>
    </div>
  );
};

export default Error;
