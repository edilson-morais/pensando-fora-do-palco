const CommunicationSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
              A comunicação é treinável.
            </h2>
          </div>

          {/* Three person grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                bg: "bg-blue-100",
                image: "/lovable-uploads/98d1aebf-c2e1-44ca-bf50-815df0b5dbbd.png",
                title: "O empresário artista",
                subtitle: "(Véio da Havan)",
                description: "não precisa aparecer, ele só faz isso pois amplifica expressivamente seu posicionamento na mente da audiência sendo visto como líder em todo movimento de marketing."
              },
              {
                bg: "bg-green-100", 
                image: "/lovable-uploads/98d1aebf-c2e1-44ca-bf50-815df0b5dbbd.png",
                title: "A forma que você veste",
                description: "os lugares que frequenta, o que concorda ou discorda, o que fala, como fala, com quem fala, porque fala, quem segue nas redes sociais, o que posta, te posiciona, e é ai que podemos te orientar."
              },
              {
                bg: "bg-blue-400",
                image: "/lovable-uploads/98d1aebf-c2e1-44ca-bf50-815df0b5dbbd.png",
                title: "Esses 3, estão aumentando",
                description: "faturamento e lucro sendo eles mesmos, e é possível usar as mesmas estratégias no seu negócio mesmo sendo tímido... Quer um exemplo de quem chamou a atenção sem nem falar? Charlie Chaplin."
              }
            ].map((person, index) => (
              <div key={index} className={`${person.bg} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-lg`}>
                <div className="aspect-square bg-white rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Foto</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-lg">{person.title}</h3>
                  {person.subtitle && (
                    <p className="font-semibold text-sm">{person.subtitle}</p>
                  )}
                  <p className="text-sm leading-relaxed">{person.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                DAREI O PRIMEIRO PASSO.
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;