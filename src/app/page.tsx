'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';

const cards = [
  {
    title: "Education",
    description: "World-class AI and blockchain courses for all skill levels",
    image: "/images/home/education.jpg",
  },
  {
    title: "Startup Support",
    description: "Accelerating 500 innovative startups across the continent",
    image: "/images/home/startup-support.jpg",
  },
  {
    title: "Talent Network",
    description: "Connecting skilled professionals with opportunities",
    image: "/images/home/talent-network.jpg",
  }
];

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section 
        className="min-h-screen bg-black text-white flex items-center justify-center pt-24 relative overflow-hidden"
        style={{
          backgroundImage: "url(/images/home/hero.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay tint */}
        <div className="absolute inset-0 bg-black/70 z-0" />
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

      {/* What Is BuildaDAO Section */}
      <section className="section_meet" style={{ borderBottom: 'none', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="padding-global">
          <div className="container-large">
            <div className="header">
              <h2 className="slide-left">What Is BuildaDAO?</h2>
              <div className="max-description is-40">
                <div className="text-color-secondary slide-right">
                  BuildaDAO is a decentralized autonomous organization dedicated to fostering innovation, education, and entrepreneurship across Africa through blockchain technology and community collaboration.
                </div>
              </div>
            </div>
            <div className="gap-section-medium"></div>
            <div className="meet_wrap slide_down">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                modules={[Mousewheel, Keyboard]}
                speed={700}
                loop={false}
                slidesPerView={1}
                spaceBetween={16}
                mousewheel={{ forceToAxis: true }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                className="swiper w-dyn-list"
                wrapperClass="meet_list swiper-wrapper w-dyn-items"
              >
                {cards.map((card, index) => (
                  <SwiperSlide 
                    key={index} 
                    className="meet_item swiper-slide w-dyn-item"
                    data-w-id="ad3c1389-fdb5-f287-14c4-c8debac25f07"
                    role="listitem"
                    style={{ position: 'relative', height: '500px', minHeight: '500px' }}
                  >
                    <a 
                      href="#" 
                      className="meet_content w-inline-block"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        padding: '2rem',
                        zIndex: 10
                      }}
                    >
                      <div className="meet_gradient">
                        <div className="gradient_black"></div>
                        <div className="gradient_blue"></div>
                      </div>
                      <div className="meet_details" style={{ marginTop: 'auto' }}>
                        <div className="text-2xl speaker-name">{card.title.toUpperCase()}</div>
                        <div className="meet_summary">
                          <div className="text-color-secondary text-style-2lines">
                            {card.description}
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Extra dark tint specifically for Startup Support image */}
                    {card.title === 'Startup Support' && (
                      <div className="absolute inset-0 bg-black/60 z-[1]" />
                    )}
                    <img 
                      src={card.image} 
                      loading="lazy" 
                      alt={card.title} 
                      className="img"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-black border-t-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-16 md:mb-20 px-4 leading-tight">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <Link
              href="/first-500"
              className="card card--image p-10 md:p-12 group relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/home/first-500.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/95 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">First 500 Startups</h3>
                <p className="mb-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  Supporting the first 500 innovative startups with mentorship, resources, and community. 
                  Track progress and milestones of each participating startup.
                </p>
                <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                  Learn More 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link
              href="/academy"
              className="card card--image p-10 md:p-12 group relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/home/bad-academy.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/95 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">BaD Academy</h3>
                <p className="mb-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  Comprehensive AI and blockchain courses for junior developers and enterprise teams. 
                  Industry-leading curriculum designed for African innovators.
                </p>
                <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                  Explore Courses 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link
              href="/talent-pool"
              className="card card--image p-10 md:p-12 group relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/home/talent-pool.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/95 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Talent Pool</h3>
                <p className="mb-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  Access our network of cybersecurity experts, designers, developers, marketers, 
                  and more. Find the perfect talent for your project.
                </p>
                <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                  Browse Talent 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link
              href="/events"
              className="card card--image p-10 md:p-12 group relative overflow-hidden"
              style={{
                backgroundImage: "url(/images/home/events.webp)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 group-hover:from-black/95 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">Events & Community</h3>
                <p className="mb-8 text-lg md:text-xl text-white/80 leading-relaxed">
                  Join upcoming events, become an event ambassador, or leverage our event organizing services 
                  for your community initiatives.
                </p>
                <span className="font-semibold text-lg md:text-xl text-white/90 group-hover:text-white transition-colors inline-flex items-center gap-2">
                  View Events 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-black">
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
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-black">
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
