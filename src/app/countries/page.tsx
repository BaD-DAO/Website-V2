import AfricaCarousel from '@/components/AfricaCarousel';
import AfricaMap from '@/components/AfricaMap';

export default function Countries() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24 pb-12">
        <div className="text-center space-y-8 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-8xl font-bold">BuildaDAO Across Africa</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto">
            Growing communities in multiple countries across the continent
          </p>
        </div>

        <div className="w-full">
          <AfricaMap />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AfricaCarousel />
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">8+</div>
              <div className="text-lg text-white/70">Active Countries</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">3,440+</div>
              <div className="text-lg text-white/70">Community Members</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">261</div>
              <div className="text-lg text-white/70">Active Startups</div>
            </div>
            <div className="text-center p-8 card-elevated">
              <div className="text-6xl font-bold mb-2">114</div>
              <div className="text-lg text-white/70">Events Hosted</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Start a Chapter in Your Country</h2>
          <p className="text-xl mb-10">
            Don't see your country listed? Help us bring BuildaDAO to your community
          </p>
          <button className="button-primary px-10 py-4 text-lg">
            Apply to Lead a Chapter
          </button>
        </div>
      </section>
    </div>
  );
}
