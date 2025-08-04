import React from 'react'

const EventGallery = () => {
      const eventImages = [
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="text-[var(--body-color)] mb-2">Our Activities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Explore recent events
            </h2>
            <a
              href="#"
              className="text-secondary hover:text-secondary-light font-medium flex items-center"
            >
              More on Our Facebook →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {eventImages.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <img
                  src={image}
                  alt={`Event ${index + 1}`}
                  className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default EventGallery