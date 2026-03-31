import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star, Calendar, Activity, HeartPulse, Stethoscope, Users, Award } from "lucide-react";
import { cn } from "../lib/utils";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-teal-50 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Fisioterapia"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-slate-800 text-sm font-medium mb-6 shadow-sm border border-slate-100">
                <div className="flex text-yellow-400 mr-2">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold mr-1">5.0</span> no Google Avaliações
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Volte a viver sem dor e recupere sua <span className="text-teal-600">liberdade de movimento</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                No nosso studio, você encontra um ambiente acolhedor e tratamento personalizado para dar adeus às dores e voltar a fazer o que ama.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/agendamento"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Quero me livrar da dor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-teal-700 bg-white border-2 border-teal-100 hover:border-teal-200 hover:bg-teal-50 transition-colors shadow-sm"
                >
                  Falar direto no WhatsApp
                </a>
              </div>
              
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Paciente"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-slate-700">+500 alunos e pacientes recuperados</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-teal-600 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                alt="Fisioterapeuta em atendimento"
                className="relative rounded-3xl shadow-2xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">Experiência</p>
                  <p className="text-xl font-bold text-slate-900">+10 Anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Proof Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center p-4">
              <Users className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-3xl font-bold text-slate-900 mb-1">+500</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Pacientes Atendidos</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Award className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-3xl font-bold text-slate-900 mb-1">+10</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Anos de Experiência</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Stethoscope className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-3xl font-bold text-slate-900 mb-1">CREFITO</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Registro Ativo</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <HeartPulse className="w-8 h-8 text-teal-600 mb-3" />
              <h3 className="text-3xl font-bold text-slate-900 mb-1">100%</h3>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Foco no Paciente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Especialidades</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tratamentos sob medida para sua necessidade</h3>
            <p className="text-lg text-slate-600">
              Oferecemos uma variedade de serviços fisioterapêuticos utilizando as técnicas mais modernas e comprovadas cientificamente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Activity className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Fisioterapia Ortopédica</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Tratamento especializado para lesões musculares, articulares, tendinites, bursites e dores na coluna.
              </p>
              <Link to="/servicos" className="text-teal-600 font-medium inline-flex items-center hover:text-teal-700">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <HeartPulse className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Reabilitação Pós-Cirúrgica</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Acompanhamento completo após cirurgias ortopédicas para recuperação segura da força e mobilidade.
              </p>
              <Link to="/servicos" className="text-teal-600 font-medium inline-flex items-center hover:text-teal-700">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Tratamento de Dor Crônica</h4>
              <p className="text-slate-600 mb-6 line-clamp-3">
                Abordagem multidisciplinar para alívio de dores persistentes, melhorando significativamente sua qualidade de vida.
              </p>
              <Link to="/servicos" className="text-teal-600 font-medium inline-flex items-center hover:text-teal-700">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/servicos"
              className="inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-full text-teal-700 bg-teal-50 hover:bg-teal-100 transition-colors"
            >
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">O Processo</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Como funciona o seu tratamento</h3>
              <p className="text-lg text-slate-600 mb-10">
                Nosso método é focado em entender a causa raiz do seu problema para proporcionar resultados duradouros, não apenas alívio temporário.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Agendamento</h4>
                    <p className="text-slate-600">Entre em contato pelo WhatsApp ou formulário para marcar o melhor horário para você.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Avaliação Detalhada</h4>
                    <p className="text-slate-600">Na primeira consulta, faremos testes físicos e análise do seu histórico para entender a causa da dor.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">Tratamento Personalizado</h4>
                    <p className="text-slate-600">Iniciamos um plano de recuperação exclusivo para o seu caso, com acompanhamento constante da evolução.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Processo de avaliação"
                className="rounded-3xl shadow-xl object-cover h-[500px] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-300 font-semibold tracking-wide uppercase text-sm mb-3">Depoimentos</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">O que dizem nossos pacientes</h3>
            <p className="text-lg text-teal-100">
              Histórias reais de pessoas que recuperaram sua qualidade de vida através da fisioterapia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-teal-700 rounded-2xl p-8 relative">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-teal-50 mb-6 italic">
                "Cheguei na clínica com uma dor lombar insuportável que me impedia de trabalhar. Em poucas sessões, a Dra. Diulli não só aliviou a dor como me ensinou a prevenir novas crises. Profissional excelente!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  RC
                </div>
                <div>
                  <h4 className="font-bold">Roberto Costa</h4>
                  <p className="text-sm text-teal-300">Paciente Ortopédico</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-teal-700 rounded-2xl p-8 relative">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-teal-50 mb-6 italic">
                "Fiz minha reabilitação pós-cirúrgica do joelho aqui. O atendimento é super humanizado, o ambiente é acolhedor e a recuperação foi muito mais rápida do que o médico previu."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  MS
                </div>
                <div>
                  <h4 className="font-bold">Mariana Silva</h4>
                  <p className="text-sm text-teal-300">Pós-operatório LCA</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-teal-700 rounded-2xl p-8 relative">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-teal-50 mb-6 italic">
                "Atendimento impecável! A Dra. Diulli é muito atenciosa, explica tudo detalhadamente e realmente se importa com o paciente. Recomendo de olhos fechados para quem busca fisioterapia de qualidade."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  JO
                </div>
                <div>
                  <h4 className="font-bold">João Oliveira</h4>
                  <p className="text-sm text-teal-300">Tratamento de Dor Crônica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Não espere a dor piorar.</h2>
          <p className="text-xl text-slate-600 mb-10">
            Dê o primeiro passo para uma vida sem limitações. Agende sua avaliação hoje mesmo e descubra como podemos ajudar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/agendamento"
              className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Agende sua avaliação agora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
