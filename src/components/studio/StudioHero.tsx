import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function StudioHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765256931300-ceeaed648d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlY2hub2xvZ3klMjBmdXR1cmUlMjBjaXJjdWl0fGVufDF8fHx8MTc2NTYyMzEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Engineering Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-black/60 backdrop-blur-sm border border-[#CCFF00]/30 rounded-full mb-8">
          <span className="text-[#CCFF00] text-sm tracking-widest">MULTIDISCIPLINARY ENGINEERING STUDIO</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight max-w-6xl mx-auto leading-tight">
          Studio <span className="text-[#CCFF00]">ILIOS</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
          One engineering studio. Five integrated departments.
          <br />
          Building future systems for people, cities, and the planet.
        </p>

        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Studio ILIOS brings together AI, aviation, automotive, robotics, and advanced R&D 
          under one roof—engineering intelligent solutions for India's complexity and scale.
        </p>

        {/* Engineering Departments Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <span className="px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] rounded-full text-sm">
            HumannovaMind
          </span>
          <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] rounded-full text-sm">
            Air Minds
          </span>
          <span className="px-4 py-2 bg-[#DFFF00]/10 border border-[#DFFF00]/30 text-[#DFFF00] rounded-full text-sm">
            Automotive
          </span>
          <span className="px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] rounded-full text-sm">
            Robotics
          </span>
          <span className="px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/30 text-[#FFFF00] rounded-full text-sm">
            Astrion Arc R&D
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#vision-mission"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-all"
          >
            Our Vision & Mission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#departments"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg hover:border-[#CCFF00]/50 hover:bg-white/5 transition-all"
          >
            Explore Departments
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-[#CCFF00]" />
      </div>
    </section>
  );
}