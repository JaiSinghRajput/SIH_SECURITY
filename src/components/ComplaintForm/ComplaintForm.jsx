import React, { useState } from 'react';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    crimeCategory: '',
    description: '',
    additionalInfo: '',
    place: '',
    date: '',
    time: '',
    proofFile: null,  // New state for file upload
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, proofFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);

    // To upload the file, you would typically use a service like AWS S3, Firebase, etc.
    if (formData.proofFile) {
      console.log('Uploaded file:', formData.proofFile);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register a Cyber Crime Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              placeholder="Enter your full name"
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              placeholder="Enter your email"
              required 
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              placeholder="Enter your phone number"
              required 
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              placeholder="Enter your address"
              required 
            />
          </div>
        </div>

        {/* Crime Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="crimeCategory" className="block text-sm font-medium text-gray-700">Crime Category</label>
            <select 
              name="crimeCategory" 
              value={formData.crimeCategory} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              required
            >
              <option value="" disabled>Select Category</option>
<option value="phishing">Phishing</option>
<option value="identityTheft">Identity Theft</option>
<option value="hacking">Hacking</option>
<option value="fraud">Fraud</option>
<option value="cyberbullying">Cyberbullying</option>
<option value="cyberstalking">Cyberstalking</option>
<option value="ransomware">Ransomware</option>
<option value="dataBreach">Data Breach</option>
<option value="malware">Malware</option>
<option value="denialOfService">Denial of Service (DoS)</option>
<option value="onlineHarassment">Online Harassment</option>
<option value="socialEngineering">Social Engineering</option>
<option value="cryptojacking">Cryptojacking</option>
<option value="onlineScams">Online Scams</option>
<option value="financialFraud">Financial Fraud</option>
<option value="intellectualPropertyTheft">Intellectual Property Theft</option>
<option value="softwarePiracy">Software Piracy</option>
<option value="cyberEspionage">Cyber Espionage</option>
<option value="cyberTerrorism">Cyber Terrorism</option>
<option value="childExploitation">Child Exploitation</option>
<option value="onlineImpersonation">Online Impersonation</option>
<option value="sextortion">Sextortion</option>
<option value="revengePorn">Revenge Porn</option>
<option value="cyberExtortion">Cyber Extortion</option>
<option value="spamming">Spamming</option>
<option value="spoofing">Spoofing</option>
<option value="cyberVandalism">Cyber Vandalism</option>
<option value="internetFraud">Internet Fraud</option>
<option value="illegalOnlineContent">Illegal Online Content</option>
<option value="unauthorizedAccess">Unauthorized Access</option>
<option value="onlineSurveillance">Online Surveillance</option>
<option value="fakeNews">Fake News</option>
            </select>
          </div>

          <div>
            <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
            <input 
              type="text" 
              name="place" 
              value={formData.place} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              placeholder="Enter the place of incident"
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              required 
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
              required 
            />
          </div>
        </div>

        {/* Description and Additional Information */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Brief Description</label>
          <textarea 
            name="description" 
            value={formData.description} 
            onChange={handleChange} 
            rows="4" 
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
            placeholder="Describe the incident"
            required 
          ></textarea>
        </div>

        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea 
            name="additionalInfo" 
            value={formData.additionalInfo} 
            onChange={handleChange} 
            rows="4" 
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5" 
            placeholder="Any additional information"
          ></textarea>
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="proofFile" className="block text-sm font-medium text-gray-700">Upload Proof Document</label>
          <input 
            type="file" 
            name="proofFile" 
            onChange={handleFileChange} 
            className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5"
            accept=".docx, .pdf, .jpg, .png" 
          />
          <p className="text-sm text-gray-500 mt-2">Accepted file types: DOCX, PDF, JPG, PNG.</p>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Complaint
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComplaintForm;
