import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Providing online education &<br />
          career consultancy
        </h2>
        <div className="flex justify-center mb-8">
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </div>
        <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
          Apply For Meeting →
        </button>
      </div>
    </section>
  );
};

export default CTASection;
