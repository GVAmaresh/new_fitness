import { Flag, Target, MapPin, TrendingUp } from 'lucide-react';

const initiatives = [
  {
    icon: Flag,
    title: 'Make in India',
    stat: '95%',
    description: 'Components sourced from Indian manufacturers'
  },
  {
    icon: Target,
    title: 'Aatmanirbhar Bharat',
    stat: '100%',
    description: 'Self-reliant in advanced air mobility tech'
  },
  {
    icon: MapPin,
    title: 'Manufacturing Hubs',
    stat: '4',
    description: 'Facilities across Bengaluru, Hyderabad, Chennai, Pune'
  },
  {
    icon: TrendingUp,
    title: 'Cost Reduction',
    stat: '60%',
    description: 'Lower operating costs vs traditional aircraft'
  }
];

const regions = [
  { name: 'North', color: '#CCFF00', focus: 'High-Altitude Operations' },
  { name: 'Northeast', color: '#FFFF00', focus: 'Remote Connectivity' },
  { name: 'South', color: '#DFFF00', focus: 'Coastal R&D Hubs' },
  { name: 'West', color: '#CCFF00', focus: 'Desert Testing' }
];

export function IndiaImpact() {
  return (
    <section id="india" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-black border-2 border-[#FFFF00] rounded-full mb-6">
            <span className="text-[#FFFF00] tracking-widest uppercase text-sm">India's Aviation Future</span>
          </div>
          <h2 className="text-6xl lg:text-7xl mb-6 text-white tracking-tight">
            Built for
            <span className="block text-[#FFFF00]">1.4 Billion Lives</span>
          </h2>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-black border border-[#CCFF00]/20 rounded-xl hover:border-[#CCFF00] transition-all group"
            >
              <div className="w-14 h-14 bg-[#CCFF00] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-black" />
              </div>
              <div className="text-5xl text-[#CCFF00] mb-2">{item.stat}</div>
              <div className="text-white mb-2">{item.title}</div>
              <div className="text-gray-400 text-sm">{item.description}</div>
            </div>
          ))}
        </div>

        {/* India Map Visualization */}
        <div className="relative p-16 bg-black border-2 border-[#CCFF00]/30 rounded-3xl overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/10 rounded-full blur-[150px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-4xl text-white mb-4 text-center">
              <span className="text-[#CCFF00]">Pan-India Operations</span>
            </h3>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              From Kashmir to Kanyakumari, SkyHop connects every corner of India with sustainable air mobility
            </p>

            {/* Map Representation */}
            <div className="relative w-full max-w-4xl mx-auto aspect-square">
              {/* Stylized India Outline */}
              <svg viewBox="0 0 400 600" className="w-full h-full">
                <defs>
                  <linearGradient id="map-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#FFFF00" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#DFFF00" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M 200 50 L 250 100 L 280 180 L 300 280 L 280 380 L 250 460 L 200 530 L 150 550 L 100 500 L 80 420 L 70 340 L 80 260 L 100 180 L 150 100 Z"
                  fill="url(#map-gradient)"
                  stroke="#CCFF00"
                  strokeWidth="2"
                  className="opacity-50"
                />
              </svg>

              {/* Regional Markers */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#CCFF00] rounded-full animate-pulse shadow-lg shadow-[#CCFF00]/60"></div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-[#FFFF00] rounded-full animate-pulse shadow-lg shadow-[#FFFF00]/60"></div>
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-[#DFFF00] rounded-full animate-pulse shadow-lg shadow-[#DFFF00]/60"></div>
              <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#CCFF00] rounded-full animate-pulse shadow-lg shadow-[#CCFF00]/60"></div>
            </div>

            {/* Regional Info */}
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="p-4 bg-black/60 border border-[#CCFF00]/20 rounded-lg"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: region.color }}
                    ></div>
                    <span className="text-white">{region.name}</span>
                  </div>
                  <div className="text-gray-400 text-sm">{region.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Facilities */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {['Bengaluru R&D', 'Hyderabad Manufacturing', 'Chennai Testing', 'Pune Components'].map((facility, index) => (
            <div
              key={index}
              className="p-6 bg-black border border-[#DFFF00]/20 rounded-xl hover:border-[#DFFF00] transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-[#DFFF00]" />
                <span className="text-white">{facility}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    </section>
  );
}
