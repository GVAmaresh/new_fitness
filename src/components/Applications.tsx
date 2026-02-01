import { Heart, Package, Mountain, Shield } from 'lucide-react';

const applications = [
  {
    icon: Heart,
    title: 'Medical Airlift',
    description: 'Emergency patient transport and organ delivery with 15-minute response time',
    impact: '10,000+ Lives Saved Annually',
    color: '#CCFF00'
  },
  {
    icon: Mountain,
    title: 'Rural Connectivity',
    description: 'Connecting 500+ remote villages and hill stations across India',
    impact: '2M+ People Connected',
    color: '#FFFF00'
  },
  {
    icon: Package,
    title: 'Cargo Routes',
    description: 'Last-mile delivery and express logistics for e-commerce and pharma',
    impact: '50K Daily Deliveries',
    color: '#DFFF00'
  },
  {
    icon: Shield,
    title: 'Defense Operations',
    description: 'Border surveillance, tactical deployment, and reconnaissance missions',
    impact: 'Strategic National Asset',
    color: '#CCFF00'
  }
];

export function Applications() {
  return (
    <section id="applications" className="relative py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-3 bg-black border-2 border-[#CCFF00] rounded-full mb-6">
            <span className="text-[#CCFF00] tracking-widest uppercase text-sm">Real-World Impact</span>
          </div>
          <h2 className="text-6xl lg:text-7xl mb-6 text-white tracking-tight">
            Transforming
            <span className="block text-[#CCFF00]">Critical Sectors</span>
          </h2>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="group relative p-10 bg-black border-2 border-[#CCFF00]/30 rounded-3xl hover:border-[#CCFF00] transition-all overflow-hidden"
            >
              {/* Glow Effect */}
              <div
                className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity"
                style={{ backgroundColor: app.color }}
              ></div>

              <div className="relative z-10">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"
                  style={{ backgroundColor: app.color }}
                >
                  <app.icon className="w-10 h-10 text-black" />
                </div>

                <h3 className="text-3xl text-white mb-4">{app.title}</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">{app.description}</p>
                
                <div className="inline-block px-6 py-3 bg-black/80 border border-[#CCFF00]/40 rounded-full">
                  <span className="text-[#CCFF00]">{app.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          <div className="p-8 bg-black border border-[#CCFF00]/20 rounded-xl text-center">
            <div className="text-5xl text-[#CCFF00] mb-2">250+</div>
            <div className="text-gray-400">Routes Planned</div>
          </div>
          <div className="p-8 bg-black border border-[#FFFF00]/20 rounded-xl text-center">
            <div className="text-5xl text-[#FFFF00] mb-2">70%</div>
            <div className="text-gray-400">Time Reduction</div>
          </div>
          <div className="p-8 bg-black border border-[#DFFF00]/20 rounded-xl text-center">
            <div className="text-5xl text-[#DFFF00] mb-2">24/7</div>
            <div className="text-gray-400">Operations</div>
          </div>
          <div className="p-8 bg-black border border-[#CCFF00]/20 rounded-xl text-center">
            <div className="text-5xl text-[#CCFF00] mb-2">100K+</div>
            <div className="text-gray-400">Lives Impacted</div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    </section>
  );
}
