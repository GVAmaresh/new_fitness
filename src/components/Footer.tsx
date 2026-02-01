import { Plane, Linkedin, Twitter, Youtube, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t-2 border-[#CCFF00]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#CCFF00] rounded-xl flex items-center justify-center shadow-lg shadow-[#CCFF00]/40">
                <Plane className="w-8 h-8 text-black" />
              </div>
              <div>
                <div className="text-2xl text-[#CCFF00]">Air Minds</div>
                <div className="text-xs text-[#DFFF00] uppercase tracking-wider">SkyHop Aviation</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Pioneering India's hydrogen-electric aviation revolution.
            </p>
            
            {/* Social */}
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-black border border-[#CCFF00]/30 rounded-lg flex items-center justify-center hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all group">
                <Linkedin className="w-5 h-5 text-[#CCFF00] group-hover:text-black" />
              </a>
              <a href="#" className="w-11 h-11 bg-black border border-[#FFFF00]/30 rounded-lg flex items-center justify-center hover:bg-[#FFFF00] hover:border-[#FFFF00] transition-all group">
                <Twitter className="w-5 h-5 text-[#FFFF00] group-hover:text-black" />
              </a>
              <a href="#" className="w-11 h-11 bg-black border border-[#DFFF00]/30 rounded-lg flex items-center justify-center hover:bg-[#DFFF00] hover:border-[#DFFF00] transition-all group">
                <Youtube className="w-5 h-5 text-[#DFFF00] group-hover:text-black" />
              </a>
              <a href="#" className="w-11 h-11 bg-black border border-[#CCFF00]/30 rounded-lg flex items-center justify-center hover:bg-[#CCFF00] hover:border-[#CCFF00] transition-all group">
                <Instagram className="w-5 h-5 text-[#CCFF00] group-hover:text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#CCFF00] mb-4 uppercase tracking-wider text-sm">Technology</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors">Propulsion</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors">Aerodynamics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors">Autonomous Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#CCFF00] transition-colors">Safety</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFFF00] mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#FFFF00] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFF00] transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFF00] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FFFF00] transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#DFFF00] mb-4 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#DFFF00] transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DFFF00] transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DFFF00] transition-colors">Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#DFFF00] transition-colors">Safety</a></li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="py-8 border-t border-[#CCFF00]/20 border-b border-[#CCFF00]/20 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['DGCA Certified', 'ISO 9001:2015', 'Make in India', 'AS9100', 'EASA Compliant'].map((cert, index) => (
              <div
                key={index}
                className="px-6 py-2 bg-black border border-[#CCFF00]/30 rounded-full text-[#CCFF00] text-sm"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div>© 2025 Air Minds Aviation Technologies. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span>Engineered in India 🇮🇳</span>
            <span className="text-gray-600">|</span>
            <span className="text-[#CCFF00]">For India's Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
