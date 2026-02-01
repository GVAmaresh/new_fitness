import { Target, Compass, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function VisionMission() {
  return (
    <section id="vision-mission" className="relative py-32 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Vision */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center">
                  <Compass className="w-6 h-6 text-[#CCFF00]" />
                </div>
                <h2 className="text-5xl">Vision</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  The world we inhabit is not accidental it is designed and engineered.
                </p>
                <p>
                  From the spaces we live in to the objects we use every day, from cities and mobility 
                  systems to the machines that carry us beyond Earth, every layer of human existence 
                  is shaped by thoughtful design and precise engineering.
                </p>
                <p>
                  At Studio ILIOS, we envision a future where engineering becomes a catalyst for human 
                  evolution shaping environments, systems, and technologies that elevate life on Earth 
                  and beyond.
                </p>
                <p className="text-[#CCFF00]">
                  We believe that progress emerges when imagination meets engineering intelligence, 
                  creating solutions that are resilient, humane, and visionary.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMG5pZ2h0JTIwbGlnaHRzfGVufDF8fHx8MTc2NTYyMzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Future Cities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-gray-300 text-sm">
                    Engineering the future of human environments — from Earth to beyond
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent mb-32"></div>

        {/* Mission */}
        <div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1580835921597-91c6b459c917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlYW0lMjB3b3JraW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjU2MjMxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Engineering Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end">
                <div className="p-8">
                  <p className="text-gray-300 text-sm">
                    Interdisciplinary collaboration driving responsible innovation
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFFF00]/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#FFFF00]" />
                </div>
                <h2 className="text-5xl">Mission</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  At Studio ILIOS, our mission is to design and engineer systems that serve life — 
                  seamlessly, responsibly, and intelligently.
                </p>
                <p>
                  We integrate engineering precision, spatial intelligence, and design thinking to 
                  create solutions across scales, from products and mobility to architecture, 
                  infrastructure, and advanced technological systems.
                </p>
                <p className="text-[#FFFF00]">
                  Driven by research, innovation, and interdisciplinary collaboration, we shape 
                  environments that enhance human experience, respond to evolving societal needs, 
                  and enable sustainable futures extending from everyday life to interstellar possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mt-32 grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <Sparkles className="w-8 h-8 text-[#CCFF00] mb-4" />
            <h3 className="text-xl mb-3">Imagination Meets Engineering</h3>
            <p className="text-gray-400 leading-relaxed">
              Breakthrough solutions emerge when visionary thinking combines with precise engineering intelligence.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <Target className="w-8 h-8 text-[#FFFF00] mb-4" />
            <h3 className="text-xl mb-3">Systems That Serve Life</h3>
            <p className="text-gray-400 leading-relaxed">
              Every solution is designed to enhance human experience, respond to societal needs, and enable sustainable futures.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-2xl">
            <Compass className="w-8 h-8 text-[#DFFF00] mb-4" />
            <h3 className="text-xl mb-3">Earth to Beyond</h3>
            <p className="text-gray-400 leading-relaxed">
              Our engineering extends across all scales — from everyday life on Earth to interstellar possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}