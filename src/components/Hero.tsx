import { Button } from "@/components/ui/button";
const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";
  return <header className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '0.5s'
      }}></div>
      </div>
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-10 lg:pr-8 animate-fade-in">
            {/* Glassmorphism card for main content */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl hover:bg-white/8 transition-all duration-500 hover:scale-[1.02]">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight animate-fade-in hover:scale-105 transition-transform duration-300" style={{
                  fontFamily: 'Times, serif'
                }}>Pensando Fora do Palco</h1>
                  <div className="relative">
                    <p className="text-lg md:text-xl text-gray-200 font-medium tracking-wide">
                      PORQUE A VIDA É UM SHOW.
                    </p>
                    <div className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent animate-pulse"></div>
                  </div>
                </div>
                
                <div className="space-y-6 text-gray-100">
                  <p className="text-lg md:text-xl leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                    A forma mais rápida e inteligente de gerar mais transparência, 
                    credibilidade, confiança e vendas em uma empresa, é quando o 
                    dono entende o valor da <span className="text-yellow-400 font-semibold">marca pessoal</span>.
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                    Sim, você pode ser autêntico, não precisa ser perfeito, nem 
                    falar bonito, não precisa virar blogueiro (a), <span className="text-green-400 font-semibold">eu te ajudo nisso</span>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Modern CTA Button with WhatsApp link */}
            <div className="flex justify-start">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="group relative bg-gradient-to-r from-green-500 via-green-400 to-green-500 hover:from-green-400 hover:via-green-300 hover:to-green-400 text-black font-bold py-6 px-10 rounded-2xl text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25 border-0 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3">
                    QUERO AGENDAR UMA REUNIÃO
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right Content - Modern Image Card with WhatsApp link */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative group cursor-pointer">
                {/* Glowing backdrop */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100"></div>
                
                {/* Main image container with glassmorphism */}
                <div className="relative w-80 h-96 md:w-96 md:h-[500px] bg-gradient-to-br from-yellow-400/90 via-yellow-500/80 to-yellow-600/90 backdrop-blur-sm rounded-3xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-700 shadow-2xl border border-white/20 group-hover:scale-105">
                  <img src="/lovable-uploads/ece17cc7-916a-470c-acab-0f00f2a65427.png" alt="Jotta, especialista em comunicação e marca pessoal, apresentando estratégias para empresários" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="eager" />
                  
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                  <div className="absolute bottom-8 left-6 w-2 h-2 bg-green-300 rounded-full animate-pulse" style={{
                  animationDelay: '0.5s'
                }}></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-2 border-yellow-400/40 rounded-full animate-spin" style={{
                animationDuration: '8s'
              }}></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-2 border-green-400/40 rounded-lg animate-bounce" style={{
                animationDelay: '1s'
              }}></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Modern background pattern with animation */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full animate-pulse" style={{
        backgroundImage: 'radial-gradient(circle at 25% 25%, #fbbf24 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        animationDuration: '4s'
      }}></div>
      </div>
    </header>;
};
export default Hero;