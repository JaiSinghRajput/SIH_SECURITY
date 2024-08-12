// src/components/StorySubmissionForm.js
import React, { useState } from "react";

const StorySubmissionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    story: "",
    scamType: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      author: "",
      story: "",
      scamType: "",
      date: "",
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid lg:grid-cols-3 gap-8">
      {/* Left Image for large screens */}
      <div className="hidden lg:block">
        <img
          src="https://www.pdsplanning.com/wp-content/uploads/2021/10/2021-10-26-Preventing-Fraud-Graphic.png"
          alt="Left Side Decoration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Form in the center */}
      <form
        onSubmit={handleSubmit}
        className="lg:col-span-1 bg-white p-8 rounded-lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Submit Your Story
        </h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter the title of your story"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Name (Optional)
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name (optional)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Story</label>
          <textarea
            name="story"
            value={formData.story}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="6"
            placeholder="Describe your experience in detail"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Type of Scam
          </label>
          <input
            type="text"
            name="scamType"
            value={formData.scamType}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Phishing, Credit Card Fraud, etc."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Occurrence
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit Story
        </button>
      </form>

      {/* Right Image for large screens */}
      <div className="hidden lg:block">
        <img
          src="https://blogs.blackberry.com/content/dam/blogs-blackberry-com/images/blogs/2023/10/natl-cybersec-fbi-graphic.png"
          alt="Right Side Decoration"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default StorySubmissionForm;
