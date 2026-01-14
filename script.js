
// Configurações
const WHATSAPP_NUMBER = "556798348381";

// Conteúdo dos Modais
const serviceData = {
    sites: {
        title: "Sites Profissionais",
        desc: "Criamos landing pages e sites institucionais com design premium, focados em transformar visitantes em clientes reais. Otimizados para velocidade e SEO.",
        benefits: ["Design Exclusivo", "Mobile-First", "Otimizado para o Google", "Botão de WhatsApp Direto"]
    },
    ecommerce: {
        title: "E-commerce (Produtos Físicos)",
        desc: "Sua loja aberta 24h para o mundo todo. Desenvolvemos e-commerces robustos com gestão de estoque, cálculo de frete automático e checkout seguro.",
        benefits: ["Gestão de Estoque", "Cálculo de Frete (Correios/Melhor Envio)", "Pagamentos via Pix e Cartão", "Catálogo de Produtos Ilimitado"]
    },
    sistemas: {
        title: "Sistemas Web",
        desc: "Desenvolvemos plataformas sob medida para sua operação: desde agendas de clientes até painéis financeiros complexos e CRMs personalizados.",
        benefits: ["Gestão de Clientes", "Relatórios Financeiros", "Acesso Multiusuário", "Hospedagem Inclusa"]
    },
    automacao: {
        title: "Automação com IA",
        desc: "Integramos robôs inteligentes ao seu atendimento. Nossa IA qualifica leads, responde dúvidas e agenda reuniões automaticamente, 24 horas por dia.",
        benefits: ["Atendimento Imediato", "IA Treinada no seu Negócio", "Integração com CRM", "Redução de Custos"]
    }
};

// Gerenciamento do Modal
function openModal(id) {
    const data = serviceData[id];
    const modal = document.getElementById('service-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <h3 class="text-3xl font-black mb-6 text-slate-900">${data.title}</h3>
        <p class="text-slate-600 mb-8 leading-relaxed">${data.desc}</p>
        <div class="space-y-3 mb-10">
            ${data.benefits.map(b => `
                <div class="flex items-center gap-3">
                    <div class="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span class="text-slate-700 font-medium">${b}</span>
                </div>
            `).join('')}
        </div>
        <button onclick="closeModal()" class="w-full bg-slate-900 py-4 rounded-full text-white font-black text-lg hover:bg-slate-800 transition-colors">
            Fechar
        </button>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Redirecionamento WhatsApp removido

// UI Helpers
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const navText = document.getElementById('nav-text');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
        nav.classList.remove('py-6');
        navText.classList.replace('text-white', 'text-slate-900');
    } else {
        nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
        nav.classList.add('py-6');
        navText.classList.replace('text-slate-900', 'text-white');
    }
});

// Fechar modal ao clicar fora
document.getElementById('service-modal').addEventListener('click', (e) => {
    if (e.target.id === 'service-modal') closeModal();
});

// Ano dinâmico
document.getElementById('year').textContent = new Date().getFullYear();
