import { Target, Users, Zap, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Building sustainable aviation solutions for India\'s unique mobility challenges'
  },
  {
    icon: Users,
    title: 'India-First Engineering',
    description: 'Designed, developed, and manufactured in India for Indian conditions'
  },
  {
    icon: Zap,
    title: 'Innovation Focus',
    description: 'Advancing hybrid hydrogen-electric propulsion and autonomous flight systems'
  },
  {
    icon: Globe,
    title: 'Impact at Scale',
    description: 'Connecting 1.4 billion people with affordable, clean regional air mobility'
  }
];

export function AboutAirMinds() {
  return (
    <section id="about" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">About Air Minds</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Redefining Regional Aviation for India
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Air Minds is an aerospace innovation company building the next generation of 
            clean, efficient aircraft for India's diverse geography and mobility needs. 
            Our flagship platform, SkyHop, combines hybrid hydrogen-electric propulsion 
            with advanced autonomous systems to deliver safe, sustainable, and accessible 
            air travel across the nation.
          </p>
        </div>

        {/* Aircraft Image Feature */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10">
            <img
              src="figma:asset/ad3323c02c92dce21112c0a9c83860679879ec5c.png"
              alt="SkyHop Front View"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="w-14 h-14 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-colors">
                <value.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              <h3 className="text-xl mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-5xl text-[#CCFF00] mb-2">800+</div>
            <div className="text-gray-400">Kilometers Range</div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-5xl text-[#FFFF00] mb-2">Zero</div>
            <div className="text-gray-400">CO₂ Emissions</div>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-5xl text-[#DFFF00] mb-2">2026</div>
            <div className="text-gray-400">Commercial Launch</div>
          </div>
        </div>

        {/* India Operations Visual */}
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632064235821-403b1f6d34c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGNpdHklMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NTU0NTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="India City Aerial View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent flex items-center">
            <div className="max-w-2xl px-12">
              <h3 className="text-3xl mb-4">Connecting India's Urban Centers</h3>
              <p className="text-gray-300 mb-6">
                SkyHop enables rapid inter-city travel, bypassing congested roads and 
                bringing sustainable air mobility to India's growing metropolitan regions.
              </p>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">250+ Routes</span>
                <span className="px-4 py-2 bg-white/10 border border-white/20 text-sm rounded-lg">70% Time Savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}