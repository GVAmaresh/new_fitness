import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function StudioNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-2xl tracking-tight">
            Studio <span className="text-[#CCFF00]">ILIOS</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#vision-mission" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
              Vision & Mission
            </a>
            <a href="#departments" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
              Departments
            </a>
            <a href="#india-context" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
              India Context
            </a>
            <a href="#contact" className="px-6 py-2 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-all">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a href="#departments" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
                Departments
              </a>
              <a href="#vision-mission" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
                Vision & Mission
              </a>
              <a href="#india-context" className="text-gray-300 hover:text-[#CCFF00] transition-colors">
                India Context
              </a>
              <a href="#contact" className="px-6 py-2 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-all text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}