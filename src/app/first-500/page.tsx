export default function First500() {
  const startups = [
    { id: 1, name: 'TechVenture Africa', country: 'Ethiopia', stage: 'Seed', progress: 75 },
    { id: 2, name: 'BlockChain Solutions', country: 'Ghana', stage: 'Pre-Seed', progress: 45 },
    { id: 3, name: 'AI Innovations Ltd', country: 'Cameroon', stage: 'Series A', progress: 90 },
    { id: 4, name: 'FinTech Hub', country: 'Uganda', stage: 'Seed', progress: 60 },
    { id: 5, name: 'AgriTech Solutions', country: 'Botswana', stage: 'Pre-Seed', progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">First 500 Startups</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Supporting the next generation of African innovators with mentorship, resources, and community
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold text-white mb-2">127</div>
              <div className="text-lg">Startups Enrolled</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold text-white mb-2">15</div>
              <div className="text-lg">Countries</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold text-white mb-2">$2.5M</div>
              <div className="text-lg">Funding Raised</div>
            </div>
            <div className="text-center p-8 glass-card rounded-lg">
              <div className="text-6xl font-bold text-white mb-2">89%</div>
              <div className="text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-white mb-16 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="glass-card glass-hover p-10 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Mentorship</h3>
              <p className="text-lg">
                Connect with experienced entrepreneurs and industry experts who guide you through every stage of your startup journey.
              </p>
            </div>
            
            <div className="glass-card glass-hover p-10 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Resources</h3>
              <p className="text-lg">
                Access to tools, infrastructure, and educational materials to help you build and scale your business effectively.
              </p>
            </div>
            
            <div className="glass-card glass-hover p-10 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Community</h3>
              <p className="text-lg">
                Join a vibrant network of founders, investors, and partners committed to building Africa's tech ecosystem.
              </p>
            </div>
          </div>

          {/* Startups Progress */}
          <h2 className="text-5xl font-bold text-white mb-12 text-center">Featured Startups</h2>
          
          <div className="space-y-6">
            {startups.map((startup) => (
              <div key={startup.id} className="glass-card p-8 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white">{startup.name}</h3>
                    <p className="text-lg mt-2">{startup.country} • {startup.stage}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="bg-white text-black px-6 py-2 text-lg font-bold rounded-lg">
                      {startup.progress}% Complete
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">
                  <div 
                    className="bg-white h-full transition-all"
                    style={{ width: `${startup.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Join?</h2>
          <p className="text-xl mb-10">Applications are open for the next cohort</p>
          <button className="bg-white text-black px-10 py-4 font-bold hover:bg-white/90 transition-all duration-300 text-lg rounded-lg">
            Apply Now
          </button>
        </div>
      </section>
    </div>
  );
}
