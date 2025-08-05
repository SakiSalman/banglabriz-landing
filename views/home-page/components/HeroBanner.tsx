import Image from 'next/image';
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative min-h-[75dvh] md:min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-bg.jpg"
          alt="Professional consultation"
          className="w-full h-full object-cover"
          width={385}
          height={200}
        />
        <div className="absolute inset-0 bg-black/50 animate-overlay-slide"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 md:max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div>
          <button className="bg-secondary-light/10 border border-secondary px-10 py-1 rounded-full text-white">
            BanglaBriz
          </button>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Loyalty is our
          <span className="text-secondary-light">commitment</span>
        </h1>
        <p className="text-lg !text-white mb-8 max-w-2xl mx-auto">
          Building lasting relationships through dedicated career development and education
          consultancy services.
        </p>
        <div className=" flex items-center justify-center gap-3">
          <button className="bg-secondary hover:bg-secondary-light text-white px-14 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Apply
          </button>
          <button className="bg-primary hover:bg-primary-light text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Quote →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
