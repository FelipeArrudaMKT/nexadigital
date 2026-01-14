
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Monitor, 
  TrendingUp, 
  Bot, 
  Calendar, 
  Lock, 
  CheckCircle,
  Layout,
  BarChart3,
  Package,
  ShoppingBag,
  X,
  Smartphone,
  MousePointer2
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
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10">
          <X size={24} className="text-slate-500" />
        </button>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <CheckCircle size={20} />
             </div>
             <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Informações Técnicas</span>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-6">{data.title}</h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            {data.description}
          </p>
          <div className="space-y-4 mb-10">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">Principais Vantagens:</h4>
            {data.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600 shrink-0">
                  <CheckCircle size={14} />
                </div>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>
          <WhatsAppButton text={`Quero implementar ${data.title}`} className="w-full shadow-xl" />
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
      fullDesc: "Sites de alto impacto visual desenvolvidos com tecnologias de ponta. Focamos em experiência do usuário (UX) para garantir que seu cliente encontre o que precisa em poucos segundos.",
      benefits: ["Carregamento ultra-rápido", "Adaptável para todos os celulares", "Painel de edição intuitivo", "Otimização para busca orgânica"]
    },
    { 
      icon: <TrendingUp />, 
      title: "Tráfego Pago", 
      desc: "Anúncios que vendem.",
      fullDesc: "Gestão estratégica de anúncios no Google Ads, Facebook e Instagram. Transformamos investimento em marketing em faturamento real através de segmentação precisa.",
      benefits: ["Configuração de Pixel/Tag", "Testes A/B de criativos", "Escala de faturamento", "Dashboard de métricas"]
    },
    { 
      icon: <Bot />, 
      title: "Automação", 
      desc: "IA e Atendimento 24/7.",
      fullDesc: "Sistemas inteligentes que automatizam tarefas repetitivas. Desde chatbots no WhatsApp que qualificam leads até fluxos de e-mail marketing personalizados.",
      benefits: ["Atendimento imediato", "Redução de custo com suporte", "Funis de vendas automáticos", "IA treinada com seus dados"]
    },
    { 
      icon: <Calendar />, 
      title: "Agendamento", 
      desc: "Sistemas inteligentes.",
      fullDesc: "Ferramenta essencial para prestadores de serviço. Permita que seus clientes agendem horários online, paguem antecipado e recebam lembretes de forma automática.",
      benefits: ["Redução de faltas (No-show)", "Pagamento de reserva via PIX", "Agenda multi-profissional", "Envio de lembretes automáticos"]
    },
    { 
      icon: <ShoppingBag />, 
      title: "Produtos Físicos", 
      desc: "E-commerce completo.",
      fullDesc: "Estrutura completa para venda de itens físicos. Inclui vitrines dinâmicas, cálculo de frete inteligente, cupons de desconto e checkout de alta conversão.",
      benefits: ["Catálogo de fácil gestão", "Integração com Correios/Loggi", " Checkout em uma página", "Gestão de promoções"]
    },
    { 
      icon: <Lock />, 
      title: "Painel Adm", 
      desc: "Gestão e Controle.",
      fullDesc: "Tenha visão clara de todos os números do seu negócio. Um sistema administrativo seguro e completo para gerenciar pedidos, clientes e financeiros.",
      benefits: ["Gráficos financeiros", "Controle de estoque centralizado", "Níveis de acesso para equipe", "Relatórios para exportação"]
    },
  ];

  const demos = [
    { 
      title: "Painel Administrativo", 
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", 
      icon: <Layout />,
      desc: "Visualize o crescimento da sua empresa através de dados. Nosso painel centraliza todas as informações vitais para a sua tomada de decisão estratégica.",
      benefits: ["Gestão de leads em tempo real", "Monitoramento de conversão", "Histórico completo de transações", "Design limpo e focado em produtividade"]
    },
    { 
      title: "Agenda de Clientes", 
      img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=800", 
      icon: <Calendar />,
      desc: "Um sistema de agendamento que trabalha por você. Organize seu fluxo de trabalho e deixe a tecnologia cuidar das reservas e confirmações.",
      benefits: ["Interface intuitiva para o cliente", "Bloqueio de horários automático", "Relatório de horários mais produtivos", "Fácil integração com seu site atual"]
    },
    { 
      title: "Relatórios de Leads", 
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", 
      icon: <BarChart3 />,
      desc: "Não perca nenhum cliente. Nosso sistema de rastreamento de leads informa exatamente quem entrou em contato e por qual canal de marketing veio.",
      benefits: ["Distribuição de leads para equipe", "Status de negociação visível", "Anotações internas por cliente", "Notificação imediata no celular"]
    },
    { 
      title: "Gestão de Produtos", 
      img: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=800", 
      icon: <Package />,
      desc: "A maneira mais fácil de manter sua loja online atualizada. Altere preços, fotos e descrições em segundos, garantindo agilidade no seu dia a dia.",
      benefits: ["Editor em massa de preços", "Gestão de fotos de alta qualidade", "Atributos técnicos personalizados", "Integração direta com marketplaces"]
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={modalData} />

      {/* 1. NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-lg py-3" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Nexa Digital Logo" 
              className="h-9 w-auto object-contain"
            />
            <span className={`text-xl font-black tracking-tighter ${scrolled ? "text-slate-900" : "text-white"}`}>NEXA DIGITAL</span>
          </div>
          <div className="flex items-center gap-6">
            <WhatsAppButton text="Orçamento" className="!py-2.5 !px-6 text-sm" />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-gradient pt-40 pb-24 md:pt-60 md:pb-40 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-indigo-300 text-sm font-bold mb-8 backdrop-blur-sm border border-white/5">
              <Smartphone size={16} /> Presença Digital Completa
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              MARKETING QUE <br/><span className="text-indigo-400">GERA VENDAS</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Desenvolvemos a tecnologia e a estratégia necessárias para sua empresa faturar mais no digital todos os dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton text="Quero Vender Mais" className="text-lg px-12 py-5 shadow-2xl" />
              <button onClick={() => {
                const el = document.getElementById('demo');
                el?.scrollIntoView({ behavior: 'smooth' });
              }} className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full font-bold transition-all border border-white/10">
                Ver Demonstração
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES SECTION */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Soluções completas para seu lucro" 
            subtitle="Clique nos cartões abaixo para entender como cada serviço vai acelerar o crescimento da sua empresa."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => openDetails(item.title, item.fullDesc, item.benefits)}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover-lift text-center group w-full flex flex-col items-center outline-none focus:ring-4 focus:ring-indigo-200 transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="mt-auto flex items-center gap-1 text-xs font-black text-indigo-600 opacity-40 group-hover:opacity-100 transition-all">
                  CLIQUE PARA VER <MousePointer2 size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="py-32 bg-slate-100">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Tecnologia a serviço do seu negócio" 
            subtitle="Interfaces pensadas para facilitar sua gestão e maximizar sua conversão de leads." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {demos.map((demo, idx) => (
              <div key={idx} className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 group flex flex-col">
                <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-white">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                      {demo.icon}
                    </div>
                    <span className="font-black text-slate-900 tracking-tight">{demo.title}</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                  </div>
                </div>
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={demo.img} alt={demo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-indigo-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-medium mb-6 text-lg max-w-sm">{demo.desc}</p>
                      <button 
                        onClick={() => openDetails(demo.title, demo.desc, demo.benefits)}
                        className="bg-white text-indigo-900 px-10 py-4 rounded-full font-black shadow-2xl hover:bg-indigo-50 transition-all scale-100 hover:scale-105 active:scale-95"
                      >
                        Explorar Funcionalidade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <WhatsAppButton text="Ver Demonstração ao Vivo" className="mx-auto inline-flex px-16 shadow-2xl shadow-green-500/20" />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-indigo-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] rotate-45 border-[100px] border-white rounded-[100px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">
            SUA EMPRESA ESTÁ <br/><span className="text-indigo-200 underline">PRONTA PARA CRESCER?</span>
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-14 max-w-3xl mx-auto font-medium">
            Não perca tempo com estratégias que não funcionam. Tenha uma estrutura digital profissional feita por especialistas.
          </p>
          <WhatsAppButton text="Agendar Consultoria Grátis" className="!bg-white !text-indigo-600 !px-20 !py-6 !text-2xl shadow-none hover:!bg-indigo-50" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-4 mb-4">
                <img src={LOGO_URL} alt="Nexa Digital" className="h-10 w-auto object-contain" />
                <span className="text-2xl font-black tracking-tighter">NEXA DIGITAL</span>
              </div>
              <p className="text-slate-500 max-w-sm text-center md:text-left leading-relaxed">
                Transformando negócios comuns em referências digitais através de marketing de alta performance e tecnologia.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-6">
                <div className="flex gap-10">
                    <a href="https://wa.me/556798348381" className="font-bold hover:text-indigo-600 transition-colors">WhatsApp</a>
                    <a href="#" className="font-bold hover:text-indigo-600 transition-colors">Instagram</a>
                    <a href="#" className="font-bold hover:text-indigo-600 transition-colors">LinkedIn</a>
                </div>
                <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Nexa Digital Marketing. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING CTA */}
      <div className="fixed bottom-8 right-8 z-[999]">
        <a 
          href="https://wa.me/556798348381" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-20 h-20 bg-green-500 text-white rounded-full shadow-2xl animate-bounce hover:bg-green-600 transition-all transform hover:scale-110 active:scale-95 border-4 border-white"
        >
          <MessageCircle size={40} />
        </a>
      </div>
    </div>
  );
};

export default App;
