import jottaSpeaker from "/lovable-uploads/4feb49ee-3435-442b-a008-24615f9851b1.png";

const StrategySection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left side - Image with JOTTA frame */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Golden frame */}
              <div className="relative w-80 h-96 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-1">
                <div className="w-full h-full bg-black rounded-3xl overflow-hidden flex items-center justify-center">
                  <img 
                    src={jottaSpeaker}
                    alt="Jotta apresentando com microfone"
                    className="w-full h-full object-cover"
                  />
                  {/* JOTTA text overlay */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <h2 className="text-4xl font-bold text-yellow-400 tracking-wider">
                      JOTTA
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-red-500">"</span>
                Você veio buscar estratégia para melhorar sua comunicação e elevar seu posicionamento.
                <span className="text-red-500">"</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-yellow-400 font-semibold">
                Você não chegou aqui por acaso!
              </p>
            </div>

            <div className="pt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  MINHA MARCA PESSOAL É PRIORIDADE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;