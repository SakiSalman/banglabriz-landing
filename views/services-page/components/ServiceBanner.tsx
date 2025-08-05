import React from 'react'

const ServiceBanner = () => {
  return (
       <section className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-400 text-white py-20">
        <div className="_container">
          <div className="text-center mt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Explore Our Services
            </h1>
            <p className="text-lg text-text md:max-w-4xl mx-auto leading-relaxed">
              We offer comprehensive support including application assistance for university and
              college admissions, guidance on selecting or changing courses, and support for student
              visas. We provide recognition of prior learning (RPL) and skills assessments, as well
              as coaching for language tests like PTE, NAATI, and IELTS. Our services extend to high
              school program assistance, arrival support such as housing and employment, and
              comprehensive migration consulting. We also offer various training courses including
              HACCP, workplace safety, general worker training, and hospitality operations.
              Additionally, we provide programs focused on sustainable tourism development.
            </p>
          </div>
        </div>
      </section>
  )
}

export default ServiceBanner