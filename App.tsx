
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Monitor, 
  TrendingUp, 
  Bot, 
  Calendar, 
  Lock, 
  ArrowRight, 
  CheckCircle,
  Layout,
  BarChart3,
  Users,
  Package,
  ShoppingBag,
  X
} from 'lucide-react';

// Types
interface DetailedInfo {
  title: string;
  description: string;
  benefits: string[];
}

// Reusable Components
const WhatsAppButton = ({ text, className = "", primary = true }: { text: string; className?: string; primary?: boolean }) => (
  <a 
    href="https://wa.me/556798348381" 
    target="_blank" 
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold transition-all transform active:scale-95 ${
      primary 
        ? "bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30" 
        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50"
    } ${className}`}
  >
    <MessageCircle size={24} />
    {text}
  </a>
);

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-slate-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const Modal = ({ isOpen, onClose, data }: { isOpen: boolean, onClose: () => void, data: DetailedInfo | null }) => {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors">
          <X size={24} className="text-slate-500" />
        </button>
        <div className="p-8 md:p-12">
          <h3 className="text-3xl font-black text-slate-900 mb-6">{data.title}</h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            {data.description}
          </p>
          <div className="space-y-4 mb-10">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Principais Vantagens:</h4>
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                  <CheckCircle size={16} />
                </div>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton text={`Quero saber mais sobre ${data.title}`} className="w-full" />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<DetailedInfo | null>(null);
  
  const LOGO_URL = "https://i.ibb.co/VbX91Dr/c7c5a237-cb92-407c-9dde-1399afb9f370.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDetails = (title: string, description: string, benefits: string[]) => {
    setModalData({ title, description, benefits });
    setIsModalOpen(true);
  };

  const services = [
    { 
      icon: <Monitor />, 
      title: "Criação de Sites", 
      desc: "Profissionais e responsivos.",
      fullDesc: "Desenvolvemos sites modernos que funcionam perfeitamente em celulares, tablets e computadores. Focamos em velocidade de carregamento e design que transmite autoridade.",
      benefits: ["Design Exclusivo", "Otimizado para o Google (SEO)", "Fácil de atualizar", "Integração direta com WhatsApp"]
    },
    { 
      icon: <TrendingUp />, 
      title: "Tráfego Pago", 
      desc: "Publicidade que converte.",
      fullDesc: "Colocamos sua empresa na frente de quem já quer comprar. Gerenciamos campanhas no Google Ads, Facebook e Instagram para trazer resultados imediatos.",
      benefits: ["Apareça no topo do Google", "Anúncios para o público certo", "Acompanhamento diário de resultados", "Máximo retorno sobre investimento"]
    },
    { 
      icon: <Bot />, 
      title: "Automação", 
      desc: "Vendas automáticas 24/7.",
      fullDesc: "Crie robôs inteligentes que atendem seus clientes, tiram dúvidas e até fecham vendas enquanto você dorme ou foca na operação do seu negócio.",
      benefits: ["Atendimento imediato 24h", "Redução de erros humanos", "Triagem automática de leads", "Economia de tempo da equipe"]
    },
    { 
      icon: <Calendar />, 
      title: "Agendamento", 
      desc: "Sistemas inteligentes.",
      fullDesc: "Ideal para clínicas, barbearias, consultórios e prestadores de serviço. Um sistema onde o cliente escolhe o horário e você apenas recebe a confirmação.",
      benefits: ["Link de agendamento próprio", "Lembretes automáticos por WhatsApp", "Controle total da sua agenda", "Pagamento integrado opcional"]
    },
    { 
      icon: <ShoppingBag />, 
      title: "Produtos Físicos", 
      desc: "E-commerce e catálogos.",
      fullDesc: "Plataformas robustas para venda de produtos com gestão de estoque, cálculo de frete e diversas formas de pagamento integradas de forma simples.",
      benefits: ["Catálogo profissional", "Gestão de estoque inteligente", "Fácil cadastro de produtos", "Pagamento seguro (Cartão/Pix)"]
    },
    { 
      icon: <Lock />, 
      title: "Painel Adm", 
      desc: "Controle total do negócio.",
      fullDesc: "Tenha um cockpit completo para ver quem são seus clientes, quanto você vendeu e quais são suas metas. Dados organizados para decisões inteligentes.",
      benefits: ["Relatórios financeiros claros", "Gestão de base de dados", "Acesso restrito e seguro", "Exportação de dados para Excel"]
    },
  ];

  return (
    <div className="min-h-screen">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={modalData} />

      {/* 1. TOPO (IMPACTO IMEDIATO) */}
      <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Nexa Digital Logo" 
              className="h-10 w-auto object-contain"
            />
            <span className={`text-xl font-bold tracking-tight ${scrolled ? "text-slate-900" : "text-white"}`}>Nexa Digital</span>
          </div>
          <WhatsAppButton text="WhatsApp" className="hidden md:flex !py-2 !px-5 text-sm" />
        </div>
      </nav>

      <header className="hero-gradient pt-32 pb-20 md:pt-48 md:pb-32 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              Marketing Digital que <br/><span className="text-indigo-400">Gera Vendas</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light max-w-2xl mx-auto">
              Criamos sites, sistemas e automações para atrair clientes todos os dias.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <WhatsAppButton text="Falar no WhatsApp" className="text-lg px-10" />
            </div>
          </div>
        </div>
      </header>

      {/* 2. O QUE FAZEMOS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Soluções completas para vender mais" 
            subtitle="Tudo o que o seu negócio precisa para dominar o digital e converter leads em clientes reais. Clique em uma opção para ver detalhes."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => openDetails(item.title, item.fullDesc, item.benefits)}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover-lift text-center group w-full outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-tight">{item.desc}</p>
                <div className="mt-4 text-xs font-bold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  VER EXPLICAÇÃO
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEMONSTRAÇÃO DO SERVIÇO */}
      <section id="demo" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Veja como funciona na prática" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                title: "Painel Administrativo", 
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
                icon: <Layout />,
                desc: "Um painel completo para gerenciar toda a sua operação digital em um só lugar.",
                benefits: ["Dashboard de vendas", "Controle de usuários", "Acesso via mobile", "Segurança de dados"]
              },
              { 
                title: "Agenda de Clientes", 
                img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800", 
                icon: <Calendar />,
                desc: "Sua agenda funcionando sozinha. Menos tempo no telefone, mais tempo atendendo.",
                benefits: ["Sincronização com Google", "Lista de espera automática", "Histórico de clientes", "Confirmação por WhatsApp"]
              },
              { 
                title: "Relatórios de Leads", 
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
                icon: <BarChart3 />,
                desc: "Saiba exatamente de onde vêm seus clientes e qual o custo por cada lead.",
                benefits: ["Gráficos intuitivos", "Exportação em PDF/Excel", "Taxa de conversão real", "Origem por campanha"]
              },
              { 
                title: "Gestão de Produtos", 
                img: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800", 
                icon: <Package />,
                desc: "Organize seu estoque, preços e variações de forma rápida e profissional.",
                benefits: ["Controle de variantes (cor/tamanho)", "Alerta de estoque baixo", "Fotos ilimitadas", "SEO por produto"]
              },
            ].map((demo, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                <div className="p-4 flex items-center gap-3 border-b border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-indigo-600">
                    {demo.icon}
                  </div>
                  <span className="font-bold text-slate-800">{demo.title}</span>
                </div>
                <div className="relative overflow-hidden aspect-video">
                  <img src={demo.img} alt={demo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={() => openDetails(demo.title, demo.desc, demo.benefits)}
                      className="bg-white text-indigo-900 px-6 py-2 rounded-full font-bold"
                    >
                      Ver Explicação
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              Entregamos sistemas simples, profissionais e fáceis de usar para você focar no que importa: seu lucro.
            </p>
            <WhatsAppButton text="Quero Ver no WhatsApp" className="mx-auto inline-flex" />
          </div>
        </div>
      </section>

      {/* 4. COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle title="Simples, rápido e sem enrolação" />
          <div className="flex flex-col md:flex-row gap-8 justify-between relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
            {[
              { step: "1", title: "Você chama no WhatsApp", desc: "O primeiro passo para transformar seu negócio é uma conversa rápida." },
              { step: "2", title: "Entendemos sua necessidade", desc: "Analisamos seu mercado e criamos a melhor estratégia personalizada." },
              { step: "3", title: "Criamos seu site e sistema", desc: "Tudo pronto em tempo recorde para você começar a faturar." },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex-1 text-center group">
                <div className="w-24 h-24 bg-indigo-50 border-4 border-white rounded-full flex items-center justify-center text-3xl font-black text-indigo-600 mx-auto mb-6 shadow-md group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVIÇOS DETALHADOS */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">🚀 Pacotes que Trabalhamos</h2>
              <div className="space-y-4">
                {[
                  "Site Institucional + WhatsApp Integrado",
                  "Landing Pages de Alta Conversão",
                  "Vendas de produtos físicos (Pagamento após entrega)",
                  "Sistemas de Agendamento Online",
                  "Bots de Atendimento (IA)",
                  "Gestão de Tráfego Pago (Ads)"
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => {
                    const found = services.find(s => s.title.includes(service.split(' ')[0]));
                    if (found) openDetails(found.title, found.fullDesc, found.benefits);
                  }}>
                    <CheckCircle className="text-green-400 shrink-0" size={24} />
                    <span className="text-lg font-medium group-hover:text-indigo-300 transition-colors">{service}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-slate-400 italic">📌 Tudo personalizado para o seu negócio.</p>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <h3 className="text-3xl font-bold mb-6">Pronto para o próximo nível?</h3>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                  Não perca mais clientes para a concorrência. Tenha uma presença digital que realmente trabalha para você.
                </p>
                <WhatsAppButton text="Pedir Orçamento Agora" className="!bg-white !text-indigo-600 !shadow-none hover:!bg-indigo-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROVA VISUAL (DEMO) */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4">Aviso Legal</p>
          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Demonstrações visuais de projetos e sistemas desenvolvidos para apresentação comercial. 
            Todos os layouts mostrados são exemplos reais do nosso padrão de entrega.
          </p>
        </div>
      </section>

      {/* 7. CHAMADA FINAL */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              Quer um sistema <span className="text-indigo-600 underline">igual a este</span> para o seu negócio?
            </h2>
            <p className="text-xl text-slate-600 mb-12">
              Não deixe para depois o que pode alavancar suas vendas hoje. Nosso team está online para te atender.
            </p>
            <WhatsAppButton text="Chamar no WhatsApp Agora" className="text-xl md:px-16" />
          </div>
        </div>
      </section>

      {/* 8. FOOTER SIMPLES */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
               <div className="flex items-center gap-3 mb-2">
                <img 
                  src={LOGO_URL} 
                  alt="Nexa Digital Logo" 
                  className="h-8 w-auto object-contain"
                />
                <span className="text-lg font-bold text-slate-900">Nexa Digital Marketing</span>
              </div>
              <p className="text-slate-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Nexa Digital. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="https://wa.me/556798348381" className="text-slate-500 hover:text-indigo-600 transition-colors font-medium">WhatsApp</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-medium">Instagram</a>
              <a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors font-medium">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FIXED WhatsApp CTA */}
      <div className="fixed bottom-6 right-6 z-[999]">
        <a 
          href="https://wa.me/556798348381" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl animate-bounce hover:bg-green-600 transition-colors"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
};

export default App;
