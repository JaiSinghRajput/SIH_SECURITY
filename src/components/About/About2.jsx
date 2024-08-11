import React from 'react';
import videoFile from "../../assets/video.mp4"

function About2() {
  return (
    <section id="about" className="relative w-full bg-gray-100">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }}></div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900  mb-8">
          Welcome to CyberShield
        </h1>
        <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
          At CyberShield, we are dedicated to fortifying your digital presence with state-of-the-art cybersecurity solutions. Our mission is to protect you from cyber threats through innovative technology and expert knowledge. Dive into our platform to discover how we can safeguard your digital assets and ensure your online safety.
        </p>
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgn_YA_O5CFBlumb2qP-rHWxOfyzJrqZiUgw&s" alt="CyberShield Features" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 dark:text-white ">Our Key Features</h2>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                <li className="mb-3"><strong>Advanced Threat Intelligence:</strong> Stay ahead of cyber threats with our real-time threat analysis and alerts.</li>
                <li className="mb-3"><strong>Customizable Security Solutions:</strong> Tailor your protection to fit your specific needs with our flexible plans.</li>
                <li className="mb-3"><strong>Comprehensive Monitoring:</strong> Monitor and manage your security settings from our intuitive dashboard.</li>
                <li className="mb-3"><strong>Expert Support:</strong> Get assistance from our team of cybersecurity experts whenever you need it.</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <video 
                className="w-full h-64 object-cover" 
                src={videoFile} 
                autoPlay
                muted
                title="CyberShield Introduction Video" 
                frameBorder="0" 
                allowFullScreen>
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <span className="text-white text-lg font-semibold">Watch our introduction video</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">About Our Platform</h2>
              <p className="text-gray-700 dark:text-gray-300">
                CyberShield is designed to be your trusted ally in the fight against cyber threats. Our platform offers a suite of tools and resources to help you protect your online presence. Whether you are an individual or an organization, we provide the technology and support you need to stay secure.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                Explore our services, engage with our community, and leverage our expertise to enhance your cybersecurity posture. Join us in making the digital world a safer place for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About2
