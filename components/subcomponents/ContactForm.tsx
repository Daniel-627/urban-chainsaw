// app/Contact.tsx
import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
