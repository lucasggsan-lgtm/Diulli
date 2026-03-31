import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "Preciso de encaminhamento médico para fazer fisioterapia?",
      answer: "Não. O fisioterapeuta é um profissional de primeiro contato. Você pode agendar sua avaliação diretamente conosco. Caso seja necessário, faremos o encaminhamento para um médico especialista após a avaliação inicial."
    },
    {
      question: "Como funciona a primeira consulta (avaliação)?",
      answer: "A primeira consulta dura cerca de 1 hora. Nela, faremos uma entrevista detalhada sobre seu histórico de saúde, queixas atuais e objetivos. Em seguida, realizamos testes físicos, posturais e de movimento para identificar a causa do problema e traçar o plano de tratamento."
    },
    {
      question: "O que devo vestir para as sessões?",
      answer: "Recomendamos roupas confortáveis e flexíveis, como roupas de ginástica (shorts, legging, camiseta), que permitam a livre movimentação e facilitem o acesso à área que será tratada."
    },
    {
      question: "Vocês atendem por plano de saúde?",
      answer: "Trabalhamos com atendimento particular para garantir a qualidade, o tempo adequado e a exclusividade que você merece. No entanto, fornecemos recibo ou nota fiscal detalhada para que você possa solicitar o reembolso junto ao seu plano de saúde, caso ele ofereça essa opção."
    },
    {
      question: "Quantas sessões vou precisar?",
      answer: "O número de sessões varia muito de acordo com o diagnóstico, a gravidade da lesão, seu histórico de saúde e sua resposta ao tratamento. Na avaliação inicial, o fisioterapeuta dará uma estimativa do tempo de recuperação."
    },
    {
      question: "A fisioterapia dói?",
      answer: "A fisioterapia não deve causar dor insuportável. Algumas técnicas de liberação miofascial ou alongamentos podem gerar um leve desconforto momentâneo, mas sempre respeitamos o limite de cada paciente. O objetivo principal é justamente aliviar a dor."
    },
    {
      question: "Qual a diferença entre Pilates Clínico e Pilates de Academia?",
      answer: "O Pilates Clínico é ministrado por um fisioterapeuta e tem foco na reabilitação, prevenção e tratamento de patologias (como hérnias de disco, escoliose, etc). Os exercícios são adaptados e direcionados para a necessidade clínica específica de cada paciente."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-700 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dúvidas Frequentes</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossos tratamentos e forma de atendimento.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-12">
            <div className="flex items-center justify-center mb-10">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                <HelpCircle className="w-8 h-8" />
              </div>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border-b border-slate-100 pb-6 last:border-0 last:pb-0 transition-all duration-300 ${openIndex === index ? 'bg-teal-50/50 -mx-4 px-4 py-4 rounded-2xl border-transparent' : ''}`}
                >
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none group"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-teal-700' : 'text-slate-900 group-hover:text-teal-600'}`}>
                      {faq.question}
                    </h3>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-teal-200 text-teal-700' : 'bg-slate-100 text-slate-500 group-hover:bg-teal-100 group-hover:text-teal-600'}`}>
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                  
                  <div 
                    className={`mt-4 text-slate-600 leading-relaxed overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-600 mb-6">Sua dúvida não está aqui?</p>
            <a 
              href="https://wa.me/5511999999999?text=Olá,%20tenho%20uma%20dúvida%20sobre%20os%20tratamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md"
            >
              Fale conosco no WhatsApp
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
}
