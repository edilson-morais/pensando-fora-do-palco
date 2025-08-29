const PositioningImpact = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(201,75%,15%)] via-[hsl(198,85%,12%)] to-[hsl(195,100%,8%)] text-white relative overflow-hidden">
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
              <h2 id="positioning-impact" className="text-3xl md:text-4xl font-bold mb-8">
                IMPACTO DO POSICIONAMENTO
              </h2>
              
              {/* Mobile screenshots */}
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/7b9f7424-c669-4fe9-9d19-c8f832508409.png"
                  alt="Resultados do impacto do posicionamento - screenshots de depoimentos de clientes satisfeitos"
                  className="max-w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </div>

              <p className="text-sm text-gray-300 mt-4">
                Segui alguns conselhos e tem dado 
                certo nas vendas
              </p>
            </div>

            {/* Right side - Profile and CTA */}
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/5b9bbdb5-82b3-44c9-96e5-3870962e951b.png" 
                  alt="Jotta - Especialista em comunicação, marca pessoal e posicionamento estratégico para empresários"
                  className="w-64 h-80 md:w-72 md:h-96 object-cover object-center"
                  loading="lazy"
                />
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