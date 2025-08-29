const FinalCTA = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75"></div>
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-yellow-400/90 via-yellow-500/80 to-orange-600/90 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <span className="text-6xl font-bold text-yellow-400">JOTTA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Quote and CTA */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-red-500">"</span>Você veio buscar<br />
                  estratégia para melhorar<br />
                  sua comunicação e elevar<br />
                  seu poscionamento.<span className="text-red-500">"</span>
                </div>
                
                <p className="text-2xl md:text-3xl font-bold text-yellow-400">
                  Você não chegou aqui por acaso!
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex justify-start">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-6 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
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

export default FinalCTA;