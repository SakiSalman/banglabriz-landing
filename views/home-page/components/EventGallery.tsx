import { MotionDiv } from '@/utils/motion.utils';
import Link from 'next/link';
import React from 'react'

const EventGallery = () => {

  return (
   <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-sm text-secondary font-semibold tracking-wide uppercase">Our Blogs</h2>
      <h1 className="text-4xl font-extrabold text-gray-900">Explore Recent Blogs</h1>
      <p className="mt-2 text-md text-gray-500">
        Stay informed with our latest articles and news updates
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Blog Card 1 */}
      <MotionDiv className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 1" className="w-full h-52 object-cover" />
        <div className="p-6">
          <p className="text-sm text-secondary font-medium">August 5, 2025</p>
          <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">The Future of Student Visas</h3>
          <p className="text-sm text-gray-600 mb-4">Discover how new policies are shaping global education pathways...</p>
          <Link href="/blog/future-of-student-visas" className="text-primary hover:underline font-medium">
            Read More →
          </Link>
        </div>
      </MotionDiv>

      {/* Blog Card 2 */}
      <MotionDiv className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" className="w-full h-52 object-cover" />
        <div className="p-6">
          <p className="text-sm text-secondary font-medium">July 28, 2025</p>
          <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">Career Trends in 2025</h3>
          <p className="text-sm text-gray-600 mb-4">Explore the emerging job sectors and how to prepare for them today...</p>
          <Link href="/blog/career-trends-2025" className="text-primary hover:underline font-medium">
            Read More →
          </Link>
        </div>
      </MotionDiv>

      {/* Blog Card 3 */}
      <MotionDiv className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-52 object-cover" />
        <div className="p-6">
          <p className="text-sm text-secondary font-medium">July 15, 2025</p>
          <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">Work Abroad Tips</h3>
          <p className="text-sm text-gray-600 mb-4">From documentation to culture – here’s your complete guide to working overseas...</p>
          <Link href="/blog/work-abroad-tips" className="text-primary hover:underline font-medium">
            Read More →
          </Link>
        </div>
      </MotionDiv>
    </div>

    <MotionDiv className="text-center mt-10">
      <Link
        href="/blog"
        className="inline-block bg-secondary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-secondary-light transition"
      >
        View All Blogs
      </Link>
    </MotionDiv>
  </div>
</section>

  )
}

export default EventGallery