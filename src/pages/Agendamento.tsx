import { useState, FormEvent, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Send, CheckCircle2, Activity } from "lucide-react";

export function Agendamento() {
  const [searchParams] = useSearchParams();
  const servicoInicial = searchParams.get("servico") || "";

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: servicoInicial,
    data: "",
    horario: "",
    mensagem: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Redirect to WhatsApp with pre-filled message
      const text = `Olá! Meu nome é ${formData.nome}. Gostaria de agendar uma consulta de ${formData.servico || 'Avaliação'}.
      
*Detalhes:*
- Telefone: ${formData.telefone}
- Data preferencial: ${formData.data}
- Horário preferencial: ${formData.horario}
${formData.mensagem ? `- Mensagem: ${formData.mensagem}` : ''}`;

      const encodedText = encodeURIComponent(text);
      window.open(`https://wa.me/5511999999999?text=${encodedText}`, '_blank');
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-teal-700 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Agende sua Consulta</h1>
          <p className="text-lg text-teal-100 max-w-2xl mx-auto">
            Dê o primeiro passo para uma vida sem dor. Preencha o formulário abaixo e entraremos em contato para confirmar seu horário.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              
              {/* Info Panel */}
              <div className="bg-teal-800 text-white p-10 md:col-span-2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
                  <p className="text-teal-100 mb-10">
                    Preencha o formulário e nossa equipe entrará em contato via WhatsApp para confirmar o agendamento.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-teal-300 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-semibold">Telefone / WhatsApp</h3>
                        <p className="text-teal-100">(11) 99999-9999</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-teal-300 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-semibold">E-mail</h3>
                        <p className="text-teal-100">contato@diullimartins.com.br</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-teal-300 mr-4 shrink-0" />
                      <div>
                        <h3 className="font-semibold">Horário de Atendimento</h3>
                        <p className="text-teal-100">Seg - Sex: 08:00 - 19:00</p>
                        <p className="text-teal-100">Sáb: 08:00 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="bg-teal-700/50 p-6 rounded-2xl border border-teal-600/50">
                    <h3 className="font-semibold text-lg mb-2 flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-teal-300 mr-2" />
                      Por que agendar?
                    </h3>
                    <ul className="text-sm text-teal-100 space-y-2 mt-4">
                      <li>• Avaliação detalhada e individualizada</li>
                      <li>• Plano de tratamento personalizado</li>
                      <li>• Ambiente seguro e acolhedor</li>
                      <li>• Técnicas modernas e comprovadas</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Form Panel */}
              <div className="p-10 md:col-span-3">
                {isSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Solicitação Enviada!</h2>
                    <p className="text-lg text-slate-600 mb-8">
                      Você será redirecionado para o WhatsApp para finalizar o agendamento. Se não for redirecionado automaticamente, clique no botão abaixo.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="text-teal-600 font-medium hover:text-teal-700 underline"
                    >
                      Fazer novo agendamento
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Preencha seus dados</h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="nome" className="text-sm font-medium text-slate-700 flex items-center">
                          <User className="w-4 h-4 mr-2 text-slate-400" /> Nome Completo *
                        </label>
                        <input
                          type="text"
                          id="nome"
                          name="nome"
                          required
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="Ex: Maria Silva"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="telefone" className="text-sm font-medium text-slate-700 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-slate-400" /> Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="telefone"
                          name="telefone"
                          required
                          value={formData.telefone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white"
                          placeholder="(11) 90000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-slate-400" /> E-mail (Opcional)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="servico" className="text-sm font-medium text-slate-700 flex items-center">
                        <Activity className="w-4 h-4 mr-2 text-slate-400" /> Tipo de Atendimento *
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        required
                        value={formData.servico}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                      >
                        <option value="">Selecione um serviço...</option>
                        <option value="Avaliação Inicial">Avaliação Inicial (Primeira Consulta)</option>
                        <option value="Fisioterapia Ortopédica">Fisioterapia Ortopédica</option>
                        <option value="Reabilitação Pós-Cirúrgica">Reabilitação Pós-Cirúrgica</option>
                        <option value="Tratamento de Dor Crônica">Tratamento de Dor Crônica</option>
                        <option value="Pilates Clínico">Pilates Clínico</option>
                        <option value="Fisioterapia Desportiva">Fisioterapia Desportiva</option>
                        <option value="Terapia Manual">Terapia Manual</option>
                        <option value="Outro">Outro / Não tenho certeza</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="data" className="text-sm font-medium text-slate-700 flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-slate-400" /> Data Preferencial
                        </label>
                        <input
                          type="date"
                          id="data"
                          name="data"
                          value={formData.data}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="horario" className="text-sm font-medium text-slate-700 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-slate-400" /> Horário Preferencial
                        </label>
                        <select
                          id="horario"
                          name="horario"
                          value={formData.horario}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white appearance-none"
                        >
                          <option value="">Qualquer horário</option>
                          <option value="Manhã (08:00 - 12:00)">Manhã (08:00 - 12:00)</option>
                          <option value="Tarde (13:00 - 18:00)">Tarde (13:00 - 18:00)</option>
                          <option value="Noite (Após 18:00)">Noite (Após 18:00)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensagem" className="text-sm font-medium text-slate-700 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2 text-slate-400" /> Mensagem (Opcional)
                      </label>
                      <textarea
                        id="mensagem"
                        name="mensagem"
                        rows={3}
                        value={formData.mensagem}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                        placeholder="Descreva brevemente o motivo da consulta ou sua dor principal..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-500/30 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="w-5 h-5 mr-2" />
                          Solicitar Agendamento
                        </span>
                      )}
                    </button>
                    
                    <p className="text-xs text-center text-slate-500 mt-4">
                      Seus dados estão seguros. Ao clicar em enviar, você será redirecionado para o nosso WhatsApp para confirmar o horário.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
