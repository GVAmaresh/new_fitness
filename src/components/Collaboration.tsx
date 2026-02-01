import { ArrowRight, Building2, Users, Phone, Mail } from 'lucide-react';

const partners = [
  {
    icon: Building2,
    title: 'Government Bodies',
    description: 'Partner with us on aviation infrastructure and policy development'
  },
  {
    icon: Users,
    title: 'Aviation Startups',
    description: 'Collaborate on technology integration and route operations'
  },
  {
    icon: Phone,
    title: 'Defense Agencies',
    description: 'Strategic applications for surveillance and tactical deployment'
  },
  {
    icon: Mail,
    title: 'Investors',
    description: 'Join India\'s hydrogen-electric aviation revolution'
  }
];

export function Collaboration() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Massive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#CCFF00]/10 rounded-full blur-[200px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-7xl lg:text-8xl mb-6 text-white tracking-tight leading-tight">
            Shape India's
            <span className="block text-[#CCFF00]">Aviation Future</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
            Partner with Air Minds to bring sustainable, hydrogen-powered aviation to every corner of India
          </p>
          <button className="group inline-flex items-center gap-3 px-12 py-6 bg-[#CCFF00] text-black rounded-xl hover:bg-[#FFFF00] hover:shadow-2xl hover:shadow-[#CCFF00]/60 transition-all text-xl">
            Start Collaboration
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Partnership Options */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="p-8 bg-black border-2 border-[#CCFF00]/30 rounded-2xl hover:border-[#CCFF00] transition-all group"
            >
              <div className="w-16 h-16 bg-[#CCFF00] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <partner.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl text-white mb-3">{partner.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="p-12 bg-black border-2 border-[#CCFF00]/30 rounded-3xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Mail className="w-10 h-10 text-[#CCFF00] mx-auto mb-4" />
              <div className="text-gray-400 mb-2">Email</div>
              <div className="text-white text-lg">contact@airminds.in</div>
            </div>
            <div>
              <Phone className="w-10 h-10 text-[#FFFF00] mx-auto mb-4" />
              <div className="text-gray-400 mb-2">Phone</div>
              <div className="text-white text-lg">+91 80 4567 8900</div>
            </div>
            <div>
              <Building2 className="w-10 h-10 text-[#DFFF00] mx-auto mb-4" />
              <div className="text-gray-400 mb-2">Location</div>
              <div className="text-white text-lg">Bengaluru, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}