import { Heart, Mountain, Package, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const useCases = [
  {
    icon: Heart,
    title: 'Emergency Medical Transport',
    challenge: 'Time-critical patient evacuation from remote areas where road infrastructure is limited or non-existent',
    solution: '15-minute response time, direct hospital-to-hospital routes, organ transport capability',
    impact: '10,000+ lives saved annually'
  },
  {
    icon: Mountain,
    title: 'Rural & Hill Connectivity',
    challenge: 'Over 500 remote villages and hill stations remain disconnected from major cities due to terrain challenges',
    solution: 'VTOL operations from constrained spaces, weather-independent reliability, affordable fares',
    impact: '2M+ people connected'
  },
  {
    icon: Package,
    title: 'Inter-City Regional Routes',
    challenge: 'Road congestion and limited rail connectivity make regional travel inefficient and time-consuming',
    solution: 'Direct city-to-city routes bypassing traffic, 70% time reduction, sustainable operations',
    impact: '250+ routes planned'
  },
  {
    icon: Shield,
    title: 'Defense & Surveillance',
    challenge: 'Border security and tactical deployment require rapid, flexible, and sustainable aviation solutions',
    solution: 'Long endurance, autonomous capability, low operating costs, strategic deployment',
    impact: 'National security asset'
  }
];

export function UseCaseScenarios() {
  return (
    <section id="usecases" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Use Cases</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Solving India's Mobility Challenges
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            From emergency medical services to rural connectivity, SkyHop addresses 
            real infrastructure gaps with practical, scalable aviation solutions.
          </p>
        </div>

        {/* Featured Image */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1729057889327-e94c3566aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHJ1cmFsJTIwbGFuZHNjYXBlJTIwYWVyaWFsfGVufDF8fHx8MTc2NTU0NTAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="India Rural Landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl mb-2">Rural Connectivity</h3>
              <p className="text-gray-300">
                Connecting remote villages and hill stations across India
              </p>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1505976590748-a9a89c389bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1vdW50YWlucyUyMGxhbmRzY2FwZSUyMGhpbWFsYXlhfGVufDF8fHx8MTc2NTU0NTUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Himalayan Mountains"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl mb-2">High-Altitude Operations</h3>
              <p className="text-gray-300">
                Designed for challenging Himalayan terrain and extreme weather
              </p>
            </div>
          </div>
        </div>

        {/* Use Case Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#CCFF00]/30 transition-all">
              <div className="w-14 h-14 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center mb-6">
                <useCase.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl mb-4">{useCase.title}</h3>
              
              <div className="mb-4">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Challenge</div>
                <p className="text-gray-400">{useCase.challenge}</p>
              </div>
              
              <div className="mb-4">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Solution</div>
                <p className="text-gray-300">{useCase.solution}</p>
              </div>
              
              <div className="pt-4 border-t border-white/10">
                <div className="text-[#CCFF00]">{useCase.impact}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Medical Emergency Feature */}
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1721411480070-fcb558776d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVsaWNvcHRlciUyMGVtZXJnZW5jeXxlbnwxfHx8fDE3NjU0NzMwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical Emergency Transport"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent flex items-center">
            <div className="max-w-xl px-12">
              <h3 className="text-3xl mb-4">Emergency Medical Transport</h3>
              <p className="text-gray-300 mb-6">
                15-minute response time for critical patient evacuation from remote areas. 
                SkyHop's hybrid propulsion ensures reliable operation in all weather conditions.
              </p>
              <div className="inline-block px-4 py-2 bg-[#CCFF00]/20 border border-[#CCFF00]/40 text-[#CCFF00] rounded-lg">
                10,000+ Lives Saved Annually
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}