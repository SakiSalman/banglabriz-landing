'use client';

import InputField from '@/components/inputs/InputFIeld';
import SelectField from '@/components/inputs/SelectField';
import { MotionDiv } from '@/utils/motion.utils';
import { CreditCard, FileText, MapPin, Upload, User } from 'lucide-react';
import React from 'react';

const ContactPageUI = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-400 text-white py-20">
        <MotionDiv className="_container text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#0a3255] mb-4 mt-10">Contact</h1>
          <p className="max-w-2xl mx-auto text-[#475467] text-base md:text-lg leading-relaxed">
            Celebrating the success of our clients! Here are a few of the many individuals who have
            achieved their dreams with our expert guidance and support. From securing student visas
            to obtaining work permits, our dedicated team has helped numerous clients embark on
            their journeys abroad.
          </p>
        </MotionDiv>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 pb-16">
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <MotionDiv className="bg-gradient-to-r from-primary to-primary-light p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Contact Form</h2>
                <p className="!text-blue-100">
                  Please fill out all required information to complete your application
                </p>
              </MotionDiv>

              <form className="p-8">
                <MotionDiv className="grid grid-cols-1 gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                      label="First Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={''}
                      onChange={() => {}}
                      placeholder="Enter your first name"
                    />
                    <InputField
                      label="Last Name"
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={''}
                      onChange={() => {}}
                      placeholder="Enter your last name"
                    />

                    <InputField
                      label="Email Address"
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={''}
                      onChange={() => {}}
                      placeholder="Enter your email"
                    />

                    <InputField
                      label="Phone Number"
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={''}
                      onChange={() => {}}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </MotionDiv>

                {/* Terms and Submit */}
                <MotionDiv className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="bg-secondary hover:bg-secondary-light text-white font-semibold py-4 px-20 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 shadow-lg"
                  >
                    Submit
                  </button>
                </MotionDiv>
              </form>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default ContactPageUI;
