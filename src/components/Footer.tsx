import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BuildaDAO</h3>
            <p className="text-gray-400">Building the future of decentralized innovation across Africa.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/first-500" className="hover:text-white transition">First 500</Link></li>
              <li><Link href="/academy" className="hover:text-white transition">BaD Academy</Link></li>
              <li><Link href="/talent-pool" className="hover:text-white transition">Talent Pool</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/countries" className="hover:text-white transition">Countries</Link></li>
              <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">Discord</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 BuildaDAO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
