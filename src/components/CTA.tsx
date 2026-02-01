import { ArrowRight, Mail, Phone, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690565243025-2f3628d375fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGNvY2twaXR8ZW58MXx8fHwxNzY1NDgxNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Aviation Cockpit"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-6xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
              Ready to Shape India's
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Aerospace Future?
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Partner with us for cutting-edge aerospace R&D, UAV development, or government collaborations. 
            Let's build the next generation of flight technology together.
          </p>
        </div>

        {/* CTA Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Project Inquiry</h3>
            <p className="text-gray-400 mb-6 text-sm">Discuss custom aerospace solutions and R&D projects</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all w-full justify-center">
              Submit Inquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Government Partnerships</h3>
            <p className="text-gray-400 mb-6 text-sm">Collaborate on defense and public sector initiatives</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600/20 text-cyan-400 rounded-lg hover:bg-cyan-600 hover:text-white transition-all w-full justify-center">
              Contact Team
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="group p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl text-white mb-3">Academic Collaboration</h3>
            <p className="text-gray-400 mb-6 text-sm">Research partnerships with engineering institutes</p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600 hover:text-white transition-all w-full justify-center">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-8 bg-gradient-to-r from-blue-950/50 to-cyan-950/50 backdrop-blur-sm rounded-2xl border border-blue-500/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-blue-400 mb-2">Email</div>
              <div className="text-white">contact@aeroindia.studio</div>
            </div>
            <div>
              <div className="text-cyan-400 mb-2">Phone</div>
              <div className="text-white">+91 80 1234 5678</div>
            </div>
            <div>
              <div className="text-blue-400 mb-2">Location</div>
              <div className="text-white">Bangalore, Karnataka, India</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-500">
          <div className="text-sm">🇮🇳 Make in India Certified</div>
          <div className="w-px h-6 bg-gray-700"></div>
          <div className="text-sm">DGCA Compliant</div>
          <div className="w-px h-6 bg-gray-700"></div>
          <div className="text-sm">ISO 9001:2015</div>
          <div className="w-px h-6 bg-gray-700"></div>
          <div className="text-sm">DRDO Empaneled</div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
