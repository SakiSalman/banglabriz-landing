import { ArrowRight, CheckCircle, Globe } from 'lucide-react'
import React from 'react'

const CareerSection = () => {
  return (
      <section className="py-20 bg-gray-900/10 text-white">
        <div className="_container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Global career opportunities"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Globe overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-quaternary/20 to-transparent rounded-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 rounded-full bg-quaternary/90 flex items-center justify-center backdrop-blur-sm">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-secondary">
                Start your career
                <br />
                <span className="text-quaternary">anywhere in the world</span>
              </h2>
              <p className="text-base text-gray-light leading-relaxed mb-8">
                Our premier matching infrastructure and international partnerships enable us to
                connect top global companies with workers based on their preferences. We provide
                comprehensive support to help you achieve your career goals in any country you
                choose.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-quaternary mr-3" />
                  <span className="text-text">
                    Global network of partner companies
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-quaternary mr-3" />
                  <span className="text-text">Personalized career matching</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-quaternary mr-3" />
                  <span className="text-text">End-to-end relocation support</span>
                </div>
              </div>
              <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Explore Opportunities
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CareerSection