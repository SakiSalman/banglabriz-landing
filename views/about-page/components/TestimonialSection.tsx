import { MotionDiv } from '@/utils/motion.utils'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const TestimonialSection = () => {
  return (
        <section className="py-20 bg-gradient-to-r from-primary to-[var(--primary-color-light)] text-white">
          <div className="_container">
            <MotionDiv className="text-center">
              <blockquote className="text-2xl md:text-3xl font-light italic mb-8 max-w-4xl mx-auto">
                "We specialize in connecting skilled workers with reputable companies, demonstrating our ability to adapt and respond to evolving needs."
              </blockquote>
              <div className="flex justify-center">
                <button className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </MotionDiv>
          </div>
        </section>
  )
}

export default TestimonialSection