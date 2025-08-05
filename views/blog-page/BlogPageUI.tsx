'use client';

import { useState } from 'react';
import {
  Search,
  Calendar,
  User,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ExternalLink,
} from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  titleBengali?: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Eid-ul-Fitr 2024 Celebration',
    titleBengali: 'পবিত্র ঈদ-উল ফিতর ২০২৪',
    excerpt:
      'Celebrating the joyous occasion of Eid-ul-Fitr with our community and sharing the spirit of togetherness and gratitude.',
    date: 'April 29, 2024',
    author: 'Imam Monir',
    image: '/placeholder.svg?height=300&width=400',
    category: 'Culture',
    readTime: '3 min read',
  },
  {
    id: 2,
    title: 'International May Day 2024',
    titleBengali: 'মহান শ্রমিকদের দিবস ২০২ৄ',
    excerpt:
      'Honoring the contributions of workers worldwide and celebrating their dedication to building a better society.',
    date: 'May 1, 2024',
    author: 'Md Imam Hasan',
    image: '/placeholder.svg?height=300&width=400',
    category: 'Social',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'We want to be your Graphic Design Socket',
    excerpt:
      'Elevate your brand with captivating designs! We are your go-to graphic design partner for all creative solutions.',
    date: 'May 10, 2024',
    author: 'Design Team',
    image: '/placeholder.svg?height=300&width=400',
    category: 'Design',
    readTime: '5 min read',
  },
  {
    id: 4,
    title: "Mother's Day 2024",
    titleBengali: 'মা দিবস ২০২ৄ',
    excerpt:
      'Celebrating the unconditional love and sacrifices of mothers around the world on this special day.',
    date: 'May 15, 2024',
    author: 'Content Team',
    image: '/placeholder.svg?height=300&width=400',
    category: 'Family',
    readTime: '2 min read',
  },
];

import React from 'react';

const BlogPageUI = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Culture', 'Social', 'Design', 'Family', 'Technology'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#fdfdfb]">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy to-primary text-white py-16">
        <div className="_container text-center">
          <h1 className="text-5xl font-bold mb-4 mt-10">
            BANGLABRIZ <span className="text-secondary">BLOG</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Turning Visions Into Reality - Insights, stories, and updates from our journey
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="_container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-5">
          {/* Blog Content - Left/Center */}
          <div className="lg:col-span-2">
            {/* Search and Filter */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-white text-body border border-gray-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>

                      {post.titleBengali && (
                        <h3 className="text-lg font-semibold text-gray-700 mb-3">
                          {post.titleBengali}
                        </h3>
                      )}

                      <p className="text-body text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <User className="w-4 h-4 mr-1" />
                          <span>{post.author}</span>
                        </div>

                        <button className="text-primary hover:text-navy font-medium text-sm flex items-center gap-1 group">
                          Read More
                          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-primary hover:bg-navy text-white px-8 py-3 rounded-full font-medium transition-colors">
                Load More Posts
              </button>
            </div>
          </div>

          {/* Sidebar - Right */}
          <div className="lg:sticky lg:top-20 h-fit">
            {/* Author Profile */}
            <div className="bg-white rounded-xl shadow-sm p-6 text-center mb-8">
              <img
                src="https://banglabriz.com/wp-content/uploads/2024/08/IMG_0585-copy-scaled.jpg"
                alt="Md Imam Hasan Chowdhury"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/10"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Md Imam Hasan Chowdhury</h3>
              <p className="text-secondary font-medium mb-4">CEO & Founder</p>

              <p className="text-sm text-body leading-relaxed mb-6">
                As a seasoned professional, I leverage robust management skills honed through
                diverse roles. With a bachelor's degree from Malaysia, I've excelled in leadership
                positions, notably as Managing Partner at BanglaBriz.
              </p>

              <div className="border-t pt-4">
                <p className="text-xs text-gray-500 mb-3">FOLLOW US ON</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href="#"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                  >
                    <span className="w-4 h-4 flex items-center justify-center text-xs font-bold">
                      G+
                    </span>
                  </a>
                  <a
                    href="#"
                    className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-blue-700 hover:bg-blue-800 text-white p-2 rounded-full transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <img
                      src={post.image || '/placeholder.svg'}
                      alt={post.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary to-navy text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="!text-blue-100 text-sm mb-4">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50 bg-white"
                />
                <button className="w-full bg-secondary hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageUI;
