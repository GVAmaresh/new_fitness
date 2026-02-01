import { Wind, Zap, Radio, Cpu, TestTube, Gauge } from 'lucide-react';

const features = [
  {
    icon: Wind,
    title: 'Aerodynamics Research',
    description: 'Advanced CFD simulations and wind tunnel testing for optimal airframe design, lift optimization, and drag reduction.',
    gradient: 'from-blue-500 to-cyan-500',
    specs: ['Mach 2+ Simulations', 'Subsonic & Supersonic', 'Boundary Layer Analysis']
  },
  {
    icon: Zap,
    title: 'Propulsion Development',
    description: 'Cutting-edge engine design, hybrid propulsion systems, and electric powertrains for next-gen aircraft.',
    gradient: 'from-orange-500 to-red-500',
    specs: ['Turbofan Engines', 'Electric Propulsion', 'Hybrid Systems']
  },
  {
    icon: Radio,
    title: 'UAV Systems',
    description: 'Indigenous autonomous drone platforms for surveillance, cargo delivery, and tactical operations.',
    gradient: 'from-purple-500 to-pink-500',
    specs: ['20+ Hour Endurance', 'AI Navigation', 'Swarm Capable']
  },
  {
    icon: Cpu,
    title: 'Autonomous Flight',
    description: 'AI-powered flight control systems with obstacle avoidance, path planning, and adaptive learning.',
    gradient: 'from-green-500 to-emerald-500',
    specs: ['Computer Vision', 'ML Models', 'Edge Computing']
  },
  {
    icon: TestTube,
    title: 'Simulation Capabilities',
    description: 'Hardware-in-the-loop testing, digital twin technology, and mission simulation environments.',
    gradient: 'from-cyan-500 to-blue-500',
    specs: ['Real-time Testing', 'Virtual Prototyping', 'Digital Twins']
  },
  {
    icon: Gauge,
    title: 'Prototype Testing',
    description: 'Comprehensive flight testing in diverse Indian terrains from deserts to Himalayas.',
    gradient: 'from-yellow-500 to-orange-500',
    specs: ['Field Testing', 'Extreme Conditions', 'Performance Validation']
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 backdrop-blur-sm text-cyan-400 rounded-full mb-4 border border-cyan-500/20">
            Core Capabilities
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Advanced Aerospace Engineering
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full-spectrum capabilities from concept to certification, built on precision engineering 
            and validated through rigorous testing protocols.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6">{feature.description}</p>
              
              {/* Specs */}
              <div className="space-y-2">
                {feature.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}></div>
                    <span className="text-gray-500">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Corner Glow */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </section>
  );
}
