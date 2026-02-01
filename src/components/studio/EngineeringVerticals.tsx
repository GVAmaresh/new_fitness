import { Brain, Plane, Car, Bot, Atom } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const verticals = [
  {
    id: 'humannovamind',
    icon: Brain,
    name: 'HumannovaMind',
    tagline: 'Cognitive Intelligence Systems',
    description: 'Building AI-powered cognitive systems that learn, predict, and enhance human-machine interaction for smarter decision-making across industries.',
    capabilities: [
      'Predictive Intelligence & Machine Learning',
      'Natural Language Processing',
      'Computer Vision & Pattern Recognition',
      'Human-Machine Interface Design',
      'Real-time Data Analytics'
    ],
    color: '#CCFF00',
    image: 'https://images.unsplash.com/photo-1673255745677-e36f618550d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYnJhaW4lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTYyMzEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'airminds',
    icon: Plane,
    name: 'Air Minds',
    tagline: 'Future Aviation Engineering',
    description: 'Developing hybrid hydrogen-electric aircraft for India\'s aviation future—enabling urban air mobility, emergency medical transport, and rural connectivity.',
    capabilities: [
      'Hybrid Hydrogen-Electric Propulsion',
      'eVTOL Aircraft Design',
      'Advanced Aerodynamics & Composites',
      'Urban Air Mobility Systems',
      'Autonomous Flight Control'
    ],
    color: '#FFFF00',
    image: 'figma:asset/a938a276169bafcf088000a40430d4e3f3a5fc5c.png'
  },
  {
    id: 'automotive',
    icon: Car,
    name: 'Automotive Engineering',
    tagline: 'Next-Gen Mobility Platforms',
    description: 'Engineering high-performance electric vehicle platforms, carbon-fiber structures, and intelligent transportation systems for sustainable mobility.',
    capabilities: [
      'EV Platform Architecture & Battery Systems',
      'Carbon-Fiber Chassis Engineering',
      'Powertrain Optimization',
      'Autonomous Driving Systems',
      'Vehicle-to-Everything (V2X) Integration'
    ],
    color: '#DFFF00',
    image: 'https://images.unsplash.com/photo-1751553512970-b6849577b68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NTYyMzEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'robotics',
    icon: Bot,
    name: 'Robotics & Automation',
    tagline: 'Intelligent Autonomous Systems',
    description: 'Creating autonomous machines and industrial automation systems that increase efficiency, safety, and precision across manufacturing and services.',
    capabilities: [
      'Industrial Automation & Process Control',
      'Autonomous Mobile Robots (AMR)',
      'Machine Vision & Sensor Fusion',
      'Collaborative Robotics (Cobots)',
      'Predictive Maintenance Systems'
    ],
    color: '#CCFF00',
    image: 'https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcm9ib3QlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NTUzMDUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'astrionarc',
    icon: Atom,
    name: 'Astrion Arc',
    tagline: 'Advanced Research & Development',
    description: 'Our R&D powerhouse driving innovation across all verticals—exploring future energy systems, advanced simulations, and experimental engineering.',
    capabilities: [
      'Future Energy Systems & Hydrogen Tech',
      'Advanced Materials Research',
      'Computational Simulations & Digital Twins',
      'Quantum & Edge Computing Applications',
      'Cross-Vertical Innovation Lab'
    ],
    color: '#FFFF00',
    image: 'https://images.unsplash.com/photo-1614934273523-1c9f0f666c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc2NTYyMzEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function EngineeringVerticals() {
  return (
    <section id="departments" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Studio ILIOS Engineering</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Five Departments. <span className="text-[#CCFF00]">One Ecosystem.</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Each department operates as an integrated part of Studio ILIOS—sharing research, 
            technology, and expertise to solve complex engineering challenges together.
          </p>
        </div>

        {/* Verticals */}
        <div className="space-y-32">
          {verticals.map((vertical, index) => (
            <div key={vertical.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${vertical.color}20`, border: `2px solid ${vertical.color}40` }}>
                  <vertical.icon className="w-8 h-8" style={{ color: vertical.color }} />
                </div>
                
                <h3 className="text-4xl mb-2">{vertical.name}</h3>
                <p className="text-xl mb-6" style={{ color: vertical.color }}>{vertical.tagline}</p>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">{vertical.description}</p>
                
                <div className="space-y-3">
                  <div className="text-sm text-gray-500 uppercase tracking-wider mb-4">Core Capabilities</div>
                  {vertical.capabilities.map((capability, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: vertical.color }}></div>
                      <span className="text-gray-300">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className={`relative h-[500px] rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {vertical.image.startsWith('figma:') ? (
                  <img
                    src={vertical.image}
                    alt={vertical.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <ImageWithFallback
                    src={vertical.image}
                    alt={vertical.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-6 right-6 px-4 py-2 bg-black/60 backdrop-blur-sm border rounded-lg" style={{ borderColor: `${vertical.color}40` }}>
                  <span className="text-sm" style={{ color: vertical.color }}>0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* System Integration Visual */}
        <div className="mt-32 p-12 bg-white/5 border border-white/10 rounded-2xl">
          <h3 className="text-3xl mb-6 text-center">Unified Engineering System</h3>
          <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
            All departments operate within Studio ILIOS Engineering. HumannovaMind AI powers Air Minds autonomous flight. 
            Automotive battery innovations accelerate Robotics development. Astrion Arc R&D elevates every department with breakthrough research.
          </p>
          
          <div className="grid md:grid-cols-5 gap-6">
            {verticals.map((vertical) => (
              <div key={vertical.id} className="text-center p-6 bg-black/40 border border-white/10 rounded-xl hover:border-white/30 transition-all">
                <vertical.icon className="w-8 h-8 mx-auto mb-3" style={{ color: vertical.color }} />
                <div className="text-sm">{vertical.name}</div>
                <div className="text-xs text-gray-500 mt-1">Department</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block px-6 py-3 bg-[#FFFF00]/10 border border-[#FFFF00]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <Atom className="w-5 h-5 text-[#FFFF00]" />
                <span className="text-sm">
                  <span className="text-[#FFFF00]">Astrion Arc</span> provides R&D support across all departments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}