import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 md:gap-12">
          <div className="md:col-span-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">BuildaDAO</h3>
            <p className="text-xs sm:text-sm md:text-base text-white/80">Building the future of decentralized innovation across Africa.</p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/first-500" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">First 500</Link></li>
              <li><Link href="/academy" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">BaD Academy</Link></li>
              <li><Link href="/talent-pool" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">Talent Pool</Link></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Community</h4>
            <ul className="space-y-2">
              <li><Link href="/countries" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">Countries</Link></li>
              <li><Link href="/events" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">Events</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1 text-center md:text-left">
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">Twitter</a></li>
              <li><a href="#" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">Discord</a></li>
              <li><a href="#" className="text-xs sm:text-sm md:text-base text-white/70 hover:text-white hover:underline transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-white/60">
          <p>&copy; 2025 BuildaDAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
