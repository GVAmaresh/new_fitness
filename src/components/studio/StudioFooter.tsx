import { Brain, Plane, Car, Bot, Atom, Mail, MapPin } from 'lucide-react';

const verticals = [
  { name: 'HumannovaMind', icon: Brain, href: '#humannovamind' },
  { name: 'Air Minds', icon: Plane, href: '#airminds' },
  { name: 'Automotive', icon: Car, href: '#automotive' },
  { name: 'Robotics', icon: Bot, href: '#robotics' },
  { name: 'Astrion Arc', icon: Atom, href: '#astrionarc' }
];

export function StudioFooter() {
  return (
    <footer className="relative bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-3xl mb-4">
              Studio <span className="text-[#CCFF00]">ILIOS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A multidisciplinary engineering studio with five integrated departments working 
              together to build future systems for India.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-[#CCFF00]" />
              Bangalore, India
            </div>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Engineering Departments</h3>
            <div className="space-y-3">
              {verticals.map((vertical) => (
                <a
                  key={vertical.name}
                  href={vertical.href}
                  className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors group"
                >
                  <vertical.icon className="w-4 h-4 group-hover:text-[#CCFF00]" />
                  {vertical.name}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Company</h3>
            <div className="space-y-3">
              <a href="#vision" className="block text-gray-400 hover:text-[#CCFF00] transition-colors">
                Our Vision
              </a>
              <a href="#india-context" className="block text-gray-400 hover:text-[#CCFF00] transition-colors">
                India Context
              </a>
              <a href="#careers" className="block text-gray-400 hover:text-[#CCFF00] transition-colors">
                Careers
              </a>
              <a href="#partnerships" className="block text-gray-400 hover:text-[#CCFF00] transition-colors">
                Partnerships
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-[#CCFF00] transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@studioilios.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                General Inquiries
              </a>
              <a
                href="mailto:careers@studioilios.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Careers
              </a>
              <a
                href="mailto:research@studioilios.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#CCFF00] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Research (Astrion Arc)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Studio ILIOS. Engineering the Future.
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#CCFF00] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}