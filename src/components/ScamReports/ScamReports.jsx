import React from 'react';
import { demoReports } from '../../data';
import Counter from './Counter';

function ScamReports() {
  return (
    <div className="bg-gray-100 py-10">
     <Counter/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Scam Reports</h1>
        <ul className="space-y-6">
          {demoReports.map((report) => (
            <li key={report.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{report.title}</h2>
              <p className="text-gray-700 mb-4">{report.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  report.status === 'Resolved' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {report.status}
                </span>
                <div>
                  <p>{report.date}</p>
                  <p>{report.location}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScamReports;
