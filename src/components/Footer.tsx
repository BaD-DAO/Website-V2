import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-white text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">BuildaDAO</h3>
            <p className="text-white">Building the future of decentralized innovation across Africa.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/first-500" className="hover:underline transition">First 500</Link></li>
              <li><Link href="/academy" className="hover:underline transition">BaD Academy</Link></li>
              <li><Link href="/talent-pool" className="hover:underline transition">Talent Pool</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Community</h4>
            <ul className="space-y-2">
              <li><Link href="/countries" className="hover:underline transition">Countries</Link></li>
              <li><Link href="/events" className="hover:underline transition">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline transition">Twitter</a></li>
              <li><a href="#" className="hover:underline transition">Discord</a></li>
              <li><a href="#" className="hover:underline transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-white mt-12 pt-8 text-center">
          <p>&copy; 2025 BuildaDAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
