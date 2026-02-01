import { ArrowRight, Mail, Users, FileText, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const opportunities = [
  {
    icon: Users,
    title: 'Join Our Team',
    description: 'Work with India\'s brightest engineers across AI, aerospace, automotive, robotics, and R&D.',
    action: 'View Openings',
    href: '#careers'
  },
  {
    icon: Sparkles,
    title: 'Research Partnerships',
    description: 'Collaborate with Astrion Arc on breakthrough engineering research and innovation.',
    action: 'Partner With Us',
    href: '#partnerships'
  },
  {
    icon: FileText,
    title: 'Project Inquiries',
    description: 'Discuss how Studio ILIOS can engineer solutions for your organization\'s challenges.',
    action: 'Start a Conversation',
    href: '#contact'
  }
];

export function StudioCTA() {
  return (
    <section className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero CTA */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden mb-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761815139336-40b16b4cb8ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGVuZXJneSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NTY2OTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Future Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex items-center">
            <div className="max-w-2xl px-12">
              <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Building the Future</div>
              <h2 className="text-5xl mb-6">
                Engineering India's <span className="text-[#CCFF00]">Next Decade</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Studio ILIOS invites engineers, researchers, organizations, and partners 
                to join our integrated engineering ecosystem—building solutions that last, 
                serve millions, and protect our planet.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-all"
              >
                Let's Build Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#CCFF00]/30 transition-all group">
              <div className="w-14 h-14 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#CCFF00]/20 transition-colors">
                <opportunity.icon className="w-7 h-7 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl mb-3">{opportunity.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{opportunity.description}</p>
              <a
                href={opportunity.href}
                className="inline-flex items-center gap-2 text-[#CCFF00] hover:gap-3 transition-all"
              >
                {opportunity.action}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div id="contact" className="grid md:grid-cols-2 gap-12 p-12 bg-white/5 border border-white/10 rounded-2xl">
          <div>
            <h3 className="text-3xl mb-4">Get in Touch</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Whether you're a researcher, engineer, organization, or investor—we'd love to hear 
              from you. Let's discuss how Studio ILIOS Engineering can collaborate on India's future.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#CCFF00] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-500 text-sm mb-1">General Inquiries</div>
                  <a href="mailto:hello@studioilios.com" className="text-[#CCFF00] hover:text-[#FFFF00] transition-colors">
                    hello@studioilios.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-[#CCFF00] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-500 text-sm mb-1">Careers & Talent</div>
                  <a href="mailto:careers@studioilios.com" className="text-[#CCFF00] hover:text-[#FFFF00] transition-colors">
                    careers@studioilios.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#CCFF00] flex-shrink-0 mt-1" />
                <div>
                  <div className="text-gray-500 text-sm mb-1">Research Partnerships (Astrion Arc)</div>
                  <a href="mailto:research@studioilios.com" className="text-[#CCFF00] hover:text-[#FFFF00] transition-colors">
                    research@studioilios.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl mb-4">Engineering Hubs</h3>
            <div className="space-y-6">
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                <div className="text-[#CCFF00] mb-1">Bangalore HQ</div>
                <p className="text-gray-400 text-sm">AI, Aviation, Automotive Engineering</p>
              </div>
              
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                <div className="text-[#FFFF00] mb-1">Hyderabad</div>
                <p className="text-gray-400 text-sm">Robotics, Automation Systems</p>
              </div>
              
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                <div className="text-[#DFFF00] mb-1">Chennai</div>
                <p className="text-gray-400 text-sm">Manufacturing, Materials Science</p>
              </div>
              
              <div className="p-4 bg-black/40 border border-white/10 rounded-xl">
                <div className="text-[#CCFF00] mb-1">Pune</div>
                <p className="text-gray-400 text-sm">Astrion Arc Research & Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}