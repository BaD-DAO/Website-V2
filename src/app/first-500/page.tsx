export default function First500() {
  const startups = [
    { id: 1, name: 'TechVenture Africa', country: 'Ethiopia', stage: 'Seed', progress: 75 },
    { id: 2, name: 'BlockChain Solutions', country: 'Ghana', stage: 'Pre-Seed', progress: 45 },
    { id: 3, name: 'AI Innovations Ltd', country: 'Cameroon', stage: 'Series A', progress: 90 },
    { id: 4, name: 'FinTech Hub', country: 'Uganda', stage: 'Seed', progress: 60 },
    { id: 5, name: 'AgriTech Solutions', country: 'Botswana', stage: 'Pre-Seed', progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">First 500 Startups</h1>
          <p className="text-xl text-blue-100">
            Supporting the next generation of African innovators with mentorship, resources, and community
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">127</div>
              <div className="text-gray-600">Startups Enrolled</div>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">15</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">$2.5M</div>
              <div className="text-gray-600">Funding Raised</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">89%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Mentorship</h3>
              <p className="text-gray-600">
                Connect with experienced entrepreneurs and industry experts who guide you through every stage of your startup journey.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">Resources</h3>
              <p className="text-gray-600">
                Access to tools, infrastructure, and educational materials to help you build and scale your business effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-600">Community</h3>
              <p className="text-gray-600">
                Join a vibrant network of founders, investors, and partners committed to building Africa's tech ecosystem.
              </p>
            </div>
          </div>

          {/* Startups Progress */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Startups</h2>
          
          <div className="space-y-6">
            {startups.map((startup) => (
              <div key={startup.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{startup.name}</h3>
                    <p className="text-gray-600">{startup.country} • {startup.stage}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {startup.progress}% Complete
                    </span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all"
                    style={{ width: `${startup.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Application CTA */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
            <p className="text-xl mb-6">Applications are open for the next cohort</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
