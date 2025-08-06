import React from 'react';
import { Search, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';

function BlogDetailsPageUI() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mt-20">
          {/* Article Content */}
          <article className="flex-1 lg:max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex text-sm text-gray-500 mb-6">
              <a href="#" className="hover:text-blue-700 transition-colors">Home</a>
              <span className="mx-2">/</span>
              <a href="#" className="hover:text-blue-700 transition-colors">Blogs</a>
              <span className="mx-2">/</span>
              <span className="text-gray-700">Eid-ul-Fitr 2024 Celebration</span>
            </nav>

            {/* Article Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Eid celebration" 
                className="w-full h-64 sm:h-80 object-cover"
              />
              
              <div className="p-8">
                {/* Category and Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Culture</span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    3 min read
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    April 29, 2024
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <User className="w-4 h-4 mr-1" />
                    Imam Monir
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Eid-ul-Fitr 2024 Celebration
                </h1>
                <h2 className="text-xl text-gray-700 mb-6">
                  পবিত্র ঈদ-উল ফিতর ২০২৪
                </h2>

                {/* Share Buttons */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Share:</span>
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Celebrating the joyous occasion of Eid-ul-Fitr with our community and sharing the spirit of 
                    togetherness and gratitude. This blessed festival marks the end of the holy month of Ramadan, 
                    bringing families and friends together in celebration of faith, reflection, and renewal.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The festival of Eid-ul-Fitr is more than just a celebration; it's a time of giving, sharing, 
                    and remembering those less fortunate. Communities come together to perform the special Eid 
                    prayer, exchange gifts, and share festive meals that strengthen bonds and create lasting memories.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Celebrations</h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Traditional Eid celebrations involve wearing new clothes, preparing special dishes, and 
                    visiting family and friends. The day begins with the special Eid prayer at the mosque, 
                    followed by embracing loved ones and sharing the traditional greeting of "Eid Mubarak."
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Food plays a central role in the celebration, with families preparing elaborate feasts 
                    that include traditional sweets like baklava, dates, and various regional delicacies. 
                    The act of sharing food with neighbors and the less fortunate embodies the spirit of 
                    generosity that defines this holy occasion.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Impact</h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Eid-ul-Fitr serves as a powerful reminder of our collective responsibility to care for 
                    one another. The tradition of giving Zakat al-Fitr ensures that everyone can participate 
                    in the celebration, regardless of their economic circumstances. This act of charity 
                    strengthens community bonds and promotes social harmony.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-8">
                    As we celebrate this blessed occasion, let us remember the values of compassion, 
                    generosity, and unity that Eid-ul-Fitr represents. May this festival bring peace, 
                    joy, and prosperity to all our communities around the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center text-blue-700 hover:text-blue-800 transition-colors cursor-pointer">
                <ChevronLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Previous Post</span>
              </div>
              <div className="flex items-center text-blue-700 hover:text-blue-800 transition-colors cursor-pointer">
                <span className="font-medium">Next Post</span>
                <ChevronRight className="w-5 h-5 ml-2" />
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <article className="group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="International May Day" 
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Social</span>
                    <span className="text-gray-500 text-sm">4 min read</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    International May Day 2024
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Honoring the contributions of workers worldwide and celebrating their dedication...
                  </p>
                </article>

                <article className="group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Technology trends" 
                    className="w-full h-48 object-cover rounded-lg mb-4 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">Technology</span>
                    <span className="text-gray-500 text-sm">6 min read</span>
                  </div>
                  <h4 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                    Digital Innovation in 2024
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Exploring the latest technological advancements shaping our future...
                  </p>
                </article>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80">
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Md Imam Hasan Chowdhury" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Md Imam Hasan Chowdhury</h3>
                <p className="text-gray-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  As a seasoned professional, I leverage robust management skills honed through diverse roles. 
                  With a bachelor's degree from Malaysia, I've excelled in leadership positions, notably as 
                  Managing Partner at BanglaBriz.
                </p>
                <div className="border-t pt-4">
                  <p className="text-gray-700 font-medium mb-3">FOLLOW US ON</p>
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                      <span className="text-xs font-bold">G+</span>
                    </button>
                    <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search blog posts..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                <article className="flex gap-3 group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/7673046/pexels-photo-7673046.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Eid celebration" 
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-sm leading-tight mb-1">
                      Eid-ul-Fitr 2024 Celebration
                    </h4>
                    <p className="text-gray-500 text-xs">April 29, 2024</p>
                  </div>
                </article>

                <article className="flex gap-3 group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="May Day" 
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-sm leading-tight mb-1">
                      International May Day 2024
                    </h4>
                    <p className="text-gray-500 text-xs">May 1, 2024</p>
                  </div>
                </article>

                <article className="flex gap-3 group cursor-pointer">
                  <img 
                    src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=100" 
                    alt="Technology" 
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors text-sm leading-tight mb-1">
                      Digital Innovation Trends
                    </h4>
                    <p className="text-gray-500 text-xs">March 15, 2024</p>
                  </div>
                </article>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default BlogDetailsPageUI;