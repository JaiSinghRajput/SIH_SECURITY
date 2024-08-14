import React from 'react';
import ContactInfo from './ContactInfo';

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.7900283352285!2d76.60834071526523!3d27.361736183517923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961a57c16c9b5cf%3A0x80b8b27a1f7e8d4!2sMITRC%2C%20Alwar!5e0!3m2!1sen!2sin!4v1691981534076!5m2!1sen!2sin"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mt-8">
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
          <ContactInfo/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
