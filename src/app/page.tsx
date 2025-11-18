import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black pt-24">
      {/* Hero Section */}
      <section className="bg-black text-white py-32 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              Building the Future of Decentralized Innovation
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Empowering African startups and talent through blockchain education, DAO infrastructure, and community-driven growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/first-500" className="button-primary px-8 py-4 text-lg">
                Join First 500
              </Link>
              <Link href="/academy" className="button-secondary px-8 py-4 text-lg">
                Explore Academy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">What is BuildaDAO?</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              BuildaDAO is a decentralized autonomous organization dedicated to fostering innovation, 
              education, and entrepreneurship across Africa through blockchain technology and community collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-8 card">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-6 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Education</h3>
              <p className="text-white/70">World-class AI and blockchain courses for all skill levels</p>
            </div>
            
            <div className="text-center p-8 card">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-6 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Startup Support</h3>
              <p className="text-white/70">Accelerating 500 innovative startups across the continent</p>
            </div>
            
            <div className="text-center p-8 card">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mx-auto mb-6 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3">Talent Network</h3>
              <p className="text-white/70">Connecting skilled professionals with opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-16">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/first-500" className="card p-10 group">
              <h3 className="text-3xl font-semibold mb-4">First 500 Startups</h3>
              <p className="mb-6 text-lg text-white/70">
                Supporting the first 500 innovative startups with mentorship, resources, and community. 
                Track progress and milestones of each participating startup.
              </p>
              <span className="font-medium text-lg text-white/90 group-hover:text-white">Learn More →</span>
            </Link>
            
            <Link href="/academy" className="card p-10 group">
              <h3 className="text-3xl font-semibold mb-4">BaD Academy</h3>
              <p className="mb-6 text-lg text-white/70">
                Comprehensive AI and blockchain courses for junior developers and enterprise teams. 
                Industry-leading curriculum designed for African innovators.
              </p>
              <span className="font-medium text-lg text-white/90 group-hover:text-white">Explore Courses →</span>
            </Link>
            
            <Link href="/talent-pool" className="card p-10 group">
              <h3 className="text-3xl font-semibold mb-4">Talent Pool</h3>
              <p className="mb-6 text-lg text-white/70">
                Access our network of cybersecurity experts, designers, developers, marketers, 
                and more. Find the perfect talent for your project.
              </p>
              <span className="font-medium text-lg text-white/90 group-hover:text-white">Browse Talent →</span>
            </Link>
            
            <Link href="/events" className="card p-10 group">
              <h3 className="text-3xl font-semibold mb-4">Events & Community</h3>
              <p className="mb-6 text-lg text-white/70">
                Join upcoming events, become an event ambassador, or leverage our event organizing services 
                for your community initiatives.
              </p>
              <span className="font-medium text-lg text-white/90 group-hover:text-white">View Events →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-center text-white mb-6">BuildaDAO Across Africa</h2>
          <p className="text-center text-white mb-16 text-xl">
            Growing communities in multiple countries across the continent
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Ethiopia', 'Ghana', 'Cameroon', 'Uganda', 'Botswana'].map((country) => (
              <Link 
                key={country}
                href="/countries" 
                className="card p-8 text-center font-medium text-lg"
              >
                BaD {country}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Build the Future?</h2>
          <p className="text-xl mb-10">
            Join our community of innovators, learners, and builders shaping Africa's decentralized future
          </p>
          <Link href="/first-500" className="button-primary px-10 py-4 text-lg inline-block">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
