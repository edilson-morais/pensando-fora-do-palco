const SixQuestions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with badge */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-8 rounded-full text-lg mb-8">
              6 Perguntas
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Quais são as primeiras<br />
              marcas que vem a sua<br />
              memória?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide mb-12">
              REFRIGERANTE - CERVEJA - CREME DENTAL -<br />
              LAVA ROUPAS - INSETICIDA - APRESENTADOR
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Green badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="bg-green-500 text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105">
                FAZ SENTIDO PRA MIM.
              </div>
            </div>

            {/* Right side - Content points */}
            <div className="space-y-8">
              {[
                {
                  icon: "✈️",
                  title: "É tudo intencional!",
                  text: "Não é novidade que as pessoas preferem comprar de quem conhece, confia, ou acredita, e isso, geralmente acontece por indicação por mais que seja um (grande erro) ser dependente desse fator."
                },
                {
                  icon: "✈️", 
                  title: "Posicionamento",
                  text: "Não se trata de localização geográfica e sim, como você está posicionamento no cérebro da audiência, lead ou cliente."
                },
                {
                  icon: "✈️",
                  title: "Sabe porque pensou nessas marcas?",
                  text: "Devido posicionamento e memória afetiva. Você tá gerando isso no seu cliente?"
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-yellow-400 text-black rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-yellow-400">{item.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixQuestions;