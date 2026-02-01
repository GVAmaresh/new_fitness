import { Lightbulb, Cpu, Zap, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const phases = [
  {
    icon: Lightbulb,
    title: 'Concept Design',
    description: 'Advanced CAD modeling and aerodynamic simulations',
    phase: '01'
  },
  {
    icon: Cpu,
    title: 'Digital Simulation',
    description: 'CFD analysis and virtual prototyping',
    phase: '02'
  },
  {
    icon: Zap,
    title: 'Hydrogen Integration',
    description: 'Fuel cell and hybrid power system development',
    phase: '03'
  },
  {
    icon: Rocket,
    title: 'Prototype Testing',
    description: 'Full-scale construction and flight trials',
    phase: '04'
  },
  {
    icon: CheckCircle2,
    title: 'DGCA Certification',
    description: 'Regulatory compliance and deployment',
    phase: '05'
  }
];

export function HowSkyHopWorks() {
  return (
    <section id="process" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-black border-2 border-[#DFFF00] rounded-full mb-6">
            <span className="text-[#DFFF00] tracking-widest uppercase text-sm">Development Process</span>
          </div>
          <h2 className="text-6xl lg:text-7xl mb-6 text-white tracking-tight">
            How SkyHop
            <span className="block text-[#DFFF00]">Comes to Life</span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#CCFF00] to-transparent"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Card */}
                <div className="p-8 bg-black border-2 border-[#CCFF00]/30 rounded-2xl hover:border-[#CCFF00] transition-all group">
                  {/* Phase Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#CCFF00] rounded-full flex items-center justify-center text-black shadow-lg shadow-[#CCFF00]/60">
                    <span className="text-xl">{phase.phase}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-[#CCFF00] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <phase.icon className="w-10 h-10 text-black" />
                  </div>

                  <h3 className="text-2xl text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{phase.description}</p>
                </div>

                {/* Arrow */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-[#CCFF00]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mt-20 p-12 bg-black border-2 border-[#CCFF00]/30 rounded-3xl">
          <h3 className="text-3xl text-center mb-8">
            <span className="text-[#CCFF00]">Certification Standards</span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {['DGCA India', 'EASA Europe', 'ISO 9001', 'AS9100'].map((cert, index) => (
              <div key={index} className="text-center p-6 bg-black/60 border border-[#CCFF00]/20 rounded-xl">
                <div className="text-[#CCFF00] text-xl mb-2">{cert}</div>
                <div className="text-gray-400 text-sm">Certified</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#DFFF00]/5 rounded-full blur-[150px]"></div>
    </section>
  );
}
