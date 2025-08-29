const JottaProfile = () => {
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
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                  <img 
                    src="/lovable-uploads/2b6ac948-1f14-415e-a354-a486c58bd8c4.png" 
                    alt="Jotta - CEO da MJ Backline e criador do projeto PFDP"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-yellow-400 font-semibold">
                  É aquele cara que não faz questão de agradar ninguém!
                </p>
                <p className="text-lg leading-relaxed text-gray-200">
                  Carioca de personalidade forte. CEO da <span className="text-yellow-400 font-bold">MJ Backline</span> 
                  principal locadora de instrumentos de alto nível da região sul 
                  do Brasil , atua diretamente com os maiores artistas do país, 
                  além disso, <span className="text-green-400 font-bold">é criador do projeto PFDP</span> o qual, leva 
                  conhecimento e informação para empresários de todos os 
                  níveis defendendo 5 pilares: <span className="text-yellow-400 font-bold">postura, posicionamento, 
                  comunicação, branding e vendas.</span>
                </p>
                
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-gray-200">
                    <span className="text-green-400 font-bold">Sua missão:</span> orientar empreendedores e empresários que 
                    sentem dificuldade de transmitir a mensagem do coração 
                    para colaboradores, leads e clientes de um jeito 
                    descomplicado, transformando clientes em fãs, gerando 
                    mais vendas, mais faturamento e lucro.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-200">
                    Sem precisar ser perfeito e <span className="text-yellow-400 font-bold">sem precisar falar bonito...</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JottaProfile;