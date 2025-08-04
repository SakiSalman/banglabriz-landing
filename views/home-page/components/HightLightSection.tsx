import React from 'react'

const HightLightSection = () => {
  return (
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-[var(--primary-color-light)] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            We specialize in connecting skilled workers with reputable companies, demonstrating our
            ability to adapt and respond to evolving needs.
          </h2>
        </div>
      </section>
  )
}

export default HightLightSection