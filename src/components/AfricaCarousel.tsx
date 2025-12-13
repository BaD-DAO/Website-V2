'use client';

import { useState, useEffect } from 'react';

interface Country {
  name: string;
  members: number;
  startups: number;
  events: number;
  description: string;
  flag: string;
  color: string;
}

const countries: Country[] = [
  {
    name: 'Nigeria',
    members: 680,
    startups: 53,
    events: 22,
    description: 'Africa\'s largest tech ecosystem with unicorn startups',
    flag: '🇳🇬',
    color: 'from-green-500 to-white'
  },
  {
    name: 'Kenya',
    members: 520,
    startups: 41,
    events: 18,
    description: 'Silicon Savannah leading mobile money and tech innovation',
    flag: '🇰🇪',
    color: 'from-red-500 to-green-600'
  },
  {
    name: 'South Africa',
    members: 590,
    startups: 47,
    events: 20,
    description: 'Most developed tech infrastructure on the continent',
    flag: '🇿🇦',
    color: 'from-blue-500 to-yellow-400'
  },
  {
    name: 'Ethiopia',
    members: 450,
    startups: 32,
    events: 12,
    description: 'Leading innovation hub in East Africa with thriving tech ecosystem',
    flag: '🇪🇹',
    color: 'from-green-500 to-red-500'
  },
  {
    name: 'Ghana',
    members: 380,
    startups: 28,
    events: 15,
    description: 'West Africa\'s blockchain pioneer with strong fintech presence',
    flag: '🇬🇭',
    color: 'from-red-500 to-yellow-400'
  },
  {
    name: 'Uganda',
    members: 320,
    startups: 24,
    events: 11,
    description: 'Pearl of Africa with rapidly growing developer community',
    flag: '🇺🇬',
    color: 'from-black to-red-500'
  },
  {
    name: 'Cameroon',
    members: 290,
    startups: 21,
    events: 9,
    description: 'Central Africa\'s emerging tech powerhouse with bilingual advantage',
    flag: '🇨🇲',
    color: 'from-green-500 to-red-500'
  },
  {
    name: 'Botswana',
    members: 210,
    startups: 15,
    events: 7,
    description: 'Southern Africa\'s stable economy fostering tech innovation',
    flag: '🇧🇼',
    color: 'from-blue-500 to-white'
  }
];

export default function AfricaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % countries.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % countries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + countries.length) % countries.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {countries.map((country, index) => (
            <div key={country.name} className="w-full flex-shrink-0">
              <div className="relative p-12 min-h-[500px] flex items-center">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${country.color} opacity-10`} />
                
                <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Country Info */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-6xl">{country.flag}</span>
                      <div>
                        <h3 className="text-4xl font-bold text-white">BuildaDAO {country.name}</h3>
                        <p className="text-lg text-white/70">Chapter</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-white/80 leading-relaxed">
                      {country.description}
                    </p>
                    
                    <button className="button-primary px-8 py-3 text-lg">
                      Join {country.name} Chapter
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-2">{country.members}</div>
                      <div className="text-sm text-white/70">Members</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-2">{country.startups}</div>
                      <div className="text-sm text-white/70">Startups</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-2">{country.events}</div>
                      <div className="text-sm text-white/70">Events</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {countries.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Country Thumbnails */}
      <div className="flex justify-center space-x-4 mt-6 overflow-x-auto pb-4">
        {countries.map((country, index) => (
          <button
            key={country.name}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 p-4 rounded-xl border transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white/10 border-white/30 scale-105'
                : 'bg-white/5 border-white/10 hover:bg-white/10'
            }`}
          >
            <div className="text-2xl mb-2">{country.flag}</div>
            <div className="text-sm text-white/70">{country.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
