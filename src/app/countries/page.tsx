export default function Countries() {
  const countries = [
    {
      name: 'Ethiopia',
      flag: '🇪🇹',
      members: 450,
      startups: 32,
      events: 12,
      description: 'Leading innovation hub in East Africa with a thriving tech ecosystem'
    },
    {
      name: 'Ghana',
      flag: '🇬🇭',
      members: 380,
      startups: 28,
      events: 15,
      description: 'West Africa\'s blockchain pioneer with strong fintech presence'
    },
    {
      name: 'Cameroon',
      flag: '🇨🇲',
      members: 290,
      startups: 21,
      events: 9,
      description: 'Central Africa\'s emerging tech powerhouse with bilingual advantage'
    },
    {
      name: 'Uganda',
      flag: '🇺🇬',
      members: 320,
      startups: 24,
      events: 11,
      description: 'Pearl of Africa with rapidly growing developer community'
    },
    {
      name: 'Botswana',
      flag: '🇧🇼',
      members: 210,
      startups: 15,
      events: 7,
      description: 'Southern Africa\'s stable economy fostering tech innovation'
    },
    {
      name: 'Kenya',
      flag: '🇰🇪',
      members: 520,
      startups: 41,
      events: 18,
      description: 'Silicon Savannah leading mobile money and tech innovation'
    },
    {
      name: 'Nigeria',
      flag: '🇳🇬',
      members: 680,
      startups: 53,
      events: 22,
      description: 'Africa\'s largest tech ecosystem with unicorn startups'
    },
    {
      name: 'South Africa',
      flag: '🇿🇦',
      members: 590,
      startups: 47,
      events: 20,
      description: 'Most developed tech infrastructure on the continent'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">BuildaDAO Across Africa</h1>
          <p className="text-xl text-green-100">
            Building vibrant tech communities in every corner of the continent
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,440+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">261</div>
              <div className="text-gray-600">Active Startups</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">114</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 p-6 text-white text-center">
                  <div className="text-6xl mb-3">{country.flag}</div>
                  <h3 className="text-2xl font-bold">BaD {country.name}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{country.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Members:</span>
                      <span className="font-semibold text-gray-900">{country.members}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Startups:</span>
                      <span className="font-semibold text-gray-900">{country.startups}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Events:</span>
                      <span className="font-semibold text-gray-900">{country.events}</span>
                    </div>
                  </div>
                  
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition text-sm">
                    Join Community
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Country Chapters Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Building</h3>
              <p className="text-gray-600">
                Regular meetups, workshops, and networking events to connect local innovators
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Education</h3>
              <p className="text-gray-600">
                Tailored training programs addressing specific regional needs and opportunities
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Startup Support</h3>
              <p className="text-gray-600">
                Mentorship and resources for local startups to grow and succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start a Chapter CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Start a Chapter in Your Country</h2>
          <p className="text-xl mb-8">
            Don't see your country listed? Help us bring BuildaDAO to your community
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Apply to Lead a Chapter
          </button>
        </div>
      </section>
    </div>
  );
}
