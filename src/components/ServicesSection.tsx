const ServicesSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  const services = [
    {
      title: "MENTORIA PRESENCIAL",
      description: "Uma experiência presencial única com o Jotta te treinando nos 5 pilares, 4 horas de reunião mais 2 encontros quinzenais online, com todos os custos incluso em MG, RJ, SP, PR, SC, RS. Consulte."
    },
    {
      title: "MENTORIA ONLINE", 
      description: "3 horas de reunião para entender seu momento no orientando nos 5 pilares além de (3 encontros online quinzenais) para alinhamentos e ajustes de rota."
    },
    {
      title: "CONSULTORIA 3 HORAS",
      description: "Treinamento online ideal para que já tem clareza e resultados mas deseja ajustar pontos específicos dos pilares que defendemos para ver mais lucro e tempo de qualidade."
    },
    {
      title: "CONSULTORIA 90 MIN",
      description: "A forma mais acessível de ter as orientações com o Jotta diretamente online para tirar dúvidas e ajustar a rota."
    },
    {
      title: "ACESSO AS AULAS FECHADAS GRAVADAS",
      description: "Ideal para quem (não gosta de ler) e prefere ver e ouvir. São aulas em formato live de um jeito simples e muito objetivo. Separé caderno e caneta ou seu notebook."
    },
    {
      title: "EBOOK 2",
      description: "Trata-se de um material objetivo de acompanhamento com estratégias 100% aplicáveis que pode lhe ajudar muito na jornada."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="services" className="text-4xl md:text-5xl font-bold mb-12">
              Como posso te servir?
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black text-white rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-lg">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-black font-bold">★</span>
                </div>
                
                <h3 className="text-lg font-bold mb-4 text-yellow-400">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-gray-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                QUERO MAIS INFORMAÇÕES
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;