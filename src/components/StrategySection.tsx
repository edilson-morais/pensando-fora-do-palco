const StrategySection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                  <span className="text-yellow-400">Você veio buscar</span><br />
                  <span className="text-white">estratégia para melhorar</span><br />
                  <span className="text-yellow-400">sua comunicação e elevar</span><br />
                  <span className="text-white">seu posicionamento.</span>
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"></div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>
                <div className="relative bg-gradient-to-br from-yellow-400/10 to-amber-500/10 backdrop-blur-sm rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 border border-yellow-400/30">
                  <img 
                    src="/lovable-uploads/db6f31d2-c713-46ef-8a28-942580ccba59.png"
                    alt="Professional communicator speaking"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;