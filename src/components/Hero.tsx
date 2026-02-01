import { ArrowRight, Plane, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1624233179818-9a8aefacbeec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGFpcmNyYWZ0JTIwZnV0dXJlfGVufDF8fHx8MTc2NTU0MzQ3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="SkyHop Aircraft"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Electric Glow Effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#CCFF00]/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFFF00]/15 rounded-full blur-[100px]"></div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 lg:px-8 bg-black/60 backdrop-blur-xl border-b border-[#CCFF00]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-[#CCFF00] rounded-lg flex items-center justify-center shadow-lg shadow-[#CCFF00]/50 hover:shadow-[#CCFF00]/80 transition-all">
                <Plane className="w-7 h-7 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFFF00] rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="text-2xl tracking-tight text-[#CCFF00]">Air Minds</div>
              <div className="text-[10px] text-[#DFFF00] tracking-widest uppercase">SkyHop Aviation</div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <a href="#technology" className="text-white hover:text-[#CCFF00] transition-colors">
              Technology
            </a>
            <a href="#india" className="text-white hover:text-[#CCFF00] transition-colors">
              India Impact
            </a>
            <a href="#process" className="text-white hover:text-[#CCFF00] transition-colors">
              Process
            </a>
            <a href="#applications" className="text-white hover:text-[#CCFF00] transition-colors">
              Applications
            </a>
            <button className="px-6 py-3 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] hover:shadow-lg hover:shadow-[#CCFF00]/60 transition-all">
              Collaborate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 lg:px-8">
        <div className="max-w-5xl">
          {/* Energy Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-black/80 backdrop-blur-sm border-2 border-[#CCFF00] rounded-full mb-8 shadow-lg shadow-[#CCFF00]/30">
            <Zap className="w-5 h-5 text-[#CCFF00] animate-pulse" />
            <span className="text-[#CCFF00] tracking-wide">HYDROGEN-ELECTRIC REVOLUTION</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-7xl lg:text-9xl mb-8 leading-[0.9] tracking-tighter">
            <span className="block text-white">SkyHop</span>
            <span className="block text-[#CCFF00]">The Future</span>
            <span className="block text-white">of Flight</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl lg:text-3xl text-gray-300 mb-10 leading-relaxed max-w-3xl">
            India's first <span className="text-[#CCFF00]">hybrid hydrogen-electric aircraft</span>. 
            Zero emissions. Infinite possibilities. Engineered for tomorrow.
          </p>

          {/* Performance Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="p-6 bg-black/80 backdrop-blur-sm border border-[#CCFF00]/30 rounded-xl hover:border-[#CCFF00] transition-all group">
              <div className="text-5xl text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform">800</div>
              <div className="text-[#DFFF00] text-sm">KM RANGE</div>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-sm border border-[#FFFF00]/30 rounded-xl hover:border-[#FFFF00] transition-all group">
              <div className="text-5xl text-[#FFFF00] mb-2 group-hover:scale-110 transition-transform">0%</div>
              <div className="text-[#DFFF00] text-sm">EMISSIONS</div>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-sm border border-[#DFFF00]/30 rounded-xl hover:border-[#DFFF00] transition-all group">
              <div className="text-5xl text-[#DFFF00] mb-2 group-hover:scale-110 transition-transform">250</div>
              <div className="text-[#CCFF00] text-sm">KM/H CRUISE</div>
            </div>
            <div className="p-6 bg-black/80 backdrop-blur-sm border border-[#CCFF00]/30 rounded-xl hover:border-[#CCFF00] transition-all group">
              <div className="text-5xl text-[#CCFF00] mb-2 group-hover:scale-110 transition-transform">98</div>
              <div className="text-[#DFFF00] text-sm">% EFFICIENT</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#CCFF00] text-black rounded-xl hover:bg-[#FFFF00] hover:shadow-2xl hover:shadow-[#CCFF00]/60 transition-all text-lg">
              Explore Technology
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-black border-2 border-[#CCFF00] text-[#CCFF00] rounded-xl hover:bg-[#CCFF00]/10 hover:shadow-lg hover:shadow-[#CCFF00]/40 transition-all text-lg">
              View Specifications
            </button>
          </div>
        </div>
      </div>

      {/* Energy Flow Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#CCFF00" stopOpacity="0" />
              <stop offset="50%" stopColor="#CCFF00" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFF00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#line-gradient)" strokeWidth="2" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="url(#line-gradient)" strokeWidth="2" />
        </svg>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
    </div>
  );
}