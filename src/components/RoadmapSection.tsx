import { CheckCircle2, Circle } from 'lucide-react';

const milestones = [
  {
    year: '2023',
    title: 'Concept & Design',
    status: 'completed',
    description: 'CAD modeling, aerodynamic simulations, propulsion architecture'
  },
  {
    year: '2024',
    title: 'Prototype Development',
    status: 'completed',
    description: 'Component testing, hydrogen integration, ground trials'
  },
  {
    year: '2025',
    title: 'Flight Testing',
    status: 'in-progress',
    description: 'Full-scale flight tests, performance validation, safety certification'
  },
  {
    year: '2026',
    title: 'DGCA Certification',
    status: 'upcoming',
    description: 'Type certification, pilot training programs, regulatory approval'
  },
  {
    year: '2027',
    title: 'Commercial Launch',
    status: 'upcoming',
    description: 'Initial route deployment, fleet scaling, operational expansion'
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Roadmap</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Path to Commercial Operations
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our systematic approach to bringing SkyHop from concept to certified commercial aircraft, 
            with DGCA compliance and safety validation at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  {milestone.status === 'completed' ? (
                    <div className="w-16 h-16 bg-[#CCFF00]/20 border-2 border-[#CCFF00] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#CCFF00]" />
                    </div>
                  ) : milestone.status === 'in-progress' ? (
                    <div className="w-16 h-16 bg-[#FFFF00]/20 border-2 border-[#FFFF00] rounded-full flex items-center justify-center">
                      <Circle className="w-8 h-8 text-[#FFFF00] animate-pulse" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-white/5 border-2 border-white/20 rounded-full flex items-center justify-center">
                      <Circle className="w-8 h-8 text-white/40" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-3">
                  <div className="text-sm text-gray-500 mb-1">{milestone.year}</div>
                  <h3 className="text-2xl mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                  
                  {milestone.status === 'completed' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-sm rounded-full">
                      Completed
                    </div>
                  )}
                  {milestone.status === 'in-progress' && (
                    <div className="mt-3 inline-block px-3 py-1 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] text-sm rounded-full">
                      In Progress
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aircraft Development Image */}
        <div className="mt-20 relative rounded-2xl overflow-hidden bg-black border border-white/10">
          <img
            src="figma:asset/4973ab2f990f6eb2c60159d7e92ac33a8429798c.png"
            alt="SkyHop Development"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-end">
            <div className="p-12 w-full">
              <div className="max-w-2xl">
                <h3 className="text-3xl mb-3">On Track for 2026 Launch</h3>
                <p className="text-gray-300">
                  Our development roadmap ensures rigorous testing, certification compliance, 
                  and operational readiness for India's aviation ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}