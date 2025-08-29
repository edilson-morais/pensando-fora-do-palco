const Footer = () => {
  const privacyLink = "https://politica-de-privacidade.rota50ia.com/";

  return (
    <footer className="bg-gradient-to-br from-[hsl(195,100%,8%)] via-[hsl(198,85%,12%)] to-[hsl(201,75%,15%)] text-gray-300 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-sm leading-relaxed">
            A Comunidade Pensando Fora do Palco não é uma empresa associada ao WhatsApp INC, Facebook INC, META ou qualquer uma de suas empresas, e não possui relação comercial ou consentimento para uso.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-sm">
            Copyright © 2025. Desenvolvido por Edilson Morais. Ao fazer seu cadastro em nosso site, você concorda com os nossos{" "}
            <a 
              href={privacyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Termos de Uso
            </a>
            {" "}e{" "}
            <a 
              href={privacyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Política de Privacidade
            </a>
            .
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-orange-400">
            Pensando Fora do Palco
          </h3>
          
          <div className="flex justify-center space-x-8 text-sm">
            <a 
              href={privacyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Termos de Uso
            </a>
            <span className="text-gray-500">|</span>
            <a 
              href={privacyLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          <p className="text-sm">
            Todos os direitos reservados – Edilson Morais 2025
          </p>

          <p className="text-sm">
            Contato: <a href="mailto:edilsondil@gmail.com" className="text-orange-400 hover:text-orange-300 transition-colors">edilsondil@gmail.com</a>
          </p>

          <p className="text-xs text-gray-400">
            Desenvolvido por Edilson Morais
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;