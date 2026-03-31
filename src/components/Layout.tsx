import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, MapPin, Phone, Instagram, Facebook } from "lucide-react";
import { cn } from "../lib/utils";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Serviços", path: "/servicos" },
    { name: "FAQ", path: "/faq" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-teal-700 text-teal-50 py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Clínica Central, São Paulo - SP</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-2" /> (11) 99999-9999</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200 py-3" : "bg-white py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-slate-900">Diulli Martins</span>
                <span className="text-xs text-teal-600 font-medium tracking-wider uppercase">Fisioterapia</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-600",
                    location.pathname === link.path ? "text-teal-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/agendamento"
                className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-colors shadow-sm hover:shadow-md"
              >
                Agendar Consulta
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium py-2 transition-colors",
                  location.pathname === link.path ? "text-teal-600" : "text-slate-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/agendamento"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-teal-700 transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                DM
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight text-white">Diulli Martins</span>
                <span className="text-xs text-teal-400 font-medium tracking-wider uppercase">Fisioterapia</span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 mb-6">
              Atendimento humanizado, profissional e focado na sua recuperação e qualidade de vida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Links Rápidos</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-teal-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/servicos" className="hover:text-teal-400 transition-colors">Fisioterapia Ortopédica</Link></li>
              <li><Link to="/servicos" className="hover:text-teal-400 transition-colors">Reabilitação Pós-Cirúrgica</Link></li>
              <li><Link to="/servicos" className="hover:text-teal-400 transition-colors">Tratamento de Dor</Link></li>
              <li><Link to="/servicos" className="hover:text-teal-400 transition-colors">Alongamento e Mobilidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-teal-500 shrink-0" />
                <span>Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-teal-500 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-3 text-teal-500 shrink-0" />
                <span>(11) 99999-9999 (WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Diulli Martins Fisioterapia. Todos os direitos reservados.</p>
          <p className="mt-2">CREFITO-3/000000-F</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
