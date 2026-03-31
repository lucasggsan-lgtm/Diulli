import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export function Contato() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="bg-teal-700 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contato</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a recuperar sua qualidade de vida. Entre em contato conosco.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Informações de Contato</h2>
              <p className="text-lg text-slate-600 mb-10">
                Tem alguma dúvida sobre nossos tratamentos ou quer agendar uma avaliação? Fale conosco pelos canais abaixo.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mr-6">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Endereço</h3>
                    <p className="text-slate-600">Av. Paulista, 1000 - Sala 502</p>
                    <p className="text-slate-600">Bela Vista, São Paulo - SP</p>
                    <p className="text-slate-600">CEP: 01310-100</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mr-6">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Telefone e WhatsApp</h3>
                    <p className="text-slate-600">(11) 99999-9999</p>
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 font-medium hover:underline mt-1 inline-block"
                    >
                      Enviar mensagem no WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mr-6">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">E-mail</h3>
                    <p className="text-slate-600">contato@diullimartins.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 shrink-0 mr-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Horário de Atendimento</h3>
                    <p className="text-slate-600">Segunda a Sexta: 08:00 às 19:00</p>
                    <p className="text-slate-600">Sábado: 08:00 às 12:00</p>
                    <p className="text-slate-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Siga nas redes sociais</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm border border-slate-100">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm border border-slate-100">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-md relative group">
              {/* Google Maps Embed */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                title="Localização da Clínica"
              ></iframe>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
