const PositioningImpact = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Mobile screenshots */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                IMPACTO DO POSICIONAMENTO
              </h2>
              
              {/* Mock mobile screenshots */}
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                    <span className="text-sm">@empresariooficial</span>
                  </div>
                  <p className="text-sm mb-2">
                    <span className="text-blue-400">@rdsrj</span> não autor, 
                    pensando fora do palco, sempre um 
                    passo à frente
                  </p>
                  <div className="text-xs text-gray-400 flex items-center gap-4">
                    <span>👁️ 2k mil visualizações</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                    <span className="text-sm">sandroeplayers</span>
                    <span className="text-xs bg-blue-500 px-2 py-1 rounded">Seguir</span>
                  </div>
                  <p className="text-sm mb-2">
                    NÃO FAÇO QUESTÃO DE 
                    TOCAR PRA POBRE
                  </p>
                  <div className="text-xs text-gray-400">
                    <span>👁️ 974 mil</span>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-blue-400 rounded-full"></div>
                    <span className="text-xs">spideroaneersontiva curtiu seu reel · 3s</span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
                    <span className="text-xs">dil.saint.ro curtiu seu reel · 1h</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 mt-4">
                Segui alguns conselhos e tem dado 
                certo nas vendas
              </p>
            </div>

            {/* Right side - Profile and CTA */}
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-3xl blur-lg"></div>
                <div className="relative w-64 h-80 bg-gradient-to-br from-yellow-400/90 via-yellow-500/80 to-orange-600/90 rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <span className="text-4xl font-bold text-yellow-400">JOTTA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    QUERO DETALHES<br />DA MENTORIA
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

export default PositioningImpact;