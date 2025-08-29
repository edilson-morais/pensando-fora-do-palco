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
    <section className="py-20 bg-gradient-to-br from-black via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background with photos overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-black/80 to-black/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-16 border border-white/20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Com quem o Jotta treinou presencial?
            </h2>
          </div>

          {/* Clients list */}
          <div className="space-y-6">
            {clients.map((client, index) => {
              const [name, description] = client.split(': ');
              return (
                <div key={index} className="bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300">
                  <p className="text-lg md:text-xl">
                    <span className="text-yellow-400 font-bold">{name}:</span>
                    <span className="text-white ml-2">{description}</span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom photos grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg border border-yellow-400/30 overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/8af99987-4b01-455e-9953-b174d0dd4d28.png" 
                  alt="O empresário artista"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-yellow-400 font-semibold">O empresário artista</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg border border-yellow-400/30 overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/3496808d-f609-475b-adfc-b5cd692ca235.png" 
                  alt="A forma que você veste"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-yellow-400 font-semibold">A forma que você veste</p>
            </div>
            
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-lg border border-yellow-400/30 overflow-hidden mb-4">
                <img 
                  src="/lovable-uploads/b8595a2d-44c0-41bb-82b6-cad1cc55121a.png" 
                  alt="Esses 3, estão aumentando"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-yellow-400 font-semibold">Esses 3, estão aumentando</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingClients;