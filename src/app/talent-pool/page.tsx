'use client';

import { useState } from 'react';

export default function TalentPool() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Talent', count: 1250 },
    { id: 'developers', name: 'Developers', count: 450 },
    { id: 'designers', name: 'Designers', count: 180 },
    { id: 'cybersecurity', name: 'Cybersecurity', count: 120 },
    { id: 'marketing', name: 'Marketing', count: 200 },
    { id: 'blockchain', name: 'Blockchain', count: 150 },
    { id: 'ai', name: 'AI/ML', count: 150 }
  ];

  const talents = [
    { id: 1, name: 'Abebe Tadesse', role: 'Full Stack Developer', category: 'developers', country: 'Ethiopia', skills: ['React', 'Node.js', 'Solidity', 'Web3'], experience: '5 years', available: true },
    { id: 2, name: 'Amara Okafor', role: 'UI/UX Designer', category: 'designers', country: 'Nigeria', skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'], experience: '4 years', available: true },
    { id: 3, name: 'Kwame Mensah', role: 'Cybersecurity Expert', category: 'cybersecurity', country: 'Ghana', skills: ['Penetration Testing', 'Security Audits', 'Blockchain Security'], experience: '7 years', available: false }
  ];

  const filteredTalents = selectedCategory === 'all' ? talents : talents.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black pt-24">
      <section className="bg-black text-white py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">DAO Talent Pool</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">Connect with Africa's top tech professionals across multiple disciplines</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold mb-2">1,250+</div>
              <div className="text-lg">Professionals</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold mb-2">15</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-lg">Skills</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold mb-2">92%</div>
              <div className="text-lg">Match Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 font-bold transition-all duration-300 rounded-lg ${selectedCategory === category.id ? 'bg-white text-black' : 'glass text-white hover:bg-white/10'}`}>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredTalents.map((talent) => (
              <div key={talent.id} className="glass-card glass-hover p-8 rounded-lg group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">{talent.name}</h3>
                    <p className="text-lg mt-2">{talent.role}</p>
                    <p className="text-sm mt-1">{talent.country}</p>
                  </div>
                  <span className={`px-4 py-1 text-sm font-bold glass rounded-lg`}>
                    {talent.available ? 'Available' : 'Busy'}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm mb-3">Experience: {talent.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, index) => (
                      <span key={index} className="glass px-3 py-1 text-xs font-bold rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-white text-black py-3 font-bold hover:bg-white/90 transition-all duration-300 rounded-lg">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Hiring? Find Your Perfect Match</h2>
          <p className="text-xl mb-10">Access vetted professionals across cybersecurity, development, design, marketing, and more</p>
          <button className="bg-white text-black px-10 py-4 font-bold hover:bg-white/90 transition-all duration-300 text-lg rounded-lg">
            Browse Talent
          </button>
        </div>
      </section>
    </div>
  );
}
