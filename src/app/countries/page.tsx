export default function Countries() {
  const countries = [
    {
      name: 'Ethiopia',
      members: 450,
      startups: 32,
      events: 12,
      description: 'Leading innovation hub in East Africa with a thriving tech ecosystem'
    },
    {
      name: 'Ghana',
      members: 380,
      startups: 28,
      events: 15,
      description: 'West Africa\'s blockchain pioneer with strong fintech presence'
    },
    {
      name: 'Cameroon',
      members: 290,
      startups: 21,
      events: 9,
      description: 'Central Africa\'s emerging tech powerhouse with bilingual advantage'
    },
    {
      name: 'Uganda',
      members: 320,
      startups: 24,
      events: 11,
      description: 'Pearl of Africa with rapidly growing developer community'
    },
    {
      name: 'Botswana',
      members: 210,
      startups: 15,
      events: 7,
      description: 'Southern Africa\'s stable economy fostering tech innovation'
    },
    {
      name: 'Kenya',
      members: 520,
      startups: 41,
      events: 18,
      description: 'Silicon Savannah leading mobile money and tech innovation'
    },
    {
      name: 'Nigeria',
      members: 680,
      startups: 53,
      events: 22,
      description: 'Africa\'s largest tech ecosystem with unicorn startups'
    },
    {
      name: 'South Africa',
      members: 590,
      startups: 47,
      events: 20,
      description: 'Most developed tech infrastructure on the continent'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center border-b border-white/10 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">BuildaDAO Across Africa</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Building vibrant tech communities in every corner of the continent
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">15+</div>
              <div className="text-lg text-white/70">Countries</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">3,440+</div>
              <div className="text-lg text-white/70">Community Members</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">261</div>
              <div className="text-lg text-white/70">Active Startups</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">114</div>
              <div className="text-lg text-white/70">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">Our Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countries.map((country) => (
              <div key={country.name} className="card overflow-hidden">
                <div className="border-b border-white/10 p-8 text-center">
                  <h3 className="text-3xl font-semibold">BaD {country.name}</h3>
                </div>
                
                <div className="p-6">
                  <p className="mb-6 text-sm text-white/70">{country.description}</p>
                  
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/70">Members:</span>
                      <span className="font-semibold">{country.members}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/70">Startups:</span>
                      <span className="font-semibold">{country.startups}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/70">Events:</span>
                      <span className="font-semibold">{country.events}</span>
                    </div>
                  </div>
                  
                  <button className="w-full button-primary py-2">
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
          <button className="button-primary px-10 py-4 text-lg">
            Apply to Lead a Chapter
          </button>
        </div>
      </section>
    </div>
  );
}
