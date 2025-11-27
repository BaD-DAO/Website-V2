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
    <div className="min-h-screen bg-black">
      <section className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">DAO Talent Pool</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">Connect with Africa's top tech professionals across multiple disciplines</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">1,250+</div>
              <div className="text-lg text-white/70">Professionals</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">15</div>
              <div className="text-lg text-white/70">Countries</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-lg text-white/70">Skills</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">92%</div>
              <div className="text-lg text-white/70">Match Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-6 py-3 font-medium transition-all duration-200 rounded-md ${selectedCategory === category.id ? 'button-primary' : 'button-secondary'}`}>
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTalents.map((talent) => (
              <div key={talent.id} className="card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold">{talent.name}</h3>
                    <p className="text-lg mt-2 text-white/70">{talent.role}</p>
                    <p className="text-sm mt-1 text-white/50">{talent.country}</p>
                  </div>
                  <span className="badge">
                    {talent.available ? 'Available' : 'Busy'}
                  </span>
                </div>

                <div className="mb-6">
                  <p className="text-sm mb-3 text-white/70">Experience: {talent.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {talent.skills.map((skill, index) => (
                      <span key={index} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full button-primary py-3">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Hiring? Find Your Perfect Match</h2>
          <p className="text-xl mb-10">Access vetted professionals across cybersecurity, development, design, marketing, and more</p>
          <button className="button-primary px-10 py-4 text-lg">
            Browse Talent
          </button>
        </div>
      </section>
    </div>
  );
}
