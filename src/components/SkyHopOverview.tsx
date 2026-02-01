import { Gauge, Users, Fuel, Plane } from 'lucide-react';
import { useState } from 'react';

const specifications = [
  { icon: Gauge, label: 'Range', value: '800+ km' },
  { icon: Users, label: 'Capacity', value: '5-8 passengers' },
  { icon: Fuel, label: 'Propulsion', value: 'Hybrid H₂-Electric' },
  { icon: Plane, label: 'Cruise Speed', value: '250 km/h' }
];

const aircraftImages = [
  {
    src: 'figma:asset/ad3323c02c92dce21112c0a9c83860679879ec5c.png',
    alt: 'SkyHop Front View'
  },
  {
    src: 'figma:asset/138c2b74e54c6d4ab016b120248db0585e704a70.png',
    alt: 'SkyHop Side View'
  },
  {
    src: 'figma:asset/4973ab2f990f6eb2c60159d7e92ac33a8429798c.png',
    alt: 'SkyHop Diagonal View'
  }
];

export function SkyHopOverview() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="skyhop" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">SkyHop Aircraft</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Practical. Scalable. Clean.
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            SkyHop is a hybrid hydrogen-electric aircraft platform designed specifically 
            for India's regional connectivity, emergency medical transport, and rural access challenges.
          </p>
        </div>

        {/* Aircraft Showcase */}
        <div className="mb-20">
          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden mb-6 bg-black">
            <img
              src={aircraftImages[activeImage].src}
              alt={aircraftImages[activeImage].alt}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 gap-4">
            {aircraftImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                  activeImage === index
                    ? 'border-[#CCFF00] shadow-lg shadow-[#CCFF00]/20'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain bg-black"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-20">
          <h3 className="text-3xl mb-8 text-center">Key Specifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#CCFF00]/30 transition-colors">
                <div className="w-12 h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center mb-4">
                  <spec.icon className="w-6 h-6 text-[#CCFF00]" />
                </div>
                <div className="text-sm text-gray-400 mb-1">{spec.label}</div>
                <div className="text-2xl">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xl mb-3">VTOL Capability</h4>
            <p className="text-gray-400">Vertical takeoff and landing for constrained spaces and short runways under 300m</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xl mb-3">Autonomous Systems</h4>
            <p className="text-gray-400">AI-powered navigation with collision avoidance and weather adaptation</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-xl mb-3">Safety First</h4>
            <p className="text-gray-400">Triple-redundant controls, emergency parachute, and real-time health monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
}