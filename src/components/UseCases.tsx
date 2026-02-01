import { MapPin, Heart, Package, Mountain, Building2, Users } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: 'Urban Air Mobility',
    description: 'Connecting metro airports with city centers, bypassing traffic congestion and reducing travel time by 70%.',
    applications: ['Airport Shuttles', 'Inter-City Transit', 'Business Travel', 'Tourism'],
    gradient: 'from-[#CCFF00] to-[#FFFF00]',
    emoji: '🏙️'
  },
  {
    icon: Heart,
    title: 'Medical Emergencies',
    description: 'Rapid response for critical medical situations, organ transport, and patient evacuation from remote areas.',
    applications: ['Emergency Response', 'Organ Delivery', 'Medical Supplies', 'Air Ambulance'],
    gradient: 'from-red-400 to-pink-600',
    emoji: '🚑'
  },
  {
    icon: Package,
    title: 'Cargo & Logistics',
    description: 'Last-mile delivery to remote regions, e-commerce logistics, and time-sensitive cargo transportation.',
    applications: ['Express Delivery', 'Medical Supplies', 'E-commerce', 'Postal Service'],
    gradient: 'from-[#DFFF00] to-[#CCFF00]',
    emoji: '📦'
  },
  {
    icon: Mountain,
    title: 'Remote Connectivity',
    description: 'Linking hill stations, islands, and isolated communities with reliable, weather-independent air service.',
    applications: ['Hill Stations', 'Island Connectivity', 'Rural Access', 'Tourism'],
    gradient: 'from-[#FFFF00] to-[#DFFF00]',
    emoji: '⛰️'
  },
  {
    icon: MapPin,
    title: 'Disaster Response',
    description: 'Rapid deployment for natural disasters, search & rescue operations, and relief material distribution.',
    applications: ['Search & Rescue', 'Relief Supplies', 'Evacuation', 'Assessment'],
    gradient: 'from-orange-400 to-red-600',
    emoji: '🚨'
  },
  {
    icon: Users,
    title: 'Defense & Surveillance',
    description: 'Border patrol, surveillance operations, and tactical deployment for defense and security agencies.',
    applications: ['Border Security', 'Surveillance', 'Reconnaissance', 'Quick Response'],
    gradient: 'from-slate-400 to-gray-600',
    emoji: '🛡️'
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/10 backdrop-blur-sm text-cyan-400 rounded-full mb-4 border border-cyan-500/20">
            Real-World Applications
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              SkyHop Ecosystem Applications
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Versatile deployment across India's diverse needs—from bustling cities 
            to the most remote corners of the nation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-[#CCFF00]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`}></div>
              
              {/* Icon and Emoji */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl">{useCase.emoji}</div>
              </div>
              
              <h3 className="text-2xl text-white mb-3 relative z-10">{useCase.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 relative z-10">{useCase.description}</p>
              
              {/* Applications */}
              <div className="space-y-2 pt-4 border-t border-slate-800/50 relative z-10">
                <div className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Key Applications</div>
                <div className="flex flex-wrap gap-2">
                  {useCase.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 border border-slate-700"
                    >
                      {app}
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Glow */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${useCase.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm rounded-2xl border border-cyan-500/20 text-center">
            <div className="text-4xl text-cyan-400 mb-2">250+</div>
            <div className="text-gray-400 text-sm">Planned Routes</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 text-center">
            <div className="text-4xl text-blue-400 mb-2">15 min</div>
            <div className="text-gray-400 text-sm">Avg Response Time</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-cyan-950/40 to-blue-950/40 backdrop-blur-sm rounded-2xl border border-cyan-500/20 text-center">
            <div className="text-4xl text-cyan-400 mb-2">70%</div>
            <div className="text-gray-400 text-sm">Time Savings</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-sm rounded-2xl border border-blue-500/20 text-center">
            <div className="text-4xl text-blue-400 mb-2">50K+</div>
            <div className="text-gray-400 text-sm">Lives Impacted</div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFFF00]/5 rounded-full blur-3xl"></div>
    </section>
  );
}