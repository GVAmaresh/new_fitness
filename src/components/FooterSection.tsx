import { Plane, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'SkyHop', href: '#skyhop' },
    { name: 'Technology', href: '#technology' },
    { name: 'Careers', href: '#careers' }
  ],
  resources: [
    { name: 'Use Cases', href: '#usecases' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Press Kit', href: '#' },
    { name: 'Contact', href: '#contact' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Safety', href: '#' },
    { name: 'Compliance', href: '#' }
  ]
};

export function FooterSection() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#CCFF00] rounded-lg flex items-center justify-center">
                <Plane className="w-7 h-7 text-black" />
              </div>
              <div>
                <div className="text-xl">Air Minds</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest">Aviation</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Pioneering hybrid hydrogen-electric aircraft for India's regional 
              air mobility and emergency transport needs.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#CCFF00]/50 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#CCFF00]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#CCFF00]/50 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#CCFF00]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#CCFF00]/50 transition-colors">
                <Youtube className="w-5 h-5 text-gray-400 hover:text-[#CCFF00]" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#CCFF00]/50 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#CCFF00]" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#CCFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#CCFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#CCFF00] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-b border-white/10 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['DGCA Registered', 'ISO 9001:2015', 'Make in India', 'AS9100 Aerospace'].map((cert) => (
              <div key={cert} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400">
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>© 2025 Air Minds Aviation Technologies Pvt. Ltd. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Engineered in India 🇮🇳</span>
            <span className="text-gray-700">|</span>
            <span className="text-[#CCFF00]">for India's Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
