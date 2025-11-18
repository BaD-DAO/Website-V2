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
    <div className="min-h-screen bg-black pt-24">
      <section className="bg-black text-white py-32 border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">Events & Community</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">Connect, learn, and grow with BuildaDAO events across Africa</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={() => setActiveTab('upcoming')} className={`px-8 py-4 font-bold transition-all duration-300 text-lg border-2 ${activeTab === 'upcoming' ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-white hover:text-black'}`}>Upcoming Events</button>
            <button onClick={() => setActiveTab('organizing')} className={`px-8 py-4 font-bold transition-all duration-300 text-lg border-2 ${activeTab === 'organizing' ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-white hover:text-black'}`}>Event Organizing</button>
            <button onClick={() => setActiveTab('ambassadors')} className={`px-8 py-4 font-bold transition-all duration-300 text-lg border-2 ${activeTab === 'ambassadors' ? 'bg-white text-black border-white' : 'bg-black text-white border-white hover:bg-white hover:text-black'}`}>Ambassadors</button>
          </div>
        </div>
      </section>

      {activeTab === 'upcoming' && (
        <section className="py-20 bg-black border-b-2 border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-black border-2 border-white overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group">
                  <div className="bg-white text-black p-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <span className="border-2 border-current px-4 py-1 text-sm font-bold">{event.type}</span>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6">{event.title}</h3>
                    <div className="space-y-3 mb-6">
                      <div className="text-lg"><strong>Date:</strong> {event.date}</div>
                      <div className="text-lg"><strong>Location:</strong> {event.location}</div>
                      <div className="text-lg"><strong>Attendees:</strong> {event.attendees}</div>
                    </div>
                    <button className="w-full bg-white text-black border-2 border-white py-3 font-bold group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">Register Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'organizing' && (
        <section className="py-20 bg-black border-b-2 border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Event Organizing as a Service</h2>
              <p className="text-xl">Let BuildaDAO help you organize impactful tech events in your community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black border-2 border-white p-10">
                <h3 className="text-3xl font-bold mb-6">What We Offer</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start"><span className="mr-3">✓</span><span>End-to-end event planning and execution</span></li>
                  <li className="flex items-start"><span className="mr-3">✓</span><span>Speaker and mentor coordination</span></li>
                  <li className="flex items-start"><span className="mr-3">✓</span><span>Marketing and promotion support</span></li>
                  <li className="flex items-start"><span className="mr-3">✓</span><span>Venue and logistics management</span></li>
                  <li className="flex items-start"><span className="mr-3">✓</span><span>Post-event community engagement</span></li>
                </ul>
              </div>
              <div className="bg-black border-2 border-white p-10">
                <h3 className="text-3xl font-bold mb-6">Event Types</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start"><span className="mr-3">•</span><span>Conferences & Summits</span></li>
                  <li className="flex items-start"><span className="mr-3">•</span><span>Hackathons & Coding Challenges</span></li>
                  <li className="flex items-start"><span className="mr-3">•</span><span>Workshops & Training Sessions</span></li>
                  <li className="flex items-start"><span className="mr-3">•</span><span>Networking & Meetups</span></li>
                  <li className="flex items-start"><span className="mr-3">•</span><span>Pitch Competitions</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'ambassadors' && (
        <section className="py-20 bg-black border-b-2 border-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-6">Event Ambassadors Program</h2>
              <p className="text-xl">Join our network of passionate community leaders organizing events across Africa</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-black border-2 border-white p-10 text-center hover:bg-white hover:text-black transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Recognition</h3>
                <p className="text-lg">Get recognized as a BuildaDAO leader in your community</p>
              </div>
              <div className="bg-black border-2 border-white p-10 text-center hover:bg-white hover:text-black transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Resources</h3>
                <p className="text-lg">Access funding, swag, and organizational support</p>
              </div>
              <div className="bg-black border-2 border-white p-10 text-center hover:bg-white hover:text-black transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4">Network</h3>
                <p className="text-lg">Connect with ambassadors across the continent</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-10">Whether you want to attend, organize, or lead - there's a place for you</p>
          <button className="bg-white text-black border-2 border-white px-10 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-lg">Join Our Community</button>
        </div>
      </section>
    </div>
  );
}
