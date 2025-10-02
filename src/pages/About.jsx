import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 text-gray-800 dark:text-gray-200">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          About Our Plant Store 🌱
        </h1>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Little Plant Store</span> – 
          your one-stop destination for fresh, healthy, and vibrant plants.  
          We believe that plants are more than just decorations; they bring 
          positivity, freshness, and life into every space.
        </p>

        {/* Mission Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-300 mb-2">
            🌿 Our Mission
          </h2>
          <p className="text-base leading-relaxed">
            To make every home and workplace greener by providing affordable, 
            sustainable, and beautiful plants. We’re committed to spreading 
            love for nature and encouraging eco-friendly living.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-300 mb-2">
            🌍 Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base">
            <li>Wide variety of indoor & outdoor plants</li>
            <li>High-quality and carefully nurtured plants</li>
            <li>Affordable pricing & seasonal offers</li>
            <li>Eco-friendly packaging</li>
            <li>Expert advice on plant care</li>
          </ul>
        </div>

        {/* Vision Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-green-500 dark:text-green-300 mb-2">
            🌱 Our Vision
          </h2>
          <p className="text-base leading-relaxed">
            We aim to create a greener tomorrow where plants are part of 
            every home, office, and community. A place where nature and 
            modern living thrive together.
          </p>
        </div>

        {/* Closing */}
        <p className="text-center text-lg font-medium mt-8">
          Thank you for being part of our green family 💚
        </p>
      </div>
    </div>
  );
};

export default About;
