import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const openings = [
  {
    title: 'Aerospace Engineer',
    location: 'Bengaluru',
    type: 'Full-time'
  },
  {
    title: 'Hydrogen Systems Specialist',
    location: 'Hyderabad',
    type: 'Full-time'
  },
  {
    title: 'Flight Test Engineer',
    location: 'Chennai',
    type: 'Full-time'
  },
  {
    title: 'Avionics Engineer',
    location: 'Bengaluru',
    type: 'Full-time'
  }
];

export function CareersSection() {
  return (
    <section id="careers" className="relative py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Careers</div>
            <h2 className="text-4xl md:text-6xl mb-6">
              Build the Future of Aviation
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Join a team of aerospace engineers, designers, and technologists 
              pioneering clean aviation for India. We're looking for talented 
              individuals passionate about solving hard problems.
            </p>

            {/* Job Openings */}
            <div className="space-y-4 mb-8">
              {openings.map((job, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-xl hover:border-[#CCFF00]/30 transition-all"
                >
                  <div>
                    <h3 className="text-lg mb-1">{job.title}</h3>
                    <div className="text-sm text-gray-400">{job.location} · {job.type}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#CCFF00] group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            <a
              href="mailto:careers@airminds.in"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#CCFF00] text-black rounded-lg hover:bg-[#FFFF00] transition-colors"
            >
              View All Openings
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1580974511885-b30fd231388c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdmlhdGlvbiUyMGVuZ2luZWVycyUyMHRlYW13b3JrfGVufDF8fHx8MTc2NTU0NTUwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Engineering Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl mb-2">Join Our Team</h3>
                <p className="text-gray-300">
                  Work with India's brightest aerospace engineers building the future of clean aviation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}