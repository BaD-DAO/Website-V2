'use client';
import { useState } from 'react';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const upcomingEvents = [
    { id: 1, title: 'Web3 Developer Summit', date: 'December 15, 2025', location: 'Addis Ababa, Ethiopia', type: 'Conference', attendees: 500 },
    { id: 2, title: 'AI & Blockchain Workshop', date: 'January 10, 2026', location: 'Accra, Ghana', type: 'Workshop', attendees: 150 },
    { id: 3, title: 'Startup Pitch Night', date: 'January 25, 2026', location: 'Kampala, Uganda', type: 'Networking', attendees: 200 }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-screen bg-black text-white flex items-center justify-center pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">Events & Community</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">Connect, learn, and grow with BuildaDAO events across Africa</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setActiveTab('upcoming')} className={`px-8 py-4 font-medium transition-all duration-200 text-lg rounded-md ${activeTab === 'upcoming' ? 'button-primary' : 'button-secondary'}`}>Upcoming Events</button>
            <button onClick={() => setActiveTab('organizing')} className={`px-8 py-4 font-medium transition-all duration-200 text-lg rounded-md ${activeTab === 'organizing' ? 'button-primary' : 'button-secondary'}`}>Event Organizing</button>
            <button onClick={() => setActiveTab('ambassadors')} className={`px-8 py-4 font-medium transition-all duration-200 text-lg rounded-md ${activeTab === 'ambassadors' ? 'button-primary' : 'button-secondary'}`}>Ambassadors</button>
          </div>
        </div>
      </section>

      {activeTab === 'upcoming' && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="card overflow-hidden group">
                  <div className="p-6">
                    <span className="badge">{event.type}</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-6">{event.title}</h3>
                    <div className="space-y-3 mb-6 text-white/70">
                      <div className="text-lg"><strong className="text-white">Date:</strong> {event.date}</div>
                      <div className="text-lg"><strong className="text-white">Location:</strong> {event.location}</div>
                      <div className="text-lg"><strong className="text-white">Attendees:</strong> {event.attendees}</div>
                    </div>
                    <button className="w-full button-primary py-3">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'organizing' && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Event Organizing as a Service</h2>
              <p className="text-xl">Let BuildaDAO help you organize impactful tech events in your community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-10">
                <h3 className="text-3xl font-semibold mb-6">What We Offer</h3>
                <ul className="space-y-4 text-lg text-white/70">
                  <li className="flex items-start"><span className="mr-3 text-white">✓</span><span>End-to-end event planning and execution</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">✓</span><span>Speaker and mentor coordination</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">✓</span><span>Marketing and promotion support</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">✓</span><span>Venue and logistics management</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">✓</span><span>Post-event community engagement</span></li>
                </ul>
              </div>
              <div className="card p-10">
                <h3 className="text-3xl font-semibold mb-6">Event Types</h3>
                <ul className="space-y-4 text-lg text-white/70">
                  <li className="flex items-start"><span className="mr-3 text-white">•</span><span>Conferences & Summits</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">•</span><span>Hackathons & Coding Challenges</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">•</span><span>Workshops & Training Sessions</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">•</span><span>Networking & Meetups</span></li>
                  <li className="flex items-start"><span className="mr-3 text-white">•</span><span>Pitch Competitions</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'ambassadors' && (
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Event Ambassadors Program</h2>
              <p className="text-xl">Join our network of passionate community leaders organizing events across Africa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="card p-10 text-center">
                <h3 className="text-2xl font-semibold mb-4">Recognition</h3>
                <p className="text-lg text-white/70">Get recognized as a BuildaDAO leader in your community</p>
              </div>
              <div className="card p-10 text-center">
                <h3 className="text-2xl font-semibold mb-4">Resources</h3>
                <p className="text-lg text-white/70">Access funding, swag, and organizational support</p>
              </div>
              <div className="card p-10 text-center">
                <h3 className="text-2xl font-semibold mb-4">Network</h3>
                <p className="text-lg text-white/70">Connect with ambassadors across the continent</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-10">Whether you want to attend, organize, or lead - there's a place for you</p>
          <button className="button-primary px-10 py-4 text-lg">Join Our Community</button>
        </div>
      </section>
    </div>
  );
}
