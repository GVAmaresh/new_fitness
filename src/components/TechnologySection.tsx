import { Zap, Wind, Battery, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const technologies = [
  {
    icon: Zap,
    title: 'Hybrid Hydrogen-Electric Propulsion',
    description: '150kW hydrogen fuel cell paired with 80kWh battery system for zero-emission flight with optimal power distribution.',
    highlights: ['98% Energy Efficiency', '15-Minute Refuel', 'AI Power Management']
  },
  {
    icon: Wind,
    title: 'Lightweight Composite Airframe',
    description: 'Carbon fiber reinforced polymer construction achieving exceptional strength-to-weight ratio for maximum efficiency.',
    highlights: ['1,850kg Empty Weight', 'Advanced Aerodynamics', 'Corrosion Resistant']
  },
  {
    icon: Battery,
    title: 'Intelligent Energy System',
    description: 'Hybrid controller seamlessly manages dual power sources, optimizing performance across all flight phases.',
    highlights: ['Regenerative Systems', 'Real-time Optimization', 'Battery Health Monitor']
  },
  {
    icon: Shield,
    title: 'Advanced Safety Architecture',
    description: 'Multiple redundant systems, emergency protocols, and real-time monitoring ensure passenger safety.',
    highlights: ['Triple Redundancy', 'Emergency Parachute', 'Fire Suppression']
  }
];

export function TechnologySection() {
  return (
    <section id="technology" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Technology</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Engineering for India's Conditions
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            SkyHop's technology stack is purpose-built for India's diverse terrain, 
            climate extremes, and infrastructure constraints—from sea-level coastal regions 
            to high-altitude Himalayan operations.
          </p>
        </div>

        {/* Technology Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {technologies.map((tech, index) => (
            <div key={index} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#CCFF00]/30 transition-all">
              <div className="w-14 h-14 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-colors">
                <tech.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl mb-4">{tech.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{tech.description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.highlights.map((highlight, idx) => (
                  <span key={idx} className="px-3 py-1 bg-black/40 border border-[#CCFF00]/20 text-[#CCFF00] text-sm rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Visual Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Hydrogen Technology */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753756965032-706cd3b99c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeWRyb2dlbiUyMGZ1ZWwlMjBjZWxsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU1NDU1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hydrogen Fuel Cell Technology"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl mb-2">Hydrogen Propulsion</h3>
                <p className="text-gray-300">150kW fuel cell system with zero emissions</p>
              </div>
            </div>
          </div>

          {/* Manufacturing */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1705614681506-45a2bcdd458d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMG1hbnVmYWN0dXJpbmclMjBhZXJvc3BhY2V8ZW58MXx8fHwxNjU1NDU1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Aerospace Manufacturing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl mb-2">Precision Manufacturing</h3>
                <p className="text-gray-300">Advanced composite construction in India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Aircraft Detail Image */}
        <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10">
          <img
            src="figma:asset/138c2b74e54c6d4ab016b120248db0585e704a70.png"
            alt="SkyHop Side Profile"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent flex items-center">
            <div className="max-w-xl px-12">
              <h3 className="text-3xl mb-4">Built for Certification</h3>
              <p className="text-gray-300 mb-6">
                Designed to meet DGCA, EASA, and international aviation safety standards 
                from day one, with compliance integrated into every engineering decision.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">DGCA India</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">ISO 9001</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">AS9100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}