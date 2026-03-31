import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Award, BookOpen, Heart } from "lucide-react";

export function Sobre() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-700 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Mim</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Conheça a profissional por trás do seu tratamento e a filosofia do nosso Studio.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-100 rounded-3xl transform -translate-x-4 -translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dra. Diulli Martins"
                className="relative rounded-3xl shadow-xl object-cover h-[600px] w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div>
              <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">A Profissional</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dra. Diulli Martins</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Sou fisioterapeuta apaixonada pela reabilitação humana e pelo movimento. Minha missão é ajudar pessoas a viverem sem dor e recuperarem sua qualidade de vida através de tratamentos individualizados e baseados em evidências científicas.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Com mais de 10 anos de experiência, criei este Studio para oferecer um ambiente acolhedor, onde o tratamento vai além dos sintomas, buscando sempre a causa raiz do problema para proporcionar resultados reais.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Formação de Excelência</h4>
                    <p className="text-slate-600">Graduada em Fisioterapia pela Universidade Federal, com especialização em Ortopedia e Traumatologia.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Atualização Constante</h4>
                    <p className="text-slate-600">Participação frequente em congressos e cursos de aprimoramento nas técnicas mais modernas de reabilitação.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Heart className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Atendimento Humanizado</h4>
                    <p className="text-slate-600">Cada paciente é único. O tratamento é planejado considerando não apenas a lesão, mas o indivíduo como um todo.</p>
                  </div>
                </div>
              </div>

              <Link
                to="/agendamento"
                className="inline-flex justify-center items-center px-8 py-4 text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg"
              >
                Agendar uma avaliação
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">Nossa Filosofia</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Como enxergamos a Fisioterapia</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 font-bold text-xl">1</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Avaliação Criteriosa</h4>
              <p className="text-slate-600">
                Acreditamos que um bom tratamento começa com um diagnóstico funcional preciso. Dedicamos tempo para entender seu histórico, hábitos e objetivos.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 font-bold text-xl">2</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Tratamento Ativo</h4>
              <p className="text-slate-600">
                O paciente é protagonista da sua recuperação. Utilizamos recursos manuais, mas enfatizamos o movimento e exercícios terapêuticos para resultados duradouros.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 font-bold text-xl">3</div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">Educação em Saúde</h4>
              <p className="text-slate-600">
                Ensinamos nossos pacientes sobre seus corpos e suas lesões. O conhecimento liberta do medo do movimento e previne futuras recidivas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
