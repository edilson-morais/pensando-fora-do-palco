const StrategySection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

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
            {/* Left Content - JOTTA Frame */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Golden frame */}
                <div className="w-80 h-96 border-2 border-yellow-400 rounded-3xl bg-black/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-6xl font-bold text-yellow-400 tracking-wider">
                      JOTTA
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Text and CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-red-500 text-6xl">"</span>
                  <span className="text-white">Você veio buscar</span><br />
                  <span className="text-white">estratégia para</span><br />
                  <span className="text-white">melhorar</span><br />
                  <span className="text-white">sua comunicação</span><br />
                  <span className="text-white">e elevar</span><br />
                  <span className="text-white">seu</span><br />
                  <span className="text-white">posicionamento.</span>
                  <span className="text-red-500 text-6xl">"</span>
                </h2>
                
                <p className="text-yellow-400 text-xl font-bold">
                  Você não chegou aqui por acaso!
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto">
                    MINHA MARCA PESSOAL É PRIORIDADE
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;