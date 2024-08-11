import React from 'react';
import { experts } from '../../data.js';

function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-screen-xl mx-auto mt-8">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Cybersecurity Experts Contact Information</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {experts.map((expert, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-900">{expert.name}</h3>
          <p className="text-gray-700">{expert.designation}</p>
          <p className="text-gray-600">Email: <a href={`mailto:${expert.email}`} className="text-blue-700">{expert.email}</a></p>
          <p className="text-gray-600">Phone: {expert.phone}</p>
          <p className="text-gray-600">Location: {expert.location}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ContactInfo;
