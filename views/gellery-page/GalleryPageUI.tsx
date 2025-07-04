'use client';

import { useState } from 'react';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import React from 'react'

const GalleryPageUI = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const visaImages = [
      {
        id: 1,
        src: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 1",
        client: "John Smith",
        country: "Canada"
      },
      {
        id: 2,
        src: "https://images.pexels.com/photos/8919564/pexels-photo-8919564.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 2",
        client: "Maria Garcia",
        country: "Spain"
      },
      {
        id: 3,
        src: "https://images.pexels.com/photos/8919565/pexels-photo-8919565.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 3",
        client: "David Johnson",
        country: "Australia"
      },
      {
        id: 4,
        src: "https://images.pexels.com/photos/8919566/pexels-photo-8919566.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 4",
        client: "Sarah Chen",
        country: "Singapore"
      },
      {
        id: 5,
        src: "https://images.pexels.com/photos/8919567/pexels-photo-8919567.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 5",
        client: "Ahmed Hassan",
        country: "UAE"
      },
      {
        id: 6,
        src: "https://images.pexels.com/photos/8919568/pexels-photo-8919568.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 6",
        client: "Elena Petrov",
        country: "Germany"
      },
      {
        id: 7,
        src: "https://images.pexels.com/photos/8919569/pexels-photo-8919569.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 7",
        client: "Michael Brown",
        country: "UK"
      },
      {
        id: 8,
        src: "https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Visa Document 8",
        client: "Yuki Tanaka",
        country: "Japan"
      }
    ];
  
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0a3255] mb-4">
              Visa
            </h1>
            <p className="max-w-2xl mx-auto text-[#475467] text-base md:text-lg leading-relaxed">
              Celebrating the success of our clients! Here are a few of the many individuals who have achieved their dreams with our expert guidance and support. From securing student visas to obtaining work permits, our dedicated team has helped numerous clients embark on their journeys abroad.
            </p>
          </div>
        </section>
  
        {/* Gallery Grid */}
        <section className="px-4 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto">
            {visaImages.map((visa) => (
              <div key={visa.id} className="group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={visa.src} 
                    alt={visa.alt}
                    className="w-full h-60 object-cover transition-transform duration-300"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="text-sm text-[#cac2c2] font-medium">{visa.client}</p>
                  <p className="text-xs text-[#475467]">{visa.country}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Scroll Indicator */}
          <div className="flex justify-center mt-10">
            <ChevronDownIcon className="w-6 h-6 text-[#cac2c2] animate-bounce" />
          </div>
        </section>
  
      </div>
    );
}

export default GalleryPageUI