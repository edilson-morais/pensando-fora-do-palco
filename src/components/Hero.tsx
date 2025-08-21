
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 leading-tight">
                Pensando
                <br />
                Fora do Palco
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-medium">
                PORQUE A VIDA É UM SHOW.
              </p>
            </div>
            
            <div className="space-y-6 text-gray-200">
              <p className="text-lg md:text-xl leading-relaxed">
                A forma mais rápida e inteligente de gerar mais transparência, 
                credibilidade, confiança e vendas em uma empresa, é quando o 
                dono entende o valor da (marca pessoal).
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Sim, você pode ser autêntico, não precisa ser perfeito, nem 
                falar bonito, não precisa virar blogueiro (a), eu te ajudo nisso.
              </p>
            </div>
            
            <Button 
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300"
            >
              QUERO AGENDAR UMA REUNIÃO
            </Button>
          </div>
          
          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/d944cdc8-7bc7-46d3-9cec-caea29a0d1d5.png"
                  alt="Professional presenter pointing upward"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #yellow 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
