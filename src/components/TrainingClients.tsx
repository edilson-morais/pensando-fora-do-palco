const TrainingClients = () => {
  const clients = [
    "Flávio Augusto, Joel Jota e Caio Carneiro: A trinca.",
    "Marcelo Germano: Imersão de 3 dias no EAG Educação empresarial.",
    "Wendell Carvalho: Imersão de 3 dias no Protagon, gestão emocional.",
    "Diego Correa: Imersão Metamorfose gestão emocional.",
    "Flávio Augusto, Joel Jota e Caio Carneiro: A trinca.",
    "Felipe Cassola: Evento Empreenda SC. Além do CNPJ.",
    "Guto Galamba: Gestão empresarial, saúde e posicionamento.",
    "Adriano Gatto: Intermediador de negócios network.",
    "Pablo Marçal: governo das emoções."
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-black text-white relative overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Modern Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-1 mb-6">
              <div className="bg-slate-900/80 rounded-xl px-8 py-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Com quem o Jotta treinou presencial?
                </h2>
              </div>
            </div>
          </div>

          {/* Modern Clients Grid */}
          <div className="grid gap-6 md:gap-8 mb-16">
            {clients.map((client, index) => {
              const [name, description] = client.split(': ');
              return (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  <div className="relative bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {name}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Photos Section */}
          <div className="text-center">
            <img 
              src="/lovable-uploads/2327ff3b-d468-4588-9957-fc2e445841d8.png"
              alt="Fotos dos treinamentos presenciais do Jotta"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingClients;