import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Flag } from 'lucide-react';

export function IndiaShowcase() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Made in India</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            Designed for India's Diverse Geography
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            From coastal plains to Himalayan peaks, SkyHop operates across 
            India's most challenging terrains and weather conditions.
          </p>
        </div>

        {/* Image Grid Showcase */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mountain Operations */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1505976590748-a9a89c389bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1vdW50YWlucyUyMGxhbmRzY2FwZSUyMGhpbWFsYXlhfGVufDF8fHx8MTc2NTU0NTUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Himalayan Mountains"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-[#CCFF00]" />
                <span className="text-[#CCFF00]">Northern India</span>
              </div>
              <h3 className="text-3xl mb-3">High-Altitude Missions</h3>
              <p className="text-gray-300 mb-4">
                Engineered to operate at 15,000 feet, connecting remote Himalayan communities 
                and supporting defense operations in challenging mountain terrain.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-sm rounded-full">
                  Cold Weather Operations
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-sm rounded-full">
                  15,000 ft Ceiling
                </span>
              </div>
            </div>
          </div>

          {/* Urban Operations */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632064235821-403b1f6d34c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGNpdHklMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NTU0NTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="India City"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="flex items-center gap-2 mb-3">
                <Flag className="w-5 h-5 text-[#FFFF00]" />
                <span className="text-[#FFFF00]">Metropolitan Hubs</span>
              </div>
              <h3 className="text-3xl mb-3">Urban Air Mobility</h3>
              <p className="text-gray-300 mb-4">
                Reducing travel time by 70% between major cities, enabling rapid 
                business travel and decongesting ground infrastructure.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-sm rounded-full">
                  Inter-City Routes
                </span>
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-sm rounded-full">
                  250+ Connections
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Make in India Banner */}
        <div className="mt-12 p-8 bg-gradient-to-r from-orange-500/10 to-transparent border-l-4 border-orange-500 rounded-xl">
          <div className="flex items-start gap-4">
            <Flag className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl mb-2">Make in India Certified</h3>
              <p className="text-gray-400 leading-relaxed">
                95% of SkyHop components are sourced from Indian manufacturers, supporting 
                domestic aerospace capabilities and creating 2,000+ high-skill jobs across 
                Bengaluru, Hyderabad, Chennai, and Pune.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
