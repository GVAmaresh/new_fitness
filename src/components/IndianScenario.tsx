import { Flag, Target, Factory, TrendingUp, MapPin, Users } from 'lucide-react';

const initiatives = [
  {
    icon: Flag,
    title: 'Make in India',
    description: '95% indigenous manufacturing with components sourced from Indian suppliers, strengthening domestic aerospace capabilities.',
    stat: '95%',
    label: 'Indigenous',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Target,
    title: 'Aatmanirbhar Bharat',
    description: 'Complete self-reliance in advanced air mobility technology, reducing import dependency and fostering innovation.',
    stat: '100%',
    label: 'Self-Reliant',
    gradient: 'from-[#CCFF00] to-[#FFFF00]'
  },
  {
    icon: Factory,
    title: 'Domestic Manufacturing',
    description: 'State-of-the-art production facilities in Bengaluru and Hyderabad creating 2,000+ high-skill aerospace jobs.',
    stat: '2,000+',
    label: 'Jobs Created',
    gradient: 'from-[#DFFF00] to-[#CCFF00]'
  },
  {
    icon: TrendingUp,
    title: 'Cost Reduction',
    description: 'Operating costs reduced by 60% compared to traditional aircraft, making air mobility accessible to remote regions.',
    stat: '60%',
    label: 'Cost Savings',
    gradient: 'from-[#FFFF00] to-[#DFFF00]'
  }
];

const impactAreas = [
  {
    icon: MapPin,
    title: 'Remote Connectivity',
    description: 'Connecting 500+ remote villages and hill stations currently underserved by road or rail infrastructure.',
    count: '500+'
  },
  {
    icon: Users,
    title: 'Medical Access',
    description: 'Emergency medical transport and organ delivery reducing critical response time from hours to minutes.',
    count: '24/7'
  }
];

export function IndianScenario() {
  return (
    <section id="india-vision" className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 backdrop-blur-sm text-orange-400 rounded-full mb-4 border border-orange-500/20">
            <Flag className="w-4 h-4" />
            <span>Aligned with National Vision</span>
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
              Strengthening India's
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Aerospace Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SkyHop embodies India's vision for sustainable aviation, indigenous manufacturing, 
            and universal access to advanced air mobility across the nation.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative p-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`}></div>
              
              {/* Icon and Stat */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${initiative.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <initiative.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-3xl bg-gradient-to-r ${initiative.gradient} bg-clip-text text-transparent`}>
                    {initiative.stat}
                  </div>
                  <div className="text-xs text-gray-500">{initiative.label}</div>
                </div>
              </div>
              
              <h3 className="text-xl text-white mb-3 relative z-10">{initiative.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{initiative.description}</p>
            </div>
          ))}
        </div>

        {/* India Map Visualization */}
        <div className="relative p-12 bg-gradient-to-br from-[#CCFF00]/5 to-[#FFFF00]/5 backdrop-blur-sm rounded-3xl border border-[#CCFF00]/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <path
                d="M 400 100 L 450 150 L 480 200 L 500 280 L 480 350 L 450 420 L 400 480 L 350 500 L 280 480 L 220 420 L 180 350 L 160 280 L 180 200 L 220 150 L 280 120 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-cyan-500"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl text-center mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Transforming India's Mobility Landscape
              </span>
            </h3>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              From Kashmir to Kanyakumari, SkyHop is designed to serve India's unique challenges—
              diverse terrain, extreme weather, and the need for affordable, sustainable connectivity.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {impactAreas.map((area, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#CCFF00] to-[#FFFF00] rounded-xl flex items-center justify-center">
                      <area.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="text-3xl text-[#CCFF00]">{area.count}</div>
                  </div>
                  <h4 className="text-xl text-white mb-2">{area.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>

            {/* Regional Focus */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">North India</span>
                </div>
                <div className="text-xs text-gray-400">High-altitude operations</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#FFFF00] rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Northeast</span>
                </div>
                <div className="text-xs text-gray-400">Remote connectivity</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#DFFF00] rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Coastal Regions</span>
                </div>
                <div className="text-xs text-gray-400">Maritime logistics</div>
              </div>
              <div className="p-4 bg-slate-900/40 rounded-lg border border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-[#CCFF00] rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">Central India</span>
                </div>
                <div className="text-xs text-gray-400">Rural access</div>
              </div>
            </div>
          </div>

          {/* Glow Effect */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#CCFF00]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FFFF00]/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </section>
  );
}