import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building the Future of Decentralized Innovation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empowering African startups and talent through blockchain education, DAO infrastructure, and community-driven growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/first-500" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                Join First 500
              </Link>
              <Link href="/academy" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Explore Academy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What is BuildaDAO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              BuildaDAO is a decentralized autonomous organization dedicated to fostering innovation, 
              education, and entrepreneurship across Africa through blockchain technology and community collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">World-class AI and blockchain courses for all skill levels</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Startup Support</h3>
              <p className="text-gray-600">Accelerating 500 innovative startups across the continent</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Talent Network</h3>
              <p className="text-gray-600">Connecting skilled professionals with opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/first-500" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">First 500 Startups</h3>
              <p className="text-gray-600 mb-4">
                Supporting the first 500 innovative startups with mentorship, resources, and community. 
                Track progress and milestones of each participating startup.
              </p>
              <span className="text-blue-600 font-semibold">Learn More →</span>
            </Link>
            
            <Link href="/academy" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-purple-600 mb-4">BaD Academy</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive AI and blockchain courses for junior developers and enterprise teams. 
                Industry-leading curriculum designed for African innovators.
              </p>
              <span className="text-purple-600 font-semibold">Explore Courses →</span>
            </Link>
            
            <Link href="/talent-pool" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Talent Pool</h3>
              <p className="text-gray-600 mb-4">
                Access our network of cybersecurity experts, designers, developers, marketers, 
                and more. Find the perfect talent for your project.
              </p>
              <span className="text-green-600 font-semibold">Browse Talent →</span>
            </Link>
            
            <Link href="/events" className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Events & Community</h3>
              <p className="text-gray-600 mb-4">
                Join upcoming events, become an event ambassador, or leverage our event organizing services 
                for your community initiatives.
              </p>
              <span className="text-orange-600 font-semibold">View Events →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">BuildaDAO Across Africa</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Growing communities in multiple countries across the continent
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {['Ethiopia', 'Ghana', 'Cameroon', 'Uganda', 'Botswana'].map((country) => (
              <Link 
                key={country}
                href="/countries" 
                className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-lg text-center font-semibold hover:scale-105 transition"
              >
                BaD {country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build the Future?</h2>
          <p className="text-xl mb-8">
            Join our community of innovators, learners, and builders shaping Africa's decentralized future
          </p>
          <Link href="/first-500" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
