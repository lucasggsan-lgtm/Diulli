import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Activity, HeartPulse, Stethoscope, Dumbbell, PersonStanding, Flame } from "lucide-react";

export function Servicos() {
  const servicos = [
    {
      id: "pilates",
      title: "Pilates Clínico (Mais Procurado)",
      icon: <PersonStanding className="w-8 h-8" />,
      description: "Nosso tratamento carro-chefe. Método de condicionamento físico focado na estabilização central, postura e controle do movimento. Oferecemos Planos Bimestrais e Trimestrais para melhor adaptação à sua rotina e resultados mais duradouros.",
      benefits: [
        "Melhora da postura e consciência corporal",
        "Fortalecimento do core (abdômen e lombar)",
        "Aumento da flexibilidade",
        "Alívio de tensões musculares"
      ],
      indicatedFor: "Prevenção de lesões, melhora postural, gestantes e transição da fisioterapia para atividade física."
    },
    {
      id: "ortopedica",
      title: "Fisioterapia Ortopédica",
      icon: <Activity className="w-8 h-8" />,
      description: "Tratamento especializado para lesões musculares, articulares, tendinites, bursites e dores na coluna.",
      benefits: [
        "Alívio da dor aguda e crônica",
        "Recuperação da amplitude de movimento",
        "Fortalecimento muscular específico",
        "Prevenção de novas lesões"
      ],
      indicatedFor: "Pessoas com dores nas costas, ombros, joelhos, tendinites, bursites, artrose e lesões esportivas."
    },
    {
      id: "pos-cirurgica",
      title: "Reabilitação Pós-Cirúrgica",
      icon: <HeartPulse className="w-8 h-8" />,
      description: "Acompanhamento completo após cirurgias ortopédicas para recuperação segura da força e mobilidade.",
      benefits: [
        "Redução do inchaço e dor pós-operatória",
        "Prevenção de aderências cicatriciais",
        "Retorno seguro às atividades diárias",
        "Recuperação da força e estabilidade"
      ],
      indicatedFor: "Pacientes submetidos a cirurgias de LCA, menisco, próteses de quadril/joelho, ombro e coluna."
    },
    {
      id: "dor-cronica",
      title: "Tratamento de Dor Crônica",
      icon: <Stethoscope className="w-8 h-8" />,
      description: "Abordagem multidisciplinar para alívio de dores persistentes, melhorando significativamente sua qualidade de vida.",
      benefits: [
        "Educação em dor e neurociência",
        "Técnicas de relaxamento e dessensibilização",
        "Exercícios terapêuticos graduais",
        "Melhora da qualidade do sono e humor"
      ],
      indicatedFor: "Pessoas com fibromialgia, dor lombar crônica, enxaquecas tensionais e dores generalizadas."
    },
    {
      id: "desportiva",
      title: "Fisioterapia Desportiva",
      icon: <Dumbbell className="w-8 h-8" />,
      description: "Foco na prevenção e tratamento de lesões em atletas amadores e profissionais, visando o retorno rápido e seguro ao esporte.",
      benefits: [
        "Recuperação acelerada de lesões esportivas",
        "Correção de biomecânica do movimento",
        "Prevenção de lesões recorrentes",
        "Otimização do desempenho esportivo"
      ],
      indicatedFor: "Corredores, ciclistas, jogadores de futebol, tênis, crossfitters e praticantes de musculação."
    },
    {
      id: "terapia-manual",
      title: "Terapia Manual",
      icon: <Flame className="w-8 h-8" />,
      description: "Técnicas específicas aplicadas com as mãos para diagnosticar e tratar disfunções articulares e musculares.",
      benefits: [
        "Alívio imediato de tensões e espasmos",
        "Restauração da mobilidade articular",
        "Melhora da circulação local",
        "Liberação miofascial"
      ],
      indicatedFor: "Torcicolos, travamentos da coluna, tensões musculares agudas e disfunções articulares."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-700 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Tratamentos especializados e personalizados para atender às suas necessidades específicas de recuperação e bem-estar.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {servicos.map((servico, index) => (
              <div 
                key={servico.id} 
                id={servico.id}
                className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                <div className="lg:w-1/3 bg-teal-50 p-12 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-teal-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    {servico.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{servico.title}</h2>
                  <p className="text-slate-600">
                    {servico.description}
                  </p>
                </div>
                
                <div className="lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2" />
                        Principais Benefícios
                      </h3>
                      <ul className="space-y-3">
                        {servico.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 mr-3 shrink-0"></span>
                            <span className="text-slate-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 mr-2" />
                        Para quem é indicado?
                      </h3>
                      <p className="text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        {servico.indicatedFor}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link
                      to={`/agendamento?servico=${servico.id}`}
                      className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-md"
                    >
                      Agendar {servico.title}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-800 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Não sabe qual tratamento é o ideal para você?</h2>
          <p className="text-xl text-teal-100 mb-10">
            Agende uma avaliação detalhada. Nossa equipe fará um diagnóstico funcional completo para indicar o melhor caminho para sua recuperação.
          </p>
          <Link
            to="/agendamento"
            className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium rounded-full text-teal-800 bg-white hover:bg-teal-50 transition-colors shadow-xl"
          >
            Agendar Avaliação Inicial
          </Link>
        </div>
      </section>
    </div>
  );
}
