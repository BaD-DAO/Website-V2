'use client';

import { useState } from 'react';

export default function TalentPool() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Talent', icon: '👥', count: 1250 },
    { id: 'developers', name: 'Developers', icon: '💻', count: 450 },
    { id: 'designers', name: 'Designers', icon: '🎨', count: 180 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒', count: 120 },
    { id: 'marketing', name: 'Marketing', icon: '📢', count: 200 },
    { id: 'blockchain', name: 'Blockchain', icon: '⛓️', count: 150 },
    { id: 'ai', name: 'AI/ML', icon: '🤖', count: 150 }
  ];

  const talents = [
    {
      id: 1,
      name: 'Abebe Tadesse',
      role: 'Full Stack Developer',
      category: 'developers',
      country: 'Ethiopia',
      skills: ['React', 'Node.js', 'Solidity', 'Web3'],
      experience: '5 years',
      available: true
    },
    {
      id: 2,
      name: 'Amara Okafor',
      role: 'UI/UX Designer',
      category: 'designers',
      country: 'Nigeria',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      experience: '4 years',
      available: true
    },
    {
      id: 3,
      name: 'Kwame Mensah',
      role: 'Cybersecurity Expert',
      category: 'cybersecurity',
      country: 'Ghana',
      skills: ['Penetration Testing', 'Security Audits', 'Blockchain Security'],
      experience: '7 years',
      available: false
    }
  ];

  const filteredTalents = selectedCategory === 'all' 
    ? talents 
    : talents.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">DAO Talent Pool</h1>
          <p className="text-xl text-green-100">
            Connect with Africa's top tech professionals across multiple disciplines
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">1,250+</div>
              <div className="text-gray-600">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Skills</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">92%</div>
              <div className="text-gray-600">Match Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTalents.map((talent) => (
              <div key={talent.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{talent.name}</h3>
                    <p className="text-gray-600">{talent.role}</p>
                    <p className="text-sm text-gray-500">{talent.country}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    talent.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {talent.available ? 'Available' : 'Busy'}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Experience: {talent.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Load More Talent
            </button>
          </div>
        </div>
      </section>

      {/* For Talent */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Talent Pool</h2>
            <p className="text-xl text-gray-600">
              Get discovered by leading startups and organizations across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-gray-600">Connect with opportunities that fit your skills</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Portfolio</h3>
              <p className="text-gray-600">Showcase your work and achievements</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Grow Career</h3>
              <p className="text-gray-600">Access training and mentorship opportunities</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
              Join Talent Pool
            </button>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Hiring? Find Your Perfect Match</h2>
          <p className="text-xl mb-8">
            Access vetted professionals across cybersecurity, development, design, marketing, and more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              Post a Job
            </button>
            <button className="bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Browse Talent
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
