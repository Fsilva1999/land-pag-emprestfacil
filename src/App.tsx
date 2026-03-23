import { 
  Users, 
  CheckCircle2, 
  Smartphone,
  Zap,
  BarChart3,
  Calendar,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// Assets
import heroPremium from './assets/hero-premium.png';
import money3d from './assets/money-3d.png';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 bg-color-bg-deep/80 backdrop-blur-xl border-b border-white/5">
    <div className="container flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          <span className="text-white font-black text-lg">E$</span>
        </div>
        <span className="text-2xl font-black tracking-tighter text-white uppercase">
          EMPREST<span className="text-primary">FÁCIL</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-10 text-sm font-bold uppercase tracking-widest text-text-dim">
        <a href="#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</a>
        <a href="#precos" className="hover:text-primary transition-colors">Preços</a>
        <a href="https://www.emprestfacil.app/auth" className="btn btn-primary py-2.5 px-8 text-sm">
          Acessar Dashboard
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="section min-h-screen pt-40 overflow-hidden bg-[radial-gradient(circle_at_50%_0%,_rgba(139,92,246,0.1)_0%,_transparent_50%)]">
    <div className="container relative">
      <div className="flex flex-col items-center text-center space-y-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(139,92,246,0.1)]"
        >
          <ShieldCheck className="w-4 h-4" />
          Plataforma de Crédito de Próxima Geração
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-[6.5rem] leading-[0.95] grad-text font-black tracking-tighter"
        >
          Gerencie empréstimos com <br />
          <span className="text-primary italic relative">
            inteligência total.
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full blur-sm opacity-50" />
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-text-dim max-w-3xl leading-relaxed"
        >
          Automatize 100% da sua carteira de crédito. Do dashboard à cobrança via PIX, tudo em uma interface ultra-veloz e ultra-segura.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a href="https://www.emprestfacil.app/auth" className="btn btn-primary text-xl px-12 group relative overflow-hidden">
            <span className="relative z-10">Explorar Versão Pro</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" />
          </a>
          <a href="#funcionalidades" className="btn btn-secondary text-xl px-12">
            Ver Demo
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 mb-20 w-full"
        >
          <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full opacity-40 mix-blend-screen" />
          <div className="relative glass-card p-4 rounded-[3rem] border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden">
            <img 
              src={heroPremium} 
              alt="Premium Interface Preview" 
              className="w-full h-auto rounded-[2.5rem] scale-105 transform transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 to-transparent pointer-events-none" />
          </div>
          
          <motion.img 
            src={money3d}
            alt="3D Finance Asset"
            className="absolute -top-32 -left-32 w-80 h-80 floating opacity-50 hidden xl:block mix-blend-screen"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestão Proativa",
      desc: "Histórico detalhado por cliente, limites de crédito e análise de risco."
    },
    {
      icon: BarChart3,
      title: "Cálculos de Precisão",
      desc: "Juros, multas e correções automáticas baseadas no mercado."
    },
    {
      icon: Calendar,
      title: "Agenda Inteligente",
      desc: "Previsão de caixa e recebíveis com interface de fácil leitura."
    },
    {
      icon: Zap,
      title: "Cobrança Ágil",
      desc: "Envio de lembretes e status de pagamento em tempo real."
    },
    {
      icon: ShieldCheck,
      title: "Cloud Segura",
      desc: "Hospedagem de alta performance com backups redundantes."
    },
    {
      icon: Smartphone,
      title: "Acesso Anywhere",
      desc: "Gerencie tudo do seu smartphone com app otimizado."
    }
  ];

  return (
    <section id="funcionalidades" className="section bg-white/0">
      <div className="container">
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-5xl md:text-7xl grad-text font-black">Potencialize seu <span className="text-primary italic">lucro.</span></h2>
          <p className="text-text-dim text-xl max-w-3xl mx-auto">
            Abandone as ferramentas genéricas. Use o sistema construído especificamente para o mercado de empréstimos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col space-y-6 group hover:glow-blue"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                <f.icon className="w-8 h-8 text-primary group-hover:text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">{f.title}</h3>
                <p className="text-text-dim leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="precos" className="section">
    <div className="container">
      <div className="glass-card max-w-4xl mx-auto p-12 md:p-24 overflow-hidden relative glow-blue">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl grad-text font-black underline decoration-primary/30">
              7 dias grátis.
            </h2>
            <p className="text-xl text-text-dim uppercase tracking-widest font-bold">
              Experimente a potência total sem custos.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-baseline gap-2">
              <span className="text-text-dim text-2xl">A partir de</span>
              <span className="text-7xl font-black text-white">R$47</span>
              <span className="text-text-dim text-xl">/mês</span>
            </div>
            
            <a href="https://www.emprestfacil.app/auth" className="btn btn-primary text-2xl py-6 px-16 group">
              Começar Teste Gratuito
              <ArrowRight className="ml-2 w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              {["Sem Cartão", "Cálculos Ilimitados", "Suporte VIP"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-black text-primary uppercase tracking-tighter">
                  <CheckCircle2 className="w-4 h-4" /> {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <span className="text-white font-black text-xs">E$</span>
          </div>
          <span className="text-xl font-black text-white">EMPRESTFÁCIL</span>
        </div>
        <p className="text-text-dim text-sm font-medium">
          © {new Date().getFullYear()} EmprestFácil. Alta performance financeira.
        </p>
        <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-text-dim">
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}



