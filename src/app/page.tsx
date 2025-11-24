import Link from 'next/link';
import LiquidEther from '@/components/LiquidEther';
import SpeakersSection from '@/components/SpeakersSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center border-b border-white/10 pt-24 relative overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <LiquidEther
            colors={['#2562FF', '#4A7AFF', '#6B8FFF']}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center space-y-10 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold px-2 leading-[0.9] tracking-tight">
                Building the Future
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold px-2 text-white/90 leading-[0.9] tracking-tight">
                of Decentralized Innovation
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto px-4 text-white/80 font-light leading-relaxed">
              Empowering African startups and talent through blockchain education, DAO infrastructure, and community-driven growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center pt-4 md:pt-8">
              <Link href="/first-500" className="button-primary">
                Join First 500
              </Link>
              <Link href="/academy" className="button-secondary">
                Explore Academy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Speakers Section */}
      <SpeakersSection />

      {/* About Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 px-4 leading-tight">What is BuildaDAO?</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto px-4 leading-relaxed">
              BuildaDAO is a decentralized autonomous organization dedicated to fostering innovation, 
              education, and entrepreneurship across Africa through blockchain technology and community collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center p-10 md:p-12 card group">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white/20 group-hover:border-white/40 flex items-center justify-center mx-auto mb-8 rounded-xl transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Education</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">World-class AI and blockchain courses for all skill levels</p>
            </div>
            
            <div className="text-center p-10 md:p-12 card group">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white/20 group-hover:border-white/40 flex items-center justify-center mx-auto mb-8 rounded-xl transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Startup Support</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">Accelerating 500 innovative startups across the continent</p>
            </div>
            
            <div className="text-center p-10 md:p-12 card group">
              <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-white/20 group-hover:border-white/40 flex items-center justify-center mx-auto mb-8 rounded-xl transition-colors">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Talent Network</h3>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">Connecting skilled professionals with opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-16 md:mb-20 px-4 leading-tight">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <Link href="/first-500" className="card p-10 md:p-12 group">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">First 500 Startups</h3>
              <p className="mb-8 text-lg md:text-xl text-white/70 leading-relaxed">
                Supporting the first 500 innovative startups with mentorship, resources, and community. 
                Track progress and milestones of each participating startup.
              </p>
              <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                Learn More 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <Link href="/academy" className="card p-10 md:p-12 group">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">BaD Academy</h3>
              <p className="mb-8 text-lg md:text-xl text-white/70 leading-relaxed">
                Comprehensive AI and blockchain courses for junior developers and enterprise teams. 
                Industry-leading curriculum designed for African innovators.
              </p>
              <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                Explore Courses 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <Link href="/talent-pool" className="card p-10 md:p-12 group">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Talent Pool</h3>
              <p className="mb-8 text-lg md:text-xl text-white/70 leading-relaxed">
                Access our network of cybersecurity experts, designers, developers, marketers, 
                and more. Find the perfect talent for your project.
              </p>
              <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                Browse Talent 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            
            <Link href="/events" className="card p-10 md:p-12 group">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Events & Community</h3>
              <p className="mb-8 text-lg md:text-xl text-white/70 leading-relaxed">
                Join upcoming events, become an event ambassador, or leverage our event organizing services 
                for your community initiatives.
              </p>
              <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                View Events 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-8 md:mb-10 px-4 leading-tight">BuildaDAO Across Africa</h2>
          <p className="text-center text-white/80 mb-16 md:mb-20 text-lg sm:text-xl md:text-2xl px-4 leading-relaxed">
            Growing communities in multiple countries across the continent
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {['Ethiopia', 'Ghana', 'Cameroon', 'Uganda', 'Botswana'].map((country) => (
              <Link 
                key={country}
                href="/countries" 
                className="card p-8 md:p-10 text-center font-semibold text-lg md:text-xl group"
              >
                <span className="group-hover:text-white transition-colors text-white/90">BaD {country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-10 px-4 leading-tight">Ready to Build the Future?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 md:mb-16 px-4 text-white/80 leading-relaxed">
            Join our community of innovators, learners, and builders shaping Africa's decentralized future
          </p>
          <Link href="/first-500" className="button-primary text-lg md:text-xl px-12 py-5">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
