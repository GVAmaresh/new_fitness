import { Lightbulb, Cpu, Wrench, TestTube2, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Concept Design',
    description: 'Ideation, requirement analysis, and preliminary design using CAD and aerodynamic modeling.',
    gradient: 'from-yellow-500 to-orange-500',
    deliverables: ['Design Specs', '3D Models', 'Feasibility Study']
  },
  {
    icon: Cpu,
    title: 'Simulation & Analysis',
    description: 'CFD analysis, structural testing, and flight dynamics simulation in virtual environments.',
    gradient: 'from-blue-500 to-cyan-500',
    deliverables: ['CFD Reports', 'Stress Analysis', 'Flight Simulation']
  },
  {
    icon: Wrench,
    title: 'Rapid Prototyping',
    description: 'Manufacturing scale models and functional prototypes using advanced fabrication techniques.',
    gradient: 'from-purple-500 to-pink-500',
    deliverables: ['Working Prototype', 'Subsystem Testing', 'Integration']
  },
  {
    icon: TestTube2,
    title: 'Field Testing',
    description: 'Real-world flight tests across diverse Indian terrains, from coastal to high-altitude zones.',
    gradient: 'from-green-500 to-emerald-500',
    deliverables: ['Flight Data', 'Performance Metrics', 'Safety Validation']
  },
  {
    icon: CheckCircle2,
    title: 'Certification & Deployment',
    description: 'DGCA compliance, quality assurance, and deployment readiness per Indian aviation standards.',
    gradient: 'from-cyan-500 to-blue-500',
    deliverables: ['DGCA Approval', 'Type Certification', 'Production Ready']
  }
];

export function HowWeWork() {
  return (
    <section id="work" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full mb-4 border border-blue-500/20">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              From Concept to Certification
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A systematic approach engineered for Indian aviation standards, DGCA compliance, 
            and collaboration with defense ecosystems.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 transform -translate-y-1/2"></div>

          {/* Steps */}
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden p-6">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                    <span className="text-sm text-gray-400">{index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-slate-800">
                    <div className="text-xs text-gray-500 mb-2">Deliverables:</div>
                    {step.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs">
                        <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${step.gradient}`}></div>
                        <span className="text-gray-500">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                </div>

                {/* Arrow Between Steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-blue-500/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-950/30 to-cyan-950/30 backdrop-blur-sm rounded-2xl border border-blue-500/20">
          <h3 className="text-2xl text-white mb-6 text-center">Quality & Compliance Standards</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-lg text-blue-400 mb-2">DGCA</div>
              <div className="text-sm text-gray-400">Aviation Standards</div>
            </div>
            <div>
              <div className="text-lg text-cyan-400 mb-2">HAL</div>
              <div className="text-sm text-gray-400">Manufacturing Protocols</div>
            </div>
            <div>
              <div className="text-lg text-blue-400 mb-2">DRDO</div>
              <div className="text-sm text-gray-400">Defense Guidelines</div>
            </div>
            <div>
              <div className="text-lg text-cyan-400 mb-2">ISO 9001</div>
              <div className="text-sm text-gray-400">Quality Management</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </section>
  );
}
