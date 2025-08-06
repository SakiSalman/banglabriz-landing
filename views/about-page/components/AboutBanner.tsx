import { MotionDiv } from '@/utils/motion.utils';
import React from 'react';

const AboutBanner = () => {
  return (
   <section className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-400 text-white py-20">
  <div className="_container">
    <div className="text-center mt-10">
     <MotionDiv className='text-center'>
       <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">How We Work</h1>
     </MotionDiv>
     <MotionDiv>
       <p className="text-base md:text-lg mb-8 mx-auto !text-gray-100 max-w-2xl text-center">
        Our systematic approach to career development and education consultancy ensures your
        success every step of the way.
      </p>
     </MotionDiv>
    </div>
  </div>
</section>


  );
};

export default AboutBanner;
