import React from 'react';
import constructionImg from '../../assets/CONSTRUCTION.jpeg'

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-6">UNDER CONSTRUCTION</h1>
      
      <img
        src={constructionImg}
        alt="Under Construction"
        className="mb-6"
      />
      
      <p className="text-center text-gray-700 mb-4">
        Our website is under construction, but we are ready to go! Special surprise for our subscribers only.
      </p>

      <div className="flex items-center mb-6">
        <input
          type="email"
          placeholder="Enter a valid email address"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button className="bg-black text-white p-2 rounded-r-md hover:bg-gray-800">
          NOTIFY ME
        </button>
      </div>
      
      <p className="text-center text-sm text-gray-500">
         get In touch to early notification of our launch date!
      </p>
    </div>
  );
};

export default UnderConstruction;
