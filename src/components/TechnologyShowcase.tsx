import { Zap, Wind, Battery, Cpu, Shield, Gauge } from 'lucide-react';

const technologies = [
  {
    icon: Zap,
    title: 'Hybrid Hydrogen-Electric Propulsion',
    description: 'Revolutionary dual-power architecture combining 150kW hydrogen fuel cells with 80kWh battery system.',
    features: ['Zero CO₂ Emissions', '98% Energy Efficiency', '15min Refuel Time', 'AI Power Management'],
    energyFlow: true
  },
  {
    icon: Wind,
    title: 'Advanced Aerodynamics',
    description: 'Computational fluid dynamics optimized airframe achieving unprecedented lift-to-drag ratios.',
    features: ['Carbon Fiber Construction', '1,850kg Empty Weight', 'Mach 0.4 Cruise', 'Wing Loading Optimized'],
    energyFlow: false
  },
  {
    icon: Battery,
    title: 'Energy System Architecture',
    description: 'Intelligent hybrid controller seamlessly manages power distribution for optimal performance.',
    features: ['Dual Power Sources', 'Real-time Optimization', 'Regenerative Systems', 'Battery Health Monitor'],
    energyFlow: true
  },
  {
    icon: Cpu,
    title: 'Autonomous Flight Control',
    description: 'AI-powered navigation with computer vision, obstacle detection, and adaptive learning.',
    features: ['Full Autopilot', 'Collision Avoidance', 'Weather Adaptation', 'Emergency Override'],
    energyFlow: false
  },
  {
    icon: Shield,
    title: 'Triple-Redundant Safety',
    description: 'Multiple backup systems ensuring passenger safety in all flight conditions and scenarios.',
    features: ['Redundant Controls', 'Emergency Parachute', 'Fire Suppression', 'Real-time Monitoring'],
    energyFlow: false
  },
  {
    icon: Gauge,
    title: 'Performance Engineering',
    description: '800km+ range with VTOL capability and short-runway operations for maximum accessibility.',
    features: ['800+ km Range', 'VTOL Capable', '<300m Runway', '15,000 ft Ceiling'],
    energyFlow: true
  }
];

export function TechnologyShowcase() {
  return (
    <section id="technology" className="relative py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CCFF00]/5 rounded-full blur-[150px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-black border-2 border-[#CCFF00] rounded-full mb-6">
            <span className="text-[#CCFF00] tracking-widest uppercase text-sm">Technology Architecture</span>
          </div>
          <h2 className="text-6xl lg:text-7xl mb-6 text-white tracking-tight">
            Engineered for
            <span className="block text-[#CCFF00]">Efficiency</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Six revolutionary systems working in perfect harmony to redefine aviation
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-8 bg-black border border-[#CCFF00]/20 rounded-2xl hover:border-[#CCFF00] transition-all duration-500 overflow-hidden"
            >
              {/* Energy Flow Effect */}
              {tech.energyFlow && (
                <div className="absolute top-0 left-0 right-0 h-0.5 overflow-hidden">
                  <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent energy-line"></div>
                </div>
              )}

              {/* Icon */}
              <div className="relative w-16 h-16 bg-[#CCFF00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#CCFF00]/60 transition-all">
                <tech.icon className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-2xl text-white mb-4">{tech.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
              
              {/* Features */}
              <div className="space-y-3">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#CCFF00] rounded-full"></div>
                    <span className="text-[#DFFF00] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#CCFF00]/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Energy Diagram */}
        <div className="mt-20 p-12 bg-black border-2 border-[#CCFF00]/30 rounded-3xl relative overflow-hidden">
          <h3 className="text-3xl text-white mb-8 text-center">
            <span className="text-[#CCFF00]">Energy Flow Architecture</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#CCFF00] rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Zap className="w-12 h-12 text-black" />
              </div>
              <div className="text-[#CCFF00] text-lg mb-2">Hydrogen Fuel Cell</div>
              <div className="text-gray-400 text-sm">150 kW Primary Power</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-[#FFFF00] text-4xl">→</div>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-[#FFFF00] rounded-full flex items-center justify-center mx-auto mb-4 pulse-glow">
                <Battery className="w-12 h-12 text-black" />
              </div>
              <div className="text-[#FFFF00] text-lg mb-2">Electric Battery</div>
              <div className="text-gray-400 text-sm">80 kWh Hybrid System</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}