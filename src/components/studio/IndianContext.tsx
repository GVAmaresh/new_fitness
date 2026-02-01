import { AlertTriangle, Clock, Zap, TrendingUp, MapPin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const challenges = [
  {
    icon: AlertTriangle,
    title: 'Extreme Urban Congestion',
    stat: 'Bangalore: #1 globally',
    description: 'Severe traffic delays paralyze emergency response, daily commuting, and cargo movement across major cities.',
    impact: '158 hours lost annually per commuter'
  },
  {
    icon: Clock,
    title: 'Overloaded Infrastructure',
    stat: '60% capacity exceeded',
    description: 'Roads, power grids, and public systems strain under rapid urbanization without integrated future planning.',
    impact: '₹1.5L crore economic loss yearly'
  },
  {
    icon: Zap,
    title: 'Energy Inefficiency',
    stat: '270M tons CO₂/year',
    description: 'Rising pollution from fossil fuel dependency, inefficient industrial systems, and outdated energy infrastructure.',
    impact: '40% of urban pollution from transport'
  },
  {
    icon: TrendingUp,
    title: 'Automation & Healthcare Gaps',
    stat: '200M+ underserved',
    description: 'Limited access to advanced healthcare, automation, and smart systems in semi-urban and rural regions.',
    impact: '45+ min medical emergency response'
  }
];

export function IndianContext() {
  return (
    <section id="india-context" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="text-sm text-red-400 uppercase tracking-widest mb-4">Engineering for India</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Solving India's <span className="text-red-400">Real Problems</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            India faces unique engineering challenges at unprecedented scale. 
            Studio ILIOS designs solutions built specifically for India's complexity, 
            density, diversity, and rapid urbanization.
          </p>
        </div>

        {/* Crisis Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Bangalore Traffic */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672084305848-b151e89a8a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjB0cmFmZmljJTIwY29uZ2VzdGlvbiUyMGluZGlhfGVufDF8fHx8MTc2NTU0NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Urban Congestion Crisis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl mb-2">Gridlocked Cities</h3>
                <p className="text-gray-300">Bangalore loses ₹1.5L crore annually to traffic congestion</p>
              </div>
            </div>
          </div>

          {/* City Growth */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwbGlnaHRzfGVufDF8fHx8MTc2NTYyMzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rapid Urbanization"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl mb-2">Rapid Urbanization</h3>
                <p className="text-gray-300">600M people in cities by 2030—infrastructure can't keep pace</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-red-400/30 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <challenge.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl mb-1">{challenge.title}</h3>
                  <div className="text-red-400 text-sm">{challenge.stat}</div>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">{challenge.description}</p>
              <div className="pt-4 border-t border-white/10">
                <div className="text-sm text-gray-500">Impact: <span className="text-gray-300">{challenge.impact}</span></div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent mb-20"></div>

        {/* Studio ILIOS Solution */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Studio ILIOS Engineering Response</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Engineered for <span className="text-[#CCFF00]">India's Scale</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Studio ILIOS doesn't import solutions—our five departments work together to engineer 
            systems from the ground up for India's unique challenges: congestion, complexity, climate, and rapid growth.
          </p>
        </div>

        {/* Solution Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-gradient-to-br from-[#CCFF00]/10 to-transparent border border-[#CCFF00]/20 rounded-2xl">
            <MapPin className="w-10 h-10 text-[#CCFF00] mb-4" />
            <h3 className="text-2xl mb-3">New Mobility Layers</h3>
            <p className="text-gray-400 leading-relaxed">
              Studio ILIOS Air Minds department develops eVTOL aircraft that bypass road congestion—lifting 
              emergency services, commuters, and cargo above gridlock for 15-minute urban connections.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border border-[#FFFF00]/20 rounded-2xl">
            <Zap className="w-10 h-10 text-[#FFFF00] mb-4" />
            <h3 className="text-2xl mb-3">Clean Energy Systems</h3>
            <p className="text-gray-400 leading-relaxed">
              Hybrid hydrogen-electric propulsion, zero-emission EVs, and sustainable energy 
              infrastructure developed by our Automotive and Astrion Arc departments.
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#DFFF00]/10 to-transparent border border-[#DFFF00]/20 rounded-2xl">
            <TrendingUp className="w-10 h-10 text-[#DFFF00] mb-4" />
            <h3 className="text-2xl mb-3">Intelligent Automation</h3>
            <p className="text-gray-400 leading-relaxed">
              HumannovaMind AI combined with our Robotics department creates automation systems that 
              optimize healthcare access and bring smart infrastructure to 200M+ underserved people.
            </p>
          </div>
        </div>

        {/* Make in India */}
        <div className="p-10 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-xl">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-orange-400" />
            </div>
            <div>
              <h3 className="text-3xl mb-3">Designed, Built, and Deployed in India</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                95% of Studio ILIOS components are sourced from Indian manufacturers. 
                Our engineering hubs in Bangalore, Hyderabad, Chennai, and Pune create 
                2,000+ high-skill jobs while building India's aerospace, automotive, and AI capabilities.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm rounded-full">
                  Make in India Certified
                </span>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm rounded-full">
                  2,000+ Jobs Created
                </span>
                <span className="px-4 py-2 bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm rounded-full">
                  4 Engineering Centers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}