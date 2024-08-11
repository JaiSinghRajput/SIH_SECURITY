import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="container max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Subject</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter subject"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border rounded-lg"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="container max-w-4xl mx-auto p-8 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Find Us Here</h3>
          <div className="flex justify-between items-center">
            <iframe
              className="w-full h-64 rounded-lg"
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d144.95373631568037!3d-37.81720997975133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43a5f679b7%3A0x8db3b6f83987fcbf!2sEnvato!5e0!3m2!1sen!2sin!4v1574640137116!5m2!1sen!2sin"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
