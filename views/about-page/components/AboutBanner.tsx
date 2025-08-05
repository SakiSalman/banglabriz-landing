import React from 'react';

const AboutBanner = () => {
  return (
   <section className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-400 text-white py-20">
  <div className="_container">
    <div className="text-center mt-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">How We Work</h1>
      <p className="text-base md:text-lg mb-8 mx-auto !text-gray-100 max-w-2xl">
        Our systematic approach to career development and education consultancy ensures your
        success every step of the way.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200">
          Start Your Journey
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-medium transition-all duration-200">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>


  );
};

export default AboutBanner;
