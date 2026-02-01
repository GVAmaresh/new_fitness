import { Building2, GraduationCap, Factory, Microscope } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const partnerCategories = [
  {
    icon: GraduationCap,
    title: 'Research Institutes',
    partners: ['IISc Bangalore', 'IIT Bombay', 'IIT Madras', 'IIT Kanpur', 'NAL Bangalore'],
    description: 'Collaborative research in aerodynamics, propulsion, and hydrogen technology.'
  },
  {
    icon: Factory,
    title: 'Manufacturing Partners',
    partners: ['HAL', 'Tata Advanced', 'L&T Defense', 'Bharat Forge', 'Dynamatic Tech'],
    description: 'Precision manufacturing of airframes, propulsion systems, and composites.'
  },
  {
    icon: Building2,
    title: 'Government Bodies',
    partners: ['DGCA', 'AAI', 'MoCA', 'DRDO', 'ISRO'],
    description: 'Regulatory compliance, testing facilities, and strategic collaboration.'
  },
  {
    icon: Microscope,
    title: 'Testing Facilities',
    partners: ['NAL Wind Tunnel', 'ARAI Test Track', 'CSIR Labs', 'ISRO Ranges'],
    description: 'Advanced testing infrastructure for validation and certification.'
  }
];

const locations = [
  {
    city: 'Bengaluru',
    role: 'R&D Headquarters',
    focus: 'Design, simulation, and prototype development',
    gradient: 'from-[#CCFF00] to-[#FFFF00]'
  },
  {
    city: 'Hyderabad',
    role: 'Manufacturing Hub',
    focus: 'Production facility and final assembly',
    gradient: 'from-[#DFFF00] to-[#CCFF00]'
  },
  {
    city: 'Chennai',
    role: 'Testing Center',
    focus: 'Flight testing and quality assurance',
    gradient: 'from-[#FFFF00] to-[#DFFF00]'
  },
  {
    city: 'Pune',
    role: 'Components Lab',
    focus: 'Hydrogen systems and battery development',
    gradient: 'from-[#CCFF00] to-[#DFFF00]'
  }
];

export function Partnerships() {
  return (
    <section id="partners" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#CCFF00]/10 backdrop-blur-sm text-[#CCFF00] rounded-full mb-4 border border-[#CCFF00]/20">
            Collaborative Ecosystem
          </div>
          <h2 className="text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-[#CCFF00]/30 bg-clip-text text-transparent">
              Strategic Partnerships
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building India's aerospace future through collaboration with leading research institutes, 
            manufacturers, and government bodies.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partnerCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-[#CCFF00]/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#CCFF00] to-[#FFFF00] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <category.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-xl text-white mb-3">{category.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{category.description}</p>
              <div className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <div key={idx} className="inline-block px-3 py-1 bg-slate-800/50 rounded-full text-xs text-gray-400 mr-2 mb-2 border border-slate-700">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Location Hubs */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-12">
            <span className="bg-gradient-to-r from-[#CCFF00] to-[#FFFF00] bg-clip-text text-transparent">
              India Aerospace Hubs
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="relative p-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${location.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity`}></div>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${location.gradient} rounded-full animate-pulse`}></div>
                  <h4 className="text-xl text-white">{location.city}</h4>
                </div>
                <div className={`text-lg bg-gradient-to-r ${location.gradient} bg-clip-text text-transparent mb-2`}>
                  {location.role}
                </div>
                <p className="text-gray-400 text-sm">{location.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Showcase */}
        <div className="relative p-12 bg-gradient-to-br from-[#CCFF00]/5 to-[#FFFF00]/5 backdrop-blur-sm rounded-3xl border border-[#CCFF00]/20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764917360214-79ec1f6b02fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzY1NTQzNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Manufacturing Facility"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl text-center mb-8">
              <span className="bg-gradient-to-r from-[#CCFF00] to-[#FFFF00] bg-clip-text text-transparent">
                World-Class Testing Infrastructure
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800">
                <div className="text-4xl mb-3">🌀</div>
                <div className="text-white text-lg mb-2">Wind Tunnel</div>
                <div className="text-gray-400 text-sm">Mach 0.8 capabilities at NAL Bangalore</div>
              </div>
              <div className="p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800">
                <div className="text-4xl mb-3">🖥️</div>
                <div className="text-white text-lg mb-2">Simulation Lab</div>
                <div className="text-gray-400 text-sm">Hardware-in-loop testing facility</div>
              </div>
              <div className="p-6 bg-slate-900/60 backdrop-blur-sm rounded-xl border border-slate-800">
                <div className="text-4xl mb-3">🛩️</div>
                <div className="text-white text-lg mb-2">Flight Range</div>
                <div className="text-gray-400 text-sm">Dedicated testing area in Tamil Nadu</div>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#CCFF00]/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </section>
  );
}