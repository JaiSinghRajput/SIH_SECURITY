// src/components/StoryList.js
import React, { useState } from "react";

const StoryList = ({ stories }) => {
  const [storyData, setStoryData] = useState(stories);
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  const toggleStoryExpansion = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id);
  };

  const handleHelpfulClick = (id) => {
    const updatedStories = storyData.map((story) => {
      if (story.id === id) {
        return { ...story, helpfulCount: story.helpfulCount + 1 };
      }
      return story;
    });
    setStoryData(updatedStories);
  };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">User Stories and Testimonials</h2>
      {storyData.map((story) => (
        <div key={story.id} className="mb-6 pb-6 border-b-2 border-gray-200 last:border-b-0">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl font-semibold text-blue-600">{story.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {story.author ? `By ${story.author}` : "Anonymous"} on{" "}
                {story.date}
              </p>
              <p className="text-sm text-gray-400 mt-1">Scam Type: {story.scamType}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => toggleStoryExpansion(story.id)}
                className="ml-4 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition transform hover:scale-105"
              >
                {expandedStoryId === story.id ? "Hide Story" : "Read Full Story"}
              </button>
            </div>
          </div>
          {expandedStoryId === story.id && (
            <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
              <p className="text-gray-700">{story.story}</p>
              <div className="mt-4 flex items-center">
                <button
                  onClick={() => handleHelpfulClick(story.id)}
                  className="mr-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-105"
                >
                  Found Helpful ({story.helpfulCount})
                </button>
                <button
                  onClick={() => toggleStoryExpansion(story.id)}
                  className="text-indigo-500 hover:text-indigo-600 transition"
                >
                  Hide Story
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StoryList;
