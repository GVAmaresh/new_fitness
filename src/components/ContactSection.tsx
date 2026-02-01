import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Contact</div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Let's Shape India's Aviation Future Together
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Whether you're a government partner, investor, aviation operator, 
              or technology collaborator—we'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#CCFF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#CCFF00]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  <a href="mailto:contact@airminds.in" className="text-lg hover:text-[#CCFF00] transition-colors">
                    contact@airminds.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFFF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#FFFF00]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Phone</div>
                  <a href="tel:+918045678900" className="text-lg hover:text-[#FFFF00] transition-colors">
                    +91 80 4567 8900
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DFFF00]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#DFFF00]" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Headquarters</div>
                  <div className="text-lg">Bengaluru, Karnataka, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#CCFF00] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#CCFF00] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm mb-2">Organization</label>
                <input
                  type="text"
                  id="organization"
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#CCFF00] focus:outline-none transition-colors"
                  placeholder="Company or institution"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#CCFF00] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your interest..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-colors"
              >
                Send Message
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
