import { MapPin, TrendingUp, Users, Zap } from 'lucide-react';

const regions = [
  { name: 'Northern Zone', projects: '15+', focus: 'High-Altitude UAV Testing' },
  { name: 'Western Zone', projects: '20+', focus: 'Desert Operations & Defense' },
  { name: 'Southern Zone', projects: '25+', focus: 'Coastal Surveillance & R&D' },
  { name: 'Eastern Zone', projects: '12+', focus: 'Disaster Response Systems' }
];

const impactMetrics = [
  {
    icon: MapPin,
    value: '28',
    label: 'States Covered',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    value: '72+',
    label: 'Active Projects',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Engineers & Researchers',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Zap,
    value: '10K+',
    label: 'Flight Hours Logged',
    gradient: 'from-orange-500 to-red-500'
  }
];

export function ImpactMap() {
  return (
    <section id="impact" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full mb-4 border border-blue-500/20">
            National Impact
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Aviation Tech Across India
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming India's aerospace landscape from Kashmir to Kanyakumari, 
            from Gujarat to Arunachal Pradesh.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* India Map Visualization */}
        <div className="relative p-12 bg-gradient-to-br from-slate-900/50 to-blue-950/30 backdrop-blur-sm rounded-3xl border border-slate-800 overflow-hidden">
          {/* Map Background Effect */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 800 600" className="w-full h-full">
              <path
                d="M 400 100 L 450 150 L 480 200 L 500 280 L 480 350 L 450 420 L 400 480 L 350 500 L 280 480 L 220 420 L 180 350 L 160 280 L 180 200 L 220 150 L 280 120 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-500"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl text-white mb-8 text-center">Regional Deployment</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
                    <h4 className="text-lg text-white">{region.name}</h4>
                  </div>
                  <div className="text-2xl text-cyan-400 mb-2">{region.projects}</div>
                  <div className="text-sm text-gray-400">{region.focus}</div>
                </div>
              ))}
            </div>

            {/* Key Locations */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">Bangalore</span>
                </div>
                <div className="text-sm text-gray-400">Primary R&D Hub</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-white">Hyderabad</span>
                </div>
                <div className="text-sm text-gray-400">Manufacturing Center</div>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-white">Pune</span>
                </div>
                <div className="text-sm text-gray-400">Testing Facility</div>
              </div>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </section>
  );
}
