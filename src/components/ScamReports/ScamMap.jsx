import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {scamData} from '../../data'; // Import your data from a separate file

const ScamMap = () => {
  const categoryColors = {
    red: 'Red Alert Area',
    yellow: 'Warning Area',
    blue: 'Caution Area',
    green: 'Safe Area',
  };

  const categoryCounts = {
    red: 0,
    yellow: 0,
    blue: 0,
    green: 0,
  };

  scamData.forEach((location) => {
    categoryCounts[location.category]++;
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-3/4 w-full h-2/3 md:h-full">
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {scamData.map((location, index) => (
            <CircleMarker
              key={index}
              center={[location.lat, location.lng]}
              radius={10} // Increased size for better visibility
              fillColor={location.category}
              color={location.category}
              fillOpacity={0.8} // Increased opacity for better visibility
              stroke={false} // Removes the stroke around the dots
            >
              <Tooltip>{`${location.area}: ${categoryColors[location.category]}`}</Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
      <div className="md:w-1/4 w-full h-1/3 md:h-full p-4 bg-white shadow-lg overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Scam Alert Dashboard</h2>
        <ul>
          {Object.keys(categoryColors).map((category, index) => (
            <li key={index} className="mb-2 flex items-center">
              <span
                className="inline-block w-4 h-4 rounded-full"
                style={{ backgroundColor: category }}
              ></span>
              <span className="ml-2 text-gray-700">
                {categoryColors[category]}: {categoryCounts[category]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScamMap;
