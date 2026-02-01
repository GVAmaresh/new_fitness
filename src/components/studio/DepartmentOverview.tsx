import { Brain, Plane, Car, Bot, Atom, ArrowRight } from 'lucide-react';

const departments = [
  {
    id: 'humannovamind',
    icon: Brain,
    name: 'HumannovaMind',
    focus: 'Artificial Intelligence & Cognitive Systems',
    description: 'AI engineering for predictive intelligence, human-machine interaction, and cognitive computing',
    color: '#CCFF00'
  },
  {
    id: 'airminds',
    icon: Plane,
    name: 'Air Minds',
    focus: 'Aviation Engineering',
    description: 'Hybrid propulsion systems, eVTOL aircraft, and future air mobility platforms',
    color: '#FFFF00'
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive Engineering',
    focus: 'Electric Vehicle Systems',
    description: 'EV platforms, carbon-fiber structures, performance engineering, and mobility systems',
    color: '#DFFF00'
  },
  {
    id: 'robotics',
    icon: Bot,
    name: 'Robotics & Automation',
    focus: 'Autonomous Systems',
    description: 'Industrial automation, autonomous machines, and intelligent robotic platforms',
    color: '#CCFF00'
  },
  {
    id: 'astrionarc',
    icon: Atom,
    name: 'Astrion Arc',
    focus: 'Research & Development',
    description: 'Advanced research, simulations, experimental engineering, and long-term technology development supporting all departments',
    color: '#FFFF00',
    isRnD: true
  }
];

export function DepartmentOverview() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Department Quick Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {departments.filter(d => !d.isRnD).map((dept) => (
            <div key={dept.id} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${dept.color}20`, border: `1px solid ${dept.color}40` }}>
                  <dept.icon className="w-6 h-6" style={{ color: dept.color }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{dept.name}</h3>
                  <div className="text-sm text-gray-500">Department</div>
                </div>
              </div>
              <div className="text-sm mb-2" style={{ color: dept.color }}>{dept.focus}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{dept.description}</p>
            </div>
          ))}
        </div>

        {/* R&D Highlight */}
        <div className="p-10 bg-gradient-to-r from-[#FFFF00]/10 via-transparent to-transparent border border-[#FFFF00]/20 rounded-2xl">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#FFFF00]/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Atom className="w-8 h-8 text-[#FFFF00]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-3xl">Astrion Arc</h3>
                <span className="px-3 py-1 bg-[#FFFF00]/20 border border-[#FFFF00]/30 text-[#FFFF00] text-xs rounded-full">
                  R&D DEPARTMENT
                </span>
              </div>
              <p className="text-xl text-gray-300 mb-4">Research & Development</p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Astrion Arc is Studio ILIOS' dedicated R&D department providing advanced research support 
                to all engineering teams. From experimental materials and future energy systems to computational 
                simulations and long-term technology development, Astrion Arc ensures every department benefits 
                from breakthrough research and stays at the frontier of engineering science.
              </p>
              <a href="#vision" className="inline-flex items-center gap-2 text-[#FFFF00] hover:gap-3 transition-all">
                Learn More About Our R&D
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Department Network Visualization */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">All departments interconnected within Studio ILIOS</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {departments.map((dept, index) => (
              <div key={dept.id} className="flex items-center">
                <div className="px-4 py-2 bg-black/60 border rounded-lg" style={{ borderColor: `${dept.color}40` }}>
                  <span className="text-sm" style={{ color: dept.color }}>{dept.name}</span>
                </div>
                {index < departments.length - 1 && (
                  <div className="w-8 h-px bg-gradient-to-r from-[#CCFF00]/50 to-[#FFFF00]/50 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
