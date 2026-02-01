import { ArrowRight, Mail, Phone, FileText, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const ctaOptions = [
  {
    icon: FileText,
    title: 'Government Bodies',
    description: 'Partner with us for advanced air mobility infrastructure and policy development.',
    buttonText: 'Schedule Meeting',
    gradient: 'from-[#CCFF00] to-[#FFFF00]'
  },
  {
    icon: Users,
    title: 'Aviation Startups',
    description: 'Collaborate on technology integration, route planning, and service deployment.',
    buttonText: 'Explore Opportunities',
    gradient: 'from-[#DFFF00] to-[#CCFF00]'
  },
  {
    icon: Phone,
    title: 'Defense Teams',
    description: 'Discuss strategic applications for defense, surveillance, and tactical operations.',
    buttonText: 'Contact Defense Division',
    gradient: 'from-orange-400 to-red-600'
  },
  {
    icon: Mail,
    title: 'Investors',
    description: 'Join us in revolutionizing India\'s aviation landscape with sustainable technology.',
    buttonText: 'View Investment Deck',
    gradient: 'from-[#FFFF00] to-[#DFFF00]'
  }
];

export function CallToAction() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1585836452451-3f85c51df7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJjcmFmdCUyMGNvY2twaXQlMjBmdXR1cmV8ZW58MXx8fHwxNzY1NTQzNDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="SkyHop Cockpit"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/98 via-cyan-950/95 to-slate-900/97"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl mb-6 tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white via-[#CCFF00]/20 to-white bg-clip-text text-transparent">
              Ready to Shape
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#CCFF00] via-[#DFFF00] to-[#FFFF00] bg-clip-text text-transparent">
              India's Aviation Future?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with Air Minds to bring sustainable, hydrogen-powered aviation to every corner of India. 
            Let's make history together.
          </p>
        </div>

        {/* CTA Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ctaOptions.map((option, index) => (
            <div
              key={index}
              className="group relative p-6 bg-slate-900/60 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-[#CCFF00]/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity`}></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${option.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <option.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl text-white mb-3 text-center">{option.title}</h3>
              <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">{option.description}</p>
              
              <button className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${option.gradient} bg-opacity-10 text-[#CCFF00] rounded-lg hover:bg-opacity-100 hover:text-black transition-all text-sm group-hover:shadow-lg`}>
                {option.buttonText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="p-10 bg-gradient-to-br from-[#CCFF00]/10 to-[#FFFF00]/10 backdrop-blur-sm rounded-3xl border border-[#CCFF00]/20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="w-8 h-8 text-[#CCFF00] mx-auto mb-3" />
              <div className="text-gray-400 text-sm mb-2">Email Us</div>
              <div className="text-white">contact@airminds.in</div>
            </div>
            <div className="text-center">
              <Phone className="w-8 h-8 text-[#FFFF00] mx-auto mb-3" />
              <div className="text-gray-400 text-sm mb-2">Call Us</div>
              <div className="text-white">+91 80 4567 8900</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#DFFF00] mx-auto mb-3" />
              <div className="text-gray-400 text-sm mb-2">Visit Us</div>
              <div className="text-white">Bengaluru, Karnataka</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#CCFF00] rounded-full"></div>
            <span>DGCA Registered</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#FFFF00] rounded-full"></div>
            <span>ISO 9001:2015</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#DFFF00] rounded-full"></div>
            <span>Make in India Certified</span>
          </div>
          <div className="w-px h-4 bg-gray-700"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#CCFF00] rounded-full"></div>
            <span>AS9100 Compliant</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CCFF00]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#FFFF00]/10 rounded-full blur-3xl"></div>
      
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </section>
  );
}