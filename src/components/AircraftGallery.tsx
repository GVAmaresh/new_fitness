export function AircraftGallery() {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm text-[#CCFF00] uppercase tracking-widest mb-4">Aircraft Design</div>
          <h2 className="text-4xl md:text-5xl mb-6">
            SkyHop Platform Views
          </h2>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Front View */}
          <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#CCFF00]/30 transition-all">
            <img
              src="figma:asset/ad3323c02c92dce21112c0a9c83860679879ec5c.png"
              alt="SkyHop Front View"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white">Front View</div>
              <div className="text-sm text-gray-400">Aerodynamic nose design</div>
            </div>
          </div>

          {/* Side View */}
          <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#FFFF00]/30 transition-all">
            <img
              src="figma:asset/138c2b74e54c6d4ab016b120248db0585e704a70.png"
              alt="SkyHop Side View"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white">Side Profile</div>
              <div className="text-sm text-gray-400">Composite airframe structure</div>
            </div>
          </div>

          {/* Diagonal View */}
          <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-[#DFFF00]/30 transition-all">
            <img
              src="figma:asset/4973ab2f990f6eb2c60159d7e92ac33a8429798c.png"
              alt="SkyHop Diagonal View"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="text-white">Perspective View</div>
              <div className="text-sm text-gray-400">Complete platform overview</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
