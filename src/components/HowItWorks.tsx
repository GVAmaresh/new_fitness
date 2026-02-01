import { Lightbulb, TestTube2, Zap, CheckCircle2, Rocket, ArrowRight } from 'lucide-react';

const phases = [
  {
    icon: Lightbulb,
    title: 'Concept & Design',
    description: 'Advanced CAD modeling, aerodynamic simulations, and hydrogen propulsion architecture planning.',
    deliverables: ['3D CAD Models', 'CFD Analysis', 'Propulsion Design', 'Weight Optimization'],
    gradient: 'from-[#FFFF00] to-[#DFFF00]',
    phase: '01'
  },
  {
    icon: TestTube2,
    title: 'Simulation & Testing',
    description: 'Virtual prototyping, wind tunnel testing, and structural analysis using cutting-edge simulation tools.',
    deliverables: ['Wind Tunnel Data', 'Stress Testing', 'Flight Simulation', 'System Integration'],
    gradient: 'from-[#CCFF00] to-[#FFFF00]',
    phase: '02'
  },
  {
    icon: Zap,
    title: 'Hydrogen Integration',
    description: 'Fuel cell integration, battery management system, and hybrid power controller development.',
    deliverables: ['Fuel Cell Setup', 'Battery System', 'Power Distribution', 'Safety Protocols'],
    gradient: 'from-[#DFFF00] to-[#CCFF00]',
    phase: '03'
  },
  {
    icon: Rocket,
    title: 'Prototype & Flight Tests',
    description: 'Full-scale prototype construction and comprehensive flight testing across Indian terrains.',
    deliverables: ['Prototype Build', 'Ground Testing', 'Flight Trials', 'Performance Data'],
    gradient: 'from-[#CCFF00] to-[#DFFF00]',
    phase: '04'
  },
  {
    icon: CheckCircle2,
    title: 'Certification & Deployment',
    description: 'DGCA certification, safety validation, and commercial deployment readiness.',
    deliverables: ['DGCA Approval', 'Type Certificate', 'Pilot Training', 'Market Launch'],
    gradient: 'from-[#FFFF00] to-[#CCFF00]',
    phase: '05'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#CCFF00]/10 backdrop-blur-sm text-[#CCFF00] rounded-full mb-4 border border-[#CCFF00]/20">
            Development Process
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-[#CCFF00]/30 bg-clip-text text-transparent">
              From Blueprint to Flight
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A systematic engineering approach aligned with DGCA standards, 
            international safety protocols, and India's aerospace ecosystem.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Horizontal Line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Card */}
                <div className="group bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-[#CCFF00]/50 transition-all duration-500 overflow-hidden p-6 h-full">
                  {/* Phase Number */}
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-5">
                    {phase.phase}
                  </div>

                  {/* Icon */}
                  <div className={`relative w-16 h-16 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <phase.icon className="w-8 h-8 text-white relative z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} rounded-xl blur-lg opacity-50`}></div>
                  </div>

                  {/* Content */}
                  <div className="mb-1">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Phase {phase.phase}</span>
                  </div>
                  <h3 className="text-xl text-white mb-3">{phase.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{phase.description}</p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-slate-800/50">
                    <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Key Deliverables</div>
                    {phase.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${phase.gradient}`}></div>
                        <span className="text-gray-400">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>
                </div>

                {/* Arrow Between Phases */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 z-20">
                    <ArrowRight className="w-6 h-6 text-[#CCFF00]/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="p-10 bg-gradient-to-br from-[#CCFF00]/5 to-[#FFFF00]/5 backdrop-blur-sm rounded-3xl border border-[#CCFF00]/20">
          <h3 className="text-3xl text-center mb-8">
            <span className="bg-gradient-to-r from-[#CCFF00] to-[#FFFF00] bg-clip-text text-transparent">
              Certification & Compliance
            </span>
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-[#CCFF00] text-lg mb-2">DGCA</div>
              <div className="text-gray-400 text-sm">Indian Aviation Standards</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-[#FFFF00] text-lg mb-2">EASA</div>
              <div className="text-gray-400 text-sm">European Safety Agency</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-[#DFFF00] text-lg mb-2">ISO 9001</div>
              <div className="text-gray-400 text-sm">Quality Management</div>
            </div>
            <div className="text-center p-6 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-[#CCFF00] text-lg mb-2">AS9100</div>
              <div className="text-gray-400 text-sm">Aerospace Standards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FFFF00]/5 rounded-full blur-3xl"></div>
    </section>
  );
}