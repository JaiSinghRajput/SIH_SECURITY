import React, { useState, useEffect } from 'react';
import { trendingScams } from '../../data'; // Adjust the path as necessary
import { FaExclamationTriangle } from 'react-icons/fa';

const TrendingScams = () => {
  const [scams, setScams] = useState([]);

  useEffect(() => {
    setScams(trendingScams);
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Trending Scams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scams.map((scam) => (
          <div
            key={scam.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-2">
              <FaExclamationTriangle className="text-red-500 text-2xl mr-2" />
              <h3 className="text-xl font-semibold text-gray-800">{scam.title}</h3>
            </div>
            <p className="text-gray-600 mb-3">{scam.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Reports: {scam.reportCount}</span>
              <span className="text-sm text-gray-500">Date: {scam.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingScams;