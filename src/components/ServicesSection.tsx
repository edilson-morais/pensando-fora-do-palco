import DisplayCards from "@/components/ui/display-cards";
import { Star, Video, BookOpen, Users, Clock, FileText } from "lucide-react";

const ServicesSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554797083422&text=Ol%C3%A1,+vim+da+p%C3%A1gina+*Pensando+Fora+do+Palco*";

  const services = [
    {
      icon: <Star className="size-4 text-yellow-300" />,
      title: "MENTORIA PRESENCIAL",
      description: "Experiência presencial única com 4h de reunião + 2 encontros quinzenais online",
      date: "Presencial",
      iconClassName: "text-yellow-400",
      titleClassName: "text-yellow-400",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <Video className="size-4 text-green-300" />,
      title: "MENTORIA ONLINE",
      description: "3h de reunião orientando nos 5 pilares + 3 encontros quinzenais",
      date: "Online",
      iconClassName: "text-green-400",
      titleClassName: "text-green-400",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <Clock className="size-4 text-blue-300" />,
      title: "CONSULTORIA 3 HORAS",
      description: "Treinamento online para ajustar pontos específicos dos pilares",
      date: "3h",
      iconClassName: "text-blue-400",
      titleClassName: "text-blue-400",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
    }
  ];

  const additionalServices = [
    {
      icon: <Users className="size-4 text-purple-300" />,
      title: "CONSULTORIA 90 MIN",
      description: "Forma mais acessível de ter orientações diretas com o Jotta",
      date: "90min",
      iconClassName: "text-purple-400",
      titleClassName: "text-purple-400",
      className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <BookOpen className="size-4 text-orange-300" />,
      title: "AULAS GRAVADAS",
      description: "Aulas em formato live, simples e objetivo para quem prefere ver e ouvir",
      date: "Acesso",
      iconClassName: "text-orange-400",
      titleClassName: "text-orange-400",
      className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
    },
    {
      icon: <FileText className="size-4 text-red-300" />,
      title: "EBOOK 2",
      description: "Material objetivo com estratégias 100% aplicáveis para sua jornada",
      date: "Digital",
      iconClassName: "text-red-400",
      titleClassName: "text-red-400",
      className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10"
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

          {/* Services Display Cards */}
          <div className="space-y-16">
            <div className="flex justify-center">
              <DisplayCards cards={services} />
            </div>
            
            <div className="flex justify-center">
              <DisplayCards cards={additionalServices} />
            </div>
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