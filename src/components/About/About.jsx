import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-800">
        <h1 className="text-4xl mb-5 font-bold">
          CyberShield: Fortifying Your Digital Presence
        </h1>
        <p className="text-xl mb-10">
          Welcome to <strong>CyberShield</strong>, your ultimate destination for robust cybersecurity solutions. Our platform leverages the power of cutting-edge technology to protect your digital assets from emerging threats. With a user-friendly interface built on React, we offer a seamless and responsive experience across all devices.
        </p>

        <h2 className="text-3xl mb-4 font-semibold">
          Key Features
        </h2>

        <ul className="list-disc pl-5 mb-10">
          <li className="mb-2">
            <strong>Real-Time Threat Detection</strong> - Our advanced threat detection system continuously monitors your network for suspicious activities. With real-time alerts, you can take immediate action to safeguard your data.
          </li>
          <li className="mb-2">
            <strong>Comprehensive Security Dashboard</strong> - The <strong>Security Dashboard</strong> React component provides an at-a-glance view of your system’s security status. Easily track threats, review security logs, and manage your protection settings from a single, intuitive interface.
          </li>
          <li className="mb-2">
            <strong>Interactive Security Tools</strong> - Engage with our suite of security tools, including vulnerability scanners, firewall configurations, and encryption services, all built with reusable and modular React components for maximum flexibility.
          </li>
          <li className="mb-2">
            <strong>Customizable Protection Plans</strong> - Tailor your cybersecurity protection with our customizable plans, designed to meet the specific needs of your organization or personal security requirements.
          </li>
        </ul>

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-6">
          About Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At SIH Security, our mission is to raise awareness about cyber threats and scams while providing a platform for victims to report incidents. We are committed to creating a safer digital environment through education, resources, and community support.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Our platform offers users a streamlined way to report cybercrimes and stay informed about the latest threats. By working together, we aim to empower individuals and organizations to protect themselves from online dangers.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Team
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our team consists of dedicated cybersecurity professionals, developers, and support staff who are passionate about online safety. We work tirelessly to provide valuable resources and maintain a user-friendly platform for reporting and addressing cyber threats.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              With a combination of expertise and dedication, we strive to make a positive impact in the fight against cybercrime. Thank you for joining us in our mission to create a safer online community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
