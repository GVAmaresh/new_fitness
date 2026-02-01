import { Zap, Feather, Radio, Shield, Gauge, Battery } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hybrid Hydrogen-Electric Propulsion',
    description: 'Advanced dual-power system combining hydrogen fuel cells with electric batteries for maximum efficiency and zero emissions.',
    specs: ['Hydrogen Fuel Cell: 150 kW', 'Battery Pack: 80 kWh', 'Hybrid Controller: AI-Optimized', 'Refuel Time: 15 minutes'],
    gradient: 'from-[#CCFF00] to-[#FFFF00]'
  },
  {
    icon: Feather,
    title: 'Ultra-Lightweight Composite Design',
    description: 'Carbon fiber reinforced polymer airframe delivering exceptional strength-to-weight ratio for superior performance.',
    specs: ['CFRP Fuselage', 'Titanium Alloys', 'Weight: 1,850 kg', 'Payload: 600 kg'],
    gradient: 'from-slate-400 to-gray-600'
  },
  {
    icon: Radio,
    title: 'Vertical Takeoff & Short Runway',
    description: 'VTOL-capable design with distributed electric propulsion enables operations from constrained spaces.',
    specs: ['VTOL Mode', 'Runway: <300m', '6x Electric Motors', 'Tilt-Rotor System'],
    gradient: 'from-[#DFFF00] to-[#CCFF00]'
  },
  {
    icon: Shield,
    title: 'Autonomous Flight Systems',
    description: 'AI-powered navigation, obstacle detection, and adaptive flight control for enhanced safety and efficiency.',
    specs: ['Computer Vision', 'Auto-Pilot', 'Collision Avoidance', 'Weather Adaptation'],
    gradient: 'from-[#FFFF00] to-[#DFFF00]'
  },
  {
    icon: Gauge,
    title: 'Extended Flight Range',
    description: 'Optimized aerodynamics and energy management delivering 800+ km range on a single charge and hydrogen fill.',
    specs: ['Range: 800+ km', 'Cruise Speed: 250 km/h', 'Service Ceiling: 15,000 ft', 'Endurance: 3.5 hours'],
    gradient: 'from-[#CCFF00] to-[#DFFF00]'
  },
  {
    icon: Battery,
    title: 'Energy Efficiency & Safety',
    description: 'Triple-redundant systems, real-time health monitoring, and emergency protocols ensure passenger safety.',
    specs: ['98% Efficiency', 'Redundant Systems', 'Emergency Parachute', 'Fire Suppression'],
    gradient: 'from-[#DFFF00] to-[#FFFF00]'
  }
];

export function TechnologyFeatures() {
  return (
    <section id="technology" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#CCFF00]/10 backdrop-blur-sm text-[#CCFF00] rounded-full mb-4 border border-[#CCFF00]/20">
            Advanced Technology
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-[#CCFF00]/30 bg-clip-text text-transparent">
              SkyHop Technology Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered systems designed for India's diverse terrain and climate, 
            from coastal regions to high-altitude zones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-[#CCFF00]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
              </div>
              
              <h3 className="text-2xl text-white mb-3 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 relative z-10">{feature.description}</p>
              
              {/* Technical Specs */}
              <div className="space-y-2 pt-4 border-t border-slate-800/50 relative z-10">
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Technical Specifications</div>
                {feature.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                    <span className="text-gray-400">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-bl-full blur-2xl opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Chart */}
        <div className="mt-20 p-10 bg-gradient-to-br from-slate-900/60 to-[#CCFF00]/5 backdrop-blur-sm rounded-3xl border border-[#CCFF00]/20">
          <h3 className="text-3xl text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-[#CCFF00] to-[#FFFF00] bg-clip-text text-transparent">
              SkyHop vs Traditional Aviation
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-2">⚡</div>
              <div className="text-[#CCFF00] text-xl mb-2">98% Less Emissions</div>
              <div className="text-gray-400 text-sm">Compared to conventional aircraft</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">💰</div>
              <div className="text-[#FFFF00] text-xl mb-2">60% Lower Operating Cost</div>
              <div className="text-gray-400 text-sm">Fuel and maintenance savings</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🔇</div>
              <div className="text-[#DFFF00] text-xl mb-2">80% Quieter</div>
              <div className="text-gray-400 text-sm">Reduced noise pollution</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFFF00]/5 rounded-full blur-3xl"></div>
    </section>
  );
}