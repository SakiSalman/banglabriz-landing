import { MotionDiv } from '@/utils/motion.utils';
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="_container">
        <MotionDiv>
          <h2 className="text-4xl md:text-5xl font-bold mb-8  text-center">
            Providing online education &<br />
            career consultancy
          </h2>
        </MotionDiv>
        <MotionDiv delay={0.5} className="flex justify-center mb-8">
          <div className="flex space-x-3">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
        </MotionDiv>
        <MotionDiv delay={0.8} className="flex items-center justify-center">
          <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto">
            Apply For Meeting →
          </button>
        </MotionDiv>
      </div>
    </section>
  );
};

export default CTASection;
