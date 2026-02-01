import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - eVTOL */}
      <div className="absolute inset-0 z-0">
        <img
          src="figma:asset/a938a276169bafcf088000a40430d4e3f3a5fc5c.png"
          alt="SkyHop eVTOL Aircraft"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
      </div>

      {/* Accent Background - India Skyline (subtle overlay) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1753199694052-2d6f8a6aa274?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHNreWxpbmUlMjBjaXR5c2NhcGUlMjBhZXJpYWx8ZW58MXx8fHwxNzY1NTQ1OTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="India Skyline"
          className="w-full h-full object-cover object-bottom mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-2 bg-black/40 backdrop-blur-sm border border-[#CCFF00]/30 rounded-full mb-8">
          <span className="text-[#CCFF00] text-sm tracking-wide">INDIA'S NEXT GENERATION AVIATION</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight max-w-5xl mx-auto">
          Clean Aviation
          <br />
          <span className="text-[#CCFF00]">for India's Future</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Air Minds is pioneering hybrid hydrogen-electric aircraft to connect remote regions, 
          deliver emergency medical services, and transform regional mobility across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#skyhop"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-all"
          >
            Discover SkyHop
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#technology"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/20 text-white rounded-lg hover:border-[#CCFF00]/50 hover:bg-white/5 transition-all"
          >
            Our Technology
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
