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
           <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Mitrc%206th%20mile%20stone%20alwar%20rajasthan%20+(Pro-Coders)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
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
