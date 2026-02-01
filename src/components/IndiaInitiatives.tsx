import { Flag, Target, Zap, Award } from 'lucide-react';

const initiatives = [
  {
    icon: Flag,
    title: 'Make in India',
    description: 'Contributing to indigenous aerospace manufacturing with 98% locally sourced components and indigenous technology.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Target,
    title: 'Aatmanirbhar Bharat',
    description: 'Achieving self-reliance in defense and aerospace through cutting-edge R&D and advanced propulsion systems.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Zap,
    title: 'Advanced UAV Systems',
    description: 'Developing next-generation autonomous drones for defense, surveillance, and civilian applications.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Award,
    title: 'DRDO & HAL Ecosystem',
    description: 'Strategic partnerships with defense research organizations and public sector aerospace enterprises.',
    color: 'from-green-500 to-emerald-500'
  }
];

export function IndiaInitiatives() {
  return (
    <section id="initiatives" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-full mb-4 border border-blue-500/20">
            India's Aerospace Leadership
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Aligned with National Vision
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proudly supporting India's journey toward aerospace excellence, self-reliance, and global competitiveness 
            in advanced aviation technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group relative p-6 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <initiative.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-3">{initiative.title}</h3>
              <p className="text-gray-400 leading-relaxed">{initiative.description}</p>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 backdrop-blur-sm rounded-2xl border border-blue-500/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">₹500Cr+</div>
              <div className="text-gray-400">R&D Investment</div>
            </div>
            <div>
              <div className="text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-400">IIT Collaborations</div>
            </div>
            <div>
              <div className="text-4xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">25+</div>
              <div className="text-gray-400">Patents Filed</div>
            </div>
            <div>
              <div className="text-4xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-gray-400">DGCA Compliant</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
