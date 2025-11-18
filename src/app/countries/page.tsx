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
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">BuildaDAO Across Africa</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Building vibrant tech communities in every corner of the continent
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">15+</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">3,440+</div>
              <div className="text-lg">Community Members</div>
            </div>
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">261</div>
              <div className="text-lg">Active Startups</div>
            </div>
            <div className="text-center p-8 bg-black border-2 border-white">
              <div className="text-6xl font-bold mb-2">114</div>
              <div className="text-lg">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-black border-b-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Our Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {countries.map((country) => (
              <div key={country.name} className="bg-black border-2 border-white overflow-hidden hover:bg-white hover:text-black transition-all duration-300 group">
                <div className="bg-white text-black p-8 text-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-2xl font-bold">BaD {country.name}</h3>
                </div>
                
                <div className="p-6">
                  <p className="mb-6 text-sm">{country.description}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between border-b border-current pb-2">
                      <span>Members:</span>
                      <span className="font-bold">{country.members}</span>
                    </div>
                    <div className="flex justify-between border-b border-current pb-2">
                      <span>Startups:</span>
                      <span className="font-bold">{country.startups}</span>
                    </div>
                    <div className="flex justify-between border-b border-current pb-2">
                      <span>Events:</span>
                      <span className="font-bold">{country.events}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-white text-black border-2 border-white py-2 font-bold group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300">
                    Join Community
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Start a Chapter in Your Country</h2>
          <p className="text-xl mb-10">
            Don't see your country listed? Help us bring BuildaDAO to your community
          </p>
          <button className="bg-white text-black border-2 border-white px-10 py-4 font-bold hover:bg-black hover:text-white transition-all duration-300 text-lg">
            Apply to Lead a Chapter
          </button>
        </div>
      </section>
    </div>
  );
}
