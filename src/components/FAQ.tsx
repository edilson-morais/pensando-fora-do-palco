const FAQ = () => {
  const faqs = [
    {
      question: "Para quem é a mentoria?",
      answer: "Para empreendedores e empresários (as) que entendem a importância de explorar sua marca pessoal para gerar mais transparência e confiança nos clientes, transformando - os em fãs que compram mais e por mais tempo, a ponto de entrarem em filas de espera pelo produto ou serviço. É Para quem se permite aprender novas formas de fazer venda mensurando escala através da (internet). Gente que essa, é a avenida mais movimentada do planeta e a empresa que não estiver lá: deixará de existir."
    },
    {
      question: "Como funciona a mentoria online?",
      answer: "Convidamos você para uma reunião sem custo de 30 minutos para entender se nosso conteúdo é para você. Após, agendaremos o primeiro encontro na MENTORIA. Serão 3 horas, onde abordaremos uma sequência de referente ao seu CPF e depois sobre seu CNPJ. Vamos relacionar as duas coisas e entregar um planejamento para você executar com nosso auxílio, além disso, teremos mais 3 encontros quinzenais para tirar dúvidas e fazer alinhamentos no processo. Lembrando que, você ganhará nosso ebook 2 e acesso ao grupo do WhatsApp seletivo..."
    },
    {
      question: "Quanto custa?",
      answer: "Quanto custa não tomar nenhuma atitude em relação à sua comunicação e posicionamento da sua marca pessoal? Imagine, quanto pode custar emocionalmente saber que seu concorrente está vendendo mais do que você entregando um péssimo serviço. Ao fazer essa conta, você pode até encontrar alguns números financeiros e oportunidades perdidas mas, um dos maiores prejuízos no nosso ponto de vista. são os emocionais ao ter que inventar desculpas... Para a viagem não saiu? Porque aquele presente não chegou? Quando vamos realizar o sonho X ou Y? PENSE."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              PERGUNTAS FREQUENTES:
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-yellow-400/90 to-yellow-500/90 text-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold mb-6">
                  {faq.question}
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;