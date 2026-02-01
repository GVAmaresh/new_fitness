import { Target, Users, Globe, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const principles = [
  {
    icon: Users,
    title: 'Human-Centric Design',
    description: 'Engineering serves people first—solving real problems, improving lives, and amplifying human potential through intelligent systems.'
  },
  {
    icon: Globe,
    title: 'Planetary Responsibility',
    description: 'Every solution is designed for sustainability—zero emissions, circular systems, and technologies that protect our planet for future generations.'
  },
  {
    icon: Target,
    title: 'Long-Term Thinking',
    description: 'We build for decades, not quarters. Our engineering decisions consider systems impact, scalability, and resilience over time.'
  },
  {
    icon: Sparkles,
    title: 'Research-Driven Innovation',
    description: 'Astrion Arc drives continuous R&D across all verticals—ensuring we stay ahead of technology curves and explore what\'s next.'
  }
];

export function StudioVision() {
  return (
    <section id="vision" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Our Engineering Philosophy</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Engineering as a <span className="text-[#CCFF00]">System</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            At Studio ILIOS, engineering is not about isolated products—it's about 
            building interconnected systems that serve people, cities, and the planet through 
            human-centric design and responsible innovation.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {principles.map((principle, index) => (
            <div key={index} className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:border-[#CCFF00]/30 transition-all">
              <div className="w-14 h-14 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center mb-6">
                <principle.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl mb-4">{principle.title}</h3>
              <p className="text-gray-400 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Team Visual */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlYW0lMjB3b3JraW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU2MjMxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Engineering Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent flex items-center">
            <div className="max-w-2xl px-12">
              <h3 className="text-4xl mb-4">Cross-Disciplinary Collaboration</h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our teams span AI researchers, aerospace engineers, automotive designers, 
                robotics specialists, and materials scientists—working together to solve 
                problems no single discipline could tackle alone.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">200+ Engineers</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">5 Disciplines</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">1 Mission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Astrion Arc Spotlight */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 rounded-full mb-6">
              <span className="text-[#FFFF00] text-sm tracking-wider">POWERED BY ASTRION ARC</span>
            </div>
            <h3 className="text-4xl mb-6">Research Drives Everything</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Astrion Arc is Studio ILIOS\' advanced R&D department—the innovation engine supporting 
              all engineering teams. Astrion Arc explores experimental materials, future energy systems, 
              computational simulations, and breakthrough technologies that become tomorrow\'s solutions.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              From hydrogen fuel cell optimization to AI-driven aerodynamics, Astrion Arc ensures 
              Studio ILIOS stays at the frontier of engineering science—benefiting every department 
              with cutting-edge research and long-term technology development.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 text-[#FFFF00] text-sm rounded-full">
                Materials Science
              </span>
              <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 text-[#FFFF00] text-sm rounded-full">
                Energy Systems
              </span>
              <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 text-[#FFFF00] text-sm rounded-full">
                Digital Twins
              </span>
              <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 text-[#FFFF00] text-sm rounded-full">
                Quantum Computing
              </span>
            </div>
          </div>

          <div className="relative h-[450px] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1614934273523-1c9f0f666c33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc2NTYyMzEwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Astrion Arc Research Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h4 className="text-2xl mb-2 text-[#FFFF00]">Astrion Arc Lab</h4>
              <p className="text-gray-300">
                Where breakthrough engineering research becomes reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}