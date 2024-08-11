import React from 'react';
import { FaCheckCircle, FaHourglassHalf, FaExclamationCircle } from 'react-icons/fa';

function Counter({ total = "10M", pending = "3M", resolved = "7M" }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-12">
          Scam Reports Overview
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4 p-6 bg-red-100 rounded-lg shadow-lg">
            <FaExclamationCircle className="text-red-500 text-6xl" />
            <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900">{total}</dd>
            <dt className="text-lg leading-7 text-gray-600">Total Reports</dt>
            <p className="text-sm text-gray-500">The total number of scam reports received.</p>
          </div>
          <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4 p-6 bg-blue-100 rounded-lg shadow-lg">
            <FaHourglassHalf className="text-blue-500 text-6xl" />
            <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900">{pending}</dd>
            <dt className="text-lg leading-7 text-gray-600">Pending Reports</dt>
            <p className="text-sm text-gray-500">Reports currently under investigation.</p>
          </div>
          <div className="mx-auto flex max-w-xs flex-col items-center gap-y-4 p-6 bg-green-100 rounded-lg shadow-lg">
            <FaCheckCircle className="text-green-500 text-6xl" />
            <dd className="order-first text-5xl font-semibold tracking-tight text-gray-900">{resolved}</dd>
            <dt className="text-lg leading-7 text-gray-600">Resolved Reports</dt>
            <p className="text-sm text-gray-500">Reports that have been successfully resolved.</p>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Counter;
