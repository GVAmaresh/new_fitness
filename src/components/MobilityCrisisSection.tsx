import { Clock, AlertTriangle, TrendingDown, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const congestionImpacts = [
  {
    icon: AlertTriangle,
    title: 'Emergency Response Delays',
    stat: '45+ minutes',
    description: 'Average ambulance response time in peak hours, turning critical situations fatal',
    color: '#FF4444'
  },
  {
    icon: Clock,
    title: 'Daily Commute Waste',
    stat: '3.5 hours',
    description: 'Lost per person daily to traffic congestion, impacting productivity and quality of life',
    color: '#FFFF00'
  },
  {
    icon: TrendingDown,
    title: 'Cargo Delivery Delays',
    stat: '60% slower',
    description: 'Supply chain inefficiency causing business losses and delayed essential goods',
    color: '#FF8800'
  },
  {
    icon: Zap,
    title: 'Service Access Gap',
    stat: '200M+ people',
    description: 'In rural and semi-urban areas lack timely access to healthcare and essential services',
    color: '#CCFF00'
  }
];

export function MobilityCrisisSection() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="text-sm text-red-400 uppercase tracking-widest mb-4">The Mobility Crisis</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            India's Cities Are <span className="text-red-400">Gridlocked</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Bangalore ranks as one of the world's most congested cities. Roads are saturated, 
            emergency services struggle to reach patients, and millions of hours are lost every day 
            to traffic that ground-based infrastructure simply cannot solve.
          </p>
        </div>

        {/* Hero Image - Congestion */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1672084305848-b151e89a8a78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjB0cmFmZmljJTIwY29uZ2VzdGlvbiUyMGluZGlhfGVufDF8fHx8MTc2NTU0NjE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Bangalore Traffic Congestion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-12">
            <div className="max-w-3xl">
              <h3 className="text-4xl mb-4">Bangalore: World's Most Congested City</h3>
              <p className="text-xl text-gray-300 mb-6">
                Average commuters lose 158 hours annually to traffic delays. Emergency vehicles 
                face impossible conditions. The cost to the economy: ₹1.5 lakh crore per year.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-red-500/20 border border-red-500/40 text-red-400 rounded-lg">
                  #1 Globally Congested
                </div>
                <div className="px-4 py-2 bg-orange-500/20 border border-orange-500/40 text-orange-400 rounded-lg">
                  71% Traffic Increase (2019-2023)
                </div>
                <div className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 rounded-lg">
                  2.4x Population Growth
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {congestionImpacts.map((impact, index) => (
            <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-all">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: `${impact.color}20` }}>
                <impact.icon className="w-6 h-6" style={{ color: impact.color }} />
              </div>
              <div className="text-3xl mb-2" style={{ color: impact.color }}>{impact.stat}</div>
              <h3 className="text-lg mb-2">{impact.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#CCFF00]/30 to-transparent mb-20"></div>

        {/* Solution Introduction */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">The Solution</div>
          <h2 className="text-4xl md:text-6xl mb-6">
            A New <span className="text-[#CCFF00]">Mobility Layer</span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            SkyHop lifts people, cargo, and emergency services above road congestion. 
            It's a clean, fast air-based transport network connecting urban centers with 
            semi-urban towns and remote rural regions—places road infrastructure will never reach efficiently.
          </p>
        </div>

        {/* Connectivity Visual */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Urban */}
          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1699444117309-dac1a50779f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwaGlnaHdheSUyMHRyYWZmaWMlMjBuaWdodHxlbnwxfHx8fDE3NjU1NDYxNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Urban Centers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-6">
                <div className="w-10 h-10 bg-[#CCFF00] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-black">1</span>
                </div>
                <h3 className="text-2xl mb-2">Urban Hubs</h3>
                <p className="text-gray-300 text-sm">
                  Bangalore, Mumbai, Delhi, Hyderabad – bypass congested roads entirely
                </p>
              </div>
            </div>
          </div>

          {/* Semi-Urban */}
          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1632064235821-403b1f6d34c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGNpdHklMjBhZXJpYWwlMjB2aWV3fGVufDF8fHx8MTc2NTU0NTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Semi-Urban Towns"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-6">
                <div className="w-10 h-10 bg-[#FFFF00] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-black">2</span>
                </div>
                <h3 className="text-2xl mb-2">Semi-Urban Towns</h3>
                <p className="text-gray-300 text-sm">
                  Connect tier-2 and tier-3 cities with rapid, reliable air transport
                </p>
              </div>
            </div>
          </div>

          {/* Rural */}
          <div className="relative h-80 rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1505976590748-a9a89c389bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMG1vdW50YWlucyUyMGxhbmRzY2FwZSUyMGhpbWFsYXlhfGVufDF8fHx8MTc2NTU0NTUwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Rural Regions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
              <div className="p-6">
                <div className="w-10 h-10 bg-[#DFFF00] rounded-lg flex items-center justify-center mb-3">
                  <span className="text-black">3</span>
                </div>
                <h3 className="text-2xl mb-2">Rural Regions</h3>
                <p className="text-gray-300 text-sm">
                  Reach remote villages and mountain communities unreachable by road
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gradient-to-br from-[#CCFF00]/10 to-transparent border border-[#CCFF00]/20 rounded-2xl">
            <div className="text-5xl text-[#CCFF00] mb-3">15 min</div>
            <h3 className="text-xl mb-2">Emergency Response</h3>
            <p className="text-gray-400">
              From dispatch to patient location, anywhere in the network—saving thousands of lives annually
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#FFFF00]/10 to-transparent border border-[#FFFF00]/20 rounded-2xl">
            <div className="text-5xl text-[#FFFF00] mb-3">70%</div>
            <h3 className="text-xl mb-2">Time Savings</h3>
            <p className="text-gray-400">
              Bangalore to Mysore in 45 minutes instead of 3+ hours by road—reclaim your day
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-[#DFFF00]/10 to-transparent border border-[#DFFF00]/20 rounded-2xl">
            <div className="text-5xl text-[#DFFF00] mb-3">Zero</div>
            <h3 className="text-xl mb-2">Emissions</h3>
            <p className="text-gray-400">
              Hybrid hydrogen-electric propulsion delivers clean mobility without adding to urban air pollution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
