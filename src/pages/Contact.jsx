import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 text-gray-800 dark:text-gray-200">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-green-600 dark:text-green-400 mb-6">
          Contact Us 🌿
        </h1>
        <p className="text-center text-lg mb-10">
          Have any questions or want to know more about our plants?  
          We’d love to hear from you! Fill out the form or reach us directly.
        </p>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
              <p>Green Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
              <p>+880 1234-567890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
              <p>support@plantstore.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg shadow-md hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
