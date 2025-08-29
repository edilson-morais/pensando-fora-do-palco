import ServiceCards from "@/components/ui/display-cards";
import { Star, Video, BookOpen, Users, Clock, FileText } from "lucide-react";

const ServicesSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  const services = [
    {
      icon: <Star className="size-6" />,
      title: "MENTORIA PRESENCIAL",
      description: "Experiência presencial única com o Jotta te treinando nos 5 pilares, 4 horas de reunião mais 2 encontros quinzenais online, com todos os custos incluso.",
      category: "Presencial",
      color: "yellow" as const,
      link: whatsappLink
    },
    {
      icon: <Video className="size-6" />,
      title: "MENTORIA ONLINE", 
      description: "3 horas de reunião para entender seu momento orientando nos 5 pilares além de 3 encontros online quinzenais para alinhamentos.",
      category: "Online",
      color: "green" as const,
      link: whatsappLink
    },
    {
      icon: <Clock className="size-6" />,
      title: "CONSULTORIA 3 HORAS",
      description: "Treinamento online ideal para quem já tem clareza e resultados mas deseja ajustar pontos específicos dos pilares.",
      category: "3h",
      color: "blue" as const,
      link: whatsappLink
    },
    {
      icon: <Users className="size-6" />,
      title: "CONSULTORIA 90 MIN",
      description: "A forma mais acessível de ter as orientações com o Jotta diretamente online para tirar dúvidas e ajustar a rota.",
      category: "90min",
      color: "purple" as const,
      link: whatsappLink
    },
    {
      icon: <BookOpen className="size-6" />,
      title: "AULAS FECHADAS GRAVADAS",
      description: "Ideal para quem não gosta de ler e prefere ver e ouvir. São aulas em formato live de um jeito simples e muito objetivo.",
      category: "Acesso",
      color: "orange" as const,
      link: whatsappLink
    },
    {
      icon: <FileText className="size-6" />,
      title: "EBOOK 2",
      description: "Material objetivo de acompanhamento com estratégias 100% aplicáveis que pode lhe ajudar muito na jornada.",
      category: "Digital",
      color: "red" as const,
      link: whatsappLink
    }
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 id="services" className="text-4xl md:text-5xl font-bold mb-12">
              Como posso te servir?
            </h2>
          </div>

          {/* Services Cards */}
          <ServiceCards cards={services} />

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