'use client';

import { useState } from 'react';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Web3 Developer Summit',
      date: 'December 15, 2025',
      location: 'Addis Ababa, Ethiopia',
      type: 'Conference',
      attendees: 500
    },
    {
      id: 2,
      title: 'AI & Blockchain Workshop',
      date: 'January 10, 2026',
      location: 'Accra, Ghana',
      type: 'Workshop',
      attendees: 150
    },
    {
      id: 3,
      title: 'Startup Pitch Night',
      date: 'January 25, 2026',
      location: 'Kampala, Uganda',
      type: 'Networking',
      attendees: 200
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Events & Community</h1>
          <p className="text-xl text-orange-100">
            Connect, learn, and grow with BuildaDAO events across Africa
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'upcoming'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('organizing')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'organizing'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              Event Organizing
            </button>
            <button
              onClick={() => setActiveTab('ambassadors')}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === 'ambassadors'
                  ? 'bg-orange-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              Ambassadors
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Events Tab */}
      {activeTab === 'upcoming' && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden hover:border-orange-600 transition">
                  <div className="bg-gradient-to-r from-orange-600 to-purple-600 p-4 text-white">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{event.type}</span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <div className="space-y-2 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <span className="mr-2">📅</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-2">👥</span>
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-orange-600 text-white py-2 rounded-lg font-semibold hover:bg-orange-700 transition">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Event Organizing Tab */}
      {activeTab === 'organizing' && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Event Organizing as a Service</h2>
              <p className="text-xl text-gray-400">
                Let BuildaDAO help you organize impactful tech events in your community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-orange-600 transition">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">What We Offer</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>End-to-end event planning and execution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Speaker and mentor coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Marketing and promotion support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Venue and logistics management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Post-event community engagement</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-8 rounded-lg hover:border-purple-600 transition">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Event Types</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="mr-2">🎤</span>
                    <span>Conferences & Summits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💻</span>
                    <span>Hackathons & Coding Challenges</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎓</span>
                    <span>Workshops & Training Sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🤝</span>
                    <span>Networking & Meetups</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🚀</span>
                    <span>Pitch Competitions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                Request Event Support
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Ambassadors Tab */}
      {activeTab === 'ambassadors' && (
        <section className="py-16 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Event Ambassadors Program</h2>
              <p className="text-xl text-gray-400">
                Join our network of passionate community leaders organizing events across Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-center hover:border-orange-600 transition">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Recognition</h3>
                <p className="text-gray-400">Get recognized as a BuildaDAO leader in your community</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-center hover:border-purple-600 transition">
                <div className="text-4xl mb-3">🎁</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Resources</h3>
                <p className="text-gray-400">Access funding, swag, and organizational support</p>
              </div>

              <div className="bg-gray-900 border border-gray-800 p-6 rounded-lg text-center hover:border-green-600 transition">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="text-xl font-semibold mb-2 text-white">Network</h3>
                <p className="text-gray-400">Connect with ambassadors across the continent</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white p-8 rounded-lg border border-orange-600/30">
              <h3 className="text-2xl font-bold mb-4">Become an Ambassador</h3>
              <p className="mb-6">
                Are you passionate about building tech communities? Apply to become a BuildaDAO Event Ambassador
              </p>
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                Apply Now
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
